class AppConfig {
    readonly port : number = 4000
    readonly routePrefix = "/api";
    
    readonly dbConfig = {
        host: 'localhost',
        port: 3306,
        database: 'cloud',
        user: 'root',
        password: ''
    }
}

export const appConfig = new AppConfig()