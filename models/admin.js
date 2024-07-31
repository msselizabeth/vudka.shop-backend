const { Schema, model } = require("mongoose");

const adminSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            minlenght: 6,
            required: true,
        },
        role: {
            type: String,
            required: true,
        },
        token: {
            type: String,
            default: "",
          },
    }, { versionKey: false, timestamps: true }
)

const Admin = model("admins", adminSchema);

module.exports = {
  Admin,
};