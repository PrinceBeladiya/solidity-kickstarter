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

var _this = undefined,
    _jsxFileName = 'D:\\Solidity\\Kickstart\\pages\\index.js?entry';

var Index = exports.Index = function Index(props) {

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

  var getCampaignsCards = function getCampaignsCards() {

    var Campaigns = props.addresses.map(function (address) {
      return {
        header: address,
        description: _react2.default.createElement(_routes.Link, { route: '/campaigns/' + address, __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          }
        }, _react2.default.createElement('a', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          }
        }, _react2.default.createElement(_semanticUiReact.Button, { style: { marginTop: "10px", marginBottom: "10px" }, __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          }
        }, 'View Campaign'))),
        fluid: true
      };
    });

    return _react2.default.createElement(_semanticUiReact.Card.Group, { items: Campaigns, __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      }
    });
  };

  return _react2.default.createElement(_Layout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, _react2.default.createElement('h3', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, 'Open Campaigns'), _react2.default.createElement(_routes.Link, { route: '/campaigns/new', __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, _react2.default.createElement(_semanticUiReact.Button, { floated: 'right', primary: true, content: 'Create Campaign', icon: 'plus circle', labelPosition: 'left', __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }))), getCampaignsCards()));
};

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNhcmQiLCJCdXR0b24iLCJmYWN0b3J5IiwiTGF5b3V0IiwiTGluayIsIkluZGV4IiwicHJvcHMiLCJnZXRJbml0aWFsUHJvcHMiLCJtZXRob2RzIiwiZ2V0RGVwbG95ZWRDYW1wYWlnbiIsImNhbGwiLCJhZGRyZXNzZXMiLCJnZXRDYW1wYWlnbnNDYXJkcyIsIkNhbXBhaWducyIsIm1hcCIsImhlYWRlciIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsImZsdWlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBUyxBQUFNOztBQUNmLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUyxBQUFZLEFBRXJCOzs7Ozs7O0FBQU8sSUFBTSx3QkFBUSxTQUFSLEFBQVEsTUFBQSxBQUFDLE9BQVUsQUFFOUI7O1FBQUEsQUFBTSwyRkFBa0IsbUJBQUE7UUFBQTtrRUFBQTtnQkFBQTt5Q0FBQTtlQUFBOzRCQUFBO21CQUNFLGtCQUFBLEFBQVEsUUFBUixBQUFnQixzQkFEbEIsQUFDRSxBQUFzQzs7ZUFBeEQ7QUFEZ0IsaUNBQUE7NkNBR2YsRUFBRSxXQUhhLEFBR2Y7O2VBSGU7ZUFBQTs0QkFBQTs7QUFBQTtnQkFBQTtBQUF4QixBQU1BOztNQUFNLG9CQUFvQixTQUFwQixBQUFvQixvQkFBTSxBQUU5Qjs7UUFBTSxrQkFBWSxBQUFNLFVBQU4sQUFBZ0IsSUFBSSxtQkFBVyxBQUMvQzs7Z0JBQU8sQUFDRyxBQUNSO3FDQUFhLEFBQUMsOEJBQUssdUJBQU4sQUFBMkI7c0JBQTNCO3dCQUFBLEFBQXNDO0FBQXRDO1NBQUEsa0JBQXNDLGNBQUE7O3NCQUFBO3dCQUFBLEFBQUc7QUFBSDtBQUFBLDJCQUFHLEFBQUMseUNBQU8sT0FBTyxFQUFFLFdBQUYsQUFBYSxRQUFRLGNBQXBDLEFBQWUsQUFBbUM7c0JBQWxEO3dCQUFBO0FBQUE7V0FGakQsQUFFUSxBQUFzQyxBQUFHLEFBQ3REO2VBSEYsQUFBTyxBQUdFLEFBRVY7QUFMUSxBQUNMO0FBRkosQUFBa0IsQUFRbEIsS0FSa0I7O3lDQVFYLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUI7a0JBQW5CO29CQUFQLEFBQU8sQUFDUjtBQURRO0tBQUE7QUFWVCxBQWFBOzt5QkFDRSxBQUFDOztnQkFBRDtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLGNBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQURGLEFBQ0UsQUFDQSxtQ0FBQSxBQUFDLDhCQUFLLE9BQU4sQUFBWTtnQkFBWjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsQUFBQyx5Q0FBTyxTQUFSLEFBQWdCLFNBQVEsU0FBeEIsTUFBZ0MsU0FBaEMsQUFBd0MsbUJBQWtCLE1BQTFELEFBQStELGVBQWMsZUFBN0UsQUFBMkY7Z0JBQTNGO2tCQUpOLEFBRUUsQUFDRSxBQUNFLEFBR0g7QUFIRztRQU5WLEFBQ0UsQUFDRSxBQVdMO0FBbENNLEFBb0NQOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkQ6L1NvbGlkaXR5L0tpY2tzdGFydCJ9