"./MemeImage.css";

interface MemeImageProps {
  meme: string;
  topText: string;
  bottomText: string;
}

export default function Image(props: MemeImageProps) {
  return (
    <div className="imageContainer">
      <p className="text top">{props.topText}</p>
      <img className="memeImage" src={props.meme} alt="" />
      <p className="text bottom">{props.bottomText}</p>
    </div>
  );
}
