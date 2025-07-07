const Greeting = ({ name }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>Welcome to our website.</p>
      <p>The time now is {new Date().toLocaleTimeString()}</p>
    </div>
  );
};

export default Greeting;
