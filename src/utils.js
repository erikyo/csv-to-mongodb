import fs from 'fs';
import csv from 'fast-csv';
import { DataModel } from './db.js';

export function handleError(error) {
  console.error(error);
  throw error;
}

// Function to parse CSV and store data in MongoDB
export async function parseAndStoreCSV(filePath) {
  const data = [];

  // Assuming DataModel is a Mongoose model and a connection to MongoDB is already established.
  return new Promise((resolve, reject) => {
    fs.createReadStream(filePath)
      .pipe(csv.parse({ headers: true, delimiter: ',' }))
      .on('data', (row) => {
        console.log('Row:', row);
        data.push(row);
      })
      .on('end', async () => {
        try {
          // Use insertMany to insert all rows into the MongoDB collection in a single operation
          await DataModel.insertMany(data);
          console.log('All data has been successfully stored.');
          resolve();
        } catch (error) {
          console.error('Error saving data to the database:', error);
          reject(error);
        }
      })
      .on('error', (error) => {
        console.error('Error parsing CSV:', error);
        reject(error);
      });
  });
}
