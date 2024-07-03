function App() {
    const { useState } = React;
    const [count, setCount] = useState(10);
    return (
        <>
            <div className="App">
                <h1>My First React App</h1>
                {count}
            </div>
        </>
    );
}
ReactDOM.render(<App />, document.querySelector("#root"));
