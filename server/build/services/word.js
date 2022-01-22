"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const word_1 = require("../@types/word");
const db_1 = __importDefault(require("../utils/db"));
const posConvert = {
    noun: 'n.',
    verb: 'v.',
    adjective: 'a.',
    pronoun: 'p,',
};
const getWord = (word) => __awaiter(void 0, void 0, void 0, function* () {
    const params = {
        TableName: 'dictionary',
        KeyConditionExpression: 'word = :word',
        ExpressionAttributeValues: {
            ':word': word.toUpperCase(),
        },
    };
    console.log('before');
    const res = yield db_1.default.query(params).promise();
    console.log('after');
    if (res.Items && res.Items.length > 0) {
        return res.Items;
    }
    throw {
        status: 500,
        message: 'Could not find word because scan is expensive',
    };
});
const getWordAndPOS = (word, pos) => __awaiter(void 0, void 0, void 0, function* () {
    if (pos !== word_1.POSEnum.noun &&
        pos !== word_1.POSEnum.verb &&
        pos !== word_1.POSEnum.adjective &&
        pos !== word_1.POSEnum.pronoun)
        throw { status: 400, message: 'pos does not exist' };
    const params = {
        TableName: 'dictionary',
        KeyConditionExpression: 'word = :word and pos = :pos',
        ExpressionAttributeValues: {
            ':word': word.toUpperCase(),
            ':pos': posConvert[pos],
        },
    };
    const res = yield db_1.default.query(params).promise();
    if (res.Items && res.Items.length > 0) {
        return res.Items;
    }
    throw {
        status: 500,
        message: 'Could not find word because scan is expensive',
    };
});
exports.default = {
    getWord,
    getWordAndPOS,
};
