"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.posService = exports.wordService = void 0;
const word_1 = __importDefault(require("./word"));
exports.wordService = word_1.default;
const pos_1 = __importDefault(require("./pos"));
exports.posService = pos_1.default;
