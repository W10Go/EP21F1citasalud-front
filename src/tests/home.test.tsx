import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HomePage from "@/components/organisms/home";

type FooterProps = {
  setPopupTerms: React.Dispatch<React.SetStateAction<boolean>>;
  setPopupOpenPrivacy: React.Dispatch<React.SetStateAction<boolean>>;
};

jest.mock("@/components/molecules/navbar", () => {
  const Nav = () => <nav>Nav</nav>;
  Nav.displayName = "Nav";
  return Nav;
});
jest.mock("@/components/molecules/navbarmobile", () => {
  const NavMob = () => <nav>NavMob</nav>;
  NavMob.displayName = "NavMob";
  return NavMob;
});
jest.mock("@/components/molecules/footer", () => {
  const Footer = (props: FooterProps) => (
    <footer>
      <button onClick={() => props.setPopupTerms(true)}>
        Términos y condiciones
      </button>
      <button onClick={() => props.setPopupOpenPrivacy(true)}>
        Política de privacidad
      </button>
    </footer>
  );
  Footer.displayName = "Footer";
  return Footer;
});

describe("HomePage", () => {
  it("renders main content", () => {
    render(<HomePage />);
    expect(screen.getByText("Bienvenido a CITASalud")).toBeInTheDocument();
    expect(screen.getByText("Estamos para cuidarte")).toBeInTheDocument();
  });

  it("shows and closes the terms popup", async () => {
    render(<HomePage />);
    await userEvent.click(
      screen.getByRole("button", { name: "Términos y condiciones" })
    );
    // Check that the popup heading is present
    expect(
      screen.getByRole("heading", { name: "Términos y condiciones" })
    ).toBeInTheDocument();
    await userEvent.click(screen.getByRole("button", { name: "Cerrar" }));
    expect(
      screen.queryByRole("heading", { name: "Términos y condiciones" })
    ).not.toBeInTheDocument();
  });

  it("shows and closes the privacy popup", async () => {
    render(<HomePage />);
    await userEvent.click(
      screen.getByRole("button", { name: "Política de privacidad" })
    );
    expect(
      screen.getByRole("heading", { name: "Política de privacidad" })
    ).toBeInTheDocument();
    await userEvent.click(screen.getByRole("button", { name: "Cerrar" }));
    expect(
      screen.queryByRole("heading", { name: "Política de privacidad" })
    ).not.toBeInTheDocument();
  });
});
