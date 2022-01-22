const db = require('./db');

const getWord = async (event) => {
  try {
    const response = { statusCode: 200 };
    const { word } = event;
    const params = {
      TableName: 'dictionary',
      KeyConditionExpression: 'word = :word',
      ExpressionAttributeValues: {
        ':word': word.toUpperCase(),
      },
    };
    const res = await dynamoDb.query(params).promise();

    if (res.Items && res.Items.length > 0) {
      return (response.body = {
        message: 'success',
        data: res.Items,
      });
    }
  } catch (error) {
    response.statusCode = 500;
    response.message = 'Could not find word because scan is expensive';
  }
  return response;
};