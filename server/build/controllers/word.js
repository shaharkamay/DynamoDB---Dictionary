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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWordAndPOS = exports.getWord = void 0;
const services_1 = require("../services");
const getWord = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('getting word');
        const { word } = req.params;
        const wordDef = yield services_1.wordService.getWord(word);
        res.json(wordDef);
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.getWord = getWord;
const getWordAndPOS = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { word, pos } = req.params;
        const wordDef = yield services_1.wordService.getWordAndPOS(word, pos);
        res.json(wordDef);
    }
    catch (error) {
        next(error);
    }
});
exports.getWordAndPOS = getWordAndPOS;
