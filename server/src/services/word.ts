import dynamoDb from '../utils/db';

const getWord = async (word: string) => {
  const params = {
    TableName: 'dictionary',
    KeyConditionExpression: 'word = :word',
    ExpressionAttributeValues: {
      ':word': word.toUpperCase(),
    },
  };
  const res = await dynamoDb.query(params).promise();
  return res;
};

export default {
  getWord,
};
