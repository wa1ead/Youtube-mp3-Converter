import axios from "axios";
import { useState, useRef } from "react";
import { youtube_parser } from "./tools";

function App() {
  const inputUrlRef = useRef();
  const [urlResult, setUrlResult] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const youtubeId = youtube_parser(inputUrlRef.current.value);

    const options = {
      method: "GET",
      url: "https://youtube-mp36.p.rapidapi.com/dl",
      headers: {
        "X-RapidAPI-Key": "8fb904d8fcmshab955e6e10c0cd6p13a89djsn971e0530c988",
        "X-RapidAPI-Host": "youtube-mp36.p.rapidapi.com",
      },
      params: {
        id: youtubeId,
      },
    };
    axios(options)
      .then((res) => setUrlResult(res.data.link))
      .catch((err) => console.log(err));

    inputUrlRef.current.value = "";
  };
  return (
    <div className="m-0 p-0 font-mons h-screen bg-gradient-to-r from-red-500 to-blue-500">
      <div className="max-w-[900px] my-0 mx-auto py-0 px-4">
        <span className="font-bold mt-4 inline-block">Mp3 Converter</span>
        <section className="flex flex-col items-center mt-60">
          <h1 className="font-bold text-5xl mb-2 text-center">
            Youtube to mp3 Converter
          </h1>
          <p className="font-normal text-xl opacity-90 mb-4 text-center">
            TRANSFORM YOUTUBE VIDEOS INTO MP3s IN A FEW CLICKS
          </p>
          <form className="flex flex-col items-center" onSubmit={handleSubmit}>
            <input
              className=" max-w-[500px] min-w-[300px] h-10 bg-white outline-none border-none indent-2.5 text-base rounded-sm mb-4"
              type="text"
              placeholder="Paste your youtube video URL..."
              ref={inputUrlRef}
            />
            <button
              className="w-[100px] h-[30px] bg-[#4158B0] border-none outline-none text-white cursor-pointer mb-12 rounded-md"
              type="submit"
            >
              Search
            </button>
          </form>
          {urlResult ? (
            <a
              className="text-white"
              href={urlResult}
              target="_blank"
              rel="noreferrer"
            >
              Download MP3
            </a>
          ) : (
            ""
          )}
        </section>
      </div>
    </div>
  );
}

export default App;
