import React from "react";
import { Button, ButtonProps } from "reactstrap";
import { ButtonSizes, ButtonVariant } from "../../../types/enums/components/ButtonEnum";
import { Variant } from "../../../types/enums/components/Variant";

export interface CdButtonProps extends ButtonProps {
    children?: React.ReactNode;
    btnVariant?: ButtonVariant;
    width?: string;
    onClick?: () => void;
  }

  const CdButton: React.FC<CdButtonProps> = ({
  size = ButtonSizes.sm,
  children,
  onClick,
  color = Variant.light,
  borderRadius = 5,
  btnVariant = ButtonVariant.Primary,
  width,
  ...props
  }) => {
    return (
      <Button 
        {...props} 
        color={color} 
        className={`btn-default-${btnVariant} ${props.className}`}
        size={size}
        onClick={onClick}
        style={{ ...props.style, borderRadius: `${borderRadius}px`, borderColor:"Highlight", borderStyle:"groove",  width: width}}
      >
        {children ?? props.text}
      </Button>
    );
  };
  
  export default CdButton;