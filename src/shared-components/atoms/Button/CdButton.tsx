import React from "react";
import { Button, ButtonProps } from "reactstrap";

interface CdButtonProps extends ButtonProps {
  children?: React.ReactNode;
}

const CdButton: React.FC<CdButtonProps> = ({
  size,
  children,
  color,
  borderRadius = 5,
  ...props
}) => {
  return (
    <Button
      {...props}
      color={color}
      className={`${props.className}`}
      size={size}
      style={{ ...props.style, borderRadius: `${borderRadius}px` }}
    >
      {children ?? props.text}
    </Button>
  );
};

export default CdButton;
