import { knapSackDP } from "../algorithms/dynamic-programing/knapsackDP";
import { lcsDP } from "../algorithms/dynamic-programing/longest-common-subsequenceDP";
import { matrixChainOrder } from "../algorithms/dynamic-programing/matrix-chain-multiplicationDP";
import { minCoinChangeDP } from "../algorithms/dynamic-programing/min-coin-changeDP";

export class DynamicProgramingTest extends eui.Component implements eui.UIComponent {
    protected bc: eui.Button;
    constructor() {
        super();
        this.skinName = 'resource/eui_skins/scenes/UnitConsoleSceneSkin.exml';
    }

    childrenCreated() {
        super.childrenCreated();

        console.log('DynamicProgramingTest~~~');

        this.bc.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBack, this);

        console.log('minCoinChangeDP([1, 5, 10], 15): ', minCoinChangeDP([1, 5, 10], 15));
        console.log('minCoinChangeDP([1, 3, 4], 6): ', minCoinChangeDP([1, 3, 4], 6));
        console.log('minCoinChangeDP([1, 5, 10, 25], 36): ', minCoinChangeDP([1, 5, 10, 25], 36));

        const values = [3, 4, 5];
        const weights = [2, 3, 4];
        const capacity = 5;
        const n = values.length;
        console.log('knapSack： ', knapSackDP(capacity, weights, values, n));

        const wordX = 'acbaed';
        const wordY = 'abcadf';
        console.log('lcsDP: ', lcsDP(wordX, wordY));

        const p = [10, 100, 5, 50, 1];
        console.log('matrixChainMultiplicationDPCount [10, 100, 5, 50, 1]: ', matrixChainOrder(p));
        const q = [30, 35, 15, 5, 10, 20, 25];
        console.log('matrixChainMultiplicationDPCount [30, 35, 15, 5, 10, 20, 25]: ', matrixChainOrder(q));
    }

    onBack(e: egret.TouchEvent) {
        SceneManager.instance.closeScene(this);
    }
}