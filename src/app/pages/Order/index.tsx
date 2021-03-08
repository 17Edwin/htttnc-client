import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavBar } from 'app/components/NavBar';
import { PageWrapper } from 'app/components/PageWrapper';
import { Layout, Breadcrumb } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

export function OrderPage() {
  return (
    <>
      <Helmet>
        <title>Product Page</title>
        <meta
          name="description"
          content="Order Page"
        />
      </Helmet>
      <Content style={{ margin: "0 16px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>User</Breadcrumb.Item>
          <Breadcrumb.Item>Bill</Breadcrumb.Item>
        </Breadcrumb>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 360 }}
        >
          Bill is a cat.
        </div>
      </Content>
    </>
  );
}
