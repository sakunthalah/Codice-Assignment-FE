import { FormFeedback, FormGroup, Input } from 'reactstrap';
import CdInputLabel from '../Label/CdInputLabel';
import { InputSizes } from "../../../types/enums/components/InputSizes.Enum";
import { CSSProperties } from 'react';

type DateInputProps = {
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
  value?: string | readonly string[] | number | undefined;
};

const CdDateInput: React.FC<DateInputProps> = ({
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
  value,
}) => {
  return (
    <FormGroup className="form-group">
      {label && <CdInputLabel labelText={label} size={size} required={required} id={id} />}
      <Input
        aria-label={id}
        id={id}
        bsSize={size}
        valid={valid}
        invalid={invalid}
        className={className}
        placeholder={placeHolder}
        onChange={(e) => onChange(e)}
        onFocus={onFocus}
        defaultValue={defaultValue}
        value={value}
        style={{
          ...style,
          width: width,
        }}
        type="date"
      />
      <FormFeedback>{feedback}</FormFeedback>
    </FormGroup>
  );
};

export default CdDateInput;
