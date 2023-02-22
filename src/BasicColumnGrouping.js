import { useState, useEffect, useMemo, useCallback } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import './Style.css';
import { columnData } from './data/columndef';
import { dummyData } from './data/rowData';

function BasicColumnGrouping() {
  const [rowData, setRowdata] = useState(dummyData);

  const columnDefs = columnData;

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      resizable: true,
      filter: false,
      wrapHeaderText: true,
      autoHeaderHeight: true,
      headerClass: 'ag-grid-header-font-size',
      cellClass: 'cell-border',
    }),
    []
  );

  const groupHeaderHeight = 60;

  return (
    <>
      <div className='ag-theme-alpine' style={{ height: 900 }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          rowSelection='multiple'
          animateRows={true}
          groupHeaderHeight={groupHeaderHeight}
          rowHeight={170}
        />
      </div>
    </>
  );
}

export default BasicColumnGrouping;
