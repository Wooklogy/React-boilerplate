import UTIL_TRANSLATOR from "@/utils/translator.util";
import { Input } from "antd";
import { OTPProps } from "antd/es/input/OTP";
import styled from "styled-components";

export interface CustomInputOtpProps extends OTPProps {
  fullWidth?: boolean;
  width?: string | number;
  height?: string | number;
}
const CustomInputOTP: React.FC<CustomInputOtpProps> = ({ ...restProps }) => {
  return <CustomInputStyle {...restProps} />;
};
export default CustomInputOTP;

const CustomInputStyle = styled(Input.OTP)<CustomInputOtpProps>`
  width: ${({ width, fullWidth }) =>
    UTIL_TRANSLATOR.translatePxValue(
      fullWidth ? "100%" : width ? width : undefined
    )};
  height: ${({ height }) => UTIL_TRANSLATOR.translatePxValue(height)};
`;
