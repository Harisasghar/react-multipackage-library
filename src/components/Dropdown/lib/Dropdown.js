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
//import styles from './SdirDropdown.module.scss';
var styles = require('./Dropdown.module.scss');
var Dropdown = /** @class */ (function (_super) {
    __extends(Dropdown, _super);
    function Dropdown(props) {
        var _this = _super.call(this, props) || this;
        _this.toggle = _this.toggle.bind(_this);
        _this.state = {
            dropdownOpen: false
        };
        return _this;
    }
    Dropdown.prototype.toggle = function () {
        this.setState(function (prevState) { return ({
            dropdownOpen: !prevState.dropdownOpen
        }); });
    };
    Dropdown.prototype.render = function () {
        return (React.createElement("div", { className: styles.wrapper },
            React.createElement("select", { className: styles.dropdown }, this.props.options.map(function (element) {
                return React.createElement("option", { key: element.key, value: element.key }, element.value);
            }))));
    };
    return Dropdown;
}(React.Component));
export default Dropdown;
//# sourceMappingURL=Dropdown.js.map