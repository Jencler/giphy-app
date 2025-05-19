import { renderHook, waitFor } from "@testing-library/react";
import { useFetchingGif } from "../../src/hooks/useFetchingGif";

describe("Probar el useFetchingGif.ts", () => {
  test("Debe de regresar el estado inicial", () => {
    const { result } = renderHook(() => useFetchingGif({ category: "Homero" }));
    const { gifs, isLoading } = result.current;
    expect(gifs.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test("Debe de retornar un array y el isLoading en false", async () => {
    const { result } = renderHook(() => useFetchingGif({ category: "Homero" }));
    await waitFor(() => expect(result.current.gifs.length).toBeGreaterThan(0));

    const { gifs, isLoading } = result.current;
    expect(gifs.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
