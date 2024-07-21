import UTIL_TRANSLATOR from "@/utils/translator.util";
import { FloatButton, FloatButtonGroupProps } from "antd";
import React from "react";
import styled from "styled-components";

export interface CustomFloatButtonGroupProps extends FloatButtonGroupProps {
  fullWidth?: boolean;
  width?: string | number;
  height?: string | number;
}
const CustomFloatButtonGroup: React.FC<CustomFloatButtonGroupProps> = ({
  ...restProps
}) => {
  return <CustomFloatButtonGroupStyle {...restProps} />;
};

export default CustomFloatButtonGroup;

const CustomFloatButtonGroupStyle = styled(
  FloatButton.Group
)<CustomFloatButtonGroupProps>`
  width: ${({ width, fullWidth }) =>
    UTIL_TRANSLATOR.translatePxValue(
      fullWidth ? "100%" : width ? width : undefined
    )};
  height: ${({ height }) => UTIL_TRANSLATOR.translatePxValue(height)};
`;
