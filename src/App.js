import genres from './genres';
 
function App() {
  return (
    <div className="App">
      <div className="heading">
        <img src="https://image.flaticon.com/icons/png/512/2132/2132283.png" alt="book-icon" />
        <h1>goodbooks</h1>
      </div>
      <div className="description">
      <p>Check out my favourite book. Select the genres to get started.</p>
      </div>
      <genres name ={"saad"}/>
    </div>
  );
}

export default App;
