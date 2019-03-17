import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import {
  addTrade,
  fetchTrade
} from "actions/actions";
import TradeTable from "components/trade-table";

class App extends Component {
  constructor(props) {
    super(props);
    this.props.fetchTrade();
  }
  render() {
    const { trades } = this.props;
    return (
      <div className="App">
        {this.props.trades ? (
          <TradeTable
            trades={trades}
          />
        ) : (
          <em>loading...</em>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  trades: state.trades,
});

const mapDispatchToProps = dispatch => ({
  fetchTrade: () => dispatch(fetchTrade()),
  addTrade: payload => dispatch(addTrade(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
