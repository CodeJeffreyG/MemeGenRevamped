import { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
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

  const [allMemes, setAllMemes] = useState<AllMemes>("");

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data));
  }, []);

  console.log(allMemes);

  return (
    <div className="pageContainerOutterPage">
      <NavBar />
    </div>
  );
}

export default App;
