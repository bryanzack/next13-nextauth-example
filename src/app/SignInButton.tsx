'use client';
import {signIn} from "next-auth/react";

const SignInButton = () => {
    return (
        <div>
            <button onClick={() => signIn()}>Sign in</button>
        </div>
    )
}
export default SignInButton;