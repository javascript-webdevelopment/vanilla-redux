import React, { Component } from 'react';
// import our store into the component
import store from './redux/store';

class App extends Component {
  constructor() {
    super();

    // create inital local state that will be set to the redux store
    this.state = {
      redux: store.getState(),
      newTodo: ''
    }
  };

  //  when the component first mounts, we are subscribing to the redux store and will watch for any changes made to the global state
  // when the is a change made to the global state, we will update our local state
  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        redux: store.getState()
      })
    });
  };

  // keep track of the values put into the input box
  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  render() {
    // map through the todos from redux and display them to the browser
    const mappedReduxTodos = this.state.redux.todos.map((todo, index) => {
      return (
        <div key={index}>
          <h1>{todo}</h1>
        </div>
      )
    });

    return (
      <div>
        {mappedReduxTodos}
        <div>
          <input type="text" name="newTodo" onChange={this.handleInputChange} />
          <button onClick={() => store.dispatch({type: 'ADD_TODO', payload: this.state.newTodo})}>ADD TODO</button>
        </div>
      </div>
    );
  }
};

export default App;