import { ratInAMaze } from "../algorithms/back-tracking/rat-in-maze";
import { sudokuSolver } from "../algorithms/back-tracking/sudoku-solver";

export class BackTracingTest extends eui.Component implements eui.UIComponent {
    protected bc: eui.Button;
    constructor() {
        super();
        this.skinName = 'resource/eui_skins/scenes/UnitConsoleSceneSkin.exml';
    }

    childrenCreated() {
        super.childrenCreated();

        console.log('BackTracingTest~~~');

        this.bc.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBack, this);

        const maze = [
            [1, 0, 0, 0],
            [1, 1, 1, 1],
            [0, 0, 1, 0],
            [0, 1, 1, 1]
        ];

        console.log('ratInAMaze: ', ratInAMaze(maze));

        // const sudokuGrid = [
        //     [5, 3, 0, 0, 7, 0, 0, 0, 0],
        //     [6, 0, 0, 1, 9, 5, 0, 0, 0],
        //     [0, 9, 8, 0, 0, 0, 0, 6, 0],
        //     [8, 0, 0, 0, 6, 0, 0, 0, 3],
        //     [4, 0, 0, 8, 0, 3, 0, 0, 1],
        //     [7, 0, 0, 0, 2, 0, 0, 0, 6],
        //     [0, 6, 0, 0, 0, 0, 2, 8, 0],
        //     [0, 0, 0, 4, 1, 9, 0, 0, 5],
        //     [0, 0, 0, 0, 8, 0, 0, 7, 9]
        // ];

        const sudokuGrid = [
            [7, 0, 0, 0, 0, 6, 0, 0, 0],
            [4, 8, 0, 0, 0, 9, 0, 7, 0],
            [0, 0, 0, 4, 0, 0, 2, 5, 0],
            [6, 0, 0, 0, 2, 0, 0, 1, 0],
            [0, 9, 0, 0, 0, 0, 0, 6, 0],
            [0, 0, 1, 0, 0, 7, 4, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 3],
            [0, 0, 0, 1, 4, 0, 0, 0, 6],
            [0, 0, 2, 7, 0, 0, 0, 0, 9]
        ];

        console.log(`sudokuSolver

        [7, 0, 0, 0, 0, 6, 0, 0, 0],
        [4, 8, 0, 0, 0, 9, 0, 7, 0],
        [0, 0, 0, 4, 0, 0, 2, 5, 0],
        [6, 0, 0, 0, 2, 0, 0, 1, 0],
        [0, 9, 0, 0, 0, 0, 0, 6, 0],
        [0, 0, 1, 0, 0, 7, 4, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 3],
        [0, 0, 0, 1, 4, 0, 0, 0, 6],
        [0, 0, 2, 7, 0, 0, 0, 0, 9]
        :`, sudokuSolver(sudokuGrid)
        );
    }

    onBack(e: egret.TouchEvent) {
        SceneManager.instance.closeScene(this);
    }
}