import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "@material-ui/core/Button";
import {connect} from 'react-redux';
import {startAction} from 'actions/startAction';
import { stopAction } from "actions/stopAction";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} 
          className={
            "App-logo" + 
            (this.props.rotating ? "":" App-logo-paused")
          } 
          alt="logo" 
          onClick={this.props.rotating ? this.props.stopAction : this.props.startAction} 
          />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Button variant="contained" color="primary" onClick={this.props.rotating ? this.props.stopAction : this.props.startAction} >
            Hello World
          </Button>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});
const mapDispatchToProps = dispatch => ({
  startAction: () => dispatch(startAction),
  stopAction: () => dispatch(stopAction)
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
