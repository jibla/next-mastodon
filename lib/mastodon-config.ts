import { NextAuthOptions } from "next-auth";

export default async function getMastodonConfig(serverBaseUrl: string, callbackBaseUrl: string): Promise<NextAuthOptions> {

    const serverCredentials = await fetch(serverBaseUrl + "/api/v1/apps", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "client_name": "authjsplaying",
            "redirect_uris": callbackBaseUrl + "/api/auth/callback/mastodon"
        })
    });
    const data = await serverCredentials.json();
  
    const config: NextAuthOptions = {
        providers: [{
            id: "mastodon",
            name: "Mastodon",
            type: "oauth",
            authorization: {
                url: serverBaseUrl + "/oauth/authorize",
                params: {
                    'response_type': 'code',
                    'redirect_uri': callbackBaseUrl + "/api/auth/callback/mastodon",
                    'scope': 'read'
                }
            },
            token: serverBaseUrl + "/oauth/token",
            clientId: data.client_id,
            clientSecret: data.client_secret,
            userinfo: serverBaseUrl + "/api/v1/accounts/verify_credentials",
            profile: (data: any) => {
                return {
                    id: data.id,
                    name: data.username,
                }
            }
        }],
        callbacks: {
            async jwt({ token, user, account, profile, isNewUser }) {
                token.access_token = account?.access_token
                token.profile = profile
                return token
            }
        },
        pages: {
            signIn: '/auth/signin',
        },
        secret: process.env.NEXTAUTH_SECRET,
    };
  
    return config;
  }