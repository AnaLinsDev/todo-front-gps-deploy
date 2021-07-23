import React from 'react';
import './signin.scss'

class SignIn extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            email:'',
            password:''
        }
    }

    handleSubmit = async event => {
        // Quando o usuário apertar em "SIGN IN", virá para cá
        event.preventDefault()

        // o this state está com os valores digitas por conta do handleChange
        const {email, password} = this.state

        };

    handleChange = event => {
        // Toda vez que o input for alterado, o state receberá o valor
        const {value, name} = event.target
        
        this.setState({[name]: value })
    }


    render(){
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

export default SignIn;