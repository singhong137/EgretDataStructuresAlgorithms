import { HashTable, HashTableLinearProbing, HashTableLinearProbingLazy, HashTableSeparateChaining } from "../data_structures/HashTable";

export class HashTableTest extends eui.Component implements eui.UIComponent {
    protected bc: eui.Button;
    constructor() {
        super();
        this.skinName = 'resource/eui_skins/scenes/UnitConsoleSceneSkin.exml';
    }

    childrenCreated() {
        super.childrenCreated();

        console.log('HashTableTest~~~');

        this.bc.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBack, this);

        const hash = new HashTable();
        // const hash = new HashTableSeparateChaining();
        // const hash = new HashTableLinearProbing();
        // const hash = new HashTableLinearProbingLazy();

        hash.put('Gandalf', 'gandalf@email.com');
        hash.put('John', 'johnsnow@email.com');
        hash.put('Tyrion', 'tyrion@email.com');

        console.log(hash.hashCode('Gandalf') + ' -Gandalf');
        console.log(hash.hashCode('John') + ' -John');
        console.log(hash.hashCode('Tyrion') + ' -Tyrion');

        hash.remove('Gandalf');
        console.log(hash.get('Gandalf'));


        hash.put('Jack', 'jack@email.com');
        hash.put('Athelstan', 'athelstan@email.com');

        console.log(hash.hashCode('Jack') + ' -Jack');
        console.log(hash.hashCode('Athelstan') + ' -Athelstan');

        console.log(hash.toString());

        console.log('map');

        const map = new Map();
        map.set('Gandalf', 'gandalf@email.com');
        map.set('John', 'johnsnow@email.com');
        map.set('Tyrion', 'tyrion@email.com');

        console.log(map.has('Gandalf'));
        console.log(map.size);
        console.log(map.keys());
        console.log(map.values());
        console.log(map.get('Tyrion'));

        map.delete('John');
        console.log(map);

        console.log('weakMap');

        const weakMap = new WeakMap();
        const ob1 = { name: 'Gandalf' };
        const ob2 = { name: 'John' };
        const ob3 = { name: 'Tyrion' };

        weakMap.set(ob1, 'gandalf@email.com');
        weakMap.set(ob2, 'johnsnow@email.com');
        weakMap.set(ob3, 'tyrion@email.com');

        console.log(weakMap.has(ob1));
        console.log(weakMap.get(ob3));
        weakMap.delete(ob2);
        console.log(weakMap);
    }

    onBack(e: egret.TouchEvent) {
        SceneManager.instance.closeScene(this);
    }
}