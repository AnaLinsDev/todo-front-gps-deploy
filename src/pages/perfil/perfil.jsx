import React from 'react';
import './perfil.scss'

//redux
import {selectUser} from '../../redux/user/user.selector'
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'


const PerfilPage = ({user}) => (
    <div>
        <h1>My Info</h1>
        <h2>Name: {user.name}</h2>
        <h2>Email: {user.email}</h2>
    </div>
);

const mapStateToProps = createStructuredSelector({
    user : selectUser,
    })
  

 export default connect(mapStateToProps)(PerfilPage)

