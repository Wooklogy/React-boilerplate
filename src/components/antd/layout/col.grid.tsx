import UTIL_TRANSLATOR from "@/utils/translator.util";
import { Col, ColProps } from "antd";
import React, { PropsWithChildren } from "react";
import styled from "styled-components";

export interface CustomColProps extends ColProps {
  fullWidth?: boolean;
  width?: string | number;
  height?: string | number;
}
const CustomCol: React.FC<PropsWithChildren<CustomColProps>> = ({
  children,
  ...restProps
}) => {
  return <CustomColStyle {...restProps}>{children}</CustomColStyle>;
};

export default CustomCol;

const CustomColStyle = styled(Col)<CustomColProps>`
  width: ${({ width, fullWidth }) =>
    UTIL_TRANSLATOR.translatePxValue(
      fullWidth ? "100%" : width ? width : undefined
    )};
  height: ${({ height }) => UTIL_TRANSLATOR.translatePxValue(height)};
`;
