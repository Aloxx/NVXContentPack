import { ArrayList } from "./ArrayList";

export class SizeCoveredArrayList<K> extends ArrayList<K> {
    public maxBufferedSize: number;
    
    constructor(maxBufferedSize: number = Infinity) {

        super();

        this.maxBufferedSize = maxBufferedSize;
    }
    add (element: K): boolean {
        /**
         * Max alloc size, dont accept new element
         */
        if(this.hasReachedMaxSize())
            return false;
        /**
         * Then basic add
         */
        super.add(element);

        return true;
    }

    hasReachedMaxSize(): boolean {
        return this.size() >= this.maxBufferedSize;
    }
}