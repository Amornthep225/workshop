import { SignIn } from "@/models/signin.model";
import httpClient  from "@/utils/httpClient";
import { Product } from "@/models/product.model";
import { Customer } from "@/models/customer.model";

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
export const fecthProducts = async () : Promise<Product> => {
    const {data: response} = await httpClient.get<Product>('/products')
    return response
}
export const fetchCustomer = async () : Promise<Customer> => {
    const {data: response} = await httpClient.get<Customer>('/customers')
    return response
}