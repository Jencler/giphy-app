import { render, screen } from "@testing-library/react";
import { GiphyGrid } from "../../src/components/GiphyGrid";
import { useFetchingGif } from "../../src/hooks/useFetchingGif";
import { mockHook } from "../../src/helpers/mockHooks";

jest.mock("../../src/hooks/useFetchingGif");

describe("Pruebas en <GiphyGrid.tsx/>", () => {
  const CATEGORY = "Homero";

  beforeEach(() => {
    // 👇 esto le da un valor por defecto a todos los tests
    mockHook(useFetchingGif).mockReturnValue({
      gifs: [],
      isLoading: true,
    });
  });

  test("Debe de iniciar el loading incialmenete", () => {
    render(<GiphyGrid category={CATEGORY} />);
    const loader = screen.getByTestId("loader");
    expect(loader).toBeInTheDocument();
    expect(loader).toHaveClass("spinner");
  });

  test("Debe de renderizar los gifs", () => {
    const GIFS = [
      {
        id: "ABC",
        title: "Homero 1",
        image: "https://gifs.com/media/v1/aszxche.gif",
      },
      {
        id: "DEF",
        title: "Homero 2",
        image: "https://gifs.com/media/v1/iyjnadk.gif",
      },
    ];

    mockHook(useFetchingGif).mockReturnValue({
      gifs: GIFS,
      isLoading: false,
    });

    render(<GiphyGrid category={CATEGORY} />);
    expect(screen.getAllByRole("img").length).toBe(2);
  });
});
