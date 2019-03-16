import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "@material-ui/core/Button";
import {connect} from 'react-redux';
import {addTrade,fetchTrade} from "actions/actions";
import TradeTable from "components/trade-table"

let counter = 0;
function createData(name, calories, fat, carbs, protein) {
  counter += 1;
  return { id: counter, name, calories, fat, carbs, protein };
}  

class App extends Component {
  constructor(props){
    super(props);
    this.props.fetchTrade();
  }
  render() {
    const {trades} = this.props;
    console.log(trades)

    return (
      <div className="App">
        {trades?trades.map((trade,idx)=>{
          return <div key={idx}>{trade.ticker}</div>
        }):<em>loading...</em>}
        <TradeTable trades={trades}  />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  trades: state.trades,
});

const mapDispatchToProps = dispatch => ({
  fetchTrade: () => dispatch(fetchTrade()),
  addTrade: (payload) => dispatch(addTrade(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
