import React, {Component} from 'react';
import './App.css';
import Employee from './component/Employee'

class App extends Component {
  state = {
    employee : ''
  }

  changeNameHandler = (e) => {
    this.setState({
      employeeName : e.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Welcome to reactJs</h1>
        <Employee changeName={this.changeNameHandler} name={this.state.employeeName} />
      </div>
    );
  }
}

export default App;