import { render, screen } from "@testing-library/react";
import SignUp from "@/components/organisms/signup";
import userEvent from "@testing-library/user-event";

beforeEach(() => {
  global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    json: async () => ({}),
  });

  jest.spyOn(window, "alert").mockImplementation(() => {});
});

afterEach(() => {
  jest.resetAllMocks();
});

describe("SignUp Page", () => {
  it("renders all input fields and button", () => {
    render(<SignUp />);
    expect(screen.getByText("Unete a CITASalud")).toBeInTheDocument();
    expect(screen.getByLabelText("Nombre/s *")).toBeInTheDocument();
    expect(screen.getByLabelText("Apellido/s *")).toBeInTheDocument();
    expect(
      screen.getByLabelText("Documento de identidad *")
    ).toBeInTheDocument();
    expect(screen.getByLabelText("Correo electrónico *")).toBeInTheDocument();
    expect(screen.getByLabelText("Celular *")).toBeInTheDocument();
    expect(screen.getByLabelText("Contraseña *")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Registrarse/i })).toBeDisabled();
  });

  it("enables register button after accepting terms", async () => {
    render(<SignUp />);
    const checkbox = screen.getByRole("checkbox");
    const button = screen.getByRole("button", { name: /Registrarse/i });

    expect(button).toBeDisabled();
    await userEvent.click(checkbox);
    expect(button).not.toBeDisabled();
  });

  it("shows alert when submitting empty form", async () => {
    render(<SignUp />);
    const checkbox = screen.getByRole("checkbox");
    await userEvent.click(checkbox);

    const button = screen.getByRole("button", { name: /Registrarse/i });
    await userEvent.click(button);

    expect(window.alert).toHaveBeenCalledWith(
      "Por favor, completa todos los campos obligatorios."
    );
  });
});
