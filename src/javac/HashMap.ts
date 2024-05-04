import { ArrayList } from "./ArrayList";

export class HashMap<K,V> {
    private persistentMap: Map<K, V>;
    constructor () { this.persistentMap = new Map(); }

    public put (key: K, value: V): V {
        this.persistentMap.set(key, value);
        return value;
    }
    public size(): number {
        return this.persistentMap.size;
    }
    public get(key: K): V {
        //@ts-ignore
        return this.persistentMap.get(key);
    }
    public remove(key: K, requireGetTransaction?: boolean): V {
        let element: any;
        this.persistentMap.delete(key);

        if(requireGetTransaction)
            element = this.get(key);

        return requireGetTransaction ? element : null;
    }
    public values(): ArrayList<V> {
        const arrayList = new ArrayList<V>();

        for(const value of this.persistentMap.values()) {
            arrayList.add(value);
        }
    
        return arrayList;
    }
    public clone (): HashMap<K , V> {
        //todo:
        return new HashMap<K,V>();
    }
    public containsKey(key: K): boolean {
        return this.persistentMap.has(key);
    }
    public containsValue(value: V): boolean {
        for(const object of this.persistentMap.values()) {
            if(object == value)
                return true;
        }
        return false;
    }

}