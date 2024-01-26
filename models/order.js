const { Schema, model } = require("mongoose");

const orderSchema = new Schema(
  {
    products: [
      {
        _id: Schema.Types.ObjectId,
        prodName: String,
        quantity: String,
        prodPrice: String,
      },
        ],
    numOfOrder: String,
    owner: {
      type: String,
      default: "Anonimus",
    },
    orderSum: {
      type: String,
      default: "0",
        },
    destination: {
            clientName: String,
            clientSurname: String,
            clientPhone: String,
        clientEmail: String,
        oblast: String,
        city: String,
        numberOfPost: String,
            comment: String,
    }
  },
  { versionKey: false, timestamps: true }
);

const Order = model("order", orderSchema);

module.exports = {
  Order,
};
