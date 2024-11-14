import './style/main.css';
import laughing  from './asset/smiley.webp'

const imgContainer = document.getElementById('myimage');
imgContainer.src = laughing;
const header = React.createElement("div", {}, [
    React.createElement("h1", {}, "I am h1"),
    React.createElement("h2", {}, "I am h2"),
  ]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(header);
console.log('aaa');
