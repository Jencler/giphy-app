import { render, screen, fireEvent } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("Pruebas en <AddCategory />", () => {
  const INPUT_VALUE = "Homero";

  const handleAddCategory = (category: string) => {
    console.log(category);
  };

  test("Debe de cambiar el valor de la caja de texto", () => {
    render(<AddCategory onAddCategory={handleAddCategory} />);
    const input = screen.getByRole("textbox") as HTMLInputElement;
    fireEvent.input(input, { target: { value: INPUT_VALUE } });
    expect(input.value).toBe(INPUT_VALUE);
  });

  test("Debe de llamar onAddCategory si el input tiene un valor", () => {
    const onAddCategory = jest.fn();

    render(<AddCategory onAddCategory={onAddCategory} />);
    const input = screen.getByRole("textbox") as HTMLInputElement;
    const form = screen.getByRole("form");
    fireEvent.input(input, { target: { value: INPUT_VALUE } });
    fireEvent.submit(form);
    expect(input.value).toBe("");
    expect(onAddCategory).toHaveBeenCalled();
    expect(onAddCategory).toHaveBeenCalledTimes(1);
    expect(onAddCategory).toHaveBeenCalledWith(INPUT_VALUE);
  });

  test("No debe llamar el onAddCategory si el input esta vacío", () => {
    const onAddCategory = jest.fn();
    render(<AddCategory onAddCategory={onAddCategory} />);
    const input = screen.getByRole("textbox") as HTMLInputElement;
    fireEvent.input(input, { target: { value: "   " } });
    const form = screen.getByRole("form");
    fireEvent.submit(form);
    expect(onAddCategory).not.toHaveBeenCalled();
  });
});
