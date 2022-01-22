const dynamoDb = require('./db');

const getWord = async (event) => {
  const response = { statusCode: 200 };
  console.log('here');
  try {
    const { word } = event.pathParameters;
    const params = {
      TableName: 'dictionary',
      KeyConditionExpression: 'word = :word',
      ExpressionAttributeValues: {
        ':word': word.toUpperCase(),
      },
    };
    const res = await dynamoDb.query(params).promise();
    console.log(res);
    if (res.Items && res.Items.length > 0) {
      response.body = {
        message: 'success',
        data: res.Items,
      };
    }
  } catch (error) {
    response.statusCode = 500;
    response.message = 'Could not find word because scan is expensive';
  }
  return response;
};

module.exports = {
  getWord,
};
