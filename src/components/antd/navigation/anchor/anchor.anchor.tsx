import { Anchor, AnchorProps } from "antd";
import styled from "styled-components";

export interface CustomAnchorProps extends AnchorProps {}

const CustomAnchor: React.FC<CustomAnchorProps> = ({ ...restProps }) => {
  return <CustomAnchorStyle {...restProps} />;
};

export default CustomAnchor;

const CustomAnchorStyle = styled(Anchor)<CustomAnchorProps>``;
