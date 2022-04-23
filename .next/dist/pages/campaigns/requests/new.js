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

var _Layout = require('../../../component/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _campaign = require('../../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this = undefined,
    _jsxFileName = 'D:\\Solidity\\Kickstart\\pages\\campaigns\\requests\\new.js?entry';

var New = exports.New = function New(props) {
    var _useState = (0, _react.useState)(''),
        _useState2 = (0, _slicedToArray3.default)(_useState, 2),
        errorMessage = _useState2[0],
        setErrorMessage = _useState2[1];

    var _useState3 = (0, _react.useState)(false),
        _useState4 = (0, _slicedToArray3.default)(_useState3, 2),
        loading = _useState4[0],
        setLoading = _useState4[1];

    var _useState5 = (0, _react.useState)(''),
        _useState6 = (0, _slicedToArray3.default)(_useState5, 2),
        Description = _useState6[0],
        setDescription = _useState6[1];

    var _useState7 = (0, _react.useState)(''),
        _useState8 = (0, _slicedToArray3.default)(_useState7, 2),
        Amount = _useState8[0],
        setAmount = _useState8[1];

    var _useState9 = (0, _react.useState)(''),
        _useState10 = (0, _slicedToArray3.default)(_useState9, 2),
        Recipient = _useState10[0],
        setRecipient = _useState10[1];

    var handleSubmit = function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(e) {
            var campaign, accounts;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            e.preventDefault;

                            campaign = (0, _campaign2.default)(props.address);

                            setErrorMessage('');
                            setLoading(true);
                            _context.prev = 4;
                            _context.next = 7;
                            return _web2.default.eth.getAccounts();

                        case 7:
                            accounts = _context.sent;
                            _context.next = 10;
                            return campaign.methods.createRequest(Description, _web2.default.utils.toWei(Amount, 'ether'), Recipient).send({
                                from: accounts[0]
                            });

                        case 10:

                            _routes.Router.pushRoute('/campaigns/' + props.address + '/requests');
                            _context.next = 17;
                            break;

                        case 13:
                            _context.prev = 13;
                            _context.t0 = _context['catch'](4);

                            setErrorMessage(_context.t0.message);
                            console.log(_context.t0);

                        case 17:
                            setLoading(false);

                        case 18:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this, [[4, 13]]);
        }));

        return function handleSubmit(_x) {
            return _ref.apply(this, arguments);
        };
    }();

    var DescriptionChange = function DescriptionChange(e) {
        setDescription(e.target.value);
    };
    var AmountChange = function AmountChange(e) {
        setAmount(e.target.value);
    };
    var RecipientChange = function RecipientChange(e) {
        setRecipient(e.target.value);
    };

    return _react2.default.createElement(_Layout2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 44
        }
    }, _react2.default.createElement('h3', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 45
        }
    }, 'Create Request'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: handleSubmit, error: !!errorMessage, __source: {
            fileName: _jsxFileName,
            lineNumber: 47
        }
    }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 48
        }
    }, _react2.default.createElement('label', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 49
        }
    }, _react2.default.createElement('b', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 49
        }
    }, 'Description')), _react2.default.createElement(_semanticUiReact.Input, {
        name: 'Description',
        placeholder: 'Amount for contribute ',
        onChange: DescriptionChange,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 50
        }
    })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 57
        }
    }, _react2.default.createElement('label', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 58
        }
    }, _react2.default.createElement('b', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 58
        }
    }, 'Amount in Ether')), _react2.default.createElement(_semanticUiReact.Input, {
        name: 'Amount',
        label: 'Ether',
        labelPosition: 'right',
        placeholder: 'Amount for contribute ',
        onChange: AmountChange,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 59
        }
    })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 68
        }
    }, _react2.default.createElement('label', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 69
        }
    }, _react2.default.createElement('b', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 69
        }
    }, 'Recipient')), _react2.default.createElement(_semanticUiReact.Input, {
        name: 'Recipient',
        label: 'Address',
        labelPosition: 'right',
        placeholder: 'Amount for contribute ',
        onChange: RecipientChange,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 70
        }
    })), _react2.default.createElement(_semanticUiReact.Message, { error: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 79
        }
    }, _react2.default.createElement(_semanticUiReact.Message.Header, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 80
        }
    }, 'Oops!!'), _react2.default.createElement('p', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 81
        }
    }, errorMessage)), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: loading, __source: {
            fileName: _jsxFileName,
            lineNumber: 84
        }
    }, 'Create'), _react2.default.createElement(_routes.Link, { route: '/campaigns/' + props.address + '/requests', __source: {
            fileName: _jsxFileName,
            lineNumber: 85
        }
    }, _react2.default.createElement('a', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 86
        }
    }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 87
        }
    }, 'Back')))));
};

New.getInitialProps = function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
        var address;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        address = props.query.address;
                        return _context2.abrupt('return', { address: address });

                    case 2:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, _this);
    }));

    return function (_x2) {
        return _ref2.apply(this, arguments);
    };
}();

exports.default = New;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXHJlcXVlc3RzXFxuZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkxheW91dCIsIkNhbXBhaWduIiwiQnV0dG9uIiwiTWVzc2FnZSIsIkZvcm0iLCJJbnB1dCIsIndlYjMiLCJSb3V0ZXIiLCJMaW5rIiwiTmV3IiwicHJvcHMiLCJlcnJvck1lc3NhZ2UiLCJzZXRFcnJvck1lc3NhZ2UiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIkRlc2NyaXB0aW9uIiwic2V0RGVzY3JpcHRpb24iLCJBbW91bnQiLCJzZXRBbW91bnQiLCJSZWNpcGllbnQiLCJzZXRSZWNpcGllbnQiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjYW1wYWlnbiIsImFkZHJlc3MiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImNyZWF0ZVJlcXVlc3QiLCJ1dGlscyIsInRvV2VpIiwic2VuZCIsImZyb20iLCJwdXNoUm91dGUiLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsIkRlc2NyaXB0aW9uQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJBbW91bnRDaGFuZ2UiLCJSZWNpcGllbnRDaGFuZ2UiLCJnZXRJbml0aWFsUHJvcHMiLCJxdWVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQVMsQUFBUSxBQUFTLEFBQU07O0FBQ2hDLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQVEsQUFBWSxBQUU3Qjs7Ozs7OztBQUFPLElBQU0sb0JBQU0sU0FBTixBQUFNLElBQUEsQUFBQyxPQUFVO29CQUNjLHFCQURkLEFBQ2MsQUFBUzs2REFEdkI7UUFBQSxBQUNuQiwwQkFEbUI7UUFBQSxBQUNMLDZCQURLOztxQkFFSSxxQkFGSixBQUVJLEFBQVM7OERBRmI7UUFBQSxB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