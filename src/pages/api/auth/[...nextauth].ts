import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export const authOptions = {
    // Configure one or more authentication providers
    secret: 'asdfkadsjfadsjkfasdkfsdfjasfds',
    providers: [
        GithubProvider({
            clientId: 'github client id here',
            clientSecret: 'github secret id here',
        }),
    ],
}

export default NextAuth(authOptions)