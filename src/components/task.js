import React from 'react';

class Task extends React.Component {
    state = {edit: false};

    edit = () => {
        this.setState({
          edit: true
        });
    }

    remove = () => {
        this.props.deleteTask(this.props.index)
    }

    save = () => {
      this.props.update(this.refs.newTask.value, this.props.index)
      this.setState({
        edit: false
      });
    }

    rendNorm() {

      const cont = {
        display: 'grid',
        gridTemplateAreas: "'text text' 'edit remove'",
        gridTemplateColumns: '1fr 1fr',
        justifyItems: 'center',
        height: '125px'

      };

      const textarea = {
        gridArea: 'text',
        width: '90%',
        height: '40px',
        textAlign: 'center',
        margin: '10px auto',
        fontSize: '21px',
        color: '#555555',
        border:'solid 1px #555555',
        paddingTop: '15px',
        borderRadius: '5px'
      };

      const deleteButtons = {
        gridArea: 'remove',
        width: '80%',
        height: '40px',
        textAlign: 'center',
        color: '#FFFFFF',
        backgroundColor: '#f44336',
        border: 'none',
        textDecoration: 'none',
        textTransform: 'uppercase',
        boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',
        borderRadius: '5px'
      };

      const editButtons = {
        gridArea: 'edit',
        width: '80%',
        height: '40px',
        textAlign: 'center',
        color: '#FFFFFF',
        backgroundColor: '#4CAF50',
        border: 'none',
        textDecoration: 'none',
        textTransform: 'uppercase',
        boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',
        borderRadius: '5px'
      };

      return(
        <div style={cont}>
            <div style={textarea} onClick={this.edit}>{this.props.children}</div>
            <button style={editButtons} onClick={this.edit}>Edit</button>
            <button style={deleteButtons} onClick={this.remove}>Delete</button>
        </div>
      )
    }

    rendEdit(){

      const textarea = {
        display: 'block',
        width: '90%',
        textAlign: 'center',
        margin: '10px auto',
        fontSize: '16px',
        borderRadius: '5px'
      };

      const buttons = {
        display: 'block',
        width: '50%',
        height: '40px',
        margin: '10px auto',
        textAlign: 'center',
        color: '#FFFFFF',
        backgroundColor: '#008CBA',
        border: 'none',
        textDecoration: 'none',
        textTransform: 'uppercase',
        boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',
        borderRadius: '5px'
      };

      return(
        <div>
            <textarea style={textarea} ref='newTask' defaultValue={this.props.children}></textarea>
            <button style={buttons} onClick={this.save}>Save</button>
        </div>
      )
    }

    render(){
        if (this.state.edit){
          return this.rendEdit()
        } else {
          return this.rendNorm()
        }
    };
};

export default Task;
