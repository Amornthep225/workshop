import { SignIn } from "@/models/signin.model";
import httpClient  from "@/utils/httpClient";


type SignInProps = {
    username: string 
    password: string
} 

//AUTHENTICATION
export const signIn = async (credential: SignInProps): Promise<SignIn> => {
    const {data: response} = await httpClient.post<SignIn>('/auth', credential)
    return response
}

export const signOut = async () : Promise<void> => {
    await httpClient.post('auth/logout', null)
}