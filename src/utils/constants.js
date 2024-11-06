export const photoURL =
  "https://i.pinimg.com/1200x/1b/a2/e6/1ba2e6d1d4874546c70c91f1024e17fb.jpg";

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_API,
  },
};

export const SUPPORTED_LANGUAGES = [
  { name: "English", identifier: "en" },
  { name: "Tamil", identifier: "tamil" },
  { name: "French", identifier: "french" },
];

export const OPEN_API_Key = process.env.REACT_APP_OPEN_API_Key;
