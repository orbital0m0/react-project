function Food({fav}){
  return <h1>I like {fav}</h1>
}

function App() {
  return (
    <div className="App">
      <h1>Hello!!!!</h1>
      <Food fav="Tomato" />
      <Food fav="Apple" />
      <Food fav="Potato" />
    </div>
  );
}

export default App;
