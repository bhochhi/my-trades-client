import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import TradeTableHead from "components/trade-table-head";
import TradeTableToolbar from "components/trade-table-toolbar";
import TradeDetailPopup from "components/trade-detail-popup";
import { connect } from "react-redux";
import {
  toggleTradeDetailPopup
} from "actions/actions";
function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === "desc"
    ? (a, b) => desc(a, b, orderBy)
    : (a, b) => -desc(a, b, orderBy);
}

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3
  },
  table: {
    minwidth: 760
  },
  tableWrapper: {
    overflowX: "auto"
  }
});

class TradeTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: "asc",
      orderBy: "trade_date",
      selected: [],
      page: 0,
      rowsPerPage: 5,
      data: this.props.trades || []
    };
  }

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = "desc";

    if (this.state.orderBy === property && this.state.order === "desc") {
      order = "asc";
    }

    this.setState({
      order,
      orderBy
    });
  };

  handleSelectAllClick = event => {
    if (event.target.checked) {
      this.setState(state => ({
        selected: state.data
      }));
      return;
    }
    this.setState({
      selected: []
    });
  };

  handleClick = (event, row) => {
    const { selected } = this.state;
    const selectedIndex = selected.indexOf(row);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, row);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    this.setState({
      selected: newSelected
    });
    
  };

  displayDetails = (event, row) => {
   this.props.toggleTradeDetailPopup({tradeDetail:row})
  };

  handleChangePage = (event, page) => {
    this.setState({
      page
    });
  };

  handleChangeRowsPerPage = event => {
    this.setState({
      rowsPerPage: event.target.value
    });
  };

  isSelected = row => this.state.selected.indexOf(row) !== -1;

  render() {
    console.log("table-trade: ", this.props, this.state);
    const { classes, tradeDetail, toggleTradeDetailPopup } = this.props;
    const { data, order, orderBy, selected, rowsPerPage, page } = this.state;
    const emptyRows =
      rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    return (
      <Paper className={classes.root}>
        <TradeTableToolbar numSelected={selected.length} />
        <div className={classes.tableWrapper}>
          <Table className={classes.table} aria-labelledby="tableTitle">
            <TradeTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={this.handleSelectAllClick}
              onRequestSort={this.handleRequestSort}
              rowCount={data.length}
            />
            <TableBody>
              {stableSort(data, getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, idx) => {
                  const isSelected = this.isSelected(row);
                  return (
                    <TableRow
                      hover
                      onClick={event => this.displayDetails(event, row)}
                      role="checkbox"
                      aria-checked={isSelected}
                      tabIndex={-1}
                      key={idx}
                      selected={isSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox checked={isSelected} />
                      </TableCell>
                      <TableCell>{row.trade_date}</TableCell>
                      <TableCell align="left">
                        {row.asset_name + " (" + row.ticker + ")"}
                      </TableCell>
                      <TableCell align="left">{row.trade_type}</TableCell>
                      <TableCell align="right">{row.quantity}</TableCell>
                      <TableCell align="right">{row.cost_per_share}</TableCell>
                      <TableCell align="right">{row.total_cost}</TableCell>
                      <TableCell align="right">{row.current_price}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={8} />
                </TableRow>
              )}
            </TableBody>
          </Table>
              {!!tradeDetail && <TradeDetailPopup data={tradeDetail} toggleTradeDetailPopup={toggleTradeDetailPopup}/> }
        </div>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            "aria-label": "Previous Page"
          }}
          nextIconButtonProps={{
            "aria-label": "Next Page"
          }}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </Paper>
    );
  }
}

TradeTable.propTypes = {
  classes: PropTypes.object.isRequired,
};


const mapStateToProps = state => ({
  tradeDetail: state.tradeDetail
});

const mapDispatchToProps = dispatch => ({
  toggleTradeDetailPopup: payload => dispatch(toggleTradeDetailPopup(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(TradeTable));
