'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.New = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../../component/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = require('semantic-ui-react');

var _factory = require('../../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this = undefined,
    _jsxFileName = 'D:\\Solidity\\Kickstart\\pages\\campaigns\\new.js?entry';

var New = exports.New = function New() {
  var _useState = (0, _react.useState)(''),
      _useState2 = (0, _slicedToArray3.default)(_useState, 2),
      minimumContribution = _useState2[0],
      setMinimumContribution = _useState2[1];

  var _useState3 = (0, _react.useState)(''),
      _useState4 = (0, _slicedToArray3.default)(_useState3, 2),
      errorMessage = _useState4[0],
      setErrorMessage = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = (0, _slicedToArray3.default)(_useState5, 2),
      loading = _useState6[0],
      setLoading = _useState6[1];

  var handleChange = function handleChange(e) {
    setMinimumContribution(e.target.value);
  };

  var handleSubmit = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(e) {
      var accounts;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault;
              setErrorMessage('');
              _context.next = 4;
              return window.ethereum.enable();

            case 4:

              setLoading(true);
              _context.prev = 5;
              _context.next = 8;
              return _web2.default.eth.getAccounts();

            case 8:
              accounts = _context.sent;
              _context.next = 11;
              return _factory2.default.methods.createCampaign(minimumContribution).send({
                from: accounts[0]
              });

            case 11:
              _routes.Router.pushRoute('/');
              _context.next = 17;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context['catch'](5);

              setErrorMessage(_context.t0.message);

            case 17:
              setLoading(false);

            case 18:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this, [[5, 14]]);
    }));

    return function handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return _react2.default.createElement(_Layout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, _react2.default.createElement('h3', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, 'Create Campaign'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: handleSubmit, error: !!errorMessage, __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, _react2.default.createElement(_semanticUiReact.Form.Field, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, _react2.default.createElement('label', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, _react2.default.createElement('b', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, 'Enter Minimum Contribution To Create Campaign')), _react2.default.createElement(_semanticUiReact.Input, {
    label: 'Wei',
    labelPosition: 'right',
    placeholder: 'Minimum Contribution',
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  })), _react2.default.createElement(_semanticUiReact.Message, { error: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }, _react2.default.createElement(_semanticUiReact.Message.Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }, 'Oops!!'), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  }, errorMessage)), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: loading, __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    }
  }, 'Create Campaign!')));
};

exports.default = New;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXG5ldy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTGF5b3V0IiwiRm9ybSIsIkJ1dHRvbiIsIklucHV0IiwiTWVzc2FnZSIsImZhY3RvcnkiLCJ3ZWIzIiwiUm91dGVyIiwiTmV3IiwibWluaW11bUNvbnRyaWJ1dGlvbiIsInNldE1pbmltdW1Db250cmlidXRpb24iLCJlcnJvck1lc3NhZ2UiLCJzZXRFcnJvck1lc3NhZ2UiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0Iiwid2luZG93IiwiZXRoZXJldW0iLCJlbmFibGUiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImNyZWF0ZUNhbXBhaWduIiwic2VuZCIsImZyb20iLCJwdXNoUm91dGUiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTLEFBQU0sQUFBUSxBQUFPOztBQUM5QixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBYyxBQUV2Qjs7Ozs7OztBQUFPLElBQU0sb0JBQU0sU0FBTixBQUFNLE1BQU07a0JBRStCLHFCQUYvQixBQUUrQixBQUFTOzJEQUZ4QztNQUFBLEFBRWhCLGlDQUZnQjtNQUFBLEFBRUssb0NBRkw7O21CQUdpQixxQkFIakIsQUFHaUIsQUFBUzs0REFIMUI7TUFBQSxBQUdoQiwwQkFIZ0I7TUFBQSxBQUdGLDZCQUhFOzttQkFJTyxxQkFKUCxBQUlPLEFBQVM7NERBSmhCO01BQUEsQUFJaEIscUJBSmdCO01BQUEsQUFJUCx3QkFFaEI7O01BQU0sZUFBZSxTQUFmLEFBQWUsYUFBQSxBQUFDLEdBQU0sQUFDMUI7MkJBQXVCLEVBQUEsQUFBRSxPQUF6QixBQUFnQyxBQUNqQztBQUZELEFBSUE7O01BQU0sMkJBQUE7d0ZBQWUsaUJBQUEsQUFBTyxHQUFQO1VBQUE7b0VBQUE7a0JBQUE7MkNBQUE7aUJBQ25CO2dCQUFBLEFBQUUsQUFDRjs4QkFGbUIsQUFFbkIsQUFBZ0I7OEJBRkc7cUJBR2IsT0FBQSxBQUFPLFNBSE0sQUFHYixBQUFnQjs7aUJBRXRCOzt5QkFMbUIsQUFLbkIsQUFBVzs4QkFMUTs4QkFBQTtxQkFPTSxjQUFBLEFBQUssSUFQWCxBQU9NLEFBQVM7O2lCQUExQjtBQVBXLGtDQUFBOzhCQUFBO3VDQVFYLEFBQVEsUUFBUixBQUFnQixlQUFoQixBQUErQixxQkFBL0IsQUFDSDtzQkFDTyxTQVZPLEFBUVgsQUFDRSxBQUNFLEFBQVM7QUFEWCxBQUNKLGVBRkU7O2lCQUlKOzZCQUFBLEFBQU8sVUFaUSxBQVlmLEFBQWlCOzhCQVpGO0FBQUE7O2lCQUFBOzhCQUFBOzhDQWNqQjs7OEJBQWdCLFlBZEMsQUFjakIsQUFBc0I7O2lCQUV4Qjt5QkFoQm1CLEFBZ0JuQixBQUFXOztpQkFoQlE7aUJBQUE7OEJBQUE7O0FBQUE7OEJBQUE7QUFBZjs7cUNBQUE7OEJBQUE7QUFBQTtBQUFOLEFBb0JBOzt5QkFDRSxBQUFDOztnQkFBRDtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQURGLEFBQ0UsQUFFQSxvQ0FBQSxBQUFDLHVDQUFLLFVBQU4sQUFBZ0IsY0FBYyxPQUFPLENBQUMsQ0FBdEMsQUFBdUM7Z0JBQXZDO2tCQUFBLEFBQ0U7QUFERjtxQkFDRyxjQUFELHNCQUFBLEFBQU07O2dCQUFOO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLGNBQUE7O2dCQUFBO2tCQUFBLEFBQU87QUFBUDtBQUFBLHFCQUFPLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQURULEFBQ0UsQUFBTyxBQUNQLG1FQUFBLEFBQUM7V0FBRCxBQUNRLEFBQ047bUJBRkYsQUFFZ0IsQUFDZDtpQkFIRixBQUdjLEFBQ1o7Y0FKRixBQUlZOztnQkFKWjtrQkFISixBQUNFLEFBRUUsQUFRRjtBQVJFO0FBQ0UsdUJBT0osQUFBQywwQ0FBUSxPQUFUO2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtxQkFDRyxjQUFELHlCQUFBLEFBQVM7O2dCQUFUO2tCQUFBO0FBQUE7QUFBQSxLQURGLEFBQ0UsQUFDQSwyQkFBQSxjQUFBOztnQkFBQTtrQkFBQSxBQUFJO0FBQUo7QUFBQSxLQWJKLEFBV0UsQUFFRSxBQUdGLGdDQUFBLEFBQUMseUNBQU8sU0FBUixNQUFnQixTQUFoQixBQUEwQjtnQkFBMUI7a0JBQUE7QUFBQTtLQXBCTixBQUNFLEFBR0UsQUFnQkUsQUFJUDtBQXRETSxBQXdEUDs7a0JBQUEsQUFBZSIsImZpbGUiOiJuZXcuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRDovU29saWRpdHkvS2lja3N0YXJ0In0=