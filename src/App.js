import React from "react";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import About from "./router-tutorial/About";
import Home from "./router-tutorial/Home";
import Profile from "./router-tutorial/Profile";

const App = () => {
  // react-router-dom version이 5.1보다 크면 
  // Route를 단독 사용 불가. path 대신에 elemet와 <~~/>를 안에 작성
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profile/velopert">velopert 프로필</Link>
        </li>
        <li>
          <Link to="/profile/gildong">gildong 프로필</Link>
        </li>
      </ul>     
      <hr /> 
      <Routes>
        <Route path="/" element={<Home/>} exact={true} />
        <Route path="/about" element={<About/>} />
        <Route path="/profile/:username" element={<Profile/>} />
      </Routes>
    </div>
  )
} 

/*
import './App.css';
import TodoInsert from './todoComponents/TodoInsert';
import TodoTemplate from './todoComponents/TodoTemplate';
import TodoList from './todoComponents/TodoList';
import { useCallback, useRef, useState, useReducer } from 'react';
import produce from 'immer';

const App = () => {
  const nextId = useRef(1);
  const [form, setForm] = useState({ name: '', username: '' });
  const [data, setData] = useState({
    array: [],
    uselessValue: null
  });

  // input 수정을 위한 함수
  const onChange = useCallback(e => {
    const { name, value } = e.target;
    setForm(
      produce(draft => {
        draft[name] = value;
      })
    );
  }, []);

  // form 등록을 위한 함수
  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      const info = {
        id: nextId.current,
        name: form.name,
        username: form.username
      };

      // array 에 새 항목 등록
      setData(
        // produce(수정하고 싶은 상태, 상태를 어떻게 업데이트할지 정의하는 함수)
        produce(draft => {
          draft.array.push(info);
        })
      );

      // form 초기화
      setForm({
        name: '',
        username: ''
      });
      nextId.current += 1;
    },
    [form.name, form.username]
  );

  // 항목을 삭제하는 함수
  const onRemove = useCallback(
    id => {
      setData(
        produce(draft => {
          draft.array.splice(draft.array.findIndex(info => info.id === id), 1);
        })
      );
    },
    []
  );

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="username"
          placeholder="아이디"
          value={form.username}
          onChange={onChange}
        />
        <input
          name="name"
          placeholder="이름"
          value={form.name}
          onChange={onChange}
        />
        <button type="submit">등록</button>
      </form>
      <div>
        <ul>
          {data.array.map(info => (
            <li key={info.id} onClick={() => onRemove(info.id)}>
              {info.username} ({info.name})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
*/

/*
function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return array;
}

function todoReducer(todos, action) {
  switch(action.type) {
    case 'INSERT':
      return todos.concat(action.todo);
    case 'REMOVE':
      return todos.filter(todo => todo.id !== action.id);
    case 'TOGGLE':
      return todos.map(todo =>
        todo.id === action.id ? {...todo, checked: !todo.checked} : todo);
    default:
      return todos;
  }
}

const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

  const nextId = useRef(2501);

  const onInsert = useCallback(text => {
    const todo = {
      id: nextId.current,
      text,
      checked: false
    };
    dispatch({type: 'INSERT', todo});
    nextId.current += 1;
  }, []);

  const onRemove = useCallback(id => {
    dispatch({type: 'REMOVE', id});
  }, []);

  const onToggle = useCallback(id => {
    dispatch({type: 'TOGGLE', id});
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
}
*/

/*
const App = () => {
  const [todos, setTodos] = useState(createBulkTodos);

  const nextId = useRef(4);

  const onInsert = useCallback(text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false
      };
      setTodos(todos => todos.concat(todo));
      nextId.current += 1;
    }, []
  );

  const onRemove = useCallback(id => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
    }, []
  );

  const onToggle = useCallback(id => {
      setTodos(todos =>
        todos.map(todo =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}/>
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
    </TodoTemplate>
  )
};
*/

/*
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
  )
};
*/

export default App;