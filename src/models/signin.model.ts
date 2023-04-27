import { User } from "./user.model";

export interface SignIn {
    success:     boolean;
    accessToken: string;
    user:        User;
}