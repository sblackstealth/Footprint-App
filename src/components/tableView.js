import React from "react";
import ReactTable from "react-table";

import data from "../data";

import "react-table/react-table.css";
import "./tableView.css";

function TableView() {
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
      Header: "Total Carbon Emissions (Mg)",
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
      data={data}
      defaultPageSize={11}
      showPagination={false}
      noDataText={"Please wait for data..."}
      className="-striped -highlight"
    />
  );
}

export default TableView;
