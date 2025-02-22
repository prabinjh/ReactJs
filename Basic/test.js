import react from "react";
import ReactDom from "react-Dom/client";

function Hello(probs){
               return <h1>Hello World</h1>
}

const Container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<Hello />);