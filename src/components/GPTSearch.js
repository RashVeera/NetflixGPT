import React, { useRef, useState } from "react";
import backgroundimage from "../assets/backgroundimage.jpg";
import { useDispatch, useSelector } from "react-redux";
import { lang } from "../utils/languageconstants";

import groq from "../utils/openAI";
import { options } from "../utils/constants";
import { addclearState, addGPTMovies } from "../utils/gptSlice";
import ShowGPTResults from "./ShowGPTResults";

const GPTSearch = () => {
  const language_selected = useSelector((store) => store.language.lang);
  const input_Ref = useRef(null);
  const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();
  const [showerror, setshowerror] = useState(false);

  const handleClick = async () => {
    try {
      const gptQuery =
        "can you give me an ordered list of 5 movie names with the genre of " +
        input_Ref.current.value +
        ". In the Given format for example:  1.Titanic 2.John Wick 3.The Spy Who Dumped Me 4.The Layover 5.The Last Airbender.";
      const chat_Completion = await groq.chat.completions.create({
        messages: [
          {
            role: "user",
            content: gptQuery,
          },
        ],
        model: "llama3-8b-8192",
      });
      const content = chat_Completion.choices[0]?.message?.content || "";
      const matches = content.match(/^\d+\.\s*(.+)$/gm);
      function extractTitle(input) {
        const match = input.match(/^\**(.*?)\**\s*\(/);
        return match ? match[1].trim() : input.trim();
      }
      if (matches) {
        const movieNames = matches.map((match) => {
          const cleanTitle = match.replace(/^\d+\.\s*/, "");
          return extractTitle(cleanTitle);
        });
        setMovies(movieNames);
      }
    } catch (e) {
      setshowerror(e);
    }
  };

  const searchMovieResult = async (movie) => {
    const movieResult = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      options,
    );
    const data = await movieResult.json();
    return data.results;
  };

  const movieResults = async () => {
    const promiseArray = movies.map((movie) => searchMovieResult(movie));
    const tmdbresults = await Promise.all(promiseArray);
    console.log(tmdbresults);
    dispatch(addGPTMovies({ tmdbresults, movies }));
  };

  if (movies.length > 0) {
    movieResults();
  }

  const handleclear = () => {
    input_Ref.current.value = "";
    dispatch(addclearState());
    setMovies([])
  };

  return (
    <div className="relative w-screen">
      <img
        alt="background-image"
        className="h-screen fixed  object-cover xl:h-fit  -z-10"
        src={backgroundimage}
      />

      <div className="absolute -ml-56   lg:-ml-0 top-32 md:top-0 md:relative md:pt-[10%]  ">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-black  ml-60 md:ml-72 w-3/5 m-2 h-40 flex-col md:flex-row md:gap-5 md:justify-center md:items-center"
        >
          <input
            ref={input_Ref}
            className="py-3 px-5 ml-12 mt-10 w-4/5 md:w-3/6 md:mt-14 md:ml-36"
            type="search"
            placeholder={lang[language_selected].searchGPTPlaceholder}
          />
          <button
            onClick={handleClick}
            className="px-4 py-2 mt-2 ml-32 md:mt-0 md:ml-5 md:inline rounded-md text-white bg-red-700"
          >
            {lang[language_selected].search}
          </button>
          <button
            onClick={handleclear}
            className="px-4 py-2 md:ml-64 xl:mt-0 md:mt-2 xl:ml-5 ml-4 rounded-md text-white bg-red-700"
          >
            {lang[language_selected].clear} 
          </button>
        </form>
        {<ShowGPTResults />}
      </div>

      {showerror && (
        <div className="bg-black text-red-600 w-2/5 overflow-auto pt-11 ml-96">
          {showerror}
        </div>
      )}
    </div>
  );
};

export default GPTSearch;
