import { Breadcrumb, BreadcrumbProps } from "antd";
import styled from "styled-components";

export interface CustomBreadcrumbProps extends BreadcrumbProps {}

const CustomBreadcrumb: React.FC<CustomBreadcrumbProps> = ({
  ...restProps
}) => {
  return <CustomBreadcrumbStyle {...restProps} />;
};

export default CustomBreadcrumb;

const CustomBreadcrumbStyle = styled(Breadcrumb)<CustomBreadcrumbProps>``;
