import { headers, headersJwt } from "./network"
import { BASE_URL } from "../constants/Setting";
import { delay } from "../utils/Helper";
import { SignInProps, SignOutProps } from "./types";

const signIn = async ({ email, password }: SignInProps) => {
    // if (__DEV__) {
    //     await delay(3000);
    //     return {
    //         accesstoken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkxvbmdjaEBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjEyMzEyMyIsImlhdCI6MTYyMjk1NDA3MiwiZXhwIjoxNjIyOTU3MDcyfQ.gziiTlR1mMFblyTmAo0V6JV6bNFD9Ith8l5TP70-2YI",
    //         refreshToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkxvbmdjaEBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjEyMzEyMyIsImlhdCI6MTYyMjk1NDA3Mn0.GggUanedbnBMlhWRda3EJLIhF6pyxci0k30Mx_nN60U"
    //     }
    // }
    let response = await fetch(`${BASE_URL}login`, {
        method: 'POST',
        headers: headers(),
        body: JSON.stringify({ email, password })
    });
    let responseJson = await response.json();
    return responseJson;
}

const signOut = async ({ token }: SignOutProps) => {
    const response = await fetch(`${BASE_URL}logout`, {
        method: 'POST',
        headers: headers(),
        body: JSON.stringify({ token }),
    });
    const responseJson = await response.json();
    return responseJson;
}


export {
    signIn,
    signOut
}