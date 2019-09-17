export class User {
    id: number;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    //password : string;


    static createUser(values : any): User{
        var user = new User();
        Object.keys(values).forEach(key => {
            user[key]=values[key];
        });
        return user;
    }
}


