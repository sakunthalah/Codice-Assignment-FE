import React, { CSSProperties } from 'react';
import { CdTableCell, CdTableRow } from '../../atoms';


type TableDataRowProps = {
  data: (string | number)[];
  className?: string;
  style?: CSSProperties;
  onClick?: (data: any) => void;
};

const CdTableDataRow: React.FC<TableDataRowProps> = ({ data, className, style, onClick }) => {
  return (
    <CdTableRow className={className} style={style} onClick={() => onClick && onClick(data)}>
      {data.map((item, index) => (
        <CdTableCell key={index}>{item}</CdTableCell>
      ))}
    </CdTableRow>
  );
};

export default CdTableDataRow;
