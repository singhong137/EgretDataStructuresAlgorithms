import Dictionary from "../data_structures/Dictionary";

export class DictionaryTest extends eui.Component implements eui.UIComponent {
    protected bc: eui.Button;
    constructor() {
        super();
        this.skinName = 'resource/eui_skins/scenes/UnitConsoleSceneSkin.exml';
    }

    childrenCreated() {
        super.childrenCreated();

        console.log('DictionaryTest~~~');

        this.bc.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBack, this);

        const dictionary = new Dictionary();

        dictionary.set('Gandalf', 'gandalf@email.com');
        dictionary.set('John', 'johnsnow@email.com');
        dictionary.set('Tyrion', 'tyrion@email.com');

        console.log(dictionary.hasKey('Gandalf'));

        console.log(dictionary.size());
        console.log(dictionary.keys());
        console.log(dictionary.values());
        console.log(dictionary.get('Tyrion'));

        dictionary.remove('John');
        console.log(dictionary.keys());
        console.log(dictionary.values());
        console.log(dictionary.keyValues());

        dictionary.forEach((k, v) => { console.log('forEach: ', `key:${k},value:${v}`) });
    }

    onBack(e: egret.TouchEvent) {
        SceneManager.instance.closeScene(this);
    }
}