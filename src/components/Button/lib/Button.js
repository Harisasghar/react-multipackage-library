var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
//import styles from './Button.module.scss';
var styles = require('./Button.module.scss');
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    Button.prototype.render = function () {
        var classes = (this.props.primary ? styles.primary : styles.secondary) + " \n                   " + (this.props.disabled ? this.props.primary ? styles['primary-disabled'] : styles['secondary-disabled'] : '');
        return (React.createElement("button", { className: classes, onClick: this.props.onClick }, this.props.value));
    };
    return Button;
}(React.Component));
export default Button;
//# sourceMappingURL=Button.js.map