const { MongoClient, ObjectId } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database name
const dbName = 'task-manager'

const db = client.db(dbName);

