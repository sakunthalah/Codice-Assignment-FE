import React, { CSSProperties } from 'react';
import { Table } from 'reactstrap';
import { CdTableBody, CdTableFooter, CdTableHeader } from '../../atoms';
import { CdTableDataRow, CdTableHeaderRow } from '../../molecules';


type DataTableProps = {
  headers: string[];
  data: (string | number)[][];
  className?: string;
  style?: CSSProperties;
  bordered?: boolean;
  hover?: boolean;
  striped?: boolean;
  onRowClick?: (data: any) => void;
  feedback?: string;
  responsive?: boolean;
  small?: boolean;
};

const CdDataTable: React.FC<DataTableProps> = ({
  headers,
  data,
  className,
  style,
  bordered,
  hover,
  striped,
  onRowClick,
  feedback,
  responsive,
  small,
}) => {
  return (
    <Table
      striped={striped}
      hover={hover}
      bordered={bordered}
      className={className}
      style={style}
      responsive={responsive}
      size={small ? 'sm' : ''}
    >
      <CdTableHeader>
        <CdTableHeaderRow headers={headers} />
      </CdTableHeader>
      <CdTableBody>
        {data.map((rowData, index) => (
          <CdTableDataRow key={index} data={rowData} onClick={onRowClick} />
        ))}
      </CdTableBody>
      <CdTableFooter style={{ color: '#dc3545' }}><small>{feedback}</small></CdTableFooter>
    </Table>
  );
};

export default CdDataTable;
