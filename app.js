const title = React.createElement(
    'h1',
    {id : 'main-title', title: 'This is a title'},
    'My first react element'
)

const desc = React.createElement(
    'p',
    null,
    'I just learned to create a react node and render it to the DOM'
)

const header = React.createElement(
    'header',
    null,
    title,
    desc
)

console.log(title);
ReactDOM.render(
    header,
    document.getElementById("root")
);