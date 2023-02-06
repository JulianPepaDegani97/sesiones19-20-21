import { USERROLES } from './roles.enum';
export class User {
    username = '';
    email = '';
    password = '';
    rol = USERROLES.USER;

    constructor(username, email, password, rol) {
        this.email = email;
        this.username = username;
        this.password = password;
        this.rol = rol;
    }
}