import "./App.css";
import TaksList from "./components/tasklist";
import TaskForm from "../src/components/TaskForm";
import {Decoration} from './components/Decoration'

function App() {
  return (
    <div className="App">
      <Decoration/>
      <TaskForm />
      <TaksList />
    </div>
  );
}

export default App;
