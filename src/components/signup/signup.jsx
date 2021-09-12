import React from 'react';
import './signup.scss'

//redux
import { connect } from 'react-redux';
import { addUser } from '../../redux/user/user.actions';


class SignUp extends React.Component {
    constructor(props){
        super(props)
        
        this.state = {
            displayName     : '',
            email           : '',
            password        : '',
            confirmPassword : '',

            idLogado: '',
            nameLogado      : '',
            emailLogado     : '',
            passwordLogado   : ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
 
        const user = {
            displayName : this.state.displayName,
            email : this.state.email,
            password : this.state.password,
            confirmPassword : this.state.confirmPassword
        }

        this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
          });

        if (user.password != user.confirmPassword) {
            console.log( user.password + " --- " + user.confirmPassword)
            alert("passwords don't match");
            return;
          }else{

        fetch(`https://gps-back-spring-ifeito.herokuapp.com/usuario/criarusuario`,
        { 
         method: 'POST' ,
         headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-type": "application/json"
        },
         body: JSON.stringify({
            name :        user.displayName,
            email :       user.email,
            password :    user.password
         })

       })
        .then( res => res.json())
        .then( obj => this.setState({ idLogado: obj.id , nameLogado : obj.name , emailLogado : obj.email, passwordLogado : obj.password}))
        .catch(err => { alert("Error: " + err); })

    }
      };

    handleChange = event => {
       // Toda vez que o input for alterado, o state receberá o valor
        const { name, value } = event.target
        this.setState({[name]: value})
    }


    render(){
        this.props.addUser({id: this.state.idLogado, name: this.state.nameLogado, email : this.state.emailLogado,  password : this.state.passwordLogado})

        return(
            <div className='sign-up'>
                <h2 className='title'>I do not have a account</h2>
                <span>Sign up with your email and password</span>
                
                <form className='form' onSubmit={this.handleSubmit}>
                <div className='celula'>
                        <label className='label'>Name: </label>
                        <input 
                        className='input'
                        name='displayName' 
                        type='text' 
                        onChange={this.handleChange} 
                        required/>
                    </div>
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
                    <div className='celula'>
                        <label className='label'>Confirm Password: </label>
                        <input 
                        className='input'
                        name='confirmPassword' 
                        type='password' 
                        onChange={this.handleChange} 
                        required/>
                    </div>
                    <div className='buttons'>
                        <button className='custom-button' type='submit'
                                  onClick={this.handleClick}
                                  >SIGN UP </button>
                    </div> 
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    addUser: user => dispatch(addUser(user)) 
    })
    
export default connect(null, mapDispatchToProps)(SignUp)
