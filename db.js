const AWS = require('aws-sdk');

const config = require('../config');
// Set the region
AWS.config.update(config.aws);
// Create DynamoDB document client
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports = dynamoDb;
