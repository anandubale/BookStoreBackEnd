"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userRegistration = exports.login = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _user = _interopRequireDefault(require("../models/user.model"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

//create new user
var userRegistration = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(body) {
    var saltRounds, hasedPassword, previous_check, data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            saltRounds = 10;
            hasedPassword = _bcrypt["default"].hashSync(body.password, saltRounds);
            body.password = hasedPassword;
            _context.next = 5;
            return _user["default"].findOne({
              emailID: body.emailID
            });

          case 5:
            previous_check = _context.sent;

            if (!(previous_check != null)) {
              _context.next = 10;
              break;
            }

            throw new Error("User Already registered");

          case 10:
            _context.next = 12;
            return _user["default"].create(body);

          case 12:
            data = _context.sent;
            return _context.abrupt("return", data);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function userRegistration(_x) {
    return _ref.apply(this, arguments);
  };
}(); // login user;


exports.userRegistration = userRegistration;

var login = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(body) {
    var user, validPassword, token;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            console.log("service");
            _context2.next = 3;
            return _user["default"].findOne({
              emailID: body.emailID
            });

          case 3:
            user = _context2.sent;
            validPassword = _bcrypt["default"].compareSync(body.password, user.password);

            if (!validPassword) {
              _context2.next = 10;
              break;
            }

            token = _jsonwebtoken["default"].sign({
              "emailID": user.emailID,
              "id": user._id
            }, process.env.LOGIN_SECRET_CODE);
            return _context2.abrupt("return", token);

          case 10:
            throw new Error('password does not match');

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function login(_x2) {
    return _ref2.apply(this, arguments);
  };
}(); // //get all users
// export const getAllUsers = async () => {
//   const data = await User.find();
//   return data;
// };
// //create new user
// export const newUser = async (body) => {
//   const data = await User.create(body);
//   return data;
// };
// //update single user
// export const updateUser = async (_id, body) => {
//   const data = await User.findByIdAndUpdate(
//     {
//       _id
//     },
//     body,
//     {
//       new: true
//     }
//   );
//   return data;
// };
// //delete single user
// export const deleteUser = async (id) => {
//   await User.findByIdAndDelete(id);
//   return '';
// };
// //get single user
// export const getUser = async (id) => {
//   const data = await User.findById(id);
//   return data;
// };


exports.login = login;