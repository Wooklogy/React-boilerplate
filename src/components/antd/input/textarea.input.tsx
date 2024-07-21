import UTIL_TRANSLATOR from "@/utils/translator.util";
import { Input } from "antd";
import { TextAreaProps } from "antd/es/input";
import styled from "styled-components";

export interface CustomInputTextareaProps extends TextAreaProps {
  fullWidth?: boolean;
  width?: string | number;
  height?: string | number;
}
const CustomInputTextarea: React.FC<CustomInputTextareaProps> = ({
  ...restProps
}) => {
  return <CustomInputStyle {...restProps} />;
};
export default CustomInputTextarea;

const CustomInputStyle = styled(Input.TextArea)<CustomInputTextareaProps>`
  width: ${({ width, fullWidth }) =>
    UTIL_TRANSLATOR.translatePxValue(
      fullWidth ? "100%" : width ? width : undefined
    )};
  height: ${({ height }) => UTIL_TRANSLATOR.translatePxValue(height)};
`;
