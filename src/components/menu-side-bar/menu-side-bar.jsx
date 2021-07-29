import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

import { Link } from 'react-router-dom';
import React, { useState } from 'react';

import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiArrowToRight } from "react-icons/bi";
import { BsFillBarChartFill } from "react-icons/bs";

import 'react-pro-sidebar/dist/css/styles.css';
import  './menu-side-bar.scss'

function MenuSideBar() {

  const [menuCollapse, setMenuCollapse] = useState(false);
  const user = useState(null);

  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return(

        <div className='menu'>
        <ProSidebar collapsed={menuCollapse} >
          <SidebarHeader >
          <div className="logotext" >
          
              <p>{menuCollapse ? <h1>GPS</h1> : <h1 ><BsFillBarChartFill className='big-icon'/>  Planner </h1>}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>

              {menuCollapse ? (
                <FiArrowRightCircle className='arrow-icon'/>
              ) : (
                <FiArrowLeftCircle  className='arrow-icon'/>
              )}
            </div>
          </SidebarHeader>
          <SidebarContent >
            <Menu iconShape="square">
              <MenuItem active={true} icon={<FiHome />} className='menu-item'>Home<Link to="/" /></MenuItem>
              <MenuItem icon={<FaList />} className='menu-item'>Dashboards<Link to="/dashboard" /></MenuItem>
              <MenuItem icon={<FaRegHeart />} className='menu-item'>Perfil<Link to="/perfil" /></MenuItem>
              <MenuItem icon={<RiPencilLine />} className='menu-item'>Calendar Planner<Link to="/scheduler" /></MenuItem>
            </Menu>
          </SidebarContent>

          {/* AQUI SÓ VAI FUNCIONAR MESMO QUANDO O USUARIO ESTIVER FUNCIONANDO NO BACK E FRONT */}
          <SidebarFooter >
            <Menu iconShape="square">
              {user[0] == null
              ?  <MenuItem icon={<BiArrowToRight   />}  className='menu-item'>Sign In or Sign Up <Link to="/signin-signup" /></MenuItem>
              :  <MenuItem icon={<FiLogOut/>} className='menu-item'>Logout</MenuItem>   
              }
              
            </Menu>
          </SidebarFooter>
        </ProSidebar>
        </div>

  )
}

export default MenuSideBar;



  {/*
    <ProSidebar >
      <SidebarContent className='sidebar'>
      <Menu className='menu'>
          <MenuItem className='menu-item'>Home<Link to="/" /></MenuItem>
          <MenuItem className='menu-item'>Perfil<Link to="/perfil" /></MenuItem>
          <MenuItem className='menu-item'>Dashboards<Link to="/dashboard" /></MenuItem>
          <MenuItem className='menu-item'>Calendar Planner<Link to="/planner" /></MenuItem>
          <MenuItem className='menu-item'>Sign In or Sign Up <Link to="/signin-signup" /></MenuItem>
      </Menu>
      </SidebarContent>
    </ProSidebar>








       <SubMenu title="Calendar Planner" >
          <MenuItem>Diário <Link to="/planner" /></MenuItem>
          <MenuItem>Semana <Link to="/planner" /></MenuItem>
          <MenuItem>Mensal <Link to="/planner" /></MenuItem>
          <MenuItem>Anual  <Link to="/planner" /></MenuItem>
      </SubMenu> 
*/}