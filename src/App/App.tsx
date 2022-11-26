import { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import MemeButton from "../Button/Button";
import Image from "../MemeImage/MemeImage";
import "./App.css";

function App() {
  interface Meme {
    topText: string;
    bottomText: string;
    memeImage: string;
  }

  //memeImages from image flip url is just an array filled with 100 objects holding images.

  type AllMemes =
    | string
    | [
        {
          box_Count: number;
          height: number;
          id: string;
          name: string;
          url: string;
          width: number;
        }
      ];

  const [meme, setMeme] = useState<Meme>({
    topText: "",
    bottomText: "",
    memeImage: "",
  });

  const [allMemes, setAllMemes] = useState<AllMemes | any>("");

  //call fetch => parse to json => save parsedData to data => saveData allMemes state
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data));
  }, []);

  function handleClick() {
    let memesArray = allMemes.data.memes;
    let randomNumber = Math.floor(Math.random() * 100);
    setMeme((prevMeme) => {
      return {
        topText: "",
        bottomText: "",
        memeImage: memesArray[randomNumber].url,
      };
    });
  }

  const onChange = (e: EventTarget | any): void => {
    const { name, value } = e.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  };

  console.log(allMemes);

  return (
    <div className="pageContainerOutterPage">
      <NavBar />
      <div className="bottomHalfContainer">
        <main className="memeContainer">
          <div className="inputContainer">
            <input
              onChange={onChange}
              value={meme.topText}
              name="topText"
              type="text"
              placeholder="Top Text"
            />
          </div>
          <div className="inputContainer">
            <input
              onChange={onChange}
              value={meme.bottomText}
              name="bottomText"
              type="text"
              placeholder="Bottom Text"
            />
          </div>
        </main>
        <MemeButton clickFunction={handleClick} />
        <Image
          meme={meme.memeImage}
          topText={meme.topText}
          bottomText={meme.bottomText}
        />
      </div>
    </div>
  );
}

export default App;
