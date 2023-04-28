import { UserData } from "./user.model";

export interface SignIn {
    success:     boolean;
    accessToken: string;
    user:        UserData;
}
