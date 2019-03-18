import React from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

import RadioGroup from "@material-ui/core/RadioGroup";
import { FormGroup, Radio, FormLabel, FormControl } from "@material-ui/core";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "100%"
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
  }
});
class _TradeEntryFrom extends React.Component {
  state = {
    value: "BUY"
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };
  render() {
    const { classes } = this.props;
    return (
      <form className={classes.container} noValidate>
        <TextField
          id="date"
          label="Trade Date"
          type="date"
          defaultValue={new Date()}
          className={classes.textField}
          InputLabelProps={{
            shrink: true
          }}
        />

        <TextField
          id="standard-dense"
          label="Ticker"
          className={classNames(classes.textField, classes.dense)}
          margin="dense"
        />

        <TextField
          id="standard-dense"
          label="Asset Name"
          className={classNames(classes.textField, classes.dense)}
          margin="dense"
        />
        <FormControl
          component="fieldset"
          margin="dense"
          fullWidth={true}
          variant="outline"
          className={classNames(classes.textField, classes.dense)}
        >
          <FormLabel component="label">Trade Type</FormLabel>
          <RadioGroup
            row
            aria-label="Trade Type"
            name="trade_type"
            className={classNames(classes.group, classes.margin)}
            value={this.state.value}
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
      </form>
    );
  }
}

export default withStyles(styles)(_TradeEntryFrom);
