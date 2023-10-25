export declare const initScene: (cpy: SceneModel, bal: SceneBit, ste: State) => SceneModel;
export declare const updateScene: (cpy: SceneModel, bal: SceneBit, ste: State) => SceneModel;
export declare const titleScene: (cpy: SceneModel, bal: SceneBit, ste: State) => Promise<SceneModel>;
export declare const spaceScene: (cpy: SceneModel, bal: SceneBit, ste: State) => Promise<SceneModel>;
export declare const huntScene: (cpy: SceneModel, bal: SceneBit, ste: State) => Promise<SceneModel>;
export declare const prologueScene: (cpy: SceneModel, bal: SceneBit, ste: State) => SceneModel;
import { SceneModel } from "../scene.model";
import SceneBit from "../fce/scene.bit";
import State from "../../99.core/state";
