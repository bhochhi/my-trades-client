import React, { Component } from "react";
import "App.css";
import { connect } from "react-redux";
import TradeTable from "components/trade-table";
import { fetchTrades } from "./actions/actions";

class App extends Component {
  componentDidMount() {
    this.props.fetchTrades();
  }
  render() {
    return (
      <div className="App">
        <TradeTable />
      </div>
    );
  }
}

export default connect(
  null,
  {
    fetchTrades
  }
)(App);
