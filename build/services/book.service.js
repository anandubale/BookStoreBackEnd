"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBookById = exports.AllBooks = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _joi = require("@hapi/joi");

var _book = _interopRequireDefault(require("../models/book.model"));

var AllBooks = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(UserID) {
    var AllBookdata;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _book["default"].find({
              UserID: UserID
            });

          case 2:
            AllBookdata = _context.sent;

            if (!(AllBookdata.length == 0)) {
              _context.next = 7;
              break;
            }

            throw new Error("user dont have any notes");

          case 7:
            return _context.abrupt("return", AllBookdata);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function AllBooks(_x) {
    return _ref.apply(this, arguments);
  };
}(); //Using tow Parameters


exports.AllBooks = AllBooks;

var getBookById = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(_id, UserID) {
    var dataById;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _book["default"].findById({
              _id: _id,
              UserID: UserID
            });

          case 2:
            dataById = _context2.sent;

            if (!(dataById == null)) {
              _context2.next = 7;
              break;
            }

            throw new Error("There is no note with this ID");

          case 7:
            return _context2.abrupt("return", dataById);

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getBookById(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getBookById = getBookById;