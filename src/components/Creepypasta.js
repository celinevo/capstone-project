export default function Creepypasta({ title, text, wordcount }) {
  return (
    <section>
      <h1>{title}</h1>
      <p>{text}</p>
      <div>{wordcount}</div>
    </section>
  );
}
