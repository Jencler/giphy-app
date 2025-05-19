import type { Gifs } from "../helpers/getGifs";

export const GiphyItem = ({ title, image }: Gifs) => {
  return (
    <article className="card-giphy">
      <h3>{title}</h3>
      <img src={image} alt={title} />
    </article>
  );
};
