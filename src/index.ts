import { db } from './db';
import { users } from './db/schema';
import { eq } from 'drizzle-orm';

async function main() {
  console.log('Testing database connection...');
  try {
    const allUsers = await db.select().from(users);
    console.log('Successfully connected! Current users:', allUsers);
  } catch (error) {
    console.error('Connection failed:', error);
  }
}

main();
