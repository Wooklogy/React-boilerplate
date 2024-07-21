import { Anchor, AnchorLinkProps } from "antd";
import styled from "styled-components";

export interface CustomAnchorLinkProps extends AnchorLinkProps {}

const CustomAnchor: React.FC<CustomAnchorLinkProps> = ({ ...restProps }) => {
  return <CustomAnchorLinkStyle {...restProps} />;
};

export default CustomAnchor;

const CustomAnchorLinkStyle = styled(Anchor.Link)<CustomAnchorLinkProps>``;
