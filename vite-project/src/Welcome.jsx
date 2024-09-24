export function Welcome({ isLoggedIn, user }) {
  return (
    <h1>{isLoggedIn || user ? 'Welcome' : 'Please sign in!'}</h1>
  );
}
