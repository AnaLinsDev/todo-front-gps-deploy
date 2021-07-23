import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

import 'react-pro-sidebar/dist/css/styles.css';
import  './menu-side-bar.scss'

const MenuSideBar = () => (
<ProSidebar >
  <SidebarContent className='sidebar'>
  <Menu className='menu'>
      <MenuItem>Home<Link to="/" /></MenuItem>
      <MenuItem>Perfil<Link to="/perfil" /></MenuItem>
      <MenuItem>Dashboards<Link to="/dashboard" /></MenuItem>
      <SubMenu title="Calendar Planner" >
          <MenuItem>Diário <Link to="/planner" /></MenuItem>
          <MenuItem>Semana <Link to="/planner" /></MenuItem>
          <MenuItem>Mensal <Link to="/planner" /></MenuItem>
          <MenuItem>Anual  <Link to="/planner" /></MenuItem>
      </SubMenu>
      <MenuItem>Sign In or Sign Up <Link to="/signin-signup" /></MenuItem>

  </Menu>
  </SidebarContent>
</ProSidebar>
)

export default MenuSideBar;