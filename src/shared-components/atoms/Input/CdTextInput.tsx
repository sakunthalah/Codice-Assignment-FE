import React, { CSSProperties } from 'react';
import { FormFeedback, FormGroup, Input } from 'reactstrap';
//import { InputSizes } from '@enums/components/InputEnum';
import { InputSizes } from "../../../types/enums/components/InputSizes.Enum";
import CdInputLabel from '../Label/CdInputLabel';


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

const CdTextInput: React.FC<TextInputProps> = ({
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
    <FormGroup className="form-group">
      {label && <CdInputLabel labelText={label} size={size} required={required} id={id} />}
      <Input
        aria-label={id}
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
      {invalid && <FormFeedback>{feedback}</FormFeedback>}
    </FormGroup>
  );
};

export default CdTextInput;
