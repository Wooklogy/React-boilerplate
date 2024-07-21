import UTIL_TRANSLATOR from "@/utils/translator.util";
import { Flex, FlexProps } from "antd";
import React, { PropsWithChildren } from "react";
import styled from "styled-components";

export interface CustomFlexProps extends FlexProps {
  fullWidth?: boolean;
  width?: string | number;
  height?: string | number;
}
const CustomFlex: React.FC<PropsWithChildren<CustomFlexProps>> = ({
  children,
  ...restProps
}) => {
  return <CustomFlexStyle {...restProps}>{children}</CustomFlexStyle>;
};

export default CustomFlex;

const CustomFlexStyle = styled(Flex)<CustomFlexProps>`
  width: ${({ width, fullWidth }) =>
    UTIL_TRANSLATOR.translatePxValue(
      fullWidth ? "100%" : width ? width : undefined
    )};
  height: ${({ height }) => UTIL_TRANSLATOR.translatePxValue(height)};
`;
