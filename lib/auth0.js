import { initAuth0 } from '@auth0/nextjs-auth0'

export default initAuth0({
    clientId: "i46Jt1UWsMwZr8X5yrXUEHtMot7TxZu5",
    clientSecret: "Mc2DYlqQHdZJ3x_1eHpC65gvh5nb4IUkl9_jg7YJym2_cKgjYtvSzLjCxSFKrJDS",
    scope: "openid profile",
    domain: "stefanopaulo.auth0.com",
    redirectUri: "http://localhost:3000/api/callback",
    postLogoutRedirectUri: "http://localhost:3000",
    session: {
        cookieSecret: "abcdabcdabcdabcdabcdabcdabcdabcd",
        cookieLifetime: 3600
    }
})