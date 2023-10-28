import mysql from "mysql2/promise";
import { dbConfig } from "./config";

// Create a connection pool
const pool = mysql.createPool({
  ...dbConfig,
  connectionLimit: 10, // Adjust the limit based on your requirements
});

// Query Builder Class
class QueryBuilder {
  constructor(private connection: mysql.PoolConnection) {}

  // Execute a raw SQL query
  async executeQuery(sql: string, params?: any[]): Promise<any[]> {
    try {
      const [rows] = await this.connection.query(sql, params);
      return rows as any[];
    } catch (error) {
      // Handle the error
      return [];
    } finally {
      // Always release the connection back to the pool
      this.connection.release();
    }
  }

  // Close the connection
  async close() {
    await this.connection.release();
  }
}

// Create and export a function to get a database connection
export async function getDbConnection(
  database?: string
): Promise<QueryBuilder> {
  const connection = await pool.getConnection();
  if (database) {
    await connection.query(`USE ${database}`);
  } else {
    await connection.query(`USE ${dbConfig.database}`);
  }
  return new QueryBuilder(connection);
}
