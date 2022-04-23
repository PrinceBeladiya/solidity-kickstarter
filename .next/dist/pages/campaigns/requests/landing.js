'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Landing = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../../../component/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require('../../../routes');

var _semanticUiReact = require('semantic-ui-react');

var _campaign = require('../../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _renderRows = require('../../../component/renderRows');

var _renderRows2 = _interopRequireDefault(_renderRows);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Solidity\\Kickstart\\pages\\campaigns\\requests\\landing.js?entry',
    _this = undefined;

var Landing = exports.Landing = function Landing(props) {
    var Header = _semanticUiReact.Table.Header,
        Row = _semanticUiReact.Table.Row,
        HeaderCell = _semanticUiReact.Table.HeaderCell,
        Body = _semanticUiReact.Table.Body;

    var rowRendering = function rowRendering() {
        return props.requests.map(function (request, index) {
            return _react2.default.createElement(_renderRows2.default, {
                key: index,
                id: index,
                request: request,
                address: props.address,
                approval: props.approvalCount,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14
                }
            });
        });
    };

    return _react2.default.createElement(_Layout2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 25
        }
    }, _react2.default.createElement('h3', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 26
        }
    }, 'Requests'), _react2.default.createElement(_routes.Link, { route: '/campaigns/' + props.address + '/requests/new', __source: {
            fileName: _jsxFileName,
            lineNumber: 28
        }
    }, _react2.default.createElement('a', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 29
        }
    }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, floated: 'right', style: { marginBottom: 10 }, __source: {
            fileName: _jsxFileName,
            lineNumber: 30
        }
    }, 'Add Request'))), _react2.default.createElement(_semanticUiReact.Table, { celled: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 34
        }
    }, _react2.default.createElement(Header, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 35
        }
    }, _react2.default.createElement(Row, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 36
        }
    }, _react2.default.createElement(HeaderCell, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 37
        }
    }, 'ID'), _react2.default.createElement(HeaderCell, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 38
        }
    }, 'Description'), _react2.default.createElement(HeaderCell, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 39
        }
    }, 'Amount'), _react2.default.createElement(HeaderCell, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 40
        }
    }, 'Recipient'), _react2.default.createElement(HeaderCell, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 41
        }
    }, 'Approval Count'), _react2.default.createElement(HeaderCell, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 42
        }
    }, 'Approve'), _react2.default.createElement(HeaderCell, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 43
        }
    }, 'Finalize'))), _react2.default.createElement(Body, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 47
        }
    }, rowRendering())), _react2.default.createElement('h4', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 52
        }
    }, 'Found request :- ', props.requestCount));
};

Landing.getInitialProps = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var address, campaign, requestCount, approvalCount, requests;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        address = props.query.address;
                        _context.next = 3;
                        return (0, _campaign2.default)(address);

                    case 3:
                        campaign = _context.sent;
                        _context.next = 6;
                        return campaign.methods.getRequestCount().call();

                    case 6:
                        requestCount = _context.sent;
                        _context.next = 9;
                        return campaign.methods.countApprovals().call();

                    case 9:
                        approvalCount = _context.sent;
                        _context.next = 12;
                        return _promise2.default.all(Array(parseInt(requestCount)).fill().map(function (element, index) {
                            return campaign.methods.requests(index).call();
                        }));

                    case 12:
                        requests = _context.sent;
                        return _context.abrupt('return', { address: address, requestCount: requestCount, requests: requests, approvalCount: approvalCount });

                    case 14:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, _this);
    }));

    return function (_x) {
        return _ref.apply(this, arguments);
    };
}();

exports.default = Landing;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXHJlcXVlc3RzXFxsYW5kaW5nLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGF5b3V0IiwiTGluayIsIkJ1dHRvbiIsIlRhYmxlIiwiQ2FtcGFpZ24iLCJSZW5kZXJSb3dzIiwiTGFuZGluZyIsInByb3BzIiwiSGVhZGVyIiwiUm93IiwiSGVhZGVyQ2VsbCIsIkJvZHkiLCJyb3dSZW5kZXJpbmciLCJyZXF1ZXN0cyIsIm1hcCIsInJlcXVlc3QiLCJpbmRleCIsImFkZHJlc3MiLCJhcHByb3ZhbENvdW50IiwibWFyZ2luQm90dG9tIiwicmVxdWVzdENvdW50IiwiZ2V0SW5pdGlhbFByb3BzIiwicXVlcnkiLCJjYW1wYWlnbiIsIm1ldGhvZHMiLCJnZXRSZXF1ZXN0Q291bnQiLCJjYWxsIiwiY291bnRBcHByb3ZhbHMiLCJhbGwiLCJBcnJheSIsInBhcnNlSW50IiwiZmlsbCIsImVsZW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVMsQUFBWTs7QUFDckIsQUFBUyxBQUFROztBQUNqQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFnQixBQUV2Qjs7Ozs7Ozs7O0FBQU8sSUFBTSw0QkFBVSxTQUFWLEFBQVUsUUFBQSxBQUFDLE9BQVU7UUFBQSxBQUV0QixTQUZzQixBQUVZLHVCQUZaLEFBRXRCO1FBRnNCLEFBRWQsTUFGYyxBQUVZLHVCQUZaLEFBRWQ7UUFGYyxBQUVULGFBRlMsQUFFWSx1QkFGWixBQUVUO1FBRlMsQUFFRyxPQUZILEFBRVksdUJBRlosQUFFRyxBQUVqQzs7UUFBTSxlQUFlLFNBQWYsQUFBZSxlQUFNLEFBQ3ZCO3FCQUFPLEFBQU0sU0FBTixBQUFlLElBQUksVUFBQSxBQUFDLFNBQUQsQUFBVSxPQUFVLEFBQzFDO21DQUFPLEFBQUM7cUJBQUQsQUFDRSxBQUNMO29CQUZHLEFBRUMsQUFDSjt5QkFIRyxBQUdNLEFBQ1Q7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