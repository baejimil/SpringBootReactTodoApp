import './App.css';
import TodoApp from './components/todo/TodoApp';

function App() {
  return (
    <div className="App">
      <TodoApp></TodoApp>
    </div>
  );
}

function PlayWithProps({property1,property2}){
  console.log(property1);
  console.log(property2);
}

export default App;
