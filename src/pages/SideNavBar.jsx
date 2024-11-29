import React, { useState } from "react";
import { Button, Layout, theme } from "antd";
import Logo from "../components/Logo";
import MenuList from "../components/MenuList";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import ToggleThemeButton from "../components/ToggleThemeButton";
import Dashboard from "./Dashboard";
import AllIncidents from "./AllIncidents";
import AddIncidents from "./AddIncidents";
import Employees from "./Employees";
import TopHeader from "../components/TopHeader";
import AvatarComponent from "../components/AvatarComponent";

const { Header, Sider, Content } = Layout;

const SideNavBar = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [activeMenu, setActiveMenu] = useState("dashboard");

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const headerStyle = {
    display: "flex",
    alignItems: "center",
    padding: "0 16px",
    background: darkTheme ? "#001529" : colorBgContainer,
    color: darkTheme ? "#fff" : "#000",
  };

  const collapseButtonStyle = {
    color: darkTheme ? "#fff" : "#000",
  };

  const menuTitles = {
    dashboard: "Dashboard",
    employees: "Employees",
    allIncidents: "All Incidents",
    addIncidents: "Add Incidents",
  };

  const renderContent = () => {
    switch (activeMenu) {
      case "dashboard":
        return <Dashboard />;
      case "allIncidents":
        return <AllIncidents />;
      case "addIncidents":
        return <AddIncidents />;
        case "employees":
        return <Employees />;
      default:
        return <Dashboard />;
    }
  };

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
        <MenuList
          darkTheme={darkTheme}
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
        />
        <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme} />
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
            <TopHeader title={menuTitles[activeMenu] || "Header"}/>
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

export default SideNavBar;
