import UTIL_TRANSLATOR from "@/utils/translator.util";
import { Divider, DividerProps } from "antd";
import React from "react";
import styled from "styled-components";

export interface CustomDividerProps extends DividerProps {
  fullWidth?: boolean;
  fullHeight?: boolean;
  width?: string | number;
  height?: string | number;
  color?: string;
  borderWidth?: string | number;
}
const CustomDivider: React.FC<CustomDividerProps> = ({ ...restProps }) => {
  return <CustomDividerStyle {...restProps} />;
};

export default CustomDivider;

const CustomDividerStyle = styled(Divider)<CustomDividerProps>`
  border-width: ${({ borderWidth }) =>
    UTIL_TRANSLATOR.translatePxValue(borderWidth)};
  border-color: ${({ color }) => color};
  width: ${({ width, fullWidth }) =>
    UTIL_TRANSLATOR.translatePxValue(
      fullWidth ? "100%" : width ? width : undefined
    )};
  height: ${({ height, fullHeight }) =>
    UTIL_TRANSLATOR.translatePxValue(
      fullHeight ? "100%" : height ? height : undefined
    )};
`;
