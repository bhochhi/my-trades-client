import {
  FETCH_TRADE,
  ADD_TRADE,
  TOGGLE_TRADE_DETAIL_POPUP
} from "actions/actions";

export default (state, action) => {
  console.log("reducer: ", action.type, action.payload);
  switch (action.type) {
    case FETCH_TRADE:
      return { trades: data };
    case ADD_TRADE:
      return { trades: [...state, action.payload] };
    case TOGGLE_TRADE_DETAIL_POPUP:
      switch (action.payload.toggleType) {
        case "NEW":
          return {
            ...state,
            toggleType: action.payload.toggleType,
            tradeDetail: trade_template
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
  trade_date:undefined,
  broker: "",
  investment_type: "",
  ticker: undefined,
  asset_name: "",
  trade_type: "SELL",
  quantity: 0,
  cost_per_share: 0,
  total_cost: 0,
  current_price: 0,
  total_loss_gain: 0,
  reason_for_trade: [
  ],
  buy_again: false,
  limit_price: 0
};

const data = [
  {
    trade_date: "11/02/2018",
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
    trade_date: "11/02/2018",
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
    trade_date: "11/02/2018",
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
    trade_date: "11/02/2018",
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
    trade_date: "11/03/2018",
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
