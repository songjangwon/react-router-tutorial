import React, { Component } from 'react';
import TodoListTemplate from './TodoList/TodoListTemplate';
import Form from './TodoList/Form';
import TodoItemList from './TodoList/TodoItemList';
import * as service from 'services/todo';

class TodoList extends Component {
  id = 0 // 이미0,1,2 가존재하므로3으로설정
  state = {
    input: '',
    todos: [
      // { id: 0, text: '리액트소개', checked: false },
      // { id: 1, text: '리액트구조', checked: true },
      // { id: 2, text: '리액트사용', checked: false }
    ]
  }
  constructor(props){
    super(props);
    // service.getTodos().then({
    //   alert()
    // });

    let thenProm = service.getTodos().then(value => {
      console.log("이 부분은 호출 스택 이후에 실행됩니다. 전달받은 값이자 반환값은 " + value + "입니다.");
      this.setState({
        todos: value.data
      });
      return value;
    });
    debugger;

  }
  
  render() {
    const { input, todos } = this.state;
    const {
      handleChange, handleCreate, handleKeyPress, handleToggle, handleRemove
    } = this;
    return (
      <TodoListTemplate form={<Form
        value={input}
        onKeyPress={handleKeyPress}
        onChange={handleChange}
        onCreate={handleCreate}
      />}>
        <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove} />
      </TodoListTemplate>
    );
  }
  handleChange = (e) => {
    this.setState({
      input: e.target.value// input 의다음바뀔값
    });
  }
  handleToggle = (id) => {
    const { todos } = this.state;
    // 파라미터로받은id 를가지고몇번째Item인지찾습니다.
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index]; // 선택한객체
    const copyTodos = [...todos]; // 배열을복사
    // 기존의값들을복사하고, checked 값을덮어쓰기
    copyTodos[index] = {
      ...selected,
      checked: !selected.checked
    };
    this.setState({
      todos: copyTodos
    })
  };
  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input: '', // input초기화
      // concat을사용하여배열에추가
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    });
  }
  handleKeyPress = (e) => {
    // 눌려짂 키가Enter 이면handleCreate호출
    if (e.key === 'Enter') {
      this.handleCreate();
    }
  }
  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  }
}
export default TodoList;