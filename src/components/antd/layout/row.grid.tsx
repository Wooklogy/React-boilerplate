import UTIL_TRANSLATOR from "@/utils/translator.util";
import { Row, RowProps } from "antd";
import React, { PropsWithChildren } from "react";
import styled from "styled-components";

export interface CustomRowProps extends RowProps {
  fullWidth?: boolean;
  width?: string | number;
  height?: string | number;
}
const CustomRow: React.FC<PropsWithChildren<CustomRowProps>> = ({
  children,
  ...restProps
}) => {
  return <CustomRowStyle {...restProps}>{children}</CustomRowStyle>;
};

export default CustomRow;

const CustomRowStyle = styled(Row)<CustomRowProps>`
  width: ${({ width, fullWidth }) =>
    UTIL_TRANSLATOR.translatePxValue(
      fullWidth ? "100%" : width ? width : undefined
    )};
  height: ${({ height }) => UTIL_TRANSLATOR.translatePxValue(height)};
`;
