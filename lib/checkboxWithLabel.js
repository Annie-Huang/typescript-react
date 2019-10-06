"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var CheckboxWithLabel = /** @class */ (function (_super) {
    __extends(CheckboxWithLabel, _super);
    function CheckboxWithLabel(props) {
        var _this = _super.call(this, props) || this;
        _this.onChange = function () {
            _this.setState({ isChecked: !_this.state.isChecked });
        };
        _this.state = { isChecked: false };
        return _this;
    }
    CheckboxWithLabel.prototype.render = function () {
        return (React.createElement("label", null,
            React.createElement("input", { type: "checkbox", checked: this.state.isChecked, onChange: this.onChange }),
            this.state.isChecked ? this.props.labelOn : this.props.labelOff));
    };
    return CheckboxWithLabel;
}(React.Component));
exports.CheckboxWithLabel = CheckboxWithLabel;
//# sourceMappingURL=checkboxWithLabel.js.map