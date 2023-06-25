import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import IntlMessages from "@iso/components/utility/intlMessages";
import Menu from "./Topbar.styles";

const { SubMenu } = Menu;

export const stripTrailingSlash = (str) => {
  if (str.substr(-1) === "/") {
    return str.substr(0, str.length - 1);
  }
  return str;
};

function Topbar({ options, ...props }) {
  return (
    <Menu mode="horizontal" {...props}>
      {options.map((singleOption) => (
        <TopbarMenu key={singleOption.key} singleOption={singleOption} />
      ))}
    </Menu>
  );
}

function TopbarMenu({ singleOption, ...rest }) {
  const { key, label, leftIcon, children } = singleOption;
  let match = useRouteMatch();
  const url = stripTrailingSlash(match.url);

  if (children) {
    return (
      <SubMenu
        key={key}
        title={<IntlMessages id={label} icon={leftIcon} />}
        {...rest}
      >
        {children.map((child) => {
          const linkTo = `${url}/${child.key}`;
          return (
            <Menu.Item key={child.key}>
              <Link to={linkTo}>
                <IntlMessages id={child.label} />
              </Link>
            </Menu.Item>
          );
        })}
      </SubMenu>
    );
  }

  return (
    <Menu.Item key={key} icon={leftIcon} {...rest}>
      <Link to={`${url}/${key}`}>
        <IntlMessages id={label} />
      </Link>
    </Menu.Item>
  );
}

export default Topbar;
