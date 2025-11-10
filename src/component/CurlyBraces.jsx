export default function CurlyBracesExample() {
  const name = "Miguel";
  const currentYear = new Date().getFullYear();

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Done with how to use curly braces with JSX</h2>
      <p>
        Hello, <strong>{name}</strong>! 🎉
      </p>
      <p>
        The current year is <strong>{currentYear}</strong>.
      </p>
      <p>
        This example shows how to use <code>{"{}"}</code> in JSX to access
        JavaScript variables and expressions directly in your components.
      </p>
    </div>
  );
}
