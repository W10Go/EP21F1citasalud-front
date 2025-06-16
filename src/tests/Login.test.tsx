// At the top of your test file, before imports that use the module:
jest.mock("@/components/utils/navigation", () => ({
  redirectTo: jest.fn(),
}));

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "@/components/organisms/login";

import { redirectTo } from "@/components/utils/navigation";

beforeEach(() => {
  // Mock fetch for login and 2FA
  global.fetch = jest
    .fn()
    // First call: login
    .mockResolvedValueOnce({
      ok: true,
      json: async () => ({ status: "2FA_REQUIRED" }),
    })
    // Second call: 2FA verification
    .mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        id: 1,
        token: "test-token",
        nombre: "Administrador",
        apellido: "Sistema",
        email: "admin@citasalud.com",
        rolNombre: "ADMINISTRADOR",
        permisos: ["CREAR_USUARIO"],
        status: "LOGIN_SUCCESS",
      }),
    });

  // Mock localStorage
  Storage.prototype.setItem = jest.fn();

  jest.spyOn(window, "alert").mockImplementation(() => {});
});

afterEach(() => {
  jest.resetAllMocks();
});

describe("Login component", () => {
  it("logs in successfully with correct credentials and 2FA", async () => {
    render(<Login />);

    // Fill email and password
    await userEvent.type(
      screen.getByPlaceholderText("Correo Electronico"),
      "admin@citasalud.com"
    );
    await userEvent.type(
      screen.getByPlaceholderText("Contraseña"),
      "password123"
    );

    // Submit login form
    await userEvent.click(
      screen.getByRole("button", { name: /Iniciar sesión/i })
    );

    // Wait for 2FA popup to appear
    expect(
      await screen.findByText("Código de verificación")
    ).toBeInTheDocument();

    // Enter verification code
    await userEvent.type(
      screen.getByPlaceholderText("Ingresa el código"),
      "123456"
    );

    // Submit 2FA code
    await userEvent.click(screen.getByRole("button", { name: /Verificar/i }));

    // Wait for localStorage to be called with token and userId
    await waitFor(() => {
      expect(localStorage.setItem).toHaveBeenCalledWith("token", "test-token");
      expect(localStorage.setItem).toHaveBeenCalledWith("userId", "1");
    });

    // Check that the popup is closed and redirected
    await waitFor(() => {
      expect(
        screen.queryByText("Código de verificación")
      ).not.toBeInTheDocument();
      expect(redirectTo).toHaveBeenCalledWith("/dashboard");
    });
  });
});
