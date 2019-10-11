const title = <h1>'My first react element'</h1>

const desc = <p>'I just learned to create a react node and render it to the DOM'</p>

const header = (
    <header>
        <h1>'My first react element'</h1>
        <p>'I just learned to create a react node and render it to the DOM'</p>
    </header>
)


console.log(title);
ReactDOM.render(
    header,
    document.getElementById("root")
);