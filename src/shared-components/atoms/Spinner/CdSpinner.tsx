import React, { CSSProperties } from 'react';
import { Spinner } from "reactstrap";

export type SpinnerProps = {
    type?: string;
    color?: string;
    className?: string;
    size?: string;
    thickness?: string;
    style?: CSSProperties;
  };
  
  const CdSpinner: React.FC<SpinnerProps> = ({
    type = 'border',
    color = 'primary',
    className,
    size,

  }) => {
    return (
      <Spinner
        size={size}
        type={type}
        color={color}
        className={className}
       
      />
    );
  };
  export default CdSpinner;