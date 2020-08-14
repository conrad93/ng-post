export class Users {
    public userId: number;
    public userName: string;
    public userEmail: string;
    public userPassword: string;
    constructor(userId: number, userName: string, userEmail: string, userPassword: string) {
        this.userId = userId;
        this.userName = userName;
        this.userEmail = userEmail;
        this.userPassword = userPassword;
    }
}