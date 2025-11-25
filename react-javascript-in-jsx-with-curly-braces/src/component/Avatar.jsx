export default function Avatar() {
  const data = {
    src: "https://i.imgur.com/7vQD0fPs.jpg",
    alt: "Gregorio Y. Zara"
  };

  return (
    <div>
      <img className="avatar" src={data.src} alt={data.alt} />
      <p>{data.alt}</p>
    </div>
  );
}
