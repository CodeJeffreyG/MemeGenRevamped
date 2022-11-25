import trollFace from "../Images/TrollFace.png";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="navContainer">
      <img src={trollFace} alt="Image Can Not be found" />
      <h1>Meme Generator</h1>
    </nav>
  );
}
