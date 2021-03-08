/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from '../styles/global-styles';

import { HomePage } from './pages/HomePage/Loadable';
import { ProductPage } from './pages/Product/Loadable';
// import { NotFoundPage } from './pages/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import './index.css';
import { Layout, Breadcrumb, Menu, Avatar, Row, Col } from 'antd';
import { TheMenu } from './components/TheMenu';

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;

export function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>

      <Layout style={{ height: '100vh' }}>
        <Helmet
          titleTemplate='%s - HTTT Nang cao'
          defaultTitle='HTTT Nang cao'
          htmlAttributes={{ lang: i18n.language }}
        >
          <meta name='description' content='A application' />
        </Helmet>
        <Sider>
          <div className='logo' />
          <TheMenu />
        </Sider>
        <Layout className='site-layout'>
          <Header className='site-layout-background' style={{ padding: 0 }}>
            <Menu key='user' mode='horizontal'>
              <SubMenu
                title={
                  <>
                      <span style={{ color: '#999', marginRight: 4 }}>
                        Hi,
                      </span>
                    <span>admin</span>
                    <Avatar style={{ marginLeft: 8 }} />
                  </>
                }
              >
                <Menu.Item key='SignOut'>
                  Sign out
                </Menu.Item>
              </SubMenu>
            </Menu>

          </Header>
          <Switch>
            <Route exact path={process.env.PUBLIC_URL + '/admin/product'} component={ProductPage} />
            <Route exact path={process.env.PUBLIC_URL + '/admin/customer'} component={ProductPage} />
            <Route exact path={process.env.PUBLIC_URL + '/admin/order'} component={ProductPage} />
            <Route exact path={process.env.PUBLIC_URL + '/admin/shipment'} component={ProductPage} />
            <Route exact path={process.env.PUBLIC_URL + '/homepage'} component={HomePage} />
          </Switch>
          <Footer style={{ textAlign: 'center' }}>
            ©2021 Created by svch
          </Footer>
        </Layout>
      </Layout>

    </BrowserRouter>
  );
}
