'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _phantom = require('./phantom');

var _phantom2 = _interopRequireDefault(_phantom);

var _crypto = require('crypto');

var _crypto2 = _interopRequireDefault(_crypto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class OutObject {

    constructor(phantom) {
        this._phantom = phantom;
        this.target = 'OutObject$' + _crypto2.default.randomBytes(16).toString('hex');
    }

    property(name) {
        return this._phantom.execute(this.target, 'property', [name]);
    }
}
exports.default = OutObject;