import React, { useCallback } from "react";
import { List } from 'react-virtualized';
import TodoListItem from "./TodoListItem";
import './TodoList.scss';

// react-virtualized
// 리스트 컴포넌트에서 스크롤되기 전에 보이지 않는 컴포넌트는 
// 렌더링하지 않고 크기만 차지하게끔 함.
// 만약 스크롤되면 해당 스크롤 위치에서 
// 보여 주어야 할 컴포넌트를 자연스럽게 렌더링

const TodoList = ({todos, onRemove, onToggle}) => {

    // react-virtualized의 List 컴포넌트에서 각 TodoItem을 렌더링할 때 사용
    const rowRenderer = useCallback(({index, key, style}) => {
        const todo = todos[index];
        return (
            <TodoListItem
                todo={todo}
                key={key}
                onRemove={onRemove}
                onToggle={onToggle}
                style={style}
            />
        )
    }, [onRemove, onToggle, todos])

    return(
        // 해당 리스트의 전체 크기와 각 항목의 높이, 각 항목을 렌더링할 때 사용해야 하는 함수, 그리고 배열을 props로 넣어 주어야 함
        <List
        className="TodoList"
        width={512} // 전체 크기
        height={513} // 전체 높이
        rowCount={todos.length} // 항목 개수
        rowHeight={57} // 항목 높이
        rowRenderer={rowRenderer} // 항목을 렌더링할 때 쓰는 함수
        list={todos} // 배열
        style={{ outline:'none' }} // List에 기본 적용되는 outline 스타일 제거
      />
    )
}

export default React.memo(TodoList);