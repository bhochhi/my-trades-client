import axios from "axios";

export const ADD_TRADE = "ADD_TRADE";
export const UPDATE_TRADE = "UPDATE_TRADE";
export const TOGGLE_TRADE_DETAIL_POPUP = "TOGGLE_TRADE_DETAIL_POPUP";

export const FETCH_TRADES = "FETCH_TRADES";
export const SET_TRADES = "SET_TRADES";
export const SET_CURRENT_PRICES = "SET_CURRENT_PRICES";

/*
 * action creators
 */

export function addTrade(payload) {
  return {
    type: ADD_TRADE,
    payload
  };
}

export function updateTrade(payload) {
  return {
    type: UPDATE_TRADE,
    payload
  };
}

export function toggleTradeDetailPopup(payload) {
  return {
    type: TOGGLE_TRADE_DETAIL_POPUP,
    payload
  };
}

export function setTrades(payload) {
  return {
    type: SET_TRADES,
    payload
  };
}

export function setCurrentPrices(payload) {
  return {
    type: SET_CURRENT_PRICES,
    payload
  };
}

export function addATrade(trade) {
  console.log('addATrade: ',trade)
  return function(dispatch) {
    return axios
      .post("http://localhost:9000/trades", trade)
      .then(({ data }) => {
        dispatch(addTrade(data));
      });
  };
}

export function fetchTrades() {
  return function(dispatch) {
    return axios.get("http://localhost:9000/trades").then(({ data }) => {
      const trades = data;
      dispatch(setTrades(data));
      const tickers = trades.map(trade => trade.ticker);
      dispatch(fetchTicker([...new Set(tickers)]));
    });
  };
}

export function fetchTicker(tickers) {
  const getTickers = tickers.map(ticker =>
    axios.get(
      `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=C8DVXL0WPHLAJ4SE`
    )
  );
  return function(dispatch) {
    return axios
      .all(getTickers)
      .then(responses => {
        const tickerData = responses
          .map(res => {
            const data = res.data["Global Quote"];
            if (!!data && !data.hasOwnProperty(["01. symbol"])) {
              return null;
            }
            return {
              ticker: data["01. symbol"],
              current_price: data["05. price"]
            };
          })
          .filter(x => x);
        dispatch(setCurrentPrices(tickerData));
      })
      .catch(errrors => {
        console.log("current price ticker error", errrors);
      });
  };
}
