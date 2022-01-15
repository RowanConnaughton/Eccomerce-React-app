import React from 'react'
import './sign-up.styles.scss'

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import{auth, createUserProfileDocument} from '../../firebase/firebase.utils';


class SignUp extends React.Component {
    
    constructor(){
        super();

        this.state ={
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
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
            <div className="sign-up">
                    <h2 className="title">I do not have a account</h2>
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
                    
                </div>
        )


    }
    
}

export default SignUp
