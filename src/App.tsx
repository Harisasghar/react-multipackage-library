import './App.scss';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Button from './components/Button/src/Button';
import Dropdown from './components/Dropdown/src/Dropdown';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Button value="test button" primary></Button>
        <Dropdown options={[
                  { key: 1, value: "item description 1" },
                  { key: 2, value: "item description 2" },
                  { key: 3, value: "item description 3" }]}></Dropdown>
      </div>
    );
  }
}

export default App;
