import mysql from 'mysql2';

class SQLSingleton {
  private static instance: SQLSingleton;
  private connection: mysql.Connection;

  private constructor() {
    this.connection = mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '' ,
      database: process.env.DB_NAME || 'db'
    });
  }

  public static getInstance(): SQLSingleton {
    if (!SQLSingleton.instance) {
      SQLSingleton.instance = new SQLSingleton();
    }
    return SQLSingleton.instance;
  }

  public getConnection(): mysql.Connection {
    return this.connection;
  }
}

export default SQLSingleton.getInstance().getConnection();
