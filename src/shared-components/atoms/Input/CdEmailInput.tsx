import React, { CSSProperties } from 'react';
import { FormFeedback, FormGroup, Input } from 'reactstrap';
import { InputSizes } from "../../../types/enums/components/InputSizes.Enum";
import CdInputLabel from '../Label/CdInputLabel'

type EmailInputProps = {
  id: string;
  size?: InputSizes;
  valid?: boolean;
  invalid?: boolean;
  className?: string;
  placeHolder?: string;
  label?: string;
  onChange: (data: any) => void;
  defaultValue?: string;
  width?: string;
  style?: CSSProperties;
  feedback?: string;
  required?: boolean;
  onFocus?: () => void;
  disabled?: boolean;
  value?: string;
};

const CdEmailInput: React.FC<EmailInputProps> = ({
  size = InputSizes.sm,
  valid,
  invalid,
  className,
  placeHolder,
  label,
  onChange,
  defaultValue,
  width,
  style,
  feedback,
  required,
  onFocus,
  id,
  disabled = false,
  value,
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
        className={className}
        placeholder={placeHolder}
        onChange={(e) => onChange(e)}
        onFocus={onFocus}
        defaultValue={defaultValue}
        disabled={disabled}
        value={value}
        style={{
          ...style,
          width: width,
        }}
      />
      {invalid && <FormFeedback>{feedback}</FormFeedback>}
    </FormGroup>
  );
};

export default CdEmailInput;