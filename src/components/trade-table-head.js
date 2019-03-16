import React from "react";
import PropTypes from "prop-types";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Tooltip from "@material-ui/core/Tooltip";

const rows = [
  {
    id: "trade_date",
    numeric: false,
    disablePadding: true,
    label: "Trade Date"
  },
  {
    id: "asset_name",
    numeric: false,
    disablePadding: false,
    label: "Asset Name"
  },
  {
    id: "trade_type",
    numeric: false,
    disablePadding: false,
    label: "Trade Type"
  },
  { id: "quantity", numeric: true, disablePadding: false, label: "Quantity" },
  {
    id: "cost_per_share",
    numeric: true,
    disablePadding: false,
    label: "Cost Per Share"
  },
  {
    id: "total_cost",
    numeric: true,
    disablePadding: false,
    label: "Total Cost"
  },
  {
    id: "current_price",
    numeric: true,
    disablePadding: false,
    label: "Current price"
  }
];

class TradeTableHead extends React.Component {
  createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
  };

  render() {
    const {
      onSelectAllClick,
      order,
      orderBy,
      numSelected,
      rowCount
    } = this.props;

    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={numSelected === rowCount}
              onChange={onSelectAllClick}
            />
          </TableCell>

          {rows.map(
            (row, idx) => (
              <TableCell
                key={idx}
                align={row.numeric ? "right" : "left"}
                padding={row.disablePadding ? "none" : "default"}
                sortDirection={orderBy === row.id ? order : false}
              >
                <Tooltip
                  title="Sort"
                  placement={row.numeric ? "bottom-end" : "bottom-start"}
                  enterDelay={300}
                >
                  <TableSortLabel
                    active={orderBy === row.id}
                    direction={order}
                    onClick={this.createSortHandler(row.id)}
                  >
                    {row.label}
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            ),
            this
          )}
        </TableRow>
      </TableHead>
    );
  }
}

TradeTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired
};

export default TradeTableHead;
