import {FETCH_TRADE, ADD_TRADE} from 'actions/actions'

export default (state, action) => {
    switch (action.type) {
      case FETCH_TRADE:
        console.log('fetching trades....',state);
        return {"trades": data};
      case ADD_TRADE:
         return {"trades": [...state, action.payload]}
      default:
        return state;
    }
  };


  const data = [{
    "trade_date":"11/02/2018",
    "broker":"Vanguard",
    "investment_type":"IRA Traditional",
    "ticker":"CSCO",
    "stock_fund_etf":"Cisco Systems",
    "trade_type":"SELL",
    "Quantity":"30",
    "cost_per_share":"50",
    "total_cost":"1500",
    "current_price":"48",
    "total_loss_gain":"400",
    "reason_for_trade":["hold too long","highest price so far","market sentiment"],
    "buy_again":true,
    "limit_price":45 
},
{
    "trade_date":"11/03/2018",
    "broker":"Fidelity",
    "investment_type":"Brokerage",
    "ticker":"GE",
    "stock_fund_etf":"General Electric",
    "trade_type":"BUY",
    "Quantity":"300",
    "cost_per_share":"10",
    "total_cost":"3000",
    "current_price":"9.00",
    "total_loss_gain":"",
    "reason_for_trade":["deep buy","lowest price so far","market sentiment"],
    "buy_again":true,
    "limit_price":6 
}]