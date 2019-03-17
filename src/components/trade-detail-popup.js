import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

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
    const { data } = this.props;
    return (
      <div>
        <Dialog
          open={!!data}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">{data.asset_name}</DialogTitle>
          <DialogContent>
            <DialogContentText>{data.ticker}</DialogContentText>

            {<pre>{JSON.stringify(data)}</pre>}
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
  data: PropTypes.object.isRequired
};

export default TradeDetailPopup;
