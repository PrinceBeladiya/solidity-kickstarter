webpackHotUpdate(8,{

/***/ 1527:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Landing = undefined;

var _regenerator = __webpack_require__(85);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(69);

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = __webpack_require__(86);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _Layout = __webpack_require__(1503);

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = __webpack_require__(916);

var _semanticUiReact = __webpack_require__(540);

var _campaign = __webpack_require__(1521);

var _campaign2 = _interopRequireDefault(_campaign);

var _renderRows = __webpack_require__(1528);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "D:\\Solidity\\Kickstart\\pages\\campaigns\\requests\\landing.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\Solidity\\Kickstart\\pages\\campaigns\\requests\\landing.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/campaigns\\requests\\landing")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC4zYzU0MWY2NWFhMTU1YWVjNzhmYS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2FtcGFpZ25zL3JlcXVlc3RzL2xhbmRpbmcuanM/ZWRmZjQxMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudC9MYXlvdXQnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vLi4vLi4vcm91dGVzJztcclxuaW1wb3J0IHsgQnV0dG9uLCBUYWJsZSB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0IENhbXBhaWduIGZyb20gJy4uLy4uLy4uL2V0aGVyZXVtL2NhbXBhaWduJztcclxuaW1wb3J0IFJlbmRlclJvd3MgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50L3JlbmRlclJvd3MnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExhbmRpbmcgPSAocHJvcHMpID0+IHtcclxuXHJcbiAgICBjb25zdCB7IEhlYWRlciwgUm93LCBIZWFkZXJDZWxsLCBCb2R5IH0gPSBUYWJsZTtcclxuXHJcbiAgICBjb25zdCByb3dSZW5kZXJpbmcgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHByb3BzLnJlcXVlc3RzLm1hcCgocmVxdWVzdCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIDxSZW5kZXJSb3dzXHJcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgaWQ9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdD17cmVxdWVzdH1cclxuICAgICAgICAgICAgICAgIGFkZHJlc3M9e3Byb3BzLmFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICBhcHByb3ZhbD17cHJvcHMuYXBwcm92YWxDb3VudH1cclxuICAgICAgICAgICAgLz47XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPGgzPlJlcXVlc3RzPC9oMz5cclxuXHJcbiAgICAgICAgICAgIDxMaW5rIHJvdXRlPXtgL2NhbXBhaWducy8ke3Byb3BzLmFkZHJlc3N9L3JlcXVlc3RzL25ld2B9PlxyXG4gICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5IGZsb2F0ZWQ9J3JpZ2h0JyBzdHlsZT17eyBtYXJnaW5Cb3R0b20gOiAxMCB9fT5BZGQgUmVxdWVzdDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICA8VGFibGUgY2VsbGVkPlxyXG4gICAgICAgICAgICAgICAgPEhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGVyQ2VsbD5JRDwvSGVhZGVyQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlckNlbGw+RGVzY3JpcHRpb248L0hlYWRlckNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXJDZWxsPkFtb3VudDwvSGVhZGVyQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlckNlbGw+UmVjaXBpZW50PC9IZWFkZXJDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGVyQ2VsbD5BcHByb3ZhbCBDb3VudDwvSGVhZGVyQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlckNlbGw+QXBwcm92ZTwvSGVhZGVyQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlckNlbGw+RmluYWxpemU8L0hlYWRlckNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICA8L0hlYWRlcj5cclxuXHJcbiAgICAgICAgICAgICAgICA8Qm9keT5cclxuICAgICAgICAgICAgICAgICAgICB7cm93UmVuZGVyaW5nKCl9XHJcbiAgICAgICAgICAgICAgICA8L0JvZHk+XHJcbiAgICAgICAgICAgIDwvVGFibGU+XHJcblxyXG4gICAgICAgICAgICA8aDQ+Rm91bmQgcmVxdWVzdCA6LSB7IHByb3BzLnJlcXVlc3RDb3VudCB9PC9oND5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgIClcclxufVxyXG5cclxuTGFuZGluZy5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAocHJvcHMpID0+IHtcclxuXHJcbiAgICBjb25zdCBhZGRyZXNzID0gcHJvcHMucXVlcnkuYWRkcmVzcztcclxuXHJcbiAgICBjb25zdCBjYW1wYWlnbiA9IGF3YWl0IENhbXBhaWduKGFkZHJlc3MpO1xyXG5cclxuICAgIGNvbnN0IHJlcXVlc3RDb3VudCA9IGF3YWl0IGNhbXBhaWduLm1ldGhvZHMuZ2V0UmVxdWVzdENvdW50KCkuY2FsbCgpO1xyXG5cclxuICAgIGNvbnN0IGFwcHJvdmFsQ291bnQgPSBhd2FpdCBjYW1wYWlnbi5tZXRob2RzLmNvdW50QXBwcm92YWxzKCkuY2FsbCgpO1xyXG5cclxuICAgIGNvbnN0IHJlcXVlc3RzID0gYXdhaXQgUHJvbWlzZS5hbGwoXHJcbiAgICAgICAgQXJyYXkocGFyc2VJbnQocmVxdWVzdENvdW50KSkuZmlsbCgpLm1hcCgoZWxlbWVudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGNhbXBhaWduLm1ldGhvZHMucmVxdWVzdHMoaW5kZXgpLmNhbGwoKVxyXG4gICAgICAgIH0pXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiB7IGFkZHJlc3MsIHJlcXVlc3RDb3VudCwgcmVxdWVzdHMsIGFwcHJvdmFsQ291bnQgfTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExhbmRpbmc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvY2FtcGFpZ25zL3JlcXVlc3RzL2xhbmRpbmcuanM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7Ozs7Ozs7O0FBREE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTs7QUFMQTtBQU9BO0FBUEE7QUFDQTtBQU9BO0FBRUE7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUlBO0FBQ0E7QUFEQTtBQUFBOztBQUtBO0FBQUE7QUFBQTtBQUFBO0FBNUNBO0FBQ0E7QUFnREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFGQTtBQUFBO0FBSUE7QUFDQTtBQURBO0FBSkE7QUFBQTtBQU1BO0FBQ0E7QUFEQTtBQU5BO0FBQUE7QUFRQTtBQUNBO0FBREE7QUFSQTtBQUFBO0FBVUE7QUFFQTtBQURBO0FBQ0E7QUFGQTtBQVZBO0FBZ0JBO0FBQ0E7QUFqQkE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBb0JBO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9