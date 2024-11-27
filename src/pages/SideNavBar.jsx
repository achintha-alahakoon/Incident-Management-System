import React, { useState } from "react";
import { Button, Layout, theme } from "antd";
import Logo from "../components/Logo";
import MenuList from "../components/MenuList";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import ToggleThemeButton from "../components/ToggleThemeButton";


const { Header, Sider } = Layout;

const SideNavBar = () => {

    const [darkTheme, setDarkTheme] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
        <Sider
          theme={darkTheme ? "dark" : "light"}
          collapsible
          trigger={null}
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          className="sidebar"
        >
          <Logo collapsed={collapsed} />
          <MenuList darkTheme={darkTheme} />
          <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme} />
        </Sider>

        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <Button
              type="text"
              className="toggle"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
            />
          </Header>
        </Layout>
      </Layout>
  )
}

export default SideNavBar
