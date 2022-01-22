"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const config_1 = __importDefault(require("../config"));
// Set the region
aws_sdk_1.default.config.update(config_1.default.aws);
// Create DynamoDB document client
const dynamoDb = new aws_sdk_1.default.DynamoDB.DocumentClient();
exports.default = dynamoDb;
