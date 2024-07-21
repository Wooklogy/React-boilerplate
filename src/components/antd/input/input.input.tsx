import UTIL_TRANSLATOR from "@/utils/translator.util";
import { Input, InputProps } from "antd";
import styled from "styled-components";

export interface CustomInputProps extends InputProps {
  fullWidth?: boolean;
  width?: string | number;
  height?: string | number;
}
const CustomInput: React.FC<CustomInputProps> = ({ ...restProps }) => {
  return <CustomInputStyle {...restProps} />;
};
export default CustomInput;

const CustomInputStyle = styled(Input)<CustomInputProps>`
  width: ${({ width, fullWidth }) =>
    UTIL_TRANSLATOR.translatePxValue(
      fullWidth ? "100%" : width ? width : undefined
    )};
  height: ${({ height }) => UTIL_TRANSLATOR.translatePxValue(height)};
`;
