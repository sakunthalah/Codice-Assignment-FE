import { InputSizes } from "../../../types/enums/components/InputSizes.Enum";
import React, { CSSProperties } from "react";
import { Label } from "reactstrap";

type LabelProps = {
  id?: string;
  hidden?: boolean;
  check?: boolean;
  size?: InputSizes;
  labelText: string;
  style?: CSSProperties;
  required?: boolean;
};

const CdInputLabel: React.FC<LabelProps> = ({
  id,
  hidden,
  check,
  size,
  labelText,
  style,
  required = false,
}) => {
  return (
    <Label
      id={`${id}-label`}
      hidden={hidden}
      check={check}
      size={size}
      style={{ ...style }}
      aria-label={labelText}
      className="custom-label"
    >
      {required ? <span style={{ color: "red" }}>* </span> : null}
      {labelText}
    </Label>
  );
};
export default CdInputLabel;
