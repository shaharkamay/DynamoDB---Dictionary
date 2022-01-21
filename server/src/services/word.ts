import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import { POSEnum } from '../@types/word';
import dynamoDb from '../utils/db';

const posConvert = {
  noun: 'n.',
  verb: 'v.',
  adjective: 'a.',
  pronoun: 'p,',
};

const getWord = async (word: string) => {
  const params: DocumentClient.QueryInput = {
    TableName: 'dictionary',
    KeyConditionExpression: 'word = :word',
    ExpressionAttributeValues: {
      ':word': word.toUpperCase(),
    },
  };
  const res = await dynamoDb.query(params).promise();

  if (res.Items && res.Items.length > 0) {
    return res.Items;
  }
  return null;
};

const getWordAndPOS = async (word: string, pos: string) => {
  if (
    pos !== POSEnum.noun &&
    pos !== POSEnum.verb &&
    pos !== POSEnum.adjective &&
    pos !== POSEnum.pronoun
  )
    throw { status: 400, message: 'pos does not exist' };

  const params = {
    TableName: 'dictionary',
    KeyConditionExpression: 'word = :word and pos = :pos',
    ExpressionAttributeValues: {
      ':word': word.toUpperCase(),
      ':pos': posConvert[pos],
    },
  };

  const res = await dynamoDb.query(params).promise();

  if (res.Items && res.Items.length > 0) {
    return res.Items;
  }
  return null;
};

export default {
  getWord,
  getWordAndPOS,
};
