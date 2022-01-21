import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import { POSEnum } from '../@types/word';
import dynamoDb from '../utils/db';
import { getRandomInt } from '../utils/helpers';

const posConvert = {
  noun: 'n.',
  verb: 'v.',
  adjective: 'a.',
  pronoun: 'p,',
};

const getRandomWord = async (pos: string, letter = '') => {
  console.log(letter);
  if (
    pos !== POSEnum.noun &&
    pos !== POSEnum.verb &&
    pos !== POSEnum.adjective &&
    pos !== POSEnum.pronoun
  )
    throw { status: 400, message: 'pos does not exist' };

  const params: DocumentClient.ScanInput = {
    TableName: 'dictionary',
    FilterExpression: '#pos = :pos AND begins_with (#word , :letter)',
    ExpressionAttributeNames: {
      '#pos': 'pos',
      '#word': 'word',
    },
    ExpressionAttributeValues: {
      ':letter': letter.toUpperCase(),
      ':pos': posConvert[pos],
    },
    Limit: 100,
  };

  const res = await dynamoDb.scan(params).promise();
  if (res.Items && res.Items.length > 0) {
    console.log(res.Items);
    return res.Items[getRandomInt(0, (res.Count || 1) - 1)];
  }
  throw {
    status: 500,
    message: 'Could not find word because scan is expensive',
  };
};

export default {
  getRandomWord,
};
