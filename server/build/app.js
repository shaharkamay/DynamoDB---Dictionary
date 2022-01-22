"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const api_1 = __importDefault(require("./routes/api"));
const error_handling_1 = __importDefault(require("./utils/middleware/error-handling"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use(express_1.default.static('./client/build'));
const render = (req, res, next) => {
    try {
        res.sendFile(path_1.default.resolve('./client/build/index.html'));
    }
    catch (err) {
        next(err);
    }
};
app.get('/', render);
app.get('/words/:word', render);
app.get('/words/:word/:pos', render);
app.get('/part-of-speech/:pos', render);
app.get('/part-of-speech/:pos/:letter', render);
app.use('/api', api_1.default);
app.use(error_handling_1.default);
exports.default = app;
