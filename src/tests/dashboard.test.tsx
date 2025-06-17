import { render, screen, waitFor, within } from "@testing-library/react";
import Dashboard from "@/components/organisms/dashboard";

const mockUser = {
  id: 1,
  nombre: "Carlos",
  apellido: "Granda",
  email: "car@gran.com",
  rolId: 1,
  permisos: ["CREAR_USUARIO"],
};

const mockActivities = [
  {
    actividadId: 101,
    usuario: mockUser,
    tipoActividad: "LOGIN",
    descripcion: "Inicio de sesión",
    fechaHora: "2025-06-16T10:00:00",
    detalleAdiccionales: "Sesión iniciada",
  },
];

describe("Dashboard", () => {
  beforeEach(() => {
    // Mock localStorage
    Storage.prototype.getItem = jest.fn((key) => {
      if (key === "userId") return "1";
      if (key === "token") return "mock-token";
      return null;
    });

    // Mock fetch for user, role, and activities
    global.fetch = jest
      .fn()
      // User fetch
      .mockResolvedValueOnce({
        ok: true,
        json: async () => mockUser,
      })
      // Role fetch
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({ nombreRol: "ADMINISTRADOR" }),
      })
      // Activities fetch
      .mockResolvedValueOnce({
        ok: true,
        json: async () => mockActivities,
      });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("renders user info and activities", async () => {
    render(<Dashboard />);
    expect(screen.getByText("Cargando...")).toBeInTheDocument();

    await screen.findByText(
      (content, element) =>
        element?.tagName.toLowerCase() === "h1" &&
        content.replace(/\s+/g, " ").includes("¡Bienvenido, Carlos Granda!")
    );
    const container = screen
      .getByText(/¡Bienvenido, Carlos Granda!/)
      .closest("div");
    const emailParagraph = within(container!).getByText((_, element) => {
      return (
        !!element &&
        element.tagName.toLowerCase() === "p" &&
        (element.textContent ?? "")
          .replace(/\s+/g, " ")
          .includes("Email: car@gran.com")
      );
    });
    expect(emailParagraph).toBeInTheDocument();

    const roleParagraph = within(container!).getByText((_, element) => {
      if (!element) return false;
      return (
        element.tagName.toLowerCase() === "p" &&
        (element.textContent ?? "")
          .replace(/\s+/g, " ")
          .includes("Rol: ADMINISTRADOR")
      );
    });
    expect(roleParagraph).toBeInTheDocument();

    // Wait for user info and activities
    await waitFor(() => {
      expect(
        screen.getByText(/¡Bienvenido, Carlos Granda!/)
      ).toBeInTheDocument();

      const paragraphs = screen.getAllByText(
        (_, element) => element?.tagName.toLowerCase() === "p"
      );

      expect(
        paragraphs.some((el) =>
          el.textContent?.replace(/\s+/g, " ").includes("Email: car@gran.com")
        )
      ).toBe(true);

      expect(
        paragraphs.some((el) =>
          el.textContent?.replace(/\s+/g, " ").includes("Rol: ADMINISTRADOR")
        )
      ).toBe(true);

      expect(screen.getByText("Dashboard de Actividades")).toBeInTheDocument();
      expect(screen.getByText("2025-06-16T10:00:00")).toBeInTheDocument();
    });
  });

  it("shows message if no activities", async () => {
    // Mock fetch for user, role, and empty activities
    global.fetch = jest
      .fn()
      .mockResolvedValueOnce({
        ok: true,
        json: async () => mockUser,
      })
      .mockResolvedValueOnce({
        ok: true,
        json: async () => "ADMINISTRADOR",
      })
      .mockResolvedValueOnce({
        ok: true,
        json: async () => [],
      });

    render(<Dashboard />);
    await waitFor(() => {
      expect(
        screen.getByText("No hay actividades para mostrar.")
      ).toBeInTheDocument();
    });
  });
});
