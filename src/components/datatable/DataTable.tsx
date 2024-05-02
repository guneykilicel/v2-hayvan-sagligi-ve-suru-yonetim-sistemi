import * as React from "react";
import { saveAs } from "file-saver";
import * as XLSX from "xlsx";
import {
  DataGrid,
  DataGridProps,
  GridColDef,
  GridToolbar,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
  GridToolbarFilterButton,
  GridToolbarQuickFilter,
} from "@mui/x-data-grid";
import { trTR } from "@mui/x-data-grid/locales";

import "./DataTable.scss";
import { Button } from "@mui/material";
import DataTableMenu from "./DataTableMenu";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 10, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 11, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 12, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 13, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 14, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 15, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function DataTable() {


  const CustomToolbar: any = () => {
    return (
      <GridToolbarContainer
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <GridToolbarContainer sx={{ display: "flex", gap: "60px" }}>
          <GridToolbarQuickFilter />
        </GridToolbarContainer>

        <GridToolbarContainer>
          <GridToolbarColumnsButton
            slotProps={{
              button: { variant: "text" },
            }}
          />
          <GridToolbarDensitySelector />
          <GridToolbarExport
            slotProps={{
              button: { variant: "outlined", text: "Aktar" },
            }}
          />
          {/* <Button variant="outlined" onClick={handleExportToXLSX}>Dışa Aktar</Button> */}
        </GridToolbarContainer>
      </GridToolbarContainer>
    );
  };

  const handleExport = () => {
    const jsonData = JSON.stringify(rows);
    const blob = new Blob([jsonData], { type: "application/json" });
    saveAs(blob, "data.json");
  };

  const handleExportToXLSX = () => {
    const worksheet = XLSX.utils.json_to_sheet(rows);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    const wbout = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const blob = new Blob([wbout], { type: "application/octet-stream" });
    saveAs(blob, "data.xlsx");
  };

  const actionColumn: GridColDef = {
    field: "action",
    headerName: "Action",
    width: 60,
    renderCell: (params) => {
      return (
        <div className="action" style={{ cursor: "pointer", display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }}>
          <DataTableMenu toolbarExport={<GridToolbarExport />} />
          {/* <div className="delete" onClick={() => handleDelete(params.row.id)}>
            <img src="/delete.svg" alt="" />
          </div> */}
        </div>
      );
    },
  };

  return (
    <div className="data-table">
      <DataGrid
        autoHeight
        className="data-grid"
        localeText={trTR.components.MuiDataGrid.defaultProps.localeText}
        rows={rows}
        columns={[actionColumn, ...columns]}
        disableRowSelectionOnClick
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 11 },
          },
        }}
        slots={{
          toolbar: CustomToolbar,
        }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 100, placeholder: "Ara..." },
            columnMenu: { background: "red", counter: rows.length },
          },
        }}
        pageSizeOptions={[5, 10]}
        sx={{
          boxShadow: 2,
          border: 2,
          borderColor: 'black',
          '& .MuiDataGrid-cell': {
            border: 'none'
          },
          '& .MuiDataGrid-cell:focus': {
            border: 'none'
          },
          "& .MuiDataGrid-row": {
            // border: "1px solid lightgray",
            // borderRadius: "5px",
            // width: "calc(100% - 2px)",
            // marginTop: 1
          },
        }}
        // showCellVerticalBorder={true}
      />
      {/* <button onClick={handleExport}>exportjson</button>
      <button onClick={handleExportToXLSX}>exportxlsx</button> */}
    </div>
  );
}
