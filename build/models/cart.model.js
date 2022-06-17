"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var cartSchema = new _mongoose.Schema({
  userId: {
    type: String
  },
  book: [{
    productId: {
      type: String
    },
    description: {
      type: String
    },
    bookName: {
      type: String
    },
    author: {
      type: String
    },
    quantity: {
      type: Number
    },
    price: {
      type: Number
    }
  }],
  cart_total: {
    type: Number
  },
  isPurchased: {
    type: Boolean,
    "default": false
  }
}, {
  timestamps: true
});

var _default = (0, _mongoose.model)('Cart', cartSchema);

exports["default"] = _default;