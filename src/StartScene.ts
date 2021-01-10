import { BackTracingTest } from "./tests/BackTracingTest";
import { ConsoleUnitTest } from "./tests/ConsoleUnitTest";
import { DictionaryTest } from "./tests/DictionaryTest";
import { DynamicProgramingTest } from "./tests/DynamicProgramingTest";
import { FunctionalTest } from "./tests/FunctionalTest";
import { GraphTest } from "./tests/GraphTest";
import { GreedyTest } from "./tests/GreedyTest";
import { HashTableTest } from "./tests/HashTableTest";
import { HeapTest } from "./tests/HeapTest";
import { LinkedListTest } from "./tests/LinkedListTest";
import { QueueTest } from "./tests/QueueTest";
import RecursiveTest from "./tests/RecursiveTest";
import { SearchTest } from "./tests/SearchTest";
import { SetTest } from "./tests/SetTest";
import { SortingTest } from "./tests/SortingTest";
import { StackTest } from "./tests/StackTest";
import { TreeTest } from "./tests/TreeTest";

export class StartScene extends eui.Component implements eui.UIComponent {
    protected b0: eui.Button;
    protected b1: eui.Button;
    protected b2: eui.Button;
    protected b3: eui.Button;
    protected b4: eui.Button;
    protected b5: eui.Button;
    protected b6: eui.Button;
    protected b7: eui.Button;
    protected b8: eui.Button;
    protected b9: eui.Button;
    protected b10: eui.Button;
    protected b11: eui.Button;
    protected b12: eui.Button;
    protected b13: eui.Button;
    protected b14: eui.Button;
    protected b15: eui.Button;
    protected b16: eui.Button;

    constructor() {
        super();
        this.skinName = 'resource/eui_skins/scenes/StartSceneSkin.exml';
        console.log('~~~ ', 11);
    }

    partAdded(partName: string, instance: any) {
        super.partAdded(partName, instance);
    }

    btns: egret.DisplayObject[] = [];

    childrenCreated() {
        super.childrenCreated();

        this.btns.push(this.b0, this.b1, this.b2, this.b3, this.b4, this.b5, this.b6, this.b7, this.b8, this.b9, this.b10, this.b11, this.b12, this.b13, this.b14, this.b15, this.b16);

        this.btns.forEach((v, i) => {
            v.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
        });
    }

    onTouchTap(e: egret.TouchEvent) {
        switch (e.target) {
            case this.b0:
                SceneManager.instance.openScene(new ConsoleUnitTest());
                break;
            case this.b1:
                SceneManager.instance.openScene(new StackTest());
                break;
            case this.b2:
                SceneManager.instance.openScene(new QueueTest());
                break;
            case this.b3:
                SceneManager.instance.openScene(new LinkedListTest());
                break;
            case this.b4:
                SceneManager.instance.openScene(new SetTest());
                break;
            case this.b5:
                SceneManager.instance.openScene(new DictionaryTest());
                break;
            case this.b6:
                SceneManager.instance.openScene(new HashTableTest());
                break;
            case this.b7:
                SceneManager.instance.openScene(new RecursiveTest());
                break;
            case this.b8:
                SceneManager.instance.openScene(new TreeTest());
                break;
            case this.b9:
                SceneManager.instance.openScene(new HeapTest());
                break;
            case this.b10:
                SceneManager.instance.openScene(new GraphTest());
                break;
            case this.b11:
                SceneManager.instance.openScene(new SortingTest());
                break;
            case this.b12:
                SceneManager.instance.openScene(new SearchTest());
                break;
            case this.b13:
                SceneManager.instance.openScene(new DynamicProgramingTest());
                break;
            case this.b14:
                SceneManager.instance.openScene(new GreedyTest());
                break;
            case this.b15:
                SceneManager.instance.openScene(new BackTracingTest());
                break;
            case this.b16:
                SceneManager.instance.openScene(new FunctionalTest());
                break;
        }
    }
}