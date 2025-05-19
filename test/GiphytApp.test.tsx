import { fireEvent, render, screen } from "@testing-library/react";
import { GiphytApp } from "../src/GiphytApp";
describe("Probar el <GiphytApp/>", () => {
  test("Debe de hacer match con el snapshot", () => {
    const { container } = render(<GiphytApp />);
    expect(container).toMatchSnapshot();
    expect(screen.getByText("Giphys Application 🎉"));
  });
  test("Debe de hacer match con el snapshot", () => {
    render(<GiphytApp />);
    // Obtenemos los elementos
    const form = screen.getByRole("form");
    const input = screen.getByRole("textbox") as HTMLInputElement;

    // Usamos los eventos
    fireEvent.change(input, {
      target: {
        value: "Coco",
      },
    });

    expect(input.value).toBe("Coco");
    fireEvent.submit(form);
    expect(input.value).toBe("");

  });
});
