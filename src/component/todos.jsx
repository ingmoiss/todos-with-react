import React, { Component } from "react";

//Include shortId
import shortid from "shortid";

export class ToDos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tarea: '',
      toDos: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.addList = this.addList.bind(this);
  }

  handleChange(e) {
    this.setState({tarea: e.target.value});
  }

  addList(e){
    e.preventDefault();
    const toDo = [{id: shortid.generate(), nombreTarea: this.state.tarea}];
    this.setState({
        toDos: this.state.toDos.concat(toDo)
    });

    this.setState({tarea: ""});
  }

  //Method to remove
  removeItem = itemId =>{
    const filtredData = this.state.toDos.filter(item => item.id !== itemId);
    this.setState({ toDos: filtredData });
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center">To-Do List</h1>
        <div className="row">
          <div className="col-md-6 m-auto">
            <form className="d-flex" onSubmit={this.addList}>
              <input className="form-control shadow-sm mr-1" placeholder="New ToDo" 
              value={this.state.tarea} onChange={this.handleChange}/>
              {/* <button className="btn btn-dark shadow-sm ml-1" type="submit">
                Add
              </button> */}
            </form>
            <div className="row">
                <div className="col-md m-auto">
                    <ul className="list-group shadow my-4">
                        {this.state.toDos.map(item=>(
                          <li className="list-group-item d-flex justify-content-between align-items-center" key={item.id}>
                            <span className="lead">{item.nombreTarea}</span>
                            {<i className="fas fa-trash-alt" onClick={()=>this.removeItem(item.id)}></i>}
                          </li>
                        ))}
                    </ul>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
// onClick={()=>this.removeItem(item.id)}