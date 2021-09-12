import React from 'react';
import './signin.scss'

//redux
import { connect } from 'react-redux';
import { addUser } from '../../redux/user/user.actions';

class SignIn extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            email:'',
            password:'',

            idLogado: '',
            nameLogado : '' , 
            emailLogado : '',
            passwordLogado   : ''
        }
    }

    handleSubmit = async event => {
        // Quando o usuário apertar em "SIGN IN", virá para cá
        event.preventDefault()

        // o this state está com os valores digitas por conta do handleChange
        const {email, password} = this.state

        fetch(`https://gps-back-spring-ifeito.herokuapp.com/usuario/login`,
        { 
         method: 'POST' ,
         headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-type": "application/json"
        },
         body: JSON.stringify({
            name     :       '',
            email    :       email,
            password :       password
         })
       })
       .then( res =>  res.json())
       .then( obj => (obj.name  == '' || obj.name == undefined) ? alert(" Email ou senha incorretos !! ") : this.setState({ idLogado: obj.id ,nameLogado : obj.name , emailLogado : obj.email, passwordLogado : obj.password}))
       .catch(err => { alert("Error: " + err); })
    }

    handleChange = event => {
        // Toda vez que o input for alterado, o state receberá o valor
        const {value, name} = event.target
        
        this.setState({[name]: value })
    }


    render(){
        this.props.addUser({id: this.state.idLogado, name: this.state.nameLogado, email : this.state.emailLogado, password : this.state.passwordLogado})

        return(
        <div className='sign-in'>
                <h2 className='title'>I already have a account</h2>
                <span> Sign in with you email and password</span>

                <form className='form' onSubmit={this.handleSubmit}>
                    <div className='celula'>
                        <label className='label'>Email: </label>
                        <input 
                        className='input'
                        name='email' 
                        type='email' 
                        onChange={this.handleChange} 
                        required/>
                    </div>
                    <div className='celula'>
                        <label className='label'>Password: </label>  
                        <input
                        className='input'
                        name='password' 
                        type='password' 
                        onChange={this.handleChange}
                        required/>
                    </div>

                    <div className='buttons'>
                        <button className='custom-button' type='submit'>SIGN IN </button>
                    </div> 
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    addUser: user => dispatch(addUser(user)) 
    })
    
export default connect(null, mapDispatchToProps)(SignIn)

