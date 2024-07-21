import UTIL_TRANSLATOR from "@/utils/translator.util";
import { FloatButton, FloatButtonProps } from "antd";
import React from "react";
import styled from "styled-components";

export interface CustomFloatButtonProps extends FloatButtonProps {
  fullWidth?: boolean;
  width?: string | number;
  height?: string | number;
}
const CustomFloatButton: React.FC<CustomFloatButtonProps> = ({
  ...restProps
}) => {
  return <CustomFloatButtonStyle {...restProps} />;
};

export default CustomFloatButton;

const CustomFloatButtonStyle = styled(FloatButton)<CustomFloatButtonProps>`
  width: ${({ width, fullWidth }) =>
    UTIL_TRANSLATOR.translatePxValue(
      fullWidth ? "100%" : width ? width : undefined
    )};
  height: ${({ height }) => UTIL_TRANSLATOR.translatePxValue(height)};
`;
