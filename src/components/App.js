import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { addTodo, deleteTodo } from '../actions';
import TodoArea from './TodoArea';
import TodoButton from './shared/TodoButton';

class App extends Component {
  state = {
    step: 1,
    todoList: [],
    name: '',
    content: '',
    data: []
  };

  async componentDidMount() {
    const { data } = await axios.post('http://localhost:3003/save_todo', {
      title: 'Test',
      content: 'Test content'
    });
    this.setState({
      data
    });
  }

  handleInpChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  newTodo = (e) => {
    e.preventDefault();

    // use action creator from redux to update our state in redux store
    this.props.addTodo({
      name: this.state.name,
      content: this.state.content
    });
  };

  handleMenu = (step) => {
    if (step === 1) {
      return (
        <>
          <form onSubmit={this.newTodo}>
            <input
              type="text"
              className="form-control"
              onChange={this.handleInpChange}
              value={this.state.name}
              name="name"
              placeholder="Enter Title of Todo..."
            />
            <input
              type="text"
              className="form-control mt-2"
              onChange={this.handleInpChange}
              value={this.state.content}
              name="content"
              placeholder="What is the content of your todo..?"
            />

            <TodoButton name={'Make New'} />
          </form>
        </>
      );
    } else if (step === 2) {
      return <TodoButton name={'Make New'} onClickMethod={this.newTodo} />;
    }
  };

  render() {
    const { todoList } = this.props;
    console.log(todoList);
    console.log('Data:', this.state.data);

    const { step } = this.state;
    return (
      <div className="main-app pt-5 pl-5 pr-5">
        <h2 className="main-title display-4">Prestine</h2>
        {this.handleMenu(step)}
        <TodoButton
          name={'Delete'}
          onClickMethod={() => this.props.deleteTodo({ name: 'Test' })}
        />

        {todoList.length > 0 ? (
          todoList.map((todo) => (
            <TodoArea key={todo.name} todo={{ ...todo }} />
          ))
        ) : (
          <div className="mt-4">You have no todos!</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todoList: state.todos
  };
};

export default connect(
  mapStateToProps,
  { addTodo: addTodo, deleteTodo: deleteTodo }
)(App);
