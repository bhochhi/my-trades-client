import axios from "axios";

export const ADD_TRADE = "ADD_TRADE";
export const UPDATE_TRADE = "UPDATE_TRADE";
export const TOGGLE_TRADE_DETAIL_POPUP = "TOGGLE_TRADE_DETAIL_POPUP";


export const FETCH_TRADES = "FETCH_TRADES";
export const SET_TRADES = "SET_TRADES";


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


export function fetchTrades() {
    return function(dispatch) {
      return axios.post("http://httpbin.org/delay/4",dataMock)
       .then(({ data }) => {
            dispatch(setTrades(JSON.parse(data.data)));
      });
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
  