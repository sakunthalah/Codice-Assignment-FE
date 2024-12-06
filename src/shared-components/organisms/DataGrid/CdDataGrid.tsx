//import { DataGridDensityScales } from '@enums/components/DataGridEnum';
//import { CdColumnMenu } from '@molecules/index';
//import { Stack } from '@mui/material';
import {
  DataGridPro,
  GridColDef,
  GridDensity,
  GridRowsProp,
  GridToolbar,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarFilterButton,
  GridToolbarQuickFilter,
} from "@mui/x-data-grid-pro";
import React from "react";

type DataGridProps = {
  rows: GridRowsProp;
  columns: GridColDef[];
  hideToolbar?: boolean;
  height?: number;
  checkboxSelection?: boolean;
  disableRowSelectionOnClick?: boolean;
  columnMenuSlots?: any;
  columnMenuSlotProps?: any;
  disableColumnFilter?: boolean;
  disableColumnSelector?: boolean;
  disableDensitySelector?: boolean;
  density?: GridDensity;
  getDetailPanelContent?: (row: any) => React.ReactNode;
  getDetailPanelHeight?: (row: any) => number;
  columnVisibilityModel?: Record<string, boolean>;
  onColumnVisibilityModelChange?: (newModel: Record<string, boolean>) => void;
  pagination?: any;
  pageSizeOptions?: number[];
  autoHeight?: boolean;
  initialState?: any;
  customNoRowsOverlayDisplayText?: string;
  useCustomToolbar?: boolean;
};

// const CustomNoRowsOverlay: React.FC<{ displayText: string }> = ({ displayText }) => {
//   return <Stack className="h-100 align-items-center justify-content-center">{displayText}</Stack>;
// };

// const CustomToolbar: React.FC<{ hidden?: boolean }> = ({ hidden }) => {
//   if (hidden) {
//     return null;
//   }

//   return (
//     <GridToolbarContainer className="d-flex justify-content-between align-items-center">
//       <div className="d-flex">
//         <GridToolbarColumnsButton />
//         <GridToolbarFilterButton />
//       </div>
//       <GridToolbarQuickFilter className="ml-auto" />
//     </GridToolbarContainer>
//   );
// };

const CdDataGrid: React.FC<DataGridProps> = ({
  rows,
  columns,
  checkboxSelection,
  disableRowSelectionOnClick,
  height,
  hideToolbar,
  columnMenuSlots,
  columnMenuSlotProps,
  disableColumnFilter,
  disableColumnSelector,
  disableDensitySelector,
  density = "standard",
  getDetailPanelContent,
  getDetailPanelHeight,
  columnVisibilityModel,
  onColumnVisibilityModelChange,
  pagination = false,
  pageSizeOptions = [],
  initialState,
  autoHeight = true,
  customNoRowsOverlayDisplayText = "No records to display.",
  useCustomToolbar = false,
}) => {
  return (
    <div style={{ height: height ? height : "100%", width: "100%" }}>
      <DataGridPro
        sx={{
          ".MuiTablePagination-displayedRows": {
            marginTop: "1em",
            marginBottom: "1em",
          },
          ".MuiTablePagination-selectLabel": {
            marginTop: "1em",
            marginBottom: "1em",
          },
        }}
        rows={rows}
        columns={columns}
        editMode="row"
        checkboxSelection={checkboxSelection}
        disableRowSelectionOnClick={disableRowSelectionOnClick}
        disableColumnFilter={disableColumnFilter}
        disableColumnSelector={disableColumnSelector}
        disableDensitySelector={disableDensitySelector}
        density={density}
        getDetailPanelContent={getDetailPanelContent}
        getDetailPanelHeight={getDetailPanelHeight}
        columnVisibilityModel={columnVisibilityModel}
        onColumnVisibilityModelChange={onColumnVisibilityModelChange}
        pagination={pagination}
        pageSizeOptions={pageSizeOptions}
        initialState={initialState}
        autoHeight={autoHeight}
      />
    </div>
  );
};

export default CdDataGrid;
