import {
  FETCH_TRADE,
  ADD_TRADE,
  UPDATE_TRADE,
  TOGGLE_TRADE_DETAIL_POPUP,
  SET_TRADES,
  SET_CURRENT_PRICES
} from "actions/actions";
import uuidv1 from "uuid/v1";

export default (state, action) => {
  switch (action.type) {
    case ADD_TRADE:
      return {
        ...state,
        trades: [...state.trades, action.payload]
      };
    case UPDATE_TRADE:
      const updated_trades = state.trades.map(trade => {
        if (trade.id === action.payload.id) {
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
          const temp = { ...trade_template, id: uuidv1() };
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
    case SET_TRADES:
      return { trades: action.payload };
    case SET_CURRENT_PRICES:
      const tickers = action.payload;
      const newStates = state.trades.map(trade => {
        const tick = tickers.find(t => trade.ticker === t.ticker);
        trade.current_price = tick && tick.current_price;
        return trade;
      });
      return {...state, trades: newStates };
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
