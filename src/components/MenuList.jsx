import {
  AppstoreOutlined,
  SoundOutlined,
  UserOutlined,
  SettingOutlined
} from '@ant-design/icons';
import {LogoutOutlined} from '@mui/icons-material';
import { Menu } from 'antd';

const MenuList = ({ darkTheme }) => {
  return (
    <Menu className="menu-bar" theme={darkTheme ? "dark" : "light"} mode='inline'>
        <Menu.Item key="dashboard" icon={<AppstoreOutlined />}>
            Dashboard
        </Menu.Item>
        <Menu.SubMenu key="Incidents" icon={<SoundOutlined />} title="Incidents">
            <Menu.Item key="All Incidents">All Incidents</Menu.Item>
            <Menu.Item key="Add Incidents">Add Incidents</Menu.Item>
        </Menu.SubMenu>
        <Menu.Item key="Employees" icon={<UserOutlined />}>
            Employees
        </Menu.Item>
        <Menu.Item key="Settings" icon={<SettingOutlined />}>
            Settings
        </Menu.Item>
        <Menu.Item key="Logout" icon={<LogoutOutlined />}>
            Logout
        </Menu.Item>
    </Menu>
  );
};
export default MenuList;