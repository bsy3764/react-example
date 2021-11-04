import './App.css';
import TodoInsert from './todoComponents/TodoInsert';
import TodoTemplate from './todoComponents/TodoTemplate';
import TodoList from './todoComponents/TodoList';
import { useCallback, useRef, useState } from 'react';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'test1',
      checked: true
    },
    {
      id: 2,
      text: 'test2',
      checked: true
    },
    {
      id: 3,
      text: 'test3',
      checked: false
    }
  ]);

  const nextId = useRef(4);

  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    }, [todos]
  );

  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo => todo.id !== id));
    }, [todos]
  );

  const onToggle = useCallback(
    id => {
      setTodos(
        todos.map(todo =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [todos],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}/>
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
    </TodoTemplate>
  )};

export default App;