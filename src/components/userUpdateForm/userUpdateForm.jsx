import React, {useState} from 'react';
import './userUpdateForm.scss'

//redux
import {connect} from 'react-redux';
import {updateUser} from '../../redux/user/user.actions'


function UserUpdateForm({user, parentCallback , updateUser}){

  console.log(user.id)
    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [password, setPassword] = useState(user.password)


  const handleClick = () => {

    const getUser = ({
        id : user.id,
        name: name,
        email: email,
        password: password
    })

    console.log(getUser)

    fetch(`https://gps-back-spring-ifeito.herokuapp.com/usuario/atualizarusuario/${user.id}`,
    { 
     method: 'PUT' ,
     headers: {"Content-type": "application/json"},
     body: JSON.stringify({
       name : getUser.name,
       email : getUser.email,
       password : getUser.password
     })
   })
    .then(resp => resp.json() )
    .then(updateUser(getUser))
    .catch(err => { throw  err })
  

  }


return(

    <div className='perfil-update-form'>
        <form>
        <h1>Update User</h1>

        <input 
        className='input' 
        value={name}
        required
        type='text' 
        placeholder='Name'
        onChange={event => setName(event.target.value)} />

        <input 
        className='input' 
        value={email}
        required
        type='email' 
        placeholder='Email'
        onChange={event => setEmail(event.target.value)} />
        
        <input 
        className='input' 
        value={password}
        required
        type='password' 
        placeholder='Password'
        onChange={event => setPassword(event.target.value)} />

        <hr/>
        </form>
        <div className='perfil-update-buttons'>
        <button  className='custom-button edite' type='submit' onClick={() => {handleClick(); parentCallback(false);}} >Submit</button>
        <button  className='custom-button cancel' onClick={() => {parentCallback(false) }} >Cancel</button>
        </div>
    </div>
)
};

const mapDispatchToProps = dispatch => ({
    updateUser : user => dispatch(updateUser(user))  
    })

 export default connect(null, mapDispatchToProps)(UserUpdateForm)
