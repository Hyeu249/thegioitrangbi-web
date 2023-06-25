import styled from "styled-components";
import { Menu } from "antd";

const TopbarWrapper = styled(Menu)`
  &.ant-menu-horizontal {
    border-bottom: 0px;
  }
`;

export default TopbarWrapper;
