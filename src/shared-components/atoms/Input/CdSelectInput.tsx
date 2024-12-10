import React, { CSSProperties, useState, useEffect } from 'react';
import { FormFeedback, FormGroup, Input } from 'reactstrap';
import { InputSizes } from "../../../types/enums/components/InputSizes.Enum";
import CdInputLabel from '../Label/CdInputLabel';

export type OptionType = {
  key: string;
  value: string;
};

export interface SelectInputProps {
  id: string;
  options: OptionType[];
  size?: InputSizes;
  valid?: boolean;
  invalid?: boolean;
  plainText?: boolean;
  addon?: boolean;
  className?: string;
  placeHolder?: string;
  label?: string;
  onSelect: (data: any) => void;
  defaultChecked?: string;
  width?: string;
  style?: CSSProperties;
  feedback?: string;
  required?: boolean;
  disabled?: boolean;
  value?: string | null;
};

const CdSelectInput: React.FC<SelectInputProps> = ({
  id,
  options,
  size = InputSizes.sm,
  valid,
  invalid,
  plainText,
  addon,
  className,
  placeHolder,
  label,
  onSelect,
  defaultChecked,
  width,
  style,
  feedback,
  required = false,
  disabled = false,
  value,
}) => {
  const [selected, setSelected] = useState<string | undefined>(defaultChecked);

  useEffect(() => {
    if (defaultChecked) {
      setSelected(defaultChecked);
    }
  }, [defaultChecked]);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(event.target.value);
    onSelect(event.target.value);
  };

  const optionList = options.map((item) => (
    <option key={item.key} value={item.value}>
      {item.value}
    </option>
  ));

  return (
    <FormGroup className="form-group">
      {label && <CdInputLabel labelText={label} size={size} required={required} id={id} />}
      <Input
        aria-label={id}
        id={id}
        type="select"
        bsSize={size}
        valid={valid}
        invalid={invalid}
        plaintext={plainText}
        addon={addon}
        className={className}
        onChange={onChange}
        value={value ?? selected}
        style={{
          ...style,
          width: width,
        }}
        disabled={disabled}
      >
        {placeHolder && <option value={''}>{placeHolder}</option>}
        {optionList}
      </Input>
      <FormFeedback>{feedback}</FormFeedback>
    </FormGroup>
  );
};

export default CdSelectInput;
