import { binarySearch } from "../algorithms/search/binary-search";
import { binarySearchIteration } from "../algorithms/search/binary-search-iteration";
import { interpolationSearch } from "../algorithms/search/interpolation-search";
import { sequentialSearch } from "../algorithms/search/sequential-search";
import { quickSort } from "../algorithms/sorting/quick-sort";

export class SearchTest extends eui.Component implements eui.UIComponent {
    protected bc: eui.Button;
    constructor() {
        super();
        this.skinName = 'resource/eui_skins/scenes/UnitConsoleSceneSkin.exml';
    }

    childrenCreated() {
        super.childrenCreated();

        console.log('SearchTest~~~');

        this.bc.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBack, this);

        let arr = [5, 4, 3, 2, 1];
        console.log('SequentialSearch: ', sequentialSearch(arr.slice(0), 3));

        console.log('BinarySearch: ', binarySearch(arr.slice(0), 4));

        console.log('InterpolationSearch: ', interpolationSearch(quickSort(arr.slice(0)), 2));

        console.log('BinarySearchIteration: ', binarySearchIteration(arr.slice(0), 5));
    }

    onBack(e: egret.TouchEvent) {
        SceneManager.instance.closeScene(this);
    }
}