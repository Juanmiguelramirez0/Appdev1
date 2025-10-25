function Header() {
  return <h2>Welcome to Multi-Component Example</h2>;
}

function Footer() {
  return <p>© 2025 My React App</p>;
}

export default function MultiComponent() {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
}
