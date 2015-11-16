'use strict';

exports.init = function () {
    var checkCorrectTypes = function (object, prototypes) {
        for (var i = 0; i < prototypes.length; i++) {
            if (Object.getPrototypeOf(object) === prototypes[i]) {
                return true;
            }
        }
        return false;
    };

    Object.prototype.checkContainsKeys = function (keys) {
        if (checkCorrectTypes(this, [Object.prototype, Array.prototype])) {
            var result = true;
            keys.forEach(function (key) {
                if (!(this.hasOwnProperty(key))) {
                    result = false;
                }
            }, this);
            return result;
        }
    },

    Object.prototype.checkHasKeys = function (keys) {
        if (checkCorrectTypes(this, [Object.prototype, Array.prototype])) {
            if (keys.length != Object.keys(this).length) {
                return false;
            }
            var localKeys = [];
            for (var key in this) {
                if (this.hasOwnProperty(key)) {
                    localKeys.push(key);
                }
            }
            keys.forEach(function (key) {
                if (localKeys.indexOf(key) < 0) {
                    return false;
                }
            });
            return true;
        }
    },

    Object.prototype.checkContainsValues = function (values) {
        if (checkCorrectTypes(this, [Object.prototype, Array.prototype])) {
            var thisValues = [];
            Object.keys(this).forEach(function (key) {
                thisValues.push(this[key]);
            }, this);
            var result = true;
            values.forEach(function (value) {
                if (thisValues.indexOf(value) < 0) {
                    result = false;
                }
            });
            return result;
        }
    },

    Object.prototype.checkHasValues = function (values) {
        if (checkCorrectTypes(this, [Object.prototype, Array.prototype])) {
            var result = true;
            Object.keys.forEach(function (key) {
                if (values.indexOf(this[key]) < 0) {
                    result = false;
                }
            }, this);
            return result;
        }
    },

    Object.prototype.checkHasValueType = function (key, type) {
        if (checkCorrectTypes(this, [Object.prototype, Array.prototype])) {
            var types = [Number, Function, Array, String];
            if (types.indexOf(type) < 0) {
                return false;
            }
            return this[key] === type(this[key]);
        }
    },

    Object.prototype.checkHasLength = function (length) {
        if (checkCorrectTypes(this, [String.prototype, Array.prototype])) {
            return this.length === length;
        }
    },

    Object.prototype.checkHasParamsCount = function (count) {
        if (checkCorrectTypes(this, [Function.prototype])) {
            return this.length == count;
        }
    },

    Object.prototype.checkHasWordsCount = function (count) {
        if (checkCorrectTypes(this, [String.prototype])) {
            return (this.split(' ').length == count);
        }
    };
};
