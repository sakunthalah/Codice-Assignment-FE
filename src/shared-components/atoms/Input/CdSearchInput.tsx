import React, { CSSProperties } from 'react';
import { Input, InputGroup, InputGroupText, Row } from 'reactstrap';
import { InputSizes } from "../../../types/enums/components/InputSizes.Enum";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


export interface TextInputProps {
  id: string;
  size?: InputSizes;
  valid?: boolean;
  invalid?: boolean;
  plainText?: boolean;
  addon?: boolean;
  className?: string;
  placeHolder?: string;
  label?: string;
  onChange: (data: any) => void;
  onClick?: (data: any) => void;
  defaultValue?: string;
  width?: string;
  style?: CSSProperties;
  feedback?: string;
  required?: boolean;
  disabled?: boolean;
  maxLength?: number;
};

const CdSearchInput: React.FC<TextInputProps> = ({
  id,
  size = InputSizes.sm,
  valid,
  invalid,
  plainText,
  addon,
  className,
  placeHolder,
  label,
  onChange,
  onClick,
  defaultValue,
  width,
  style,
  feedback,
  required = false,
  disabled = false,
  maxLength = 255,
}) => {
  return (
   
    <div style={{ width: "300px" }}>
    <InputGroup>
      {/* Input Field */}
      <Input
        id={id}
        type="text"
        bsSize={size}
        valid={valid}
        invalid={invalid}
        plaintext={plainText}
        addon={addon}
        className={className}
        placeholder={placeHolder}
        onChange={onChange}
        onClick={onClick}
        defaultValue={defaultValue}
        style={{
          ...style,
        }}
        width={width}
        disabled={disabled}
        maxLength={maxLength}
      />
      {/* Icon */}
      <InputGroupText>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </InputGroupText>
    </InputGroup>
  </div>
  
  );
};

export default CdSearchInput;
