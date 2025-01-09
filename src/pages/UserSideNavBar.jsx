import React, { useState } from "react";
import { Button, Layout, theme } from "antd";
import Logo from "../components/Logo";
import UserMenuList from "../components/UserMenuList";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import ToggleThemeButton from "../components/ToggleThemeButton";
import UserDashboard from "./UserDashboard"
import TopHeader from "../components/TopHeader";
import AvatarComponent from "../components/AvatarComponent";



const { Header, Sider, Content } = Layout;

const UserSideNavBar = () => {
  const [userDarkTheme, setDarkTheme] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [userActiveMenu, setActiveMenu] = useState("dashboard");

  const toggleTheme = () => {
    setDarkTheme(!userDarkTheme);
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const headerStyle = {
    display: "flex",
    alignItems: "center",
    padding: "0 16px",
    background: userDarkTheme ? "#001529" : colorBgContainer,
    color: userDarkTheme? "#fff" : "#000",
  };

  const collapseButtonStyle = {
    color: userDarkTheme ? "#fff" : "#000",
  };

  const menuTitles = {
    dashboard: "Dashboard",

  };

  const renderContent = () => {
    switch (userActiveMenu) {
      case "dashboard":
        return <UserDashboard/>;
      default:
        return <UserDashboard />;
    }
  };

  
  return (
    <Layout>
      <Sider
        theme={userDarkTheme ? "dark" : "light"}
        collapsible
        trigger={null}
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        className="sidebar"
      >
        <Logo collapsed={collapsed} />
        <UserMenuList
          userDarkTheme={userDarkTheme}
          userActiveMenu={userActiveMenu}
          userSetActiveMenu={setActiveMenu}
        />
        <ToggleThemeButton userDarkTheme={userDarkTheme} toggleTheme={toggleTheme} />
      </Sider>

      <Layout>
        <Header style={headerStyle}>
          <Button
            style={collapseButtonStyle}
            type="text"
            className="toggle"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
          />
    
          <div style={{ marginLeft: "20px" }}>
            <TopHeader title={menuTitles[userActiveMenu] || "Dashboard"}/>
          </div>

          <div style={{ marginLeft: "auto" }}>
            <AvatarComponent />
          </div>
        </Header>

        <Content style={{ padding: "24px", background: "#f0f2f5" }}>
          {renderContent()}
        </Content>
      </Layout>
    </Layout>
  );
};

export default UserSideNavBar;


