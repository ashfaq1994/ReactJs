import React, {component} from 'react';

class Student extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      editing: false,
      newTodo: '',
      todos: [{
        id:1, name : 'Buy some cloths',
      },{
        id:2, name : 'Buy some cake', 
      },
      {
        id:3, name : 'Buy some book', 
      }],
     };

     this.todoHandler = this.todoHandler.bind(this);
     this.addHandler = this.addHandler.bind(this);
     this.deleteHandler = this.deleteHandler.bind(this);
     this.updateHandler = this.updateHandler.bind(this);

  }

  todoHandler(event)
  {
    this.setState({ newTodo: event.target.value })
  }

  addHandler()
  {
      const newTodo  = {
        name : this.state.newTodo,
        id: this.state.todos[this.state.todos.length - 1].id + 1,
      }
      const todos = this.state.todos;
      todos.push(newTodo);

      this.setState({
        todos : todos
      });
  }

  updateHandler(index)
  {
    const todo = this.state.todos[index];
    this.setState({
      editing:true,
      newTodo: todo.name,
    })
    

  }

  deleteHandler(index)
  {
     const todos = this.state.todos;
     delete todos[index];

    this.setState({todos});
     
  }

  render() { 
    // console.log(this.state.newTodo);
    return (  
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="form-group my-5">
               <input 
                name="todo"
                onChange={this.todoHandler} 
                type="text" className="form-control"
                value={this.state.newTodo}
                />
            </div>
            <button onClick={this.addHandler} className="btn btn-info">{this.state.editing ? 'update' : 'Add'}</button>
          <ul className="list-group">
          {
            this.state.todos.map((item, index) => {
              return <li className="list-group-item" key={item.id}>
               
               <button onClick={  () => {
                  this.updateHandler(index);
                } } className="btn btn-info btn-sm">U</button>
                
                {item.name}

                <button onClick={  () => {
                  this.deleteHandler(index);
                } } className="btn btn-danger btn-sm">X</button>
              </li>
            })  
          }
          </ul>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Student;