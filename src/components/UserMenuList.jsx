import React from "react";
import { Menu } from "antd";
import {
  AppstoreOutlined,

} from "@ant-design/icons";

const UserMenuList = ({ userDarkTheme, userActiveMenu, userSetActiveMenu }) => {
  return (
    <Menu
      className="menu-bar"
      theme={userDarkTheme ? "dark" : "light"}
      mode="inline"
      selectedKeys={[userActiveMenu]}
      onClick={({ key }) => userSetActiveMenu(key)}
    >
      <Menu.Item key="Userdashboard" icon={<AppstoreOutlined />}>
        Dashboard
      </Menu.Item>
    </Menu>
  );
};

export default UserMenuList;