'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Campaign = require('./build/Campaign.json');

var _Campaign2 = _interopRequireDefault(_Campaign);

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (address) {
    return new _web2.default.eth.Contract(JSON.parse(_Campaign2.default.interface), address);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFxjYW1wYWlnbi5qcyJdLCJuYW1lcyI6WyJjYW1wYWlnbiIsIndlYjMiLCJhZGRyZXNzIiwiZXRoIiwiQ29udHJhY3QiLCJKU09OIiwicGFyc2UiLCJpbnRlcmZhY2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUCxBQUFxQixBQUFyQjs7OztBQUNBLEFBQU8sQUFBUCxBQUFpQixBQUFqQixBQUVBOzs7Ozs7a0JBQWUsVUFBQyxBQUFELFNBQWEsQUFDeEI7V0FBTyxJQUFJLGNBQUssQUFBTCxJQUFTLEFBQWIsU0FDSCxLQUFLLEFBQUwsTUFBVyxtQkFBUyxBQUFwQixBQURHLFlBRUgsQUFGRyxBQUFQLEFBSUg7QUFMRCIsImZpbGUiOiJjYW1wYWlnbi5qcyIsInNvdXJjZVJvb3QiOiJEOi9Tb2xpZGl0eS9LaWNrc3RhcnQifQ==