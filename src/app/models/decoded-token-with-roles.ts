import { JwtPayload } from "jwt-decode";

export interface DecodedTokenWithRoles extends JwtPayload {
    roles?: string
}