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
    }
}

export function updateTrade(payload) {
    return {
        type: UPDATE_TRADE,
        payload
    }
}

export function toggleTradeDetailPopup(payload) {
    return {
        type: TOGGLE_TRADE_DETAIL_POPUP,
        payload
    }
}

export function setTrades(payload){
    return {
        type: SET_TRADES,
        payload
    }
}

export function setCurrentPrices(payload){
    return {
        type: SET_CURRENT_PRICES,
        payload
    }
}


export function fetchTrades() {
    return function(dispatch) {
      return axios.post("http://httpbin.org/delay/2",dataMock)
       .then(({ data }) => {
            const trades = JSON.parse(data.data);
            dispatch(setTrades(trades));
            const tickers = trades.map(trade=>trade.ticker);
            dispatch(fetchTicker([...new Set(tickers)]));
      });
    };
 }

export function fetchTicker(tickers) {
    const getTickers = tickers.map(ticker=>axios.get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=C8DVXL0WPHLAJ4SE`));
    return function(dispatch) {
      return axios.all(getTickers)
       .then((responses) => {
           const tickerData =  responses.map(res=>{
               const data = res.data["Global Quote"];
               if(data===undefined){
                   console.log('unable get quote from api: ', res)
               }
                return {
                   "ticker" : data["01. symbol"],
                   "price" :data["05. price"]
               }
           });
            dispatch(setCurrentPrices(tickerData));
      })
      .catch((errrors) => {
          console.log('current price ticker error', errrors);
      })
      ;
    };
 }

const dataMock = [
    {
      id: 1,
      trade_date: "2018-09-24",
      broker: "Vanguard",
      investment_type: "IRA Traditional",
      ticker: "CSCO",
      asset_name: "Cisco Systems",
      trade_type: "SELL",
      quantity: "30",
      cost_per_share: "50",
      total_cost: "1500",
      current_price: "48",
      total_loss_gain: "400",
      reason_for_trade: [
        "hold too long",
        "highest price so far",
        "market sentiment"
      ],
      buy_again: true,
      limit_price: 45
    },
    {
      id: 2,
      trade_date: "2018-09-24",
      broker: "Vanguard",
      investment_type: "IRA Traditional",
      ticker: "CSCO",
      asset_name: "Cisco Systems",
      trade_type: "SELL",
      quantity: "30",
      cost_per_share: "50",
      total_cost: "1500",
      current_price: "48",
      total_loss_gain: "400",
      reason_for_trade: [
        "hold too long",
        "highest price so far",
        "market sentiment"
      ],
      buy_again: true,
      limit_price: 45
    },
    {
      id: 3,
      trade_date: "2018-09-24",
      broker: "Vanguard",
      investment_type: "IRA Traditional",
      ticker: "CSCO",
      asset_name: "Cisco Systems",
      trade_type: "SELL",
      quantity: "30",
      cost_per_share: "50",
      total_cost: "1500",
      current_price: "48",
      total_loss_gain: "400",
      reason_for_trade: [
        "hold too long",
        "highest price so far",
        "market sentiment"
      ],
      buy_again: true,
      limit_price: 45
    },
  
    {
      id: 4,
      trade_date: "2018-08-20",
      broker: "Fidelity",
      investment_type: "Brokerage",
      ticker: "GE",
      asset_name: "General Electric",
      trade_type: "BUY",
      quantity: "300",
      cost_per_share: "10",
      total_cost: "3000",
      current_price: "9.00",
      total_loss_gain: "",
      reason_for_trade: ["deep buy", "lowest price so far", "market sentiment"],
      buy_again: true,
      limit_price: 6
    }
  ];
  