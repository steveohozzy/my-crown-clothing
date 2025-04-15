import { useState } from "react";

import FormInput from "../formInputs/FormInput";
import Button from "../button/Button";

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

import "./signUpForm.scss"

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const {displayName, email, password, confirmPassword} = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        try {
            const {user} = await createAuthUserWithEmailAndPassword(
                email,
                password
            );

            await createUserDocumentFromAuth(user, {displayName})
            resetFormFields();
            
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('email already in use')
            } else {
                console.log('user creation encountered an error', error)
                
            }
        }
    }
    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value})
    }

    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    name="displayName"
                    label="Display Name"
                    type="text"
                    required
                    onChange={handleChange}
                    value={displayName}
                />

                <FormInput
                    name="email"
                    label="Email"
                    type="email"
                    required
                    onChange={handleChange}
                    value={email}
                />

                <FormInput
                    name="password"
                    label="Password"
                    type="password"
                    required
                    onChange={handleChange}
                    value={password}
                />

                <FormInput
                    name="confirmPassword"
                    label="Confirm Password"
                    type="passwordl"
                    required
                    onChange={handleChange}
                    value={confirmPassword}
                />

                <Button
                    type="submit"
                >
                    Sign Up
                </Button>
            </form>
        </div>
    )
}

export default SignUpForm
