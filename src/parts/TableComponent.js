import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Container } from "reactstrap";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";

const { SearchBar } = Search;

const TableComponent = ({ posts }) => {
  const customTotal = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total">
      Showing {from} to {to} of {size} Results
    </span>
  );

  const options = {
    paginationSize: 5,
    pageStartIndex: 1,
    // alwaysShowAllBtns: true, // Always show next and previous button
    // withFirstAndLast: false, // Hide the going to First and Last page button
    // hideSizePerPage: true, // Hide the sizePerPage dropdown always
    // hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
    firstPageText: "First",
    prePageText: "Back",
    nextPageText: "Next",
    lastPageText: "Last",
    nextPageTitle: "First page",
    prePageTitle: "Pre page",
    firstPageTitle: "Next page",
    lastPageTitle: "Last page",
    showTotal: true,
    paginationTotalRenderer: customTotal,
    disablePageTitle: true,
    sizePerPageList: [
      {
        text: "5",
        value: 5,
      },
      {
        text: "10",
        value: 10,
      },
      {
        text: "All",
        value: posts.length,
      },
    ], // A numeric array is also available. the purpose of above example is custom the text
  };

  const columns = [
    {
      dataField: "title",
      text: "Title",
      sort: true,
      align: "center",
      headerAlign: "center",
    },
    {
      dataField: "location",
      text: "Location",
      sort: true,
      align: "center",
      headerAlign: "center",
    },
    {
      dataField: "date",
      text: "Date",
      sort: true,
      align: "center",
      headerAlign: "center",
    },
    {
      dataField: "participant",
      text: "Partcipant",
      sort: true,
      align: "center",
      headerAlign: "center",
    },
    {
      dataField: "note",
      text: "Note",
      sort: true,
      align: "center",
      headerAlign: "center",
    },
  ];
  return (
    <Container>
      <ToolkitProvider keyField="id" data={posts} columns={columns} search>
        {(props) => (
          <div>
            <h3>Dashboard</h3>
            <SearchBar {...props.searchProps} className="my-3" />

            <BootstrapTable
              {...props.baseProps}
              headerWrapperClasses="bg-light"
              bodyClasses="bg-white h-75"
              noDataIndication="Table is Empty"
              bootstrap4
              hover
              striped
              pagination={paginationFactory(options)}
            />
          </div>
        )}
      </ToolkitProvider>
    </Container>
  );
};

export default TableComponent;
