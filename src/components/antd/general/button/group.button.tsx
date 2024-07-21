import UTIL_TRANSLATOR from "@/utils/translator.util";
import { Button } from "antd";
import { ButtonGroupProps } from "antd/es/button";
import React, { PropsWithChildren } from "react";
import styled from "styled-components";

export interface CustomButtonGroupProps extends ButtonGroupProps {
  fullWidth?: boolean;
  width?: string | number;
  height?: string | number;
}
const CustomButtonGroup: React.FC<
  PropsWithChildren<CustomButtonGroupProps>
> = ({ children, ...restProps }) => {
  return (
    <CustomButtonGroupStyle {...restProps}>{children}</CustomButtonGroupStyle>
  );
};

export default CustomButtonGroup;

const CustomButtonGroupStyle = styled(Button.Group)<CustomButtonGroupProps>`
  width: ${({ width, fullWidth }) =>
    UTIL_TRANSLATOR.translatePxValue(
      fullWidth ? "100%" : width ? width : undefined
    )};
  height: ${({ height }) => UTIL_TRANSLATOR.translatePxValue(height)};
`;
