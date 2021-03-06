import React from 'react'

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import{auth, createUserProfileDocument} from '../../firebase/firebase.utils';

import { SignUpContainer, SignUpTitle } from './sign-up.styles';

class SignUp extends React.Component {
    
    constructor(){
        super();

        this.state ={
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
    }


    handleSubmit = async (e) => {
        e.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword){
            alert("passwords dont match");
            return;
        }


        try{
            const {user} = await auth.createUserWithEmailAndPassword(email, password);

            createUserProfileDocument(user, {displayName});

            this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
            })

        }catch(error) {
            console.log(error)
        }

    };



    handleChange = e => {
        const {name, value} = e.target;

        this.setState({[name]: value});
    } 

    
    render(){
        const {displayName, email, password, confirmPassword} = this.state;

        return (
            <SignUpContainer>
                    <SignUpTitle>I do not have a account</SignUpTitle>
                    <span>Sign up with your email and password</span>
    
                    <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput name="displayName" type="text" value={displayName} handleChange={this.handleChange} label="Display Name" required / >

                        <FormInput name="email" type="email" value={email} handleChange={this.handleChange} label="Email" required / >
                            
                        <FormInput name="password" type="password" value={password} handleChange={this.handleChange} label="Password" required / >
                            
                        <FormInput name="confirmPassword" type="password" value={confirmPassword} handleChange={this.handleChange} label="Confirm Password" required / >
                        <div className="buttons">
                        <CustomButton type="submit" >SIGN UP</CustomButton>
                        
                        </div>
                   </form>
                    
                </SignUpContainer>
        )


    }
    
}

export default SignUp
