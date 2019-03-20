import React from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

import RadioGroup from "@material-ui/core/RadioGroup";
import { FormGroup, Radio, FormLabel, FormControl } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";

import { connect } from "react-redux";
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
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%"
  }
});
class _TradeEntryFrom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        ...this.props.tradeDetail
    }
  }

    handleDateChange = (event) => {
        this.setState({ value: event.target.value });
    };

    handleTickerChange = (event) => {
        this.setState({ ticker: event.target.value });
    };

    handleAssetChange = (event) => {
        this.setState({ asset_name: event.target.value });
    };

    handleCurrentPriceChange = (event) => {
        this.setState({ current_price: event.target.value });
    };

    handleTradeTypeChange = (event) => {
        this.setState({ trade_type: event.target.value });
    };

    handlePricePerShareChange = (event) => {
        this.setState({ cost_per_share: event.target.value });
    };

    handleQuantityChange = event => {
        this.setState({ quantity: event.target.value });
    };
    handleQuantityChange = event => {
        this.setState({ quantity: event.target.value });
    };
    handleTotalCostChange = event => {
        this.setState({ quantity: event.target.value });
    };

  render() {
    const { classes } = this.props;
    return (
      <form className={classes.container} noValidate>
        <TextField
          id="trade_date"
          label="Trade Date"
          type="date"
          className={classes.textField_full}
          variant="outlined"
          InputLabelProps={{
            shrink: true
          }}
          value={this.state.trade_date}
          onChange={this.handleDateChange}
        />

        <div className={classes.shared_row}>
          <TextField
            id="ticket"
            label="Ticker"
            className={classNames(classes.dense, classes.textField)}
            margin="dense"
            value={this.state.ticker}
            variant="outlined"
            onChange={this.handleTickerChange}
          />
          <TextField
            id="current_price"
            label="Current Price"
            className={classNames(classes.dense, classes.textField)}
            margin="dense"
            value={this.state.current_price}
            variant="outlined"
            type="number"
            onChange={this.handleCurrentPriceChange}

          />
        </div>

        <TextField
          id="asset_name"
          label="Asset Name"
          className={classNames(classes.textField_full, classes.dense)}
          margin="dense"
          value={this.state.asset_name}
          variant="outlined"
          onChange={this.handleAssetChange}


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
            value={this.state.trade_type}
            onChange={this.handleTradeTypeChange}
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
          value={this.state.quantity}
          onChange={this.handleQuantityChange}
          type="number"
          className={classNames(classes.dense, classes.textField)}
          margin="dense"
          variant="outlined"
        />
        <TextField
          id="cost_per_share"
          label="Cost Per Share"
          value={this.state.cost_per_share}
          onChange={this.handlePricePerShareChange}
          type="number"
          className={classNames(classes.dense, classes.textField)}
          margin="dense"
          variant="outlined"
        />
        <Divider />
        <TextField
          id="total_cost"
          label="Total Cost"
          value={this.state.total_cost}
          onChange={this.handleTotalCostChange}
          type="number"
          className={classNames(classes.dense, classes.textField)}
          margin="dense"
          disabled={true}
          variant="outlined"
        />
      </form>
    );
  }
}

const mapStateToProps = state => ({
  tradeDetail: state.tradeDetail,
  toggleType: state.toggleType
});

const mapDispatchToProps = dispatch => ({
  // addTrade: payload => dispatch(addTrade(payload)),
});

export default connect(
  mapStateToProps,
  null
)(withStyles(styles)(_TradeEntryFrom));
