import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { fetchTrade } from "actions/actions";
import TradeTable from "components/trade-table";

class App extends Component {
  constructor(props) {
    super(props);
    this.props.fetchTrade();
  }
  render() {
    return (
      <div className="App">
        <TradeTable />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchTrade: () => dispatch(fetchTrade())
});

export default connect(
  null,
  mapDispatchToProps
)(App);
