import React from "react";
import ReactTable from "react-table";
import PropTypes from 'prop-types';
// import data from "../data";

import "react-table/react-table.css";
import "./tableView.css";

function TableView({ tableData }) {
  const columns = [
    {
      Header: "Month/Year",
      accessor: "month",
      style: { 'whiteSpace': 'unset' }
    },
    {
      Header: "Location",
      accessor: "location"
    },
    {
      Header: "PUE Multipule",
      accessor: "pue",
      style: {
        textAlign: "right"
      }
    },
    {
      Header: "Per-Server Watt Draw",
      accessor: "watt_hours",
      style: {
        textAlign: "right",
        'whiteSpace': 'unset'
      }
    },
    {
      Header: "Total Carbon Emissions (kg)",
      accessor: "carbon_emissions",
      style: {
        textAlign: "right"
      }
    },
    {
      Header: "Carbon Offset",
      accessor: "carbon_offset",
      style: {
        textAlign: "right"
      }
    }
  ];

  return (
    <ReactTable
      columns={columns}
      data={tableData}
      defaultPageSize={11}
      showPagination={false}
      noDataText={"Please wait for data..."}
      className="-striped -highlight"
    />
  );
}

TableView.propTypes = {
  tableData: PropTypes.array.isRequired
};

export default TableView;
