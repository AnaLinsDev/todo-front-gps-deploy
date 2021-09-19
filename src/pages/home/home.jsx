import React from 'react';
import './home.scss'

//redux
import {connect} from 'react-redux';
import {selectUser} from '../../redux/user/user.selector'
import {createStructuredSelector} from 'reselect'
import image from '../../images/home-image.png';

const HomePage = ({user}) => (
    <div>
        <h1>Bem vindo(a)  { user.name == "" ? <>Cadastre-se</> : user.name }</h1>
        <div className="conteiner-home">
            <h3 className="text-home">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Congue eu consequat ac felis donec et odio pellentesque. Eu volutpat odio facilisis mauris sit amet massa vitae. At urna condimentum mattis pellentesque id nibh tortor id aliquet. Sed libero enim sed faucibus. Hendrerit dolor magna eget est lorem ipsum. Nec dui nunc mattis enim ut. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Vel quam elementum pulvinar etiam. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel. Duis convallis convallis tellus id interdum velit laoreet id. Cursus turpis massa tincidunt dui ut ornare lectus. Suspendisse interdum consectetur libero id faucibus nisl tincidunt. Neque volutpat ac tincidunt vitae semper quis lectus nulla at. Id diam maecenas ultricies mi eget mauris pharetra et ultrices. In pellentesque massa placerat duis ultricies. Non tellus orci ac auctor augue mauris. Nec dui nunc mattis enim.</h3>
            <img src={image} alt="Girl in a jacket" width="500" height="300"></img>
        </div>
    </div>
);


const mapStateToProps = createStructuredSelector({
    user : selectUser
    })

  
export default connect(mapStateToProps)(HomePage)
//export default HomePage