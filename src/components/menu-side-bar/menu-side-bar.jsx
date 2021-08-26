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

//redux
import {connect} from 'react-redux';
import {selectUser} from '../../redux/user/user.selector'
import { addUser } from '../../redux/user/user.actions';
import {createStructuredSelector} from 'reselect'

function MenuSideBar({user, addUser}) {

  const [menuCollapse, setMenuCollapse] = useState(false);

  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  console.log("USUARIO : " +  user.name)

  function logOut(){
      addUser({
        name: '',
        email: ''
    })
  }

  return(

        <div className='menu'>
        <ProSidebar 
        collapsed = {menuCollapse} >
          <SidebarHeader >
          <div className="logotext" >
          
              <h1>{menuCollapse ? <p>GPS</p> : <p ><BsFillBarChartFill className='big-icon'/>  Planner </p>}</h1>
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
              {user.name == '' && user.email == ''
              ?  <MenuItem icon={<BiArrowToRight   />}  className='menu-item'>Sign In or Sign Up <Link to="/signin-signup" /></MenuItem>
              :  <MenuItem icon={<FiLogOut/>} className='menu-item' onClick={() => logOut()}>Logout</MenuItem>   
              }
              
            </Menu>
          </SidebarFooter>
        </ProSidebar>
        </div>

  )
}

const mapStateToProps = createStructuredSelector({
  user : selectUser
  })


const mapDispatchToProps = dispatch => ({
  addUser: user => dispatch(addUser(user)) 
  })

export default connect(mapStateToProps, mapDispatchToProps)(MenuSideBar)
//export default MenuSideBar