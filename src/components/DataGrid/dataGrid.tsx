import React from "react";
import { DataGrid } from "@mui/x-data-grid";

function DataGridComponent({
  rows,
  columns,
  rowsPerPageOptions,
  rowHeight,
}: any) {
  return (
    <React.Fragment>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[rowsPerPageOptions]}
          rowHeight={rowHeight}
          checkboxSelection
        />
      </div>
    </React.Fragment>
  );
}

export default DataGridComponent;
