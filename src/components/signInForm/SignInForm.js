import { useState } from "react";
import { useDispatch } from "react-redux";

import FormInput from "../formInputs/FormInput";
import Button, {BUTTON_TYPE_CLASSES} from "../button/Button";

import { ButtonsContainer, SignInContainer } from "./signInFormStylres";
import { googleSignInStart, emailSignInStart } from "../../store/user/userAction";

const defaultFormFields = {
    email: '',
    password: ''
}

const SignInForm = () => {
    const dispatch = useDispatch();
    const [formFields, setFormFields] = useState(defaultFormFields)
    const {email, password} = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const signInWithGoogle = async () => {
        dispatch(googleSignInStart())
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            dispatch(emailSignInStart(email, password));
            resetFormFields();
            
        } catch (error) {
            switch(error.code) {
                case 'auth/wrong-password':
                    alert('incorrect password');
                    break;
                case 'auth/user-not-found':
                    alert('user not found');
                    break;
                case 'auth/invalid-credential':
                    alert('invalid credentials');
                    break;
                default: 
                    console.log(error)
            }
            console.log(error)
        }
    }
    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value})
    }

    return (
        <SignInContainer>
            <h2>Already have an account?</h2>
            <span>Sign in with email and password</span>
            <form onSubmit={handleSubmit}>

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

                <ButtonsContainer>
                    <Button
                        type="submit"
                    >
                        Sign In
                    </Button>
                    <Button
                        type="button"
                        buttonType={BUTTON_TYPE_CLASSES.google}
                        onClick={signInWithGoogle}
                    >
                        Google sign In
                    </Button>
                </ButtonsContainer>
            </form>
        </SignInContainer>
    )
}

export default SignInForm
