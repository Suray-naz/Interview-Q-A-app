import Header from "./components/header/Header";
import Liste from "./components/liste/Liste";
import data from "./helpers/data";
import "./App.css"


function App() {
  return (
    <div>
      <Header/>
      <Liste data={data}/>
      
    </div>
  );
}

export default App;
