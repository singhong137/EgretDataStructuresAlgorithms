import { Stack, StackArray } from "../data_structures/Stack";

export class StackTest extends eui.Component implements eui.UIComponent {
    protected bc: eui.Button;
    constructor() {
        super();
        this.skinName = 'resource/eui_skins/scenes/UnitConsoleSceneSkin.exml';
    }

    childrenCreated() {
        super.childrenCreated();

        console.log('StackTest~~~');

        this.bc.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBack, this);

        const stack = new StackArray();
        console.log(stack.isEmpty());

        stack.push(5);
        stack.push(8);
        console.log(stack.peek());
        stack.push(11);
        console.log(stack.size());
        console.log(stack.isEmpty());
        stack.push(15);
        stack.pop();
        stack.pop();
        console.log(stack.size());

        const stack1 = new Stack();
        stack1.push(5);
        stack1.push(8);
        stack1.clear();

        const decimal2Binary = (decNum: number) => {
            const remStack = new Stack<number>();
            let number = decNum;
            let rem: number;
            let binaryString = '';
            while (number > 0) {
                rem = number % 2 | 0;
                remStack.push(rem);
                number = number / 2 | 0;
            }
            while (!remStack.isEmpty()) binaryString += remStack.pop().toString();
            return binaryString;
        }

        console.log('decimal2Binary:');
        console.log(decimal2Binary(233));
        console.log(decimal2Binary(10));
        console.log(decimal2Binary(1000));
        console.log(decimal2Binary(13));

        const baseConverter = (decNumber: number, base: number) => {
            const remStack = new Stack<number>();
            const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            let number = decNumber;
            let rem: number;
            let baseString = '';
            if (!(base >= 2 && base <= 36)) return '';
            while (number > 0) {
                rem = number % base | 0;
                remStack.push(rem);
                number = number / base | 0;
            }
            while (!remStack.isEmpty()) baseString += digits[remStack.pop()];
            return baseString;
        }

        console.log('baseConverter:');
        console.log('100345 to binary', baseConverter(100345, 2));
        console.log('100345 to octal', baseConverter(100345, 8));
        console.log('100345 to hexadecimal', baseConverter(100345, 16));
        console.log('100345 to 35 base', baseConverter(100345, 35));
    }

    onBack(e: egret.TouchEvent) {
        SceneManager.instance.closeScene(this);
    }
}