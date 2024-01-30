import Fastify from 'fastify'
import mongoose from "mongoose";
import {handleError, parseAndStoreCSV} from './utils.js';
import {DataModel} from "./db.js";
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUI from '@fastify/swagger-ui';
import {config, Options} from "./config.js";

const files = {
  "airtravel" : "data/airtravel.csv"
}

const fastify = Fastify({
  logger: true
})

fastify.register(fastifySwagger, Options);
fastify.register(fastifySwaggerUI, {
  routePrefix: '/docs',
  uiConfig: {
    docExpansion: 'full',
    deepLinking: false
  }
});

// Connect to MongoDB
try {
  await mongoose.connect(process.env.MONGO_URL);
} catch (error) {
  handleError(error);
}

DataModel.collection.drop()

// Parse CSV and store in MongoDB when the server starts
for (const [key, value] of Object.entries(files)) {
  await parseAndStoreCSV(value, key);
}

DataModel.createIndexes().then(() => {
  console.log('Indexes created successfully');
})

fastify.get('/', (request, reply) => {
  reply.send({ hello: 'OK!' })
})

// Set a GET route to fetch data from MongoDB
fastify.get('/api', async function (request, reply) {
  try {
    const csvData = await DataModel.find({}, { _id: 0 , __v: 0}, { lean: true });
    reply.send({ data: csvData });
  } catch (error) {
    console.error(error);
    reply.status(500).send({ error: 'Internal Server Error' });
  }
});

// handle not found route
fastify.setNotFoundHandler(function (request, reply) {
  reply.status(404).send({ error: 'Route not found' });
});

// Start the server
fastify.listen({ host: config.api.host, port: config.api.port }, (err) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
})
