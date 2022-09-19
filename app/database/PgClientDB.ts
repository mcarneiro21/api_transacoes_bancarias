import { Sequelize } from "sequelize";

class PgClientDB implements IClientDB {
    host: string;
    port: string;
    user: string;
    password: string;
    constructor(host: string, port: string, user: string, password: string) {
       this.host = host;
       this.port = port;
       this.user = user;
       this.password = password;
    }

    connect(){
        try {
            return true;  
        } catch (error) {
            return false;   
        }
    }

    end(){
        try {
            return true;  
        } catch (error) {
            return false;   
        }
    } 
}