"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bookAuth = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _httpStatusCodes = _interopRequireDefault(require("http-status-codes"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

/**
 * Middleware to authenticate if user has a valid Authorization token
 * Authorization: Bearer <token>
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
// export const userAuth = async (req, res, next) => {
//   try {
//     let bearerToken = req.header('Authorization');
//     if (!bearerToken)
//       throw {
//         code: HttpStatus.BAD_REQUEST,
//         message: 'Authorization token is required'
//       };
//     bearerToken = bearerToken.split(' ')[1];
//     const { user } = await jwt.verify(bearerToken, 'your-secret-key');
//     res.locals.user = user;
//     res.locals.token = bearerToken;
//     next();
//   } catch (error) {
//     next(error);
//   }
// };
var bookAuth = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var bearerToken;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            bearerToken = req.header('Authorization');
            console.log(bearerToken);

            if (bearerToken) {
              _context.next = 5;
              break;
            }

            throw {
              code: _httpStatusCodes["default"].BAD_REQUEST,
              message: 'Authorization token is required'
            };

          case 5:
            bearerToken = bearerToken.split(' ')[1];

            _jsonwebtoken["default"].verify(bearerToken, process.env.LOGIN_SECRET_CODE, function (err, verifedtoken) {
              if (err) throw {
                code: _httpStatusCodes["default"].UNAUTHORIZED,
                message: 'User dont have access to this NoteID '
              };else {
                // req.body.data = verifedtoken; //this verified token will have email id ,id
                // req.body['UserID'] = req.body.data.id
                req.body['data'] = verifedtoken;
                req.body.UserID = req.body.data.id;
                console.log(req.body.UserID);
                next();
              }
            });

            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            next(_context.t0);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 9]]);
  }));

  return function bookAuth(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.bookAuth = bookAuth;