import { getGiphy } from "../../src/helpers/getGifs";
describe("PRuebas en getGifs.ts", () => {
  test("Debe de retornar un Array de gifs", async () => {
    const gifs = await getGiphy("hola");
    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      image: expect.any(String),
    });
    expect(gifs[0].image).toMatch(/^https:\/\/.*$/);
  });
});
