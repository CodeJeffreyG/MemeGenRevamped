import {useState, useEffect} from "react";
import NavBar from "../NavBar/NavBar";
import "./App.css";

function App() {

  interface Meme {
    topText: string,
    bottomText: string,
    memeImage: string
  }

  const [meme, setMeme] = useState<Meme>({
    topText: "",
    bottomText: "",
    memeImage: ""
  });

  return (
    <div className="pageContainerOutterPage">
      <NavBar />
    </div>
  );
}

export default App;
