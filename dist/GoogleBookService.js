"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GoogleBookService = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var GoogleBookService = function GoogleBookService() {
  var _this = this;

  _classCallCheck(this, GoogleBookService);

  _defineProperty(this, "fetchBooks", /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(term) {
      var results, body;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.__axios(_this.url + term);

            case 2:
              results = _context.sent;
              body = results.data;
              _this.fetchedResults = body;
              return _context.abrupt("return", body);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());

  this.url = 'https://www.googleapis.com/books/v1/volumes?q=';
  this.fetchedResults = [];
  this.__axios = _axios["default"];
};

exports.GoogleBookService = GoogleBookService;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL0dvb2dsZUJvb2tTZXJ2aWNlLm1qcyJdLCJuYW1lcyI6WyJHb29nbGVCb29rU2VydmljZSIsInRlcm0iLCJfX2F4aW9zIiwidXJsIiwicmVzdWx0cyIsImJvZHkiLCJkYXRhIiwiZmV0Y2hlZFJlc3VsdHMiLCJheGlvcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFDYUEsaUIsR0FDVCw2QkFBYztBQUFBOztBQUFBOztBQUFBO0FBQUEsdUVBTUQsaUJBQU9DLElBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDYSxLQUFJLENBQUNDLE9BQUwsQ0FBYSxLQUFJLENBQUNDLEdBQUwsR0FBV0YsSUFBeEIsQ0FEYjs7QUFBQTtBQUNIRyxjQUFBQSxPQURHO0FBRUhDLGNBQUFBLElBRkcsR0FFS0QsT0FBTyxDQUFDRSxJQUZiO0FBR1QsY0FBQSxLQUFJLENBQUNDLGNBQUwsR0FBc0JGLElBQXRCO0FBSFMsK0NBSUZBLElBSkU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FOQzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDVixPQUFLRixHQUFMLEdBQVcsZ0RBQVg7QUFDQSxPQUFLSSxjQUFMLEdBQXNCLEVBQXRCO0FBQ0EsT0FBS0wsT0FBTCxHQUFlTSxpQkFBZjtBQUNILEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuZXhwb3J0IGNsYXNzIEdvb2dsZUJvb2tTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy51cmwgPSAnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYm9va3MvdjEvdm9sdW1lcz9xPSc7XG4gICAgICAgIHRoaXMuZmV0Y2hlZFJlc3VsdHMgPSBbXTtcbiAgICAgICAgdGhpcy5fX2F4aW9zID0gYXhpb3NcbiAgICB9XG5cbiAgICBmZXRjaEJvb2tzID0gYXN5bmMgKHRlcm0pID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IHRoaXMuX19heGlvcyh0aGlzLnVybCArIHRlcm0pO1xuICAgICAgICBjb25zdCBib2R5ID0gIHJlc3VsdHMuZGF0YTtcbiAgICAgICAgdGhpcy5mZXRjaGVkUmVzdWx0cyA9IGJvZHk7XG4gICAgICAgIHJldHVybiBib2R5O1xuICAgIH1cbiAgICBcbn1cbiAgICAiXX0=