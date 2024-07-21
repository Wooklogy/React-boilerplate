import UTIL_TRANSLATOR from "@/utils/translator.util";
import { Input } from "antd";
import { PasswordProps } from "antd/es/input";
import styled from "styled-components";

export interface CustomInputPasswordProps extends PasswordProps {
  fullWidth?: boolean;
  width?: string | number;
  height?: string | number;
}
const CustomInputPassword: React.FC<CustomInputPasswordProps> = ({
  ...restProps
}) => {
  return <CustomInputStyle {...restProps} />;
};
export default CustomInputPassword;

const CustomInputStyle = styled(Input.Password)<CustomInputPasswordProps>`
  width: ${({ width, fullWidth }) =>
    UTIL_TRANSLATOR.translatePxValue(
      fullWidth ? "100%" : width ? width : undefined
    )};
  height: ${({ height }) => UTIL_TRANSLATOR.translatePxValue(height)};
`;
