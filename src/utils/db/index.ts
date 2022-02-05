import AWS from 'aws-sdk';

import config from '../config';
// Set the region
AWS.config.update(config.aws);
// Create DynamoDB document client
const dynamoDb = new AWS.DynamoDB.DocumentClient();

export default dynamoDb;
