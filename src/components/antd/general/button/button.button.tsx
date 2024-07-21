import UTIL_TRANSLATOR from "@/utils/translator.util";
import { Button, ButtonProps } from "antd";
import React, { PropsWithChildren } from "react";
import styled from "styled-components";

export interface CustomButtonProps extends ButtonProps {
  fullWidth?: boolean;
  width?: string | number;
  height?: string | number;
}
const CustomButton: React.FC<PropsWithChildren<CustomButtonProps>> = ({
  children,
  ...restProps
}) => {
  return <CustomButtonStyle {...restProps}>{children}</CustomButtonStyle>;
};

export default CustomButton;

const CustomButtonStyle = styled(Button)<CustomButtonProps>`
  width: ${({ width, fullWidth }) =>
    UTIL_TRANSLATOR.translatePxValue(
      fullWidth ? "100%" : width ? width : undefined
    )};
  height: ${({ height }) => UTIL_TRANSLATOR.translatePxValue(height)};
`;
