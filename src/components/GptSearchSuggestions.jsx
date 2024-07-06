// GptSearchSuggestions.js
import { useSelector } from "react-redux";
import Aimoviecard from "./Aimoviecard";

const GptSearchSuggestions = () => {
  const { movieNames , movieResults } = useSelector((store) => store.gpt);

  if (!movieNames || movieNames.length === 0) return null;

  return (
    <div className="">
      {movieNames.map((movieName, index) => {
    
        if (movieResults && movieResults[index] && movieResults[index].length > 0) {
          const firstMovie = movieResults[index][0];
          return <Aimoviecard key={firstMovie.id} movie={firstMovie} />;
        } else {
          return null; 
        }
      })}
    </div>
  );
};

export default GptSearchSuggestions;
