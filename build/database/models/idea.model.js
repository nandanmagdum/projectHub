"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ideaSchema = void 0;
const mongoose_1 = require("mongoose");
exports.ideaSchema = new mongoose_1.Schema({
    ideaId: { type: String, required: true },
    title: { type: String, required: true },
    outcome: { type: String, required: true },
    benifits: { type: String, required: true },
    ownerId: { type: String, required: true },
    contributors: { type: [String], default: [] }
});
