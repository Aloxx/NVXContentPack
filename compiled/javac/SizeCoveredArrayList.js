"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SizeCoveredArrayList = void 0;
const ArrayList_1 = require("./ArrayList");
class SizeCoveredArrayList extends ArrayList_1.ArrayList {
    maxBufferedSize;
    constructor(maxBufferedSize = Infinity) {
        super();
        this.maxBufferedSize = maxBufferedSize;
    }
    add(element) {
        /**
         * Max alloc size, dont accept new element
         */
        if (this.hasReachedMaxSize())
            return false;
        /**
         * Then basic add
         */
        super.add(element);
        return true;
    }
    hasReachedMaxSize() {
        return this.size() >= this.maxBufferedSize;
    }
}
exports.SizeCoveredArrayList = SizeCoveredArrayList;
