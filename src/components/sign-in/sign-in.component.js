import React from 'react'

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {auth, signInWithGoogle} from '../../firebase/firebase.utils'

import {
    SignInContainer,
    SignInTitle,
    ButtonsBarContainer
  } from './sign-in.styles';


class SignIn extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }

    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const {email, password} = this.state;

        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''})

        }catch(error){
            console.log('error signin in', error);
        }

        
    }

    handleChange = (e) => {
        const {value, name} = e.target;

        this.setState({[name]: value})
    }

    render() {
        return (
            <SignInContainer>
                <SignInTitle>I already have an account</SignInTitle>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" value={this.state.email} handleChange={this.handleChange} label="Email" required / >
                        
                    <FormInput name="password" type="password" value={this.state.password} handleChange={this.handleChange} label="Password" required / >
                        
                    <ButtonsBarContainer>
                    <CustomButton type="submit" >Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} type="button" isGoogleSignIn >Sign with Google</CustomButton>
                    </ButtonsBarContainer>
               </form>
                
            </SignInContainer>
        )
    }
}

export default SignIn