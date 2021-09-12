import React, {useState} from 'react';
import './perfil.scss'
import UserUpdateForm from '../../components/userUpdateForm/userUpdateForm'

//redux
import {selectUser} from '../../redux/user/user.selector'
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'
import {deleteUser} from '../../redux/user/user.actions'


function PerfilPage({user, deleteUser}){

    const [isUpdate, setIsUpdate] = useState(false)

    const handleClick = () => {

    fetch(`https://gps-back-spring-ifeito.herokuapp.com/usuario/deletarusuario/${user.id}`,
    { 
     method: 'DELETE' ,
     headers: {"Content-type": "application/json"}
   })
    .catch(err => { throw  err })


    deleteUser(user)

  }


return(

    <div className='perfil-page'>
        {isUpdate ? <UserUpdateForm user={user} {...setIsUpdate} parentCallback={setIsUpdate}/> : 
         <div>
        <h1>My Info</h1>
        <h2>Name: {user.name}</h2>
        <h2>Email: {user.email}</h2>
        <div className='perfil-page-buttons'>
            <button  className='custom-button edite' onClick={() => {setIsUpdate(true)}} >Edite</button>
            <button  className='custom-button remove' onClick={() => {handleClick()}} >Remove</button>
        </div>
        </div>
}
    </div>
)
};

const mapStateToProps = createStructuredSelector({
    user : selectUser,
    })

const mapDispatchToProps = dispatch => ({
    deleteUser : user => dispatch(deleteUser(user))  
    })
        
  

 export default connect(mapStateToProps, mapDispatchToProps)(PerfilPage)

