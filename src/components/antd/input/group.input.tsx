import UTIL_TRANSLATOR from "@/utils/translator.util";
import { Input } from "antd";
import { GroupProps } from "antd/es/input";
import styled from "styled-components";

export interface CustomInputGroupProps extends GroupProps {
  fullWidth?: boolean;
  width?: string | number;
  height?: string | number;
}
const CustomInputGroup: React.FC<CustomInputGroupProps> = ({
  ...restProps
}) => {
  return <CustomInputStyle {...restProps} />;
};
export default CustomInputGroup;

const CustomInputStyle = styled(Input.Group)<CustomInputGroupProps>`
  width: ${({ width, fullWidth }) =>
    UTIL_TRANSLATOR.translatePxValue(
      fullWidth ? "100%" : width ? width : undefined
    )};
  height: ${({ height }) => UTIL_TRANSLATOR.translatePxValue(height)};
`;
