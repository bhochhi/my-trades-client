import React from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

import RadioGroup from "@material-ui/core/RadioGroup";
import { FormGroup, Radio, FormLabel, FormControl } from "@material-ui/core";
import Divider from '@material-ui/core/Divider';

import {connect} from "react-redux"
const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField_full: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "100%"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
    
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  },
  formControl: {
    margin: theme.spacing.unit * 3
  },
  group: {
    margin: `${theme.spacing.unit}px 0`
  },
  shared_row: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width:'100%'
    // display: 'flex',
    // alignItems: 'center',
    // flexFlow: 'column wrap',
    // alignContent: 'stretch'
  }
});
class _TradeEntryFrom extends React.Component {
  state = {
    value: "BUY"
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleQuantityChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    const { classes, tradeDetail } = this.props;
    return (
      <form className={classes.container} noValidate>
        <TextField
          id="trade_date"
          label="Trade Date"
          type="date"
          className={classes.textField_full}
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <div className={classes.shared_row}>
        <TextField
          id="ticket"
          label="Ticker"
          className={classNames(classes.dense, classes.textField)}
          margin="dense"
          defaultValue={tradeDetail.ticker}
          variant="outlined"
        />
         <TextField
          id="current_price"
          label="Current Price"
          className={classNames(classes.dense, classes.textField)}
          margin="dense"
          defaultValue={tradeDetail.current_price}
          variant="outlined"
          type="number"
        />  
        </div>
       

        <TextField
          id="asset_name"
          label="Asset Name"
          className={classNames(classes.textField_full, classes.dense)}
          margin="dense"
          defaultValue={tradeDetail.ticker}
          variant="outlined"
        />
          <Divider variant="middle" />
        <FormControl
          margin="dense"
          fullWidth={true}
          variant="filled"
          className={classNames(classes.textField_full, classes.dense)}
        >
          <FormLabel component="label">Trade Type</FormLabel>
          <RadioGroup
            row
            aria-label="Trade Type"
            name="trade_type"
            className={classNames(classes.group, classes.margin)}
            defaultValue={tradeDetail.trade_type}
            onChange={this.handleChange}
          >
            <FormControlLabel
              value="BUY"
              control={<Radio color="primary" />}
              label="BUY"
              labelPlacement="end"
            />
            <FormControlLabel
              value="SELL"
              control={<Radio color="secondary" />}
              label="SELL"
              labelPlacement="end"
            />
          </RadioGroup>
        </FormControl>
        <TextField
          id="quantity"
          label="Quantiy"
          defaultValue={tradeDetail.quantity}
          onChange={this.handleQuantityChange}
          type="number"
          className={classNames(classes.dense, classes.textField)}
          margin="dense"
          variant="outlined"
        />
        <TextField
          id="cost_per_share"
          label="Cost Per Share"
          defaultValue={tradeDetail.cost_per_share}
          onChange={(event)=>console.log(event.target.value)}
          type="number"
          className={classNames(classes.dense, classes.textField)}
          margin="dense"
          variant="outlined"
        />
        <Divider  />
         <TextField
          id="total_cost"
          label="Total Cost"
          defaultValue={tradeDetail.total_cost}
          onChange={(event)=>console.log(event.target.value)}
          type="number"
          className={classNames(classes.dense, classes.textField)}
          margin="dense"
          disabled ={true}
          variant="outlined"
        />
      </form>
    );
  }
}


const mapStateToProps = state => ({
    tradeDetail: state.tradeDetail,
    toggleType: state.toggleType,
  });
  
  const mapDispatchToProps = dispatch => ({
    // toggleTradeDetailPopup: payload => dispatch(toggleTradeDetailPopup(payload)),
  });
  
  export default connect(
    mapStateToProps,
    null
  )(withStyles(styles)(_TradeEntryFrom));
