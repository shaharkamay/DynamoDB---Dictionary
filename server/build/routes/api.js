"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const word_1 = __importDefault(require("./word"));
const pos_1 = __importDefault(require("./pos"));
const router = express_1.default.Router();
router.use('/words', word_1.default);
router.use('/part-of-speech', pos_1.default);
exports.default = router;
