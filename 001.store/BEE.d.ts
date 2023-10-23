import Model from "./99.core/interface/model.interface";
import Store from "./00.store.unit/fce/store.interface";
import Collect from "./97.collect.unit/fce/collect.interface";
import Menu from "./98.menu.unit/fce/menu.interface";
import Bus from "./99.bus.unit/fce/bus.interface";
export declare const list: Array<any>;
export declare const reducer: any;
export default class UnitData implements Model {
    store: Store;
    collect: Collect;
    menu: Menu;
    bus: Bus;
}
