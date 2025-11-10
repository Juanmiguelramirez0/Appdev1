function Greeting({ name }) {
  return <h2>Hello, {name}!</h2>;
}

export default function PropsExample() {
  return (
    <>
      <Greeting name="Juan" />
      <Greeting name="Miguel" />
      <Greeting name="React Learner" />
    </>
  );
}
