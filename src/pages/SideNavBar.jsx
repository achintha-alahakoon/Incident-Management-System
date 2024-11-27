import React, { useState, useEffect } from "react";
import { Button, Layout, theme } from "antd";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import MenuList from "../components/MenuList";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import ToggleThemeButton from "../components/ToggleThemeButton";
import Dashboard from "./Dashboard";
import AllIncidents from "./AllIncidents";
import AddIncidents from "./AddIncidents";
import Employees from "./Employees";
import Settings from "./Settings";

const { Header, Sider, Content } = Layout;

const SideNavBar = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const navigate = useNavigate(); // React Router hook for navigation

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const headerStyle = {
    padding: 0,
    background: darkTheme ? "#001529" : colorBgContainer, // Dark background for dark theme
    color: darkTheme ? "#fff" : "#000", // White text for dark theme
  };

  const collapseButtonStyle = {
    color: darkTheme ? "#fff" : "#000", // White icon for dark theme
  };

  // Handle logout by navigating to the sign-in page
  useEffect(() => {
    if (activeMenu === "logout") {
      navigate("/"); // Navigate to the sign-in page
    }
  }, [activeMenu, navigate]);

  const renderContent = () => {
    switch (activeMenu) {
      case "dashboard":
        return <Dashboard />;
      case "employees":
        return <Employees />;
      case "settings":
        return <Settings />;
      case "allIncidents":
        return <AllIncidents />;
      case "addIncidents":
        return <AddIncidents />;
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
        </Header>

        <Content style={{ padding: "24px", background: "#f0f2f5" }}>
          {renderContent()}
        </Content>
      </Layout>
    </Layout>
  );
};

export default SideNavBar;
