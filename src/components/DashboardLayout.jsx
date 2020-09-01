import React from "react";
import "../styles/layout.scss";
import { Layout, Menu } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { ReactComponent as Logo } from "../assets/RetailerCode.svg";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

const { Header, Content, Footer, Sider } = Layout;

function DashboardLayout() {
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo">
          <Logo />
          {/* <img src={require("../assets/RetailCode.png")} alt="logo" /> */}
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
          <SubMenu key="sub1" icon={<MailOutlined />} title="Onboarding">
            <Menu.ItemGroup title="Item 1">
              <Menu.Item key="1">Dealer Onboarding</Menu.Item>
              <Menu.Item key="2">Pin Creation</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="Reset">
              <Menu.Item key="3">Pin Reset</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            nav 2
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
          </Menu.Item>
          <Menu.Item key="4" icon={<UserOutlined />}>
            nav 4
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header
          className="site-layout-sub-header-background"
          style={{ padding: 0 }}
        />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            className="site-layout-background"
            // style={{ padding: 24, minHeight: 360 }}
          >
            content
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>©2020 RetailCode</Footer>
      </Layout>
    </Layout>
  );
}

export default DashboardLayout;
