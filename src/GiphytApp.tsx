import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { Header } from "./components/Header";
import { GiphyGrid } from "./components/GiphyGrid";

export const GiphytApp = () => {
  const [categories, setCategories] = useState<string[]>([]);

  const handleAddCategory = (category: string) => {
    const categoryExists = categories.some(
      (existingCategory) =>
        existingCategory.toLowerCase() === category.toLowerCase()
    );

    if (categoryExists) return;

    setCategories([category, ...categories]);
  };

  return (
    <>
      <Header />
      <main className="main">
        <section className="main__top__section">
          <h1>Giphys Application 🎉</h1>
        </section>
        <AddCategory onAddCategory={handleAddCategory} />
        <section className="main__giphy-section">
          {categories.map((category) => (
            <GiphyGrid key={category} category={category} />
          ))}
        </section>
      </main>
    </>
  );
};
