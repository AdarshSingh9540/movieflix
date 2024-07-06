import { IMG_CDN_URL } from "../utils/Constant";

const Aimoviecard = ({ movie }) => {
  return (
    <div className=" md:flex mx-2 lg:mx-44 bg-slate-900 rounded-lg p-2 lg:p-4 my-4 lg:my-12 shadow-2xl">
      <div className="flex items-center rounded-md">
        <img
          src={IMG_CDN_URL + movie.poster_path}
          className="w-[90%] h-44 md:h-60 lg:h-64 m-4   lg:mt-0  lg:m-0 lg:w-48 rounded-xl hover:scale-105 duration-200 shadow-2xl cursor-pointer"
          alt="Movie Poster"
        />
      </div>
      <div className="m-2 md:m-8 ml-1 md:ml-10 lg:ml- mt-2 md:mt-10 p-3 md:p-7 flex-1">
        <h1 className="text-white font-semibold text-xl md:text-4xl lg:text-4xl">{movie.original_title}</h1>
        <h2 className="text-white opacity-60 mt-2 md:mt-4">{movie.release_date}</h2>
        <h2 className="text-white text-lg md:text-xl mt-2 ">  
          {movie.overview.split(' ').slice(0, 30).join(' ')}
          {movie.overview.split(' ').length > 30 && '...'}</h2>
        <div className="mt-3">
          <button className="bg-white m-2 px-3 md:px-6 py-3 rounded-md text-black shadow-md hover:opacity-75 font-bold">▶️ Play</button>
          <button className="bg-gray-400 m-2 px-3 md:px-6 py-3 rounded-md opacity-65 hover:opacity-75 shadow-md font-bold"><svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hidden sm:inline ltr-4z3qvp e1svuwfo1 text-white"
            data-name="CircleI"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z"
              fill="currentColor"
            ></path>
          </svg> More info</button>
        </div>
      </div>
    </div>
  );
};

export default Aimoviecard;
