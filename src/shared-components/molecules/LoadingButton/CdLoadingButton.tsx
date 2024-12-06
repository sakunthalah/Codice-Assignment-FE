import React, { CSSProperties } from 'react';
import { CdButton, CdSpinner } from '../../atoms/index';

type LoadingButtonProps = {
    id: string;
    isLoading: boolean;
    text: string;
    onClick?: () => void;
    color?: 'primary';
    size?: 'sm';
    buttonStyle?: CSSProperties;
    spinnerStyle?: CSSProperties;
    block?: boolean;
    outline?: boolean;
    className?: string;
    type?: 'button';
    disabled?: boolean;
  };

  const CdLoadingButton: React.FC<LoadingButtonProps> = ({
    id,
    isLoading,
    text,
    onClick,
    color = 'secondary',
    buttonStyle,
    spinnerStyle,
    block,
    size = 'sm',
    className,
    type,
    disabled,
    outline = false,
  }) => {
    return (
      <CdButton
        type={type}
        onClick={onClick}
        text={!isLoading ? text : undefined}
        color={color}
        style={buttonStyle}
        block={block}
        size={size}
        className={className}
        disabled={disabled}
        outline={outline}
        id={id}
      >
        {isLoading ? <CdSpinner style={spinnerStyle} size={'sm'} /> : undefined}
      </CdButton>
    );
  };
  
  export default CdLoadingButton;