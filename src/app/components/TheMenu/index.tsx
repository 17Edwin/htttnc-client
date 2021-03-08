import { Helmet } from 'react-helmet-async';
import { NavBar } from '../NavBar';
import { PageWrapper } from '../PageWrapper';
import { Masthead } from '../../pages/HomePage/Masthead';
import { Features } from '../../pages/HomePage/Features';
import * as React from 'react';
import { Menu } from 'antd'
import { NavLink } from 'react-router-dom';

interface MenuI {
  name: string,
  id: number,
  subLink: string
}

const menus: MenuI[] = [
  {
    id: 1,
    name: 'Product',
    subLink: '/admin/product'
  },
  {
    id: 2,
    name: 'Order',
    subLink: '/admin/order'
  },
  {
    id: 3,
    name: 'Shipment',
    subLink: '/admin/shipment'
  },
  {
    id: 4,
    name: 'Customer',
    subLink: '/admin/customer'
  },
]

export function TheMenu() {
  return (
    <>
      <Menu
        mode="inline"
        theme="dark"
      >
        {menus.map(item => {
          return <Menu.Item key={item.id}>
            <NavLink to={item.subLink}>
              <span>{item.name}</span>
            </NavLink>
          </Menu.Item>
        })}
      </Menu>
    </>
  );
}