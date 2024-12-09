import {
  FlexDirection,
  JustifyContent,
  AlignItems,
} from "../../../types/enums/components/Container.Enum";
import React, { CSSProperties } from "react";
import { Container } from "reactstrap";

type ContainerProps = {
  className?: string;
  children?: React.ReactNode;
  backgroundColor?: string;
  width?: number;
  height?: string;
  flex?: boolean;
  flexDirection?: FlexDirection;
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
  gap?: string;
  style?: CSSProperties;
};
const CdContainer: React.FC<ContainerProps> = ({
  className,
  children,
  backgroundColor,
  width,
  height,
  flex,
  flexDirection,
  justifyContent,
  alignItems,
  gap,
  style,
}) => {
  return (
    <Container
      className={className}
      style={{
        ...style,
        display: flex ? "flex" : undefined,
        flexDirection: flexDirection,
        justifyContent: justifyContent,
        alignItems: alignItems,
        width: width,
        height: height,
        backgroundColor: backgroundColor,
        gap: gap,
      }}
    >
      {children}
    </Container>
  );
};

export default CdContainer;
