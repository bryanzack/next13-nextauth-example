import {signIn, signOut} from "next-auth/react";
import {getSession} from "@/app/session";
import SignInButton from "@/app/SignInButton";
import SignOutButton from "@/app/SignOutButton";

const Home = async () => {
    const user = await getSession();
    if (user) {
        return (
            <div>
                Logged in
                <SignOutButton />
                <h1>{user.user?.name}</h1>
            </div>
        )
    }
    return (
        <div>
            Sign in
            <SignInButton />
        </div>
    )
}
export default Home;