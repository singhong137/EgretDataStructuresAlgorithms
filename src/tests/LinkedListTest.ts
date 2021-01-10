import { DoublyLinkedList, LinkedList, SortedLinkedList } from "../data_structures/LinkedList";

export class LinkedListTest extends eui.Component implements eui.UIComponent {
    protected bc: eui.Button;
    constructor() {
        super();
        this.skinName = 'resource/eui_skins/scenes/UnitConsoleSceneSkin.exml';
    }

    childrenCreated() {
        super.childrenCreated();

        console.log('LinkedListTest~~~');

        this.bc.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBack, this);

        let list = new LinkedList();
        list.push(15);
        list.push(10);
        list.push(8);
        console.log(list.toString());

        list.insert(9, 2)
        console.log(list.toString());
        console.log(list.getElementAt(3));
        console.log(list.toString());
        console.log(list.remove(15));
        console.log(list.toString());

        console.log(list.indexOf(9));
        console.log(list.removeAt(2));
        console.log(list.toString());
        console.log(list.size());
        console.log(list.isEmpty());
        console.log(list.getHead());

        let list1 = new DoublyLinkedList();
        list1.push(15);
        list1.push(10);
        list1.push(8);
        console.log(list1.toString());

        list1.insert(9, 2)
        console.log(list1.toString());
        console.log(list1.getElementAt(3));
        console.log(list1.toString());
        console.log(list1.remove(15));
        console.log(list1.toString());

        console.log(list1.indexOf(9));
        console.log(list1.removeAt(2));
        console.log(list1.toString());
        console.log(list1.size());
        console.log(list1.isEmpty());
        console.log(list1.getHead());

        console.log(list1.getTail());
        console.log(list1.inverseToString());

        console.log('SortedLinkedList~~');
        const sortedLinkedList = new SortedLinkedList();
        sortedLinkedList.push(1);
        sortedLinkedList.insert(4, 1);
        console.log(sortedLinkedList.toString());
        sortedLinkedList.push(2);
        sortedLinkedList.insert(3, 0);
        console.log(sortedLinkedList.toString());
    }

    onBack(e: egret.TouchEvent) {
        SceneManager.instance.closeScene(this);
    }
}