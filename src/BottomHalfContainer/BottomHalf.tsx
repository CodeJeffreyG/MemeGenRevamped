import "./BottomHalf.css";

export default function BottomHalf() {
  return (
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
  );
}
