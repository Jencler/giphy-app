import { GiphyItem } from "./GiphyItem";
import { Loading } from "./Loading";
import { useFetchingGif } from "../hooks/useFetchingGif";

interface Props {
  category: string;
}

export const GiphyGrid = ({ category }: Props) => {
  const { gifs, isLoading } = useFetchingGif({ category });

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="cards-containers">
          <h2 className="subtitle">{category}</h2>
          <section className="grid-giphys">
            {gifs.map((giphy) => (
              <GiphyItem key={giphy.id} {...giphy} />
            ))}
          </section>
        </div>
      )}
    </>
  );
};
