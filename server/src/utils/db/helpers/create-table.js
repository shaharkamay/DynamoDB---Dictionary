const AWS = require('aws-sdk');

const {
  config: { aws },
} = require('../../config');

const awsConfig = {
  region: 'eu-central-1',
  endpoint: 'http://dynamodb.eu-central-1.amazonaws.com',
  accessKeyId: aws.accessKeyId,
  secretAccessKey: aws.secretAccessKey,
};

AWS.config.update(awsConfig);
const dynamodb = new AWS.DynamoDB();
const params = {
  TableName: 'dictionary',
  KeySchema: [
    { AttributeName: 'word', KeyType: 'HASH' }, //Partition key
    { AttributeName: 'pos', KeyType: 'RANGE' }, //Sort key
  ],
  AttributeDefinitions: [
    { AttributeName: 'word', AttributeType: 'S' },
    { AttributeName: 'pos', AttributeType: 'S' },
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 10,
    WriteCapacityUnits: 10,
  },
};
// dynamodb.createTable(params, function (err, data) {
//   if (err) {
//     console.error(
//       'Unable to create table. Error JSON:',
//       JSON.stringify(err, null, 2)
//     );
//   } else {
//     console.log(
//       'Created table. Table description JSON:',
//       JSON.stringify(data, null, 2)
//     );
//   }
// });
