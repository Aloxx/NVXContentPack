"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashMap = void 0;
const ArrayList_1 = require("./ArrayList");
class HashMap {
    persistentMap;
    constructor() { this.persistentMap = new Map(); }
    put(key, value) {
        this.persistentMap.set(key, value);
        return value;
    }
    size() {
        return this.persistentMap.size;
    }
    get(key) {
        //@ts-ignore
        return this.persistentMap.get(key);
    }
    remove(key, requireGetTransaction) {
        let element;
        this.persistentMap.delete(key);
        if (requireGetTransaction)
            element = this.get(key);
        return requireGetTransaction ? element : null;
    }
    values() {
        const arrayList = new ArrayList_1.ArrayList();
        for (const value of this.persistentMap.values()) {
            arrayList.add(value);
        }
        return arrayList;
    }
    clone() {
        //todo:
        return new HashMap();
    }
    containsKey(key) {
        return this.persistentMap.has(key);
    }
    containsValue(value) {
        for (const object of this.persistentMap.values()) {
            if (object == value)
                return true;
        }
        return false;
    }
}
exports.HashMap = HashMap;
