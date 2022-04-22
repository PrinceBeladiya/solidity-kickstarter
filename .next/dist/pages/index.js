'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Index = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _factory = require('../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _Layout = require('../component/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Solidity\\Kickstart\\pages\\index.js?entry',
    _this = undefined;

var Index = exports.Index = function Index(props) {

  var getCampaignsCards = function getCampaignsCards() {

    var Campaigns = props.addresses.map(function (address) {
      return {
        header: address,
        description: _react2.default.createElement(_routes.Link, { route: '/campaigns/' + address, __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          }
        }, _react2.default.createElement('a', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          }
        }, _react2.default.createElement(_semanticUiReact.Button, { style: { marginTop: "10px", marginBottom: "10px" }, __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          }
        }, 'View Campaign'))),
        fluid: true
      };
    });

    return _react2.default.createElement(_semanticUiReact.Card.Group, { items: Campaigns, __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      }
    });
  };

  return _react2.default.createElement(_Layout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, _react2.default.createElement('h3', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, 'Open Campaigns'), _react2.default.createElement(_routes.Link, { route: '/campaigns/new', __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, _react2.default.createElement(_semanticUiReact.Button, { floated: 'right', primary: true, content: 'Create Campaign', icon: 'plus circle', labelPosition: 'left', __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }))), getCampaignsCards()));
};

Index.getInitialProps = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
  var addresses;
  return _regenerator2.default.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _factory2.default.methods.getDeployedCampaign().call();

        case 2:
          addresses = _context.sent;
          return _context.abrupt('return', { addresses: addresses });

        case 4:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, _this);
}));

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNhcmQiLCJCdXR0b24iLCJmYWN0b3J5IiwiTGF5b3V0IiwiTGluayIsIkluZGV4IiwicHJvcHMiLCJnZXRDYW1wYWlnbnNDYXJkcyIsIkNhbXBhaWducyIsImFkZHJlc3NlcyIsIm1hcCIsImhlYWRlciIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsImZsdWlkIiwiZ2V0SW5pdGlhbFByb3BzIiwibWV0aG9kcyIsImdldERlcGxveWVkQ2FtcGFpZ24iLCJjYWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBUyxBQUFNOztBQUNmLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUyxBQUFZLEFBRXJCOzs7Ozs7O0FBQU8sSUFBTSx3QkFBUSxTQUFSLEFBQVEsTUFBQSxBQUFDLE9BQVUsQUFFOUI7O01BQU0sb0JBQW9CLFNBQXBCLEFBQW9CLG9CQUFNLEFBRTlCOztRQUFNLGtCQUFZLEFBQU0sVUFBTixBQUFnQixJQUFJLG1CQUFXLEFBQy9DOztnQkFBTyxBQUNHLEFBQ1I7cUNBQWEsQUFBQyw4QkFBSyx1QkFBTixBQUEyQjtzQkFBM0I7d0JBQUEsQUFBc0M7QUFBdEM7U0FBQSxrQkFBc0MsY0FBQTs7c0JBQUE7d0JBQUEsQUFBRztBQUFIO0FBQUEsMkJBQUcsQUFBQyx5Q0FBTyxPQUFPLEVBQUUsV0FBRixBQUFhLFFBQVEsY0FBcEMsQUFBZSxBQUFtQztzQkFBbEQ7d0JBQUE7QUFBQTtXQUZqRCxBQUVRLEFBQXNDLEFBQUcsQUFDdEQ7ZUFIRixBQUFPLEFBR0UsQUFFVjtBQUxRLEFBQ0w7QUFGSixBQUFrQixBQVFsQixLQVJrQjs7eUNBUVgsQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjtrQkFBbkI7b0JBQVAsQUFBTyxBQUNSO0FBRFE7S0FBQTtBQVZULEFBYUE7O3lCQUNFLEFBQUM7O2dCQUFEO2tCQUFBLEFBQ0U7QUFERjtBQUFBLEdBQUEsa0JBQ0UsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBREYsQUFDRSxBQUNBLG1DQUFBLEFBQUMsOEJBQUssT0FBTixBQUFZO2dCQUFaO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRSxBQUFDLHlDQUFPLFNBQVIsQUFBZ0IsU0FBUSxTQUF4QixNQUFnQyxTQUFoQyxBQUF3QyxtQkFBa0IsTUFBMUQsQUFBK0QsZUFBYyxlQUE3RSxBQUEyRjtnQkFBM0Y7a0JBSk4sQUFFRSxBQUNFLEFBQ0UsQUFHSDtBQUhHO1FBTlYsQUFDRSxBQUNFLEFBV0w7QUE1Qk07O0FBOEJQLE1BQUEsQUFBTSwyRkFBa0IsbUJBQUE7TUFBQTtnRUFBQTtjQUFBO3VDQUFBO2FBQUE7MEJBQUE7aUJBQ0Usa0JBQUEsQUFBUSxRQUFSLEFBQWdCLHNCQURsQixBQUNFLEFBQXNDOzthQUF4RDtBQURnQiwrQkFBQTsyQ0FHZixFQUFFLFdBSGEsQUFHZjs7YUFIZTthQUFBOzBCQUFBOztBQUFBO2NBQUE7QUFBeEIsQUFNQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJEOi9Tb2xpZGl0eS9LaWNrc3RhcnQifQ==