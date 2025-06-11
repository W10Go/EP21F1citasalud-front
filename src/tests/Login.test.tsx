import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Login from "@/components/organisms/login";

beforeEach(() => {
  // Mock fetch
  global.fetch = jest.fn().mockImplementation((url) => {
    if (url.toString().includes("/usuarios")) {
      return Promise.resolve({
        json: () =>
          Promise.resolve([
            {
              id: 1,
              nombre: "Juan",
              apellido: "Pérez",
              email: "test@example.com",
              password: "1234",
              documento: "123456",
              celular: "3000000000",
            },
          ]),
      });
    }

    if (url.toString().includes("/login")) {
      return Promise.resolve({
        json: () => Promise.resolve({ success: true }),
      });
    }

    return Promise.reject(new Error("Unhandled fetch"));
  });

  // ✅ Correctly mock window.location.href
  Object.defineProperty(window, "location", {
    writable: true,
    value: { href: "" },
  });
});

describe("Login component", () => {
  it("renders email and password fields", () => {
    render(<Login />);
    expect(
      screen.getByPlaceholderText(/correo electronico/i)
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/contraseña/i)).toBeInTheDocument();
  });

  it("shows error alert when fields are empty", () => {
    const alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});
    render(<Login />);
    fireEvent.click(screen.getByText(/iniciar sesión/i));
    expect(alertMock).toHaveBeenCalledWith("Todos los campos son obligatorios");
    alertMock.mockRestore();
  });

  it("logs in successfully with correct credentials", async () => {
    const alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});
    render(<Login />);

    fireEvent.change(screen.getByPlaceholderText(/correo electronico/i), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText(/contraseña/i), {
      target: { value: "1234" },
    });

    fireEvent.click(screen.getByText(/iniciar sesión/i));

    await waitFor(() => {
      expect(alertMock).toHaveBeenCalledWith("Inicio de sesión exitoso");
      expect(window.location.href).toBe("/");
    });

    alertMock.mockRestore();
  });
});
