import React from 'react';
import './home.scss'

//redux
import {connect} from 'react-redux';
import {selectUser} from '../../redux/user/user.selector'
import {createStructuredSelector} from 'reselect'

const HomePage = ({user}) => (
    <div>
        <h1>Bem vindo(a)  { user.name }</h1>
    </div>
);


const mapStateToProps = createStructuredSelector({
    user : selectUser
    })

  
export default connect(mapStateToProps)(HomePage)
//export default HomePage