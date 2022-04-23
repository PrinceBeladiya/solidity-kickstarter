'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.renderRows = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _campaign = require('../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this = undefined,
    _jsxFileName = 'D:\\Solidity\\Kickstart\\component\\renderRows.js';

var renderRows = exports.renderRows = function renderRows(props) {
    var Row = _semanticUiReact.Table.Row,
        Cell = _semanticUiReact.Table.Cell;
    var id = props.id,
        request = props.request,
        approval = props.approval;

    var readyToFinalize = request.countApprovers > approval / 2;

    var onApprove = function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            var accounts, campaign;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return _web2.default.eth.getAccounts();

                        case 2:
                            accounts = _context.sent;
                            campaign = (0, _campaign2.default)(props.address);
                            _context.next = 6;
                            return campaign.methods.approveRequest(props.id).send({
                                from: accounts[0]
                            });

                        case 6:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this);
        }));

        return function onApprove() {
            return _ref.apply(this, arguments);
        };
    }();

    var onFinalize = function () {
        var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
            var accounts, campaign;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return _web2.default.eth.getAccounts();

                        case 2:
                            accounts = _context2.sent;
                            campaign = (0, _campaign2.default)(props.address);
                            _context2.next = 6;
                            return campaign.methods.finalizeRequest(props.id).send({
                                from: accounts[0]
                            });

                        case 6:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, _this);
        }));

        return function onFinalize() {
            return _ref2.apply(this, arguments);
        };
    }();

    return _react2.default.createElement(Row, { disabled: request.complete, positive: readyToFinalize && !request.complete, __source: {
            fileName: _jsxFileName,
            lineNumber: 37
        }
    }, _react2.default.createElement(Cell, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 38
        }
    }, ' ', id, ' '), _react2.default.createElement(Cell, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 39
        }
    }, ' ', request.description, ' '), _react2.default.createElement(Cell, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 40
        }
    }, ' ', _web2.default.utils.fromWei(request.value, 'ether'), ' ether '), _react2.default.createElement(Cell, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 41
        }
    }, ' ', request.recipient, ' '), _react2.default.createElement(Cell, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 42
        }
    }, ' ', request.countApprovers, ' / ', approval, ' '), _react2.default.createElement(Cell, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 43
        }
    }, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { color: 'green', basic: true, onClick: onApprove, __source: {
            fileName: _jsxFileName,
            lineNumber: 49
        }
    }, 'Approve')), _react2.default.createElement(Cell, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 52
        }
    }, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { color: 'teal', basic: true, onClick: onFinalize, __source: {
            fileName: _jsxFileName,
            lineNumber: 58
        }
    }, 'Finalize')));
};

exports.default = renderRows;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudFxccmVuZGVyUm93cy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiVGFibGUiLCJ3ZWIzIiwiQnV0dG9uIiwiQ2FtcGFpZ24iLCJyZW5kZXJSb3dzIiwicHJvcHMiLCJSb3ciLCJDZWxsIiwiaWQiLCJyZXF1ZXN0IiwiYXBwcm92YWwiLCJyZWFkeVRvRmluYWxpemUiLCJjb3VudEFwcHJvdmVycyIsIm9uQXBwcm92ZSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJjYW1wYWlnbiIsImFkZHJlc3MiLCJtZXRob2RzIiwiYXBwcm92ZVJlcXVlc3QiLCJzZW5kIiwiZnJvbSIsIm9uRmluYWxpemUiLCJmaW5hbGl6ZVJlcXVlc3QiLCJjb21wbGV0ZSIsImRlc2NyaXB0aW9uIiwidXRpbHMiLCJmcm9tV2VpIiwidmFsdWUiLCJyZWNpcGllbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTOztBQUNULEFBQU8sQUFBVSxBQUNqQixBQUFTOzs7O0FBQ1QsQUFBTyxBQUFjLEFBRXJCOzs7Ozs7Ozs7QUFBTyxJQUFNLGtDQUFhLFNBQWIsQUFBYSxXQUFBLEFBQUMsT0FBVTtRQUFBLEFBRXpCLE1BRnlCLEFBRVgsdUJBRlcsQUFFekI7UUFGeUIsQUFFcEIsT0FGb0IsQUFFWCx1QkFGVyxBQUVwQjtRQUZvQixBQUd6QixLQUh5QixBQUdDLE1BSEQsQUFHekI7UUFIeUIsQUFHckIsVUFIcUIsQUFHQyxNQUhELEFBR3JCO1FBSHFCLEFBR1osV0FIWSxBQUdDLE1BSEQsQUFHWixBQUVyQjs7UUFBTSxrQkFBa0IsUUFBQSxBQUFRLGlCQUFpQixXQUFqRCxBQUE0RCxBQUU1RDs7UUFBTSx3QkFBQTs0RkFBWSxtQkFBQTswQkFBQTswRUFBQTswQkFBQTtxREFBQTs2QkFBQTs0Q0FBQTttQ0FFUyxjQUFBLEFBQUssSUFGZCxBQUVTLEFBQVM7OzZCQUExQjtBQUZRLGdEQUlSO0FBSlEsdUNBSUcsd0JBQVMsTUFKWixBQUlHLEFBQWU7NENBSmxCOzRDQU1SLEFBQVMsUUFBVCxBQUFpQixlQUFlLE1BQWhDLEFBQXNDLElBQXRDLEFBQTBDO3NDQUN0QyxTQVBJLEFBTVIsQUFBK0MsQUFDM0MsQUFBUztBQURrQyxBQUNqRCw2QkFERTs7NkJBTlE7NkJBQUE7NENBQUE7O0FBQUE7d0JBQUE7QUFBWjs7b0NBQUE7b0NBQUE7QUFBQTtBQUFOLEFBV0E7O1FBQU0seUJBQUE7NkZBQWEsb0JBQUE7MEJBQUE7NEVBQUE7MEJBQUE7dURBQUE7NkJBQUE7NkNBQUE7bUNBRVEsY0FBQSxBQUFLLElBRmIsQUFFUSxBQUFTOzs2QkFBMUI7QUFGUyxpREFJVDtBQUpTLHVDQUlFLHdCQUFTLE1BSlgsQUFJRSxBQUFlOzZDQUpqQjs0Q0FNVCxBQUFTLFFBQVQsQUFBaUIsZ0JBQWdCLE1BQWpDLEFBQXVDLElBQXZDLEFBQTJDO3NDQUN2QyxTQVBLLEFBTVQsQUFBZ0QsQUFDNUMsQUFBUztBQURtQyxBQUNsRCw2QkFERTs7NkJBTlM7NkJBQUE7NkNBQUE7O0FBQUE7eUJBQUE7QUFBYjs7cUNBQUE7cUNBQUE7QUFBQTtBQUFOLEFBV0E7OzJCQUNLLGNBQUQsT0FBSyxVQUFXLFFBQWhCLEFBQXdCLFVBQVcsVUFBVyxtQkFBbUIsQ0FBQyxRQUFsRSxBQUEwRTtzQkFBMUU7d0JBQUEsQUFDSTtBQURKO0tBQUEsa0JBQ0ssY0FBRDs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLE9BQVEsS0FBUixJQURKLEFBQ0ksQUFDQSxzQkFBQyxjQUFEOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsT0FBUSxhQUFSLEFBQWdCLGFBRnBCLEFBRUksQUFDQSxzQkFBQyxjQUFEOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsT0FBUSxtQkFBQSxBQUFLLE1BQUwsQUFBVyxRQUFRLFFBQW5CLEFBQTJCLE9BQW5DLEFBQVEsQUFBa0MsVUFIOUMsQUFHSSxBQUNBLDRCQUFDLGNBQUQ7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxPQUFRLGFBQVIsQUFBZ0IsV0FKcEIsQUFJSSxBQUNBLHNCQUFDLGNBQUQ7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxPQUFRLGFBQVIsQUFBZ0IsZ0JBQW1CLE9BQW5DLFVBTEosQUFLSSxBQUNBLHNCQUFDLGNBQUQ7O3NCQUFBO3dCQUFBLEFBRVE7QUFGUjtBQUFBLGVBRVEsQUFBUSxXQUFSLEFBRUksdUJBRUEsQUFBQyx5Q0FBTyxPQUFSLEFBQWMsU0FBUSxPQUF0QixNQUE0QixTQUE1QixBQUFxQztzQkFBckM7d0JBQUE7QUFBQTtLQUFBLEVBWmhCLEFBTUksQUFNWSxBQUdaLDZCQUFDLGNBQUQ7O3NCQUFBO3dCQUFBLEFBRVE7QUFGUjtBQUFBLGVBRVEsQUFBUSxXQUFSLEFBRUksdUJBRUEsQUFBQyx5Q0FBTyxPQUFSLEFBQWMsUUFBTyxPQUFyQixNQUEyQixTQUEzQixBQUFvQztzQkFBcEM7d0JBQUE7QUFBQTtLQUFBLEVBdEJwQixBQUNJLEFBZUksQUFNWSxBQU12QjtBQXpETSxBQTJEUDs7a0JBQUEsQUFBZSIsImZpbGUiOiJyZW5kZXJSb3dzLmpzIiwic291cmNlUm9vdCI6IkQ6L1NvbGlkaXR5L0tpY2tzdGFydCJ9