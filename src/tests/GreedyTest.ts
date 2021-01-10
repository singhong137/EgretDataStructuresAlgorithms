import { knapSackGreedy } from "../algorithms/greedy/knapsackGreedy";
import { minCoinChangeGreedy } from "../algorithms/greedy/min-coin-changeGreedy";

export class GreedyTest extends eui.Component implements eui.UIComponent {
    protected bc: eui.Button;
    constructor() {
        super();
        this.skinName = 'resource/eui_skins/scenes/UnitConsoleSceneSkin.exml';
    }

    childrenCreated() {
        super.childrenCreated();

        console.log('GreedyTest~~~');

        this.bc.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBack, this);

        console.log('minCoinChangeGreedy [1, 5, 10],15: ', minCoinChangeGreedy([1, 5, 10], 15));
        console.log('minCoinChangeGreedy [1, 3, 4],6: ', minCoinChangeGreedy([1, 3, 4], 6));

        const values = [3, 4, 5];
        const weights = [2, 3, 4];
        const capacity = 6;

        console.log('KnapSackGreedy: ', knapSackGreedy(capacity, weights, values));
    }

    onBack(e: egret.TouchEvent) {
        SceneManager.instance.closeScene(this);
    }
}