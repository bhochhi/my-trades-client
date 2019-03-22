import {
  FETCH_TRADE,
  ADD_TRADE,UPDATE_TRADE,
  TOGGLE_TRADE_DETAIL_POPUP
} from "actions/actions";
import uuidv4 from "uuid/v4";

export default (state, action) => {

  console.log("reducer: ",uuidv4());
  switch (action.type) {
    case FETCH_TRADE:
      return { trades: data };
    case ADD_TRADE:
      return {
        ...state,
        trades: [...state.trades, action.payload]
      };
    case UPDATE_TRADE:
      const updated_trades = state.trades.map(trade =>{
          if(trade.id === action.payload.id){
              return action.payload;
          }
          return trade;
      });

      return {
        ...state,
        trades: updated_trades
      };
    case TOGGLE_TRADE_DETAIL_POPUP:
      switch (action.payload.toggleType) {
        case "NEW":
          const temp = {...trade_template, id: uuidv4()}
          return {
            ...state,
            toggleType: action.payload.toggleType,
            tradeDetail: temp
          };
        default:
          return {
            ...state,
            toggleType: action.payload.toggleType,
            tradeDetail: action.payload.tradeDetail
          };
      }
    default:
      return state;
  }
};

const trade_template = {
  trade_date: "2019-03-21",
  broker: "AMERITRADE",
  investment_type: "",
  ticker: "HELLO",
  asset_name: "Hello world",
  trade_type: "SELL",
  quantity: 0,
  cost_per_share: 0,
  total_cost: 0,
  current_price: 0,
  total_loss_gain: 0,
  reason_for_trade: [],
  buy_again: false,
  limit_price: 0
};

const data = [
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
