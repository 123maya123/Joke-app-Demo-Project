import Joke from './Component/Joke';
import myJokes from './Component/JokeDataBase';
//it doesnt matter in which name you are importing from your database
function App() {
  const JokeComponent = myJokes.map((joke) => (
    <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />
  ));

  return (
      <div>
        <h1 className="title">Funny Jokes</h1> 
         {JokeComponent}
      </div>
  )
}
export default App;
