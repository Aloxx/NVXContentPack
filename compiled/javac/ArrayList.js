"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayList = void 0;
class ArrayList {
    valuesArray;
    constructor() { this.valuesArray = []; }
    get(index) {
        return this.valuesArray[index];
    }
    add(element) {
        this.valuesArray.push(element);
    }
    size() {
        return this.valuesArray.length;
    }
    removeFirst() {
        const val = this.valuesArray[0];
        return this.remove(this.valuesArray.indexOf(val));
    }
    contains(element) {
        return this.valuesArray.find(e => e == element);
    }
    remove(index) {
        return this.valuesArray.splice(index, 1);
    }
    removeObject(object) {
        const newFields = this.valuesArray.filter(f => f != object);
        this.valuesArray = newFields;
    }
    toArray() {
        return this.valuesArray;
    }
}
exports.ArrayList = ArrayList;
