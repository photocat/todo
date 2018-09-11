import React from 'react';
import { Task } from './index'

class Main extends React.Component {
  state = {
        tasks: []
      }

addTask = (text) => {
    let arr = this.state.tasks;
    arr.unshift(text);
    this.setState({tasks: arr})
}

updateText = (text, i) => {
        let arr = this.state.tasks;
        arr[i] = text;
        this.setState({tasks: arr});
      }

deleteTask = (i) => {
      let arr = this.state.tasks;
      arr.splice(i, 1);
      this.setState({tasks: arr});
    }

eachTask = (task, i) => {
          return (
            <Task key={i} index={i} update={this.updateText} deleteTask={this.deleteTask}>
              {task}
            </Task>
          );
    }

    render(){
      const cont = {
        display: 'grid',
        gridTemplateColumns: '1fr',
        minWidth: '360px',
      };

      const buttons = {
        width: '50%',
        height: '40px',
        margin: '10px auto',
        textAlign: 'center',
        color: '#FFFFFF',
        backgroundColor: '#555555',
        border: 'none',
        textDecoration: 'none',
        textTransform: 'uppercase',
        borderRadius: '5px',
        boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)'
      };

        return (
          <div style={cont}>
            <button style={buttons} onClick={this.addTask.bind(null, 'New task')}>New task</button>
            {this.state.tasks.map(this.eachTask)}
          </div>
        )
    };
};

export default Main;
