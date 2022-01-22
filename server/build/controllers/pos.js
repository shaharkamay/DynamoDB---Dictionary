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
exports.getRandomWord = void 0;
const services_1 = require("../services");
const getRandomWord = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { pos } = req.params;
        const letter = (req.query.letter || '');
        const wordDef = yield services_1.posService.getRandomWord(pos, letter);
        res.json(wordDef);
    }
    catch (error) {
        next(error);
    }
});
exports.getRandomWord = getRandomWord;
