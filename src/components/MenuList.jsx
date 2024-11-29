import React from "react";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  SoundOutlined,
  UserOutlined,
} from "@ant-design/icons";

const MenuList = ({ darkTheme, activeMenu, setActiveMenu }) => {
  return (
    <Menu
      className="menu-bar"
      theme={darkTheme ? "dark" : "light"}
      mode="inline"
      selectedKeys={[activeMenu]}
      onClick={({ key }) => setActiveMenu(key)}
    >
      <Menu.Item key="dashboard" icon={<AppstoreOutlined />}>
        Dashboard
      </Menu.Item>
      <Menu.SubMenu key="incidents" icon={<SoundOutlined />} title="Incidents">
        <Menu.Item key="allIncidents">All Incidents</Menu.Item>
        <Menu.Item key="addIncidents">Add Incidents</Menu.Item>
      </Menu.SubMenu>
      <Menu.Item key="employees" icon={<UserOutlined />}>
        Employees
      </Menu.Item>
    </Menu>
  );
};

export default MenuList;
