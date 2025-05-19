import { useEffect, useState } from "react";
import { getGiphy, type Gifs } from "../helpers/getGifs";

interface Props {
  category: string;
}

export const useFetchingGif = ({ category }: Props) => {
  const [gifs, setGifs] = useState<Gifs[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(async () => {
      const newGifs = await getGiphy(category);
      setGifs(newGifs);
      setIsLoading(false);
    }, 200);

    return () => clearTimeout(timer);
  }, [category]);

  return {
    gifs,
    isLoading,
  };
};
