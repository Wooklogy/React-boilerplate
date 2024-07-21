import UTIL_TRANSLATOR from "@/utils/translator.util";
import { Input } from "antd";
import { SearchProps } from "antd/es/input";
import styled from "styled-components";

export interface CustomInputSearchProps extends SearchProps {
  fullWidth?: boolean;
  width?: string | number;
  height?: string | number;
}
const CustomInputSearch: React.FC<CustomInputSearchProps> = ({
  ...restProps
}) => {
  return <CustomInputStyle {...restProps} />;
};
export default CustomInputSearch;

const CustomInputStyle = styled(Input.Search)<CustomInputSearchProps>`
  width: ${({ width, fullWidth }) =>
    UTIL_TRANSLATOR.translatePxValue(
      fullWidth ? "100%" : width ? width : undefined
    )};
  height: ${({ height }) => UTIL_TRANSLATOR.translatePxValue(height)};
`;
