import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TradeForm  from "components/trade-entry-form";
class TradeDetailPopup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: !!this.props.data
    };
  }

  handleClose = () => {
    console.log("closing dialog");
    this.props.toggleTradeDetailPopup({ tradeDetail: undefined });
  };

  render() {
    const { data, toggleType } = this.props;
    return (
      <div>
        <Dialog
          open={!!data}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">{toggleType=="NEW"?"NEW TRADE":data.asset_name + " ("+data.ticker+")"}</DialogTitle>
          <DialogContent>
            <DialogContentText>{data.ticker}: {toggleType}</DialogContentText>

            <div><pre>{toggleType=="READ"?JSON.stringify(data, null, 2):<TradeForm />}</pre></div>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              close
            </Button>
            <Button onClick={this.handleClose} color="primary">
              update
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

TradeDetailPopup.propTypes = {
  data: PropTypes.object.isRequired,
  toggleType: PropTypes.string.isRequired
};

export default TradeDetailPopup;
