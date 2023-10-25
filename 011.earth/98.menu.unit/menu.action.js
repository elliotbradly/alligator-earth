"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClockMenu = exports.CLOCK_MENU = exports.ColorMenu = exports.COLOR_MENU = exports.EarthMenu = exports.EARTH_MENU = exports.CloseMenu = exports.CLOSE_MENU = exports.TestMenu = exports.TEST_MENU = exports.UpdateMenu = exports.UPDATE_MENU = exports.InitMenu = exports.INIT_MENU = void 0;
exports.INIT_MENU = "[Menu action] Init Menu";
class InitMenu {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_MENU;
    }
}
exports.InitMenu = InitMenu;
exports.UPDATE_MENU = "[Menu action] Update Menu";
class UpdateMenu {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_MENU;
    }
}
exports.UpdateMenu = UpdateMenu;
exports.TEST_MENU = "[Menu action] Test Menu";
class TestMenu {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.TEST_MENU;
    }
}
exports.TestMenu = TestMenu;
exports.CLOSE_MENU = "[Menu action] Close Menu";
class CloseMenu {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.CLOSE_MENU;
    }
}
exports.CloseMenu = CloseMenu;
exports.EARTH_MENU = "[Earth action] Earth Menu";
class EarthMenu {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.EARTH_MENU;
    }
}
exports.EarthMenu = EarthMenu;
exports.COLOR_MENU = "[Color action] Color Menu";
class ColorMenu {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.COLOR_MENU;
    }
}
exports.ColorMenu = ColorMenu;
exports.CLOCK_MENU = "[Clock action] Clock Menu";
class ClockMenu {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.CLOCK_MENU;
    }
}
exports.ClockMenu = ClockMenu;
//# sourceMappingURL=menu.action.js.map