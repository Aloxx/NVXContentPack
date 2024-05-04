export class ArrayList<K> {
    private valuesArray: K[];
    constructor() { this.valuesArray = []; }
    
    public get(index: number): K {
        return this.valuesArray[index];
    }
    public add(element: K) {
        this.valuesArray.push(element);
    }
    public size (): number {
        return this.valuesArray.length;
    }
    public removeFirst(): K {
        const val = this.valuesArray[0];
        
        return this.remove(this.valuesArray.indexOf(val));
    }
    public contains(element: K) {
        return this.valuesArray.find(e => e == element);
    }
    public remove(index: number): any {
        return this.valuesArray.splice(index, 1);
    }
    public removeObject(object: any) {
        const newFields = this.valuesArray.filter(f => f != object);

        this.valuesArray = newFields;
    }
    public toArray(): any {
        return this.valuesArray;
    }
}