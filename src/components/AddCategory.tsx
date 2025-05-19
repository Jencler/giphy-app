import { useState, type ChangeEvent, type FormEvent } from "react";

interface Props {
  onAddCategory: (categoryName: string) => void;
}

export const AddCategory = ({ onAddCategory }: Props) => {
  const [categoryName, setCategoryName] = useState("");

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setCategoryName(target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = categoryName.trim();
    if (trimmed === "" || trimmed.length <= 1) return;
    if (!/^[a-zA-Z\s]+$/.test(trimmed)) return;
    onAddCategory(trimmed);
    setCategoryName("");
  };

  return (
    <section className="main_middle-section">
      <form role="form" aria-label="form" onSubmit={handleSubmit}>
        <label className="label">
          <span>Agrega una categoría</span>
          <input
            type="text"
            placeholder="Happy, smile, love, ..."
            value={categoryName}
            onChange={handleChange}
            autoComplete="off"
            autoFocus
          />
        </label>
      </form>
    </section>
  );
};
