"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var enzyme_1 = require("enzyme");
var checkboxWithLabel_1 = require("./checkboxWithLabel");
test('CheckboxWithLabel changes the text after click', function () {
    var checkbox = enzyme_1.shallow(React.createElement(checkboxWithLabel_1.CheckboxWithLabel, { labelOn: "On", labelOff: "Off" }));
    expect(checkbox.text()).toEqual('Off');
    checkbox.find('input').simulate('change');
    expect(checkbox.text()).toEqual('On');
});
//# sourceMappingURL=checkboxWithLabel.test.js.map