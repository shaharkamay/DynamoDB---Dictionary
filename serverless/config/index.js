require('dotenv').config();

const config = {
  aws: {
    region: 'eu-central-1',
    endpoint: 'http://dynamodb.eu-central-1.amazonaws.com',
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
  port: process.env.PORT || 8080,
};

module.exports = config;
