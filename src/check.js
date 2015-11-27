'use strict';

exports.init = function () {
    Object.prototype.checkContainsKeys = function (keys) {
        var result = true;
        keys.forEach(function (key) {
            if (!(this.hasOwnProperty(key))) {
                result = false;
            }
        }, this);
        return result;
    },

    Object.prototype.checkHasKeys = function (keys) {
        if (keys.length !== Object.keys(this).length) {
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
    },

    Object.prototype.checkContainsValues = function (values) {
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
    },

    Object.prototype.checkHasValues = function (values) {
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
        if (thisValues.length === values.length) {
            return result;
        } else {
            return false;
        }
    },

    Object.prototype.checkHasValueType = function (key, type) {
        var types = [Number, Function, Array, String];
        if (types.indexOf(type) < 0) {
            return false;
        }
        return typeof type === typeof this[key];
    },

    Object.prototype.checkHasLength = function (length) {
        return this.length === length;
    },

    Object.prototype.checkHasParamsCount = function (count) {
        return this.length === count;
    },

    Object.prototype.checkHasWordsCount = function (count) {
        return (this.split(' ').length == count);
    };
};
