import React, { useEffect, useState } from "react";
import netflix from "../assets/Netflix_Logo_PMS.png";
import usericon from "../assets/usericon.png";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate, useParams } from "react-router";
import downarrow from "../assets/downarrow.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { adduser, removeuser } from "../utils/userSlice";
import { Link } from "react-router-dom";
import { addShowCards } from "../utils/moviesSlice";
import { addGPTSearch } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { addChangeLanguage } from "../utils/langSlice";

const Header = () => {
  const navigate = useNavigate();
  const user_details = useSelector((store) => store.user);
  const [showdiv, setshowdiv] = useState(false);
  const dispatch = useDispatch();
  const showCards = useSelector((store) => store.movie.showcards);
  const showGPT = useSelector((store) => store.gpt.gptsearch);
  // console.log(params.hasOwnProperty("movieId"))
  const handlelanguagchange = (e) => {
    dispatch(addChangeLanguage(e.target.value));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          adduser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          }),
        );
        console.log(showCards);
        !showCards && navigate("/browse");
      } else {
        dispatch(removeuser());
        navigate("/");
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const signOutfunction = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
      });
  };
  const toggleshow = () => {
    setshowdiv(!showdiv);
  };

  return (
    <>
      <div className="absolute w-screen z-20 bg-gradient-to-b from-black">
        <Link to={"/browse"} onClick={() => dispatch(addShowCards(false))}>
          <img className="w-32  z-10 " alt="netflix-logo" src={netflix} />
        </Link>
        {user_details?.uid && (
          <div className="flex justify-end -mt-10  items-end  gap-1 pr-3 z-40">
            {showGPT && (
              <select
                className="py-1  px-1 bg-gray-700 text-white mr-2"
                onChange={(e) => handlelanguagchange(e)}
              >
                {SUPPORTED_LANGUAGES.map((lang) => {
                  return <option value={lang.identifier}>{lang.name}</option>;
                })}
              </select>
            )}
            <button
              onClick={() => dispatch(addGPTSearch(true))}
              className="text-white bg-purple-700 py-1 mr-6 px-4 rounded-md"
            >
              {showGPT ? "Home Page" : "GPT Search"}
            </button>
            <img
              className="w-8"
              src={user_details?.photoURL || usericon}
              alt="user-icon"
            />
            <img
              onClick={toggleshow}
              className="z-20 cursor-pointer w-4 rounded-full"
              alt="downarrow"
              src={downarrow}
            />
          </div>
        )}
      </div>
      {showdiv && (
        <div className="w-44 ml-[1350px] absolute top-14 h-32 bg-black opacity-90 rounded-md text-gray-400 z-50">
          <ul className="p-3 list-none  font-sans ">
            <li className="text-sm py-2 border-b-2 border-gray-500 border-solid cursor-pointer">
              {user_details?.displayName}
            </li>
            <li
              onClick={() => {
                signOutfunction();
                dispatch(addShowCards(false));
              }}
              className="text-sm py-2 border-b-2 border-gray-500 border-solid cursor-pointer"
            >
              Sign Out
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
