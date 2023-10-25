import * as Act from "./game.action";
import { GameModel } from "./game.model";
import State from "../99.core/state";
export declare function reducer(model: GameModel, act: Act.Actions, state?: State): GameModel | Promise<GameModel>;
