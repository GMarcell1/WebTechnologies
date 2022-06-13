"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validator = void 0;
var Error_1 = require("./Model/Error");
var Validator = /** @class */ (function () {
    function Validator() {
    }
    Validator.watchPostError = function (watch) {
        var errors = [];
        if (!watch) {
            errors.push(new Error_1.Error("watch", "The car object must be valid."));
            return errors;
        }
        if (!watch.price) {
            errors.push(new Error_1.Error("watch.price", "The car price is required."));
        }
        if (watch.price < 1) {
            errors.push(new Error_1.Error("watch.price", "The car price must be greater than 0."));
        }
        if (!watch.brand) {
            errors.push(new Error_1.Error("watch.brand", "The car brand is required."));
        }
        if (!watch.model) {
            errors.push(new Error_1.Error("watch.model", "The car model is required."));
        }
        if (!watch.gender) {
            errors.push(new Error_1.Error("watch.gender", "The car transmission is required."));
        }
        if (!watch.movement) {
            errors.push(new Error_1.Error("watch.movement", "The car fuel is required."));
        }
        if (!watch.caseMaterial) {
            errors.push(new Error_1.Error("watch.caseMaterial", "The car design is required."));
        }
        return errors;
    };
    return Validator;
}());
exports.Validator = Validator;
