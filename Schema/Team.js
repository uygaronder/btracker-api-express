const mongoose = require("mongoose");

const TeamSchema = mongoose.Schema({
    name: { type: String, required: true },
    users: [],
    projects: [
        [
            { type: String },
            { type: mongoose.SchemaTypes.ObjectId, ref: "Project" },
        ],
    ],
    labels: {},
    feed: [
        {
            feedText: String,
            date: Date,
            source: { id: mongoose.Types.ObjectId, sourceString: String },
            feedType: String,
        },
    ],
});

module.exports = mongoose.model("Team", TeamSchema);
