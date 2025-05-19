import { render, screen } from "@testing-library/react";
import { GiphyItem } from "../../src/components/GiphyItem";
import { Gifs } from "../../src/helpers/getGifs";

describe("Componente GiphyItem", () => {
  const gif: Gifs = {
    id: "cjudF7TsDnKsqTVxAL",
    title: "Disney Pixar GIF by Disney+",
    image:
      "https://media3.giphy.com/media/cjudF7TsDnKsqTVxAL/giphy.gif?cid=58ff979es5to6cuh2fwn99qxgl2wib8n2vmaevaye42ne3hw&ep=v1_gifs_search&rid=giphy.gif&ct=g",
  };

  test("Debe de hacer match con el snapshot", () => {
    const { container } = render(<GiphyItem {...gif} />);
    expect(container).toMatchSnapshot();
  });

  test("Debe de mostrar la imagen con el URL y el ALT indicado", () => {
    render(<GiphyItem {...gif} />);
    const { src, alt } = screen.getByRole("img") as HTMLImageElement;
    expect(screen.getByAltText(gif.title)).toBeInTheDocument();
    expect(src).toBe(gif.image);
    expect(alt).toBe(gif.title);
  });

  test("Debe de mostrar el titulo en el componente", () => {
    render(<GiphyItem {...gif} />);
    expect(screen.getByText(gif.title)).toBeTruthy();
  });
});
