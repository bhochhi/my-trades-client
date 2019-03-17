import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import {
  addTrade,
  fetchTrade,
  displayTradeDetail,
  resetTradeDetail
} from "actions/actions";
import TradeTable from "components/trade-table";

class App extends Component {
  constructor(props) {
    super(props);
    this.props.fetchTrade();
  }
  render() {
    const { trades, tradeDetail, displayTradeDetail } = this.props;
    return (
      <div className="App">
        {this.props.trades ? (
          <TradeTable
            trades={trades}
            displayTradeDetail={displayTradeDetail}
            resetTradeDetail={resetTradeDetail}
            tradeDetail={tradeDetail}
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
  tradeDetail: state.tradeDetail
});

const mapDispatchToProps = dispatch => ({
  fetchTrade: () => dispatch(fetchTrade()),
  addTrade: payload => dispatch(addTrade(payload)),
  displayTradeDetail: payload => dispatch(displayTradeDetail(payload)),
  resetTradeDetail: payload => dispatch(resetTradeDetail(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
