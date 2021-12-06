//here app is parent n Joke.js is child so we are passing data from app via props
import './Joke.css';
function Joke(props) {
    return (
        <div className="container">
            <h3 style = {{display: !props.question && "none"}}>Question:{props.question}</h3>
            <h3 style ={{color: !props.question && "#888888" }}>Answer: {props.punchLine}</h3>
            <hr/>
        </div>
     );
}

export default Joke ;