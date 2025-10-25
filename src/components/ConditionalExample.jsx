export default function ConditionalExample() {
  const isLoggedIn = true;

  return (
    <div>
      {isLoggedIn ? <p>Welcome back, user!</p> : <p>Please log in.</p>}
    </div>
  );
}
