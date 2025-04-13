import { signInWIthGooglePopUp, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWIthGooglePopUp();
        const userDocRef = await createUserDocumentFromAuth(user);
    }
  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick={logGoogleUser}>
        Sing in with Google popup
      </button>
    </div>
  )
}

export default SignIn
