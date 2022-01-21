// Load the AWS SDK for Node.js
const AWS = require('aws-sdk');

const { config } = require('../../config/index.js');
const awsConfig = {
  region: 'eu-central-1',
  endpoint: 'http://dynamodb.eu-central-1.amazonaws.com',
  accessKeyId: config.aws.accessKeyId,
  secretAccessKey: config.aws.secretAccessKey,
};

// Set the region
AWS.config.update(awsConfig);
// Create DynamoDB document client
const dynamodb = new AWS.DynamoDB.DocumentClient();
//Load json
const dictionary = require('./dictionary.json');
function createSingleParams(item) {
  return {
    PutRequest: {
      Item: {
        word: item.word,
        pos: item.pos,
        definitions: item.definitions,
      },
    },
  };
}
function createBatchParams(items) {
  return {
    RequestItems: {
      dictionary: items.map((item) => createSingleParams(item)),
    },
  };
}
async function writeBatch(batch) {
  try {
    const params = createBatchParams(batch);
    console.log(await dynamodb.batchWrite(params).promise());
  } catch (error) {
    // console.log(error);
    console.log('dupe err');
  }
}
async function run() {
  const Batch_Size = 25;
  let batch = [];
  for (let i = 0; i < dictionary.length; i++) {
    console.log('item ' + i);
    if ((i + 1) % (Batch_Size + 1) === 0) {
      await writeBatch(batch);
      console.log(`added batch ${(i + 1) / 26 + 1}/${dictionary.length / 25}`);
      batch = [];
    } else {
      batch.push(dictionary[i]);
    }
  }
}
run();
