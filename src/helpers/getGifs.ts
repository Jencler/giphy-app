import type { Datum } from "../interfaces/giphys.interfaces";

export interface Gifs {
  id: string;
  title: string;
  image: string;
}
const API_KEY = "WXM03H9JcLJFMDG76xZeapiklSjBzmDG";
const LIMIT = 10;

export const getGiphy = async (category: string): Promise<Gifs[]> => {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?q=${category}&api_key=${API_KEY}&limit=${LIMIT}`
    );
    const { data } = await response.json();

    const gifs: Gifs[] = data.map((gif: Datum) => ({
      id: gif.id,
      title: gif.title,
      image: gif.images.downsized_medium.url,
    }));

    return gifs;
  } catch (error) {
    console.error("getGiphy error", error);
    return [];
  }
};
