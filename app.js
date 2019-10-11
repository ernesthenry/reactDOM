const Header = (props) => {
    console.log(props)
    return (
        <header>
            <h1>{props.title}</h1>
            <span className="stats">Players: {props.totalPlayers}</span>
        </header>

    );
}


const Player = (props) => {
    return (
        <div className="player">
            <span className="player-name">
                {props.name}
            </span>
            <Counter score={props.score}/>
        </div>
    )
}

const Counter = (props) => {
    return (
        <div className="counter">
            <button className="counter-action decrement"> - </button>
            <span className="counter-score">{props.score}</span>
            <button className="counter-action increment"> + </button>
        </div>
    );
}

const App = () => {
    return(
        <div className="scoreboard">
        <Header 
        title="Scoreboard"
        totalPlayers={1}
        />
    
        {/* Players list */}
        <Player name="Marino" score={50}/>
        <Player name="Ernest" score={40}/>
        <Player name="Waswa" score={30}/>
        <Player name="Kato" score={11}/>
        <Player name="Henry" score={18}/>

        </div>
        
       
    );
}
ReactDOM.render(
    <App />,
    document.getElementById("root")
);
