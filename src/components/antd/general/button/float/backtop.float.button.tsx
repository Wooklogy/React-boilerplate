import UTIL_TRANSLATOR from "@/utils/translator.util";
import { BackTopProps, FloatButton } from "antd";
import React from "react";
import styled from "styled-components";

export interface CustomFloatButtonBackTopProps extends BackTopProps {
  fullWidth?: boolean;
  width?: string | number;
  height?: string | number;
}
const CustomFloatButtonBacktop: React.FC<CustomFloatButtonBackTopProps> = ({
  ...restProps
}) => {
  return <CustomFloatButtonBackTopStyle {...restProps} />;
};

export default CustomFloatButtonBacktop;

const CustomFloatButtonBackTopStyle = styled(
  FloatButton.BackTop
)<CustomFloatButtonBackTopProps>`
  width: ${({ width, fullWidth }) =>
    UTIL_TRANSLATOR.translatePxValue(
      fullWidth ? "100%" : width ? width : undefined
    )};
  height: ${({ height }) => UTIL_TRANSLATOR.translatePxValue(height)};
`;
