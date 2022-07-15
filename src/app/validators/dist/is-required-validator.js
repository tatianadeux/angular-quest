"use strict";
exports.__esModule = true;
exports.isRequiredValidator = void 0;
function isRequiredValidator(identifiant, title) {
    return function (control) {
        var _a, _b;
        var valueId = (_a = control.get('credentials')) === null || _a === void 0 ? void 0 : _a.get('title');
        var valueTitle = (_b = control.get('credentials')) === null || _b === void 0 ? void 0 : _b.get('title');
        var valid = (((valueId === null || valueId === void 0 ? void 0 : valueId.value) || (valueTitle === null || valueTitle === void 0 ? void 0 : valueTitle.value)) != '');
        console.log(valid);
        var errors = {
            validation: {
                rules: "Le titre ou l'identifiant est requis"
            }
        };
        return !valid ? errors : null;
    };
}
exports.isRequiredValidator = isRequiredValidator;
