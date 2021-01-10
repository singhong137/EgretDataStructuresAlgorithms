class SceneManager {
    private static _mySelf: SceneManager;
    constructor() {
    }
    static get instance(): SceneManager {
        if (!SceneManager._mySelf) SceneManager._mySelf = new SceneManager();
        return SceneManager._mySelf;
    }

    private _root: eui.Component & eui.UIComponent;
    public set root(root: eui.Component & eui.UIComponent) {
        this._root = root;
    }

    public openScene(scene: eui.Component & eui.UIComponent) {
        this._root.addChild(scene);
    }

    public closeScene(scene: eui.Component & eui.UIComponent) {
        this._root.removeChild(scene);
    }
}