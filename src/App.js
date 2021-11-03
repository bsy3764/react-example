import './App.css';
import TodoInsert from './todoComponents/TodoInsert';
import TodoTemplate from './todoComponents/TodoTemplate';
import TodoList from './todoComponents/TodoList';

const App = () => {
  return (
    <TodoTemplate>
      <TodoInsert/>
      <TodoList/>
    </TodoTemplate>
  )};

export default App;