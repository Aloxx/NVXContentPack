const { ArrayList } = require ('../compiled/javac/ArrayList');
const { HashMap } = require ('../compiled/javac/HashMap');
const { SizeCoveredArrayList } = require ('../compiled/javac/SizeCoveredArrayList');

/** Test of ArrayList 
 * methods for test: .get && .contains && .remove && .size && .add
*/
function testArrayListMethods() {
    const list = new ArrayList();

    list.add("hello, world!");

    console.log(`Element in first index:`, list.get(0), `ListLength:`, list.size());
    console.log(`TestContains:`, !!list.contains("hello, world!"));

    list.remove(0);

    console.log(`ListLength after removal:`, list.size());
}testArrayListMethods();

/**
 * Test of HashMap
 * methods for test: .put && .containsKey && .containsValue && .size && .remove
 */
function testHashMapMethods() {
    const map = new HashMap();

    map.put(`hello`, ", world!");

    console.log(`Element by key:`, map.get('hello'), `MapLen: `, map.size())

    console.log(`TestContainsKey:`, map.containsKey("hello"));
    console.log(`TestContainsValue:`, map.containsValue(", world!"));

    map.remove('hello');

    console.log(`MapLength after removal:`, map.size());
    
}testHashMapMethods();

/**
 * Test of SizeCoveredArrayList
 * methods for test: .add && .hasReachedMaxSize
 */
function testSizeCoveredArrayListMethods() {
    const list = new SizeCoveredArrayList(5);

    console.log(`hasReachedMaxSize: ${list.hasReachedMaxSize()}`)

    for(let i = 0; i < 6; i++) {
        if(list.add(i)) {
            console.log(`Element with index ${i} and value ${i} was added`)
        }else {
            console.log(`Cannot add element ${i} since max elements size was reached!`)
        }
    };

    console.log(`hasReachedMaxSize: ${list.hasReachedMaxSize()}`)
}testSizeCoveredArrayListMethods();