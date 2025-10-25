function Welcome(props) {
  return <h3>Hello, {props.name}!</h3>;
}

export default function Props() {
  return (
    <div>
      <h2>Done with how to configure components with props</h2>
      <Welcome name="Jack" />
      <Welcome name="Luna" />
      <Welcome name="Eli" />
    </div>
  );
}
