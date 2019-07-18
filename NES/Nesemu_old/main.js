/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./main.ts","lib"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/app.ts":
/*!********************!*\
  !*** ./app/app.ts ***!
  \********************/
/*! exports provided: Option, App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Option", function() { return Option; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var _nes_nes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../nes/nes */ "./nes/nes.ts");
/* harmony import */ var _app_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app_event */ "./app/app_event.ts");
/* harmony import */ var _util_audio_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/audio_manager */ "./util/audio_manager.ts");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui */ "./app/ui.ts");
/* harmony import */ var _util_storage_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/storage_util */ "./util/storage_util.ts");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/util */ "./util/util.ts");






const CPU_HZ = 1789773;
const MAX_ELAPSED_TIME = 1000 / 15;
const DEFAULT_MASTER_VOLUME = 0.125;
class Option {
}
class App {
    constructor(wndMgr, option, noDefault) {
        this.wndMgr = wndMgr;
        this.destroying = false;
        this.isBlur = false;
        this.stream = new _app_event__WEBPACK_IMPORTED_MODULE_1__["AppEvent"].Stream();
        this.paletWnd = null;
        this.hasNameTableWnd = false;
        this.hasPatternTableWnd = false;
        this.hasRegisterWnd = false;
        this.hasTraceWnd = false;
        this.hasCtrlWnd = false;
        this.volume = 1;
        if (noDefault)
            return;
        this.nes = _nes_nes__WEBPACK_IMPORTED_MODULE_0__["Nes"].create();
        window.nes = this.nes; // Put nes into global.
        this.nes.setVblankCallback((leftV) => { this.onVblank(leftV); });
        this.nes.setBreakPointCallback(() => { this.onBreakPoint(); });
        this.subscription = this.stream
            .subscribe(type => {
            switch (type) {
                case 9 /* DESTROY */:
                    this.cleanUp();
                    if (option.onClosed)
                        option.onClosed(this);
                    break;
                case 1 /* RENDER */:
                    break;
                case 2 /* RUN */:
                    this.nes.getCpu().pause(false);
                    break;
                case 3 /* PAUSE */:
                    this.nes.getCpu().pause(true);
                    this.muteAudio();
                    break;
                case 4 /* STEP */:
                    this.nes.step(0);
                    break;
                case 5 /* RESET */:
                    this.nes.reset();
                    break;
            }
        });
        this.screenWnd = new _ui__WEBPACK_IMPORTED_MODULE_3__["ScreenWnd"](this.wndMgr, this, this.nes, this.stream);
        this.wndMgr.add(this.screenWnd);
        this.title = option.title || 'NES';
        this.screenWnd.setTitle(this.title);
        const size = this.screenWnd.getWindowSize();
        let x = _util_util__WEBPACK_IMPORTED_MODULE_5__["default"].clamp((option.centerX || 0) - size.width / 2, 0, window.innerWidth - size.width - 1);
        let y = _util_util__WEBPACK_IMPORTED_MODULE_5__["default"].clamp((option.centerY || 0) - size.height / 2, 0, window.innerHeight - size.height - 1);
        this.screenWnd.setPos(x, y);
        this.screenWnd.setCallback((action, ...args) => {
            switch (action) {
                case 'resize':
                    {
                        const [width, height] = args;
                        this.screenWnd.onResized(width, height);
                    }
                    break;
                case 'openMenu':
                    this.cancelLoopAnimation();
                    this.muteAudio();
                    break;
                case 'closeMenu':
                    this.startLoopAnimation();
                    break;
            }
        });
    }
    static create(wndMgr, option) {
        return new App(wndMgr, option);
    }
    setVolume(vol) {
        this.volume = vol;
        this.audioManager.setMasterVolume(this.volume * DEFAULT_MASTER_VOLUME);
    }
    loadRom(romData) {
        const result = this.nes.setRomData(romData);
        if (result !== true)
            return result;
        const contextClass = window.AudioContext || window.webkitAudioContext;
        //if (contextClass == null)
        //  return
        this.audioManager = new _util_audio_manager__WEBPACK_IMPORTED_MODULE_2__["AudioManager"](contextClass);
        this.setupAudioManager();
        this.nes.reset();
        this.nes.getCpu().pause(false);
        this.screenWnd.getContentHolder().focus();
        this.stream.triggerLoadRom();
        this.startLoopAnimation();
        if (window.$DEBUG) { // Accessing global variable!!!
            this.createPaletWnd();
            this.createNameTableWnd();
            this.createPatternTableWnd();
            this.createTraceWnd();
            this.createRegisterWnd();
            this.createControlWnd();
        }
        return true;
    }
    close() {
        this.screenWnd.close();
    }
    saveData() {
        const saveData = this.nes.save();
        _util_storage_util__WEBPACK_IMPORTED_MODULE_4__["default"].putObject(this.title, saveData);
    }
    loadData() {
        const saveData = _util_storage_util__WEBPACK_IMPORTED_MODULE_4__["default"].getObject(this.title, null);
        if (saveData) {
            try {
                this.nes.load(saveData);
            }
            catch (e) {
                console.error(e);
                this.wndMgr.showSnackbar('Error: Load data failed');
                this.nes.reset();
            }
        }
        else {
            this.wndMgr.showSnackbar(`No save data for "${this.title}"`);
        }
    }
    onBlur() {
        if (this.isBlur)
            return;
        this.isBlur = true;
        // this.cancelLoopAnimation()
        if (this.audioManager)
            this.audioManager.setMasterVolume(0);
    }
    onFocus() {
        if (!this.isBlur)
            return;
        this.isBlur = false;
        // this.startLoopAnimation()
        if (this.audioManager)
            this.audioManager.setMasterVolume(this.volume * DEFAULT_MASTER_VOLUME);
    }
    createPaletWnd() {
        if (this.paletWnd != null)
            return false;
        const paletWnd = new _ui__WEBPACK_IMPORTED_MODULE_3__["PaletWnd"](this.wndMgr, this.nes, this.stream);
        this.wndMgr.add(paletWnd);
        paletWnd.setPos(520, 0);
        paletWnd.setCallback(action => {
            if (action === 'close') {
                this.paletWnd = null;
            }
        });
        this.paletWnd = paletWnd;
        return true;
    }
    createNameTableWnd() {
        if (this.hasNameTableWnd)
            return false;
        const nameTableWnd = new _ui__WEBPACK_IMPORTED_MODULE_3__["NameTableWnd"](this.wndMgr, this.nes, this.stream, this.nes.getPpu().getMirrorMode() === 0 /* HORZ */);
        this.wndMgr.add(nameTableWnd);
        nameTableWnd.setPos(520, 40);
        nameTableWnd.setCallback(action => {
            if (action === 'close') {
                this.hasNameTableWnd = false;
            }
        });
        return this.hasNameTableWnd = true;
    }
    createPatternTableWnd() {
        if (this.hasPatternTableWnd)
            return false;
        const getSelectedPalets = (buf) => {
            if (this.paletWnd != null)
                this.paletWnd.getSelectedPalets(buf);
            else
                buf[0] = buf[1] = 0;
        };
        const patternTableWnd = new _ui__WEBPACK_IMPORTED_MODULE_3__["PatternTableWnd"](this.wndMgr, this.nes, this.stream, getSelectedPalets);
        this.wndMgr.add(patternTableWnd);
        patternTableWnd.setPos(520, 300);
        patternTableWnd.setCallback(action => {
            if (action === 'close') {
                this.hasPatternTableWnd = false;
            }
        });
        return this.hasPatternTableWnd = true;
    }
    createTraceWnd() {
        if (this.hasTraceWnd)
            return false;
        const traceWnd = new _ui__WEBPACK_IMPORTED_MODULE_3__["TraceWnd"](this.wndMgr, this.nes, this.stream);
        this.wndMgr.add(traceWnd);
        traceWnd.setPos(0, 500);
        traceWnd.setCallback(action => {
            if (action === 'close') {
                this.hasTraceWnd = false;
            }
        });
        return this.hasTraceWnd = true;
    }
    createRegisterWnd() {
        if (this.hasRegisterWnd)
            return false;
        const registerWnd = new _ui__WEBPACK_IMPORTED_MODULE_3__["RegisterWnd"](this.wndMgr, this.nes, this.stream);
        this.wndMgr.add(registerWnd);
        registerWnd.setPos(410, 500);
        registerWnd.setCallback(action => {
            if (action === 'close') {
                this.hasRegisterWnd = false;
            }
        });
        return this.hasRegisterWnd = true;
    }
    createControlWnd() {
        if (this.hasCtrlWnd)
            return false;
        const ctrlWnd = new _ui__WEBPACK_IMPORTED_MODULE_3__["ControlWnd"](this.wndMgr, this.stream);
        this.wndMgr.add(ctrlWnd);
        ctrlWnd.setPos(520, 500);
        ctrlWnd.setCallback(action => {
            if (action === 'close') {
                this.hasCtrlWnd = false;
            }
        });
        return this.hasCtrlWnd = true;
    }
    cleanUp() {
        this.cancelLoopAnimation();
        this.destroying = true;
        if (this.audioManager)
            this.audioManager.release();
        this.subscription.unsubscribe();
    }
    onVblank(leftV) {
        if (leftV < 1)
            this.render();
        this.updateAudio();
    }
    onBreakPoint() {
        this.stream.triggerBreakPoint();
    }
    startLoopAnimation() {
        if (this.rafId != null)
            return;
        let lastTime = window.performance.now();
        const loopFn = () => {
            if (this.destroying)
                return;
            this.stream.triggerStartCalc();
            const curTime = window.performance.now();
            const elapsedTime = curTime - lastTime;
            lastTime = curTime;
            this.update(elapsedTime);
            this.stream.triggerEndCalc();
            this.rafId = requestAnimationFrame(loopFn);
        };
        this.rafId = requestAnimationFrame(loopFn);
    }
    cancelLoopAnimation() {
        if (this.rafId == null)
            return;
        cancelAnimationFrame(this.rafId);
        this.rafId = undefined;
    }
    update(elapsedTime) {
        if (this.nes.getCpu().isPaused())
            return;
        for (let i = 0; i < 2; ++i) {
            const pad = this.wndMgr.getPadStatus(this.screenWnd, i);
            this.nes.setPadStatus(i, pad);
        }
        let et = Math.min(elapsedTime, MAX_ELAPSED_TIME);
        et = (this.wndMgr.getKeyPressing(this.screenWnd, 16 /* SHIFT */)
            ? et * 4 : et);
        const cycles = (CPU_HZ * et / 1000) | 0;
        this.nes.runCycles(cycles);
    }
    render() {
        this.stream.triggerRender();
    }
    updateAudio() {
        const audioManager = this.audioManager;
        const count = audioManager.getChannelCount();
        for (let ch = 0; ch < count; ++ch) {
            const volume = this.nes.getSoundVolume(ch);
            audioManager.setChannelVolume(ch, volume);
            if (volume > 0) {
                audioManager.setChannelFrequency(ch, this.nes.getSoundFrequency(ch));
                audioManager.setChannelDutyRatio(ch, this.nes.getSoundDutyRatio(ch));
            }
        }
    }
    muteAudio() {
        const n = this.audioManager.getChannelCount();
        for (let ch = 0; ch < n; ++ch)
            this.audioManager.setChannelVolume(ch, 0);
    }
    setupAudioManager() {
        this.audioManager.release();
        this.audioManager.setMasterVolume(this.volume * DEFAULT_MASTER_VOLUME);
        const channelTypes = this.nes.getSoundChannelTypes();
        for (const type of channelTypes) {
            this.audioManager.addChannel(type);
        }
    }
}


/***/ }),

/***/ "./app/app_event.ts":
/*!**************************!*\
  !*** ./app/app_event.ts ***!
  \**************************/
/*! exports provided: AppEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppEvent", function() { return AppEvent; });
/* harmony import */ var _util_pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/pubsub */ "./util/pubsub.ts");

var AppEvent;
(function (AppEvent) {
    class Stream extends _util_pubsub__WEBPACK_IMPORTED_MODULE_0__["Subject"] {
        triggerRender() {
            this.next(1 /* RENDER */);
        }
        triggerRun() {
            this.next(2 /* RUN */);
        }
        triggerPause() {
            this.next(3 /* PAUSE */);
        }
        triggerStep() {
            this.next(4 /* STEP */);
        }
        triggerReset() {
            this.next(5 /* RESET */);
        }
        triggerScreenShot() {
            this.next(8 /* SCREEN_SHOT */);
        }
        triggerLoadRom() {
            this.next(6 /* LOAD_ROM */);
        }
        triggerBreakPoint() {
            this.next(7 /* BREAK_POINT */);
        }
        triggerDestroy() {
            this.next(9 /* DESTROY */);
        }
        triggerStartCalc() {
            this.next(10 /* START_CALC */);
        }
        triggerEndCalc() {
            this.next(11 /* END_CALC */);
        }
    }
    AppEvent.Stream = Stream;
})(AppEvent || (AppEvent = {}));


/***/ }),

/***/ "./app/js_powered_app.ts":
/*!*******************************!*\
  !*** ./app/js_powered_app.ts ***!
  \*******************************/
/*! exports provided: JsApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsApp", function() { return JsApp; });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./app/app.ts");
/* harmony import */ var _util_audio_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/audio_manager */ "./util/audio_manager.ts");
/* harmony import */ var _util_dom_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/dom_util */ "./util/dom_util.ts");
/* harmony import */ var _nes_nes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../nes/nes */ "./nes/nes.ts");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui */ "./app/ui.ts");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/util */ "./util/util.ts");
// JS-powered NES
// Run JavaScript code, instead of 6502 CPU.






const WIDTH = 256;
const HEIGHT = 240;
const MAX_FRAME_COUNT = 4;
class JsNes extends _nes_nes__WEBPACK_IMPORTED_MODULE_3__["Nes"] {
    constructor() {
        super();
        this.reset();
    }
    setFile(file) {
        if (file == null)
            return Promise.reject('null');
        this.file = file;
        // TODO: Detect mapper.
        this.setMemoryMap();
        this.mapperNo = 0;
        this.mapper = this.createMapper(this.mapperNo);
        return this.reload();
    }
    reload() {
        return _util_dom_util__WEBPACK_IMPORTED_MODULE_2__["default"].loadFile(this.file)
            .then(data => {
            // const jsCode = String.fromCharCode.apply('', data)
            const jsCode = new TextDecoder('utf-8').decode(data);
            /* tslint:disable:no-eval */
            this.jsCpu = eval(jsCode);
            /* tslint:enable:no-eval */
            this.ppu.setChrData(this.jsCpu.getChrRom());
            this.jsCpu.init(this.bus, this.ppu);
            return Promise.resolve();
        });
    }
    reset() {
        this.ram.fill(0xff);
        this.ppu.reset();
        this.apu.reset();
        if (this.jsCpu != null)
            this.jsCpu.reset();
    }
    update() {
        this.jsCpu.update();
    }
    step(_leftCycles) {
        this.jsCpu.step();
        return 1; // Dummy
    }
}
class JsScreenWnd extends _ui__WEBPACK_IMPORTED_MODULE_4__["ScreenWnd"] {
    constructor(wndMgr, jsApp, jsNes, stream) {
        super(wndMgr, jsApp, jsNes, stream);
        this.jsApp = jsApp;
        this.jsNes = jsNes;
        this.canvas = JsScreenWnd.createCanvas(WIDTH, HEIGHT);
        this.context = _util_dom_util__WEBPACK_IMPORTED_MODULE_2__["default"].getCanvasContext2d(this.canvas);
        this.imageData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
        this.canvas.className = 'pixelated full-size';
        this.setContent(this.canvas);
    }
    static createCanvas(width, height) {
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        canvas.className = 'full-size';
        _util_dom_util__WEBPACK_IMPORTED_MODULE_2__["default"].setStyles(canvas, {
            display: 'block',
        });
        _util_dom_util__WEBPACK_IMPORTED_MODULE_2__["default"].clearCanvas(canvas);
        return canvas;
    }
    render() {
        this.jsNes.render(this.imageData.data);
        this.context.putImageData(this.imageData, 0, 0);
    }
    setUpMenuBar() {
        this.addMenuBar([
            {
                label: 'File',
                submenu: [
                    {
                        label: 'Pause',
                        click: () => {
                            if (this.jsNes.jsCpu.isPaused())
                                this.stream.triggerRun();
                            else
                                this.stream.triggerPause();
                        },
                    },
                    {
                        label: 'Reset',
                        click: () => {
                            this.stream.triggerReset();
                            //              this.stream.triggerRun()
                        },
                    },
                    {
                        label: 'Reload',
                        click: () => {
                            this.jsApp.reload();
                        },
                    },
                    {
                        label: 'Quit',
                        click: () => {
                            this.close();
                        },
                    },
                ],
            },
            {
                label: 'Debug',
                submenu: [
                    {
                        label: 'Palette',
                        click: () => {
                            this.app.createPaletWnd();
                        },
                    },
                    {
                        label: 'NameTable',
                        click: () => {
                            this.app.createNameTableWnd();
                        },
                    },
                    {
                        label: 'PatternTable',
                        click: () => {
                            this.app.createPatternTableWnd();
                        },
                    },
                    {
                        label: 'Control',
                        click: () => {
                            this.app.createControlWnd();
                        },
                    },
                ],
            },
        ]);
    }
}
class JsApp extends _app__WEBPACK_IMPORTED_MODULE_0__["App"] {
    constructor(wndMgr, option) {
        super(wndMgr, option, true);
        this.leftTime = 0;
        this.jsNes = new JsNes();
        window.jsNes = this.jsNes; // Put jsNes into global.
        this.jsScreenWnd = new JsScreenWnd(this.wndMgr, this, this.jsNes, this.stream);
        this.wndMgr.add(this.jsScreenWnd);
        if (option.title)
            this.jsScreenWnd.setTitle(option.title);
        this.subscription = this.stream
            .subscribe(type => {
            switch (type) {
                case 9 /* DESTROY */:
                    this.cleanUp();
                    if (option.onClosed)
                        option.onClosed(this);
                    break;
                case 2 /* RUN */:
                    this.jsNes.jsCpu.pause(false);
                    break;
                case 3 /* PAUSE */:
                    this.jsNes.jsCpu.pause(true);
                    break;
                case 4 /* STEP */:
                    this.jsNes.step();
                    break;
                case 5 /* RESET */:
                    this.jsNes.reset();
                    break;
            }
        });
        this.nes = this.jsNes;
        this.screenWnd = this.jsScreenWnd;
        const size = this.screenWnd.getWindowSize();
        let x = _util_util__WEBPACK_IMPORTED_MODULE_5__["default"].clamp((option.centerX || 0) - size.width / 2, 0, window.innerWidth - size.width - 1);
        let y = _util_util__WEBPACK_IMPORTED_MODULE_5__["default"].clamp((option.centerY || 0) - size.height / 2, 0, window.innerHeight - size.height - 1);
        this.screenWnd.setPos(x, y);
    }
    setFile(file) {
        this.cancelLoopAnimation();
        this.jsNes.setFile(file)
            .then(() => {
            const contextClass = window.AudioContext || window.webkitAudioContext;
            //if (contextClass == null)
            //  return
            this.audioManager = new _util_audio_manager__WEBPACK_IMPORTED_MODULE_1__["AudioManager"](contextClass);
            this.setupAudioManager();
            this.startLoopAnimation();
        });
    }
    reload() {
        this.cancelLoopAnimation();
        this.jsNes.reload();
        this.startLoopAnimation();
    }
    startLoopAnimation() {
        if (this.rafId != null)
            return;
        let lastTime = window.performance.now();
        const loopFn = () => {
            if (this.destroying)
                return;
            // this.stream.triggerStartCalc()
            const curTime = window.performance.now();
            const elapsedTime = curTime - lastTime;
            lastTime = curTime;
            this.update(elapsedTime);
            // this.stream.triggerEndCalc()
            this.rafId = requestAnimationFrame(loopFn);
        };
        this.rafId = requestAnimationFrame(loopFn);
    }
    cancelLoopAnimation() {
        if (this.rafId == null)
            return;
        cancelAnimationFrame(this.rafId);
        this.rafId = undefined;
    }
    update(elapsedTime) {
        for (let i = 0; i < 2; ++i) {
            const pad = this.wndMgr.getPadStatus(this.screenWnd, i);
            this.nes.setPadStatus(i, pad);
        }
        let et = elapsedTime + this.leftTime;
        let frameCount = (et * 60 / 1000) | 0;
        if (frameCount <= MAX_FRAME_COUNT) {
            this.leftTime = et - ((frameCount * 1000 / 60) | 0);
        }
        else {
            frameCount = MAX_FRAME_COUNT;
            this.leftTime = 0;
        }
        frameCount = (this.wndMgr.getKeyPressing(this.screenWnd, 16 /* SHIFT */)
            ? frameCount * 4 : frameCount);
        if (frameCount > 0) {
            const ppu = this.jsNes.getPpu();
            for (let i = 0; i < frameCount; ++i) {
                ppu.clearVBlank();
                this.jsNes.update();
                this.updateAudio();
                ppu.setHcount(240);
                ppu.setVBlank();
            }
            this.jsScreenWnd.render();
            this.stream.triggerRender();
        }
    }
}


/***/ }),

/***/ "./app/ui.ts":
/*!*******************!*\
  !*** ./app/ui.ts ***!
  \*******************/
/*! exports provided: FpsWnd, ScreenWnd, PaletWnd, NameTableWnd, PatternTableWnd, RegisterWnd, TraceWnd, ControlWnd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FpsWnd", function() { return FpsWnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenWnd", function() { return ScreenWnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaletWnd", function() { return PaletWnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NameTableWnd", function() { return NameTableWnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatternTableWnd", function() { return PatternTableWnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterWnd", function() { return RegisterWnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TraceWnd", function() { return TraceWnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlWnd", function() { return ControlWnd; });
/* harmony import */ var _wnd_wnd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../wnd/wnd */ "./wnd/wnd.ts");
/* harmony import */ var _util_dom_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/dom_util */ "./util/dom_util.ts");
/* harmony import */ var _nes_nes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nes/nes */ "./nes/nes.ts");
/* harmony import */ var _nes_inst__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../nes/inst */ "./nes/inst.ts");
/* harmony import */ var _nes_disasm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../nes/disasm */ "./nes/disasm.ts");
/* harmony import */ var _util_scaler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/scaler */ "./util/scaler.ts");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/util */ "./util/util.ts");
/* harmony import */ var stats_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! stats-js */ "../node_modules/stats-js/build/stats.min.js");
/* harmony import */ var stats_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(stats_js__WEBPACK_IMPORTED_MODULE_7__);








const WIDTH = 256 | 0;
const HEIGHT = 240 | 0;
const EDGE = 8 | 0;
function takeScreenshot(wndMgr, screenWnd) {
    const img = document.createElement('img');
    const title = String(Date.now());
    img.src = screenWnd.capture();
    img.className = 'pixelated full-size';
    img.title = img.alt = title;
    const imgWnd = new _wnd_wnd__WEBPACK_IMPORTED_MODULE_0__["default"](wndMgr, WIDTH, HEIGHT, title);
    imgWnd.setContent(img);
    imgWnd.addResizeBox();
    wndMgr.add(imgWnd);
    return imgWnd;
}
class FpsWnd extends _wnd_wnd__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(wndMgr, stream) {
        super(wndMgr, 80, 48, 'Fps');
        this.stream = stream;
        const content = document.createElement('div');
        _util_dom_util__WEBPACK_IMPORTED_MODULE_1__["default"].setStyles(content, {
            width: '80px',
            height: '48px',
        });
        this.setContent(content);
        this.stats = new stats_js__WEBPACK_IMPORTED_MODULE_7__();
        content.appendChild(this.stats.domElement);
        this.subscription = this.stream
            .subscribe(type => {
            switch (type) {
                case 9 /* DESTROY */:
                    this.close();
                    break;
                case 10 /* START_CALC */:
                    this.stats.begin();
                    break;
                case 11 /* END_CALC */:
                    this.stats.end();
                    break;
            }
        });
    }
    close() {
        this.subscription.unsubscribe();
        super.close();
    }
}
class ScreenWnd extends _wnd_wnd__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(wndMgr, app, nes, stream) {
        super(wndMgr, (WIDTH - EDGE * 2) * 2, (HEIGHT - EDGE * 2) * 2 + _wnd_wnd__WEBPACK_IMPORTED_MODULE_0__["default"].MENUBAR_HEIGHT, 'NES');
        this.app = app;
        this.nes = nes;
        this.stream = stream;
        this.hideEdge = true;
        this.contentWidth = 0; // Content size, except fullscreen
        this.contentHeight = 0;
        if (app == null || nes == null || stream == null)
            return;
        this.setUpMenuBar();
        this.contentHolder.style.overflow = 'hidden';
        this.fullscreenBase = document.createElement('div');
        this.fullscreenBase.className = 'full-size';
        _util_dom_util__WEBPACK_IMPORTED_MODULE_1__["default"].setStyles(this.fullscreenBase, {
            position: 'relative',
            overflow: 'hidden',
        });
        this.setContent(this.fullscreenBase);
        this.canvasHolder = document.createElement('div');
        _util_dom_util__WEBPACK_IMPORTED_MODULE_1__["default"].setStyles(this.canvasHolder, {
            transitionDuration: '0.1s',
            transitionProperty: 'width, height',
        });
        this.fullscreenBase.appendChild(this.canvasHolder);
        this.setScaler(new _util_scaler__WEBPACK_IMPORTED_MODULE_5__["IdentityScaler"]());
        this.addResizeBox();
        this.subscription = this.stream
            .subscribe(type => {
            switch (type) {
                case 1 /* RENDER */:
                    this.scaler.render(this.nes);
                    break;
                case 8 /* SCREEN_SHOT */:
                    takeScreenshot(this.wndMgr, this);
                    break;
                case 5 /* RESET */:
                    this.scaler.reset();
                    break;
            }
        });
        this.contentWidth = (WIDTH - EDGE * 2) * 2;
        this.contentHeight = (HEIGHT - EDGE * 2) * 2;
        this.updateContentSize(this.contentWidth, this.contentHeight);
    }
    onResized(width, height) {
        this.contentWidth = width;
        this.contentHeight = height;
        this.updateContentSize(width, height - _wnd_wnd__WEBPACK_IMPORTED_MODULE_0__["default"].MENUBAR_HEIGHT);
    }
    setClientSize(width, height) {
        super.setClientSize(width, height);
        this.contentWidth = width;
        this.contentHeight = height;
        this.updateContentSize(width, height);
        return this;
    }
    capture() {
        return this.scaler.getCanvas().toDataURL();
    }
    setFullscreen(callback) {
        return this.wndMgr.setFullscreen(this.contentHolder, (isFullscreen) => {
            if (isFullscreen) {
                let width = window.parent.screen.width;
                let height = window.parent.screen.height;
                if (width / height >= WIDTH / HEIGHT) {
                    width = (height * (WIDTH / HEIGHT)) | 0;
                }
                else {
                    height = (width * (HEIGHT / WIDTH)) | 0;
                }
                _util_dom_util__WEBPACK_IMPORTED_MODULE_1__["default"].setStyles(this.fullscreenBase, {
                    width: `${width}px`,
                    height: `${height}px`,
                    margin: 'auto',
                });
                this.contentHolder.style.backgroundColor = 'black';
                this.updateContentSize(width, height);
            }
            else {
                _util_dom_util__WEBPACK_IMPORTED_MODULE_1__["default"].setStyles(this.fullscreenBase, {
                    width: '',
                    height: '',
                    margin: '',
                });
                this.contentHolder.style.backgroundColor = '';
                this.updateContentSize(this.contentWidth, this.contentHeight);
            }
            if (callback)
                callback(isFullscreen);
            this.contentHolder.focus();
        });
    }
    close() {
        if (this.subscription != null)
            this.subscription.unsubscribe();
        this.stream.triggerDestroy();
        super.close();
    }
    setClientScale(scale) {
        const w = ((WIDTH - (this.hideEdge ? EDGE * 2 : 0)) * scale) | 0;
        const h = ((HEIGHT - (this.hideEdge ? EDGE * 2 : 0)) * scale) | 0;
        return this.setClientSize(w, h);
    }
    updateContentSize(width, height) {
        if (!this.fullscreenBase)
            return;
        const w = !this.hideEdge ? width : (width * (WIDTH / (WIDTH - EDGE * 2))) | 0;
        const h = !this.hideEdge ? height : (height * (HEIGHT / (HEIGHT - EDGE * 2))) | 0;
        const left = !this.hideEdge ? 0 : -(w * EDGE / WIDTH) | 0;
        const top = !this.hideEdge ? 0 : -(h * EDGE / HEIGHT) | 0;
        _util_dom_util__WEBPACK_IMPORTED_MODULE_1__["default"].setStyles(this.canvasHolder, {
            position: 'absolute',
            width: `${w}px`,
            height: `${h}px`,
            top: `${top}px`,
            left: `${left}px`,
        });
    }
    setUpMenuBar() {
        this.addMenuBar([
            {
                label: 'File',
                submenu: [
                    {
                        label: 'Pause',
                        click: () => {
                            if (this.nes.getCpu().isPaused())
                                this.stream.triggerRun();
                            else
                                this.stream.triggerPause();
                        },
                    },
                    {
                        label: 'Reset',
                        click: () => {
                            this.stream.triggerReset();
                            this.stream.triggerRun();
                        },
                    },
                    {
                        label: 'Screenshot',
                        click: () => {
                            takeScreenshot(this.wndMgr, this);
                        },
                    },
                    {
                        label: 'Save',
                        click: () => {
                            this.app.saveData();
                        },
                    },
                    {
                        label: 'Load',
                        click: () => {
                            this.app.loadData();
                        },
                    },
                    {
                        label: 'Quit',
                        click: () => {
                            this.close();
                        },
                    },
                ],
            },
            {
                label: 'View',
                submenu: [
                    {
                        label: '1x1',
                        click: () => {
                            this.setClientScale(1);
                        },
                    },
                    {
                        label: '2x2',
                        click: () => {
                            this.setClientScale(2);
                        },
                    },
                    {
                        label: 'Adjust aspect ratio',
                        click: () => {
                            const rect = this.contentHolder.getBoundingClientRect();
                            let cWidth = rect.width, cHeight = rect.height;
                            const w = WIDTH - (this.hideEdge ? EDGE * 2 : 0);
                            const h = HEIGHT - (this.hideEdge ? EDGE * 2 : 0);
                            const ratio = w / h;
                            if (cWidth / cHeight >= ratio)
                                cWidth = cHeight * ratio;
                            else
                                cHeight = cWidth / ratio;
                            this.setClientSize(cWidth, cHeight);
                        },
                    },
                    {
                        label: 'Max',
                        click: () => {
                            this.setPos(0, 0);
                            const width = window.innerWidth - 2; // -2 for border size
                            const height = window.innerHeight - _wnd_wnd__WEBPACK_IMPORTED_MODULE_0__["default"].TITLEBAR_HEIGHT - _wnd_wnd__WEBPACK_IMPORTED_MODULE_0__["default"].MENUBAR_HEIGHT - 2;
                            this.setClientSize(width, height);
                        },
                    },
                    {
                        label: 'Fullscreen',
                        click: () => {
                            this.setFullscreen();
                        },
                    },
                ],
            },
            {
                label: 'Scaler',
                submenu: [
                    {
                        label: 'Normal',
                        click: () => {
                            this.setScaler(new _util_scaler__WEBPACK_IMPORTED_MODULE_5__["IdentityScaler"]());
                        },
                    },
                    {
                        label: 'Scanline',
                        click: () => {
                            this.setScaler(new _util_scaler__WEBPACK_IMPORTED_MODULE_5__["ScanlineScaler"]());
                        },
                    },
                ],
            },
            {
                label: 'Debug',
                submenu: [
                    {
                        label: 'Edge',
                        click: () => {
                            this.toggleEdge();
                        },
                    },
                    {
                        label: 'Palette',
                        click: () => {
                            this.app.createPaletWnd();
                        },
                    },
                    {
                        label: 'NameTable',
                        click: () => {
                            this.app.createNameTableWnd();
                        },
                    },
                    {
                        label: 'PatternTable',
                        click: () => {
                            this.app.createPatternTableWnd();
                        },
                    },
                    {
                        label: 'Trace',
                        click: () => {
                            this.app.createTraceWnd();
                        },
                    },
                    {
                        label: 'Registers',
                        click: () => {
                            this.app.createRegisterWnd();
                        },
                    },
                    {
                        label: 'Control',
                        click: () => {
                            this.app.createControlWnd();
                        },
                    },
                    {
                        label: 'FPS',
                        click: () => {
                            this.createFpsWnd();
                        },
                    },
                ],
            },
        ]);
    }
    toggleEdge() {
        this.hideEdge = !this.hideEdge;
        this.updateContentSize(this.contentHolder.offsetWidth, this.contentHolder.offsetHeight);
    }
    setScaler(scaler) {
        this.scaler = scaler;
        _util_dom_util__WEBPACK_IMPORTED_MODULE_1__["default"].removeAllChildren(this.canvasHolder);
        this.canvasHolder.appendChild(scaler.getCanvas());
    }
    createFpsWnd() {
        const fpsWnd = new FpsWnd(this.wndMgr, this.stream);
        this.wndMgr.add(fpsWnd);
    }
}
class PaletWnd extends _wnd_wnd__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(wndMgr, nes, stream) {
        super(wndMgr, 128, 16, 'Palette');
        this.nes = nes;
        this.stream = stream;
        this.palet = new Uint8Array(PaletWnd.W * PaletWnd.H);
        this.tmp = new Uint8Array(PaletWnd.W * PaletWnd.H);
        this.selected = new Uint8Array(PaletWnd.H);
        const { root, boxes, groups } = this.createDom();
        this.setContent(root);
        this.boxes = boxes;
        this.groups = groups;
        this.selected.fill(0);
        this.subscription = this.stream
            .subscribe(type => {
            switch (type) {
                case 9 /* DESTROY */:
                    this.close();
                    break;
                case 1 /* RENDER */:
                    this.render();
                    break;
            }
        });
        this.palet.fill(-1);
        this.render();
    }
    static getPalet(nes, buf) {
        const ppu = nes.getPpu();
        const n = PaletWnd.W * PaletWnd.H;
        for (let i = 0; i < n; ++i)
            buf[i] = ppu.getPalet(i);
    }
    getSelectedPalets(buf) {
        const selected = this.selected;
        for (let i = 0; i < selected.length; ++i)
            buf[i] = selected[i];
    }
    close() {
        this.subscription.unsubscribe();
        super.close();
    }
    render() {
        const tmp = this.tmp;
        PaletWnd.getPalet(this.nes, tmp);
        const n = PaletWnd.W * PaletWnd.H;
        for (let i = 0; i < n; ++i) {
            const c = tmp[i];
            if (c === this.palet[i])
                continue;
            this.palet[i] = c;
            this.boxes[i].style.backgroundColor = _nes_nes__WEBPACK_IMPORTED_MODULE_2__["Nes"].getPaletColorString(c);
        }
    }
    createDom() {
        const UNIT = PaletWnd.UNIT, W = PaletWnd.W, H = PaletWnd.H;
        const root = document.createElement('div');
        root.className = 'clearfix';
        _util_dom_util__WEBPACK_IMPORTED_MODULE_1__["default"].setStyles(root, {
            width: `${UNIT * W}px`,
            height: `${UNIT * H}px`,
        });
        const boxes = new Array(W * H);
        const groups = new Array((W / 4) * H);
        for (let i = 0; i < H; ++i) {
            const line = document.createElement('div');
            line.className = 'pull-left clearfix';
            _util_dom_util__WEBPACK_IMPORTED_MODULE_1__["default"].setStyles(line, {
                width: `${UNIT * W}px`,
                height: `${UNIT}px`,
                backgroundColor: 'black',
            });
            root.appendChild(line);
            for (let j = 0; j < W / 4; ++j) {
                const group = document.createElement('div');
                group.className = 'pull-left clearfix';
                _util_dom_util__WEBPACK_IMPORTED_MODULE_1__["default"].setStyles(group, {
                    width: `${UNIT * 4}px`,
                    height: `${UNIT}px`,
                    cursor: 'pointer',
                });
                groups[j + i * (W / 4)] = group;
                line.appendChild(group);
                group.addEventListener('click', (_event) => {
                    this.select(i, j);
                });
                for (let k = 0; k < 4; ++k) {
                    const box = document.createElement('div');
                    box.className = 'pull-left';
                    _util_dom_util__WEBPACK_IMPORTED_MODULE_1__["default"].setStyles(box, {
                        width: `${UNIT - 1}px`,
                        height: `${UNIT - 1}px`,
                        marginRight: '1px',
                    });
                    boxes[(j * 4 + k) + i * W] = box;
                    group.appendChild(box);
                }
            }
        }
        return { root, boxes, groups };
    }
    select(i, j) {
        this.groups[i * (PaletWnd.W / 4) + this.selected[i]].style.backgroundColor = '';
        this.groups[i * (PaletWnd.W / 4) + j].style.backgroundColor = 'red';
        this.selected[i] = j;
    }
}
PaletWnd.UNIT = 8;
PaletWnd.W = 16;
PaletWnd.H = 2;
class NameTableWnd extends _wnd_wnd__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(wndMgr, nes, stream, vert) {
        const width = 256 * (vert ? 1 : 2);
        const height = 240 * (vert ? 2 : 1);
        super(wndMgr, width, height, 'NameTable');
        this.nes = nes;
        this.stream = stream;
        this.vert = vert;
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        _util_dom_util__WEBPACK_IMPORTED_MODULE_1__["default"].setStyles(canvas, {
            width: `${width}px`,
            height: `${height}px`,
        });
        canvas.className = 'pixelated';
        _util_dom_util__WEBPACK_IMPORTED_MODULE_1__["default"].clearCanvas(canvas);
        this.setContent(canvas);
        this.canvas = canvas;
        this.context = _util_dom_util__WEBPACK_IMPORTED_MODULE_1__["default"].getCanvasContext2d(this.canvas);
        this.imageData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
        this.subscription = this.stream
            .subscribe(type => {
            switch (type) {
                case 9 /* DESTROY */:
                    this.close();
                    break;
                case 1 /* RENDER */:
                    this.render();
                    break;
            }
        });
        this.render();
    }
    close() {
        this.subscription.unsubscribe();
        super.close();
    }
    render() {
        const page1X = this.vert ? 0 : 256;
        const page1Y = this.vert ? 240 : 0;
        this.nes.renderNameTable1(this.imageData.data, this.imageData.width, 0, 0, 0);
        this.nes.renderNameTable1(this.imageData.data, this.imageData.width, page1X, page1Y, 1);
        this.context.putImageData(this.imageData, 0, 0);
    }
}
class PatternTableWnd extends _wnd_wnd__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(wndMgr, nes, stream, getSelectedPalets) {
        super(wndMgr, 256, 128, 'PatternTable');
        this.nes = nes;
        this.stream = stream;
        this.getSelectedPalets = getSelectedPalets;
        this.buf = new Uint8Array(2);
        const canvas = PatternTableWnd.createCanvas();
        this.setContent(canvas);
        this.canvas = canvas;
        this.context = _util_dom_util__WEBPACK_IMPORTED_MODULE_1__["default"].getCanvasContext2d(this.canvas);
        this.imageData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
        this.subscription = this.stream
            .subscribe(type => {
            switch (type) {
                case 9 /* DESTROY */:
                    this.close();
                    break;
                case 1 /* RENDER */:
                    this.render();
                    break;
            }
        });
        this.render();
    }
    static createCanvas() {
        const canvas = document.createElement('canvas');
        canvas.width = 256;
        canvas.height = 128;
        _util_dom_util__WEBPACK_IMPORTED_MODULE_1__["default"].setStyles(canvas, {
            width: '256px',
            height: '128px',
        });
        canvas.className = 'pixelated';
        _util_dom_util__WEBPACK_IMPORTED_MODULE_1__["default"].clearCanvas(canvas);
        return canvas;
    }
    close() {
        this.subscription.unsubscribe();
        super.close();
    }
    render() {
        const buf = this.buf;
        this.getSelectedPalets(buf);
        this.nes.renderPatternTable(this.imageData.data, this.imageData.width, buf);
        this.context.putImageData(this.imageData, 0, 0);
    }
}
class RegisterWnd extends _wnd_wnd__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(wndMgr, nes, stream) {
        super(wndMgr, 100, 160, 'Regs');
        this.nes = nes;
        this.stream = stream;
        this.valueElems = new Array();
        const content = this.createContent();
        this.setContent(content);
        this.subscription = this.stream
            .subscribe(type => {
            switch (type) {
                case 9 /* DESTROY */:
                    this.close();
                    break;
                case 5 /* RESET */:
                case 4 /* STEP */:
                case 3 /* PAUSE */:
                case 7 /* BREAK_POINT */:
                    this.updateStatus();
                    break;
            }
        });
    }
    updateStatus() {
        const cpu = this.nes.getCpu();
        const regs = cpu.getRegs();
        this.valueElems[0].value = _util_util__WEBPACK_IMPORTED_MODULE_6__["default"].hex(regs.pc, 4);
        this.valueElems[1].value = _util_util__WEBPACK_IMPORTED_MODULE_6__["default"].hex(regs.a, 2);
        this.valueElems[2].value = _util_util__WEBPACK_IMPORTED_MODULE_6__["default"].hex(regs.x, 2);
        this.valueElems[3].value = _util_util__WEBPACK_IMPORTED_MODULE_6__["default"].hex(regs.y, 2);
        this.valueElems[4].value = _util_util__WEBPACK_IMPORTED_MODULE_6__["default"].hex(regs.s, 2);
        this.valueElems[5].value = _util_util__WEBPACK_IMPORTED_MODULE_6__["default"].hex(regs.p, 2);
        this.valueElems[6].value = String(this.nes.getCycleCount());
    }
    close() {
        this.subscription.unsubscribe();
        super.close();
    }
    createContent() {
        const root = document.createElement('div');
        root.className = 'fixed-font';
        const kElems = [
            { name: 'PC' },
            { name: 'A' },
            { name: 'X' },
            { name: 'Y' },
            { name: 'S' },
            { name: 'P' },
            { name: 'cycle' },
        ];
        const table = document.createElement('table');
        _util_dom_util__WEBPACK_IMPORTED_MODULE_1__["default"].setStyles(table, {
            fontSize: '10px',
            width: '100%',
        });
        this.valueElems = [];
        for (let i = 0; i < kElems.length; ++i) {
            const tr = document.createElement('tr');
            table.appendChild(tr);
            const name = document.createElement('td');
            name.innerText = kElems[i].name;
            tr.appendChild(name);
            const value = document.createElement('td');
            tr.appendChild(value);
            const valueInput = document.createElement('input');
            valueInput.className = 'fixed-font';
            valueInput.type = 'text';
            valueInput.style.width = '100%';
            value.appendChild(valueInput);
            this.valueElems.push(valueInput);
        }
        root.appendChild(table);
        return root;
    }
}
const MAX_BYTES = 3;
const MAX_LINE = 100;
const kIllegalInstruction = {
    opType: 0 /* UNKNOWN */,
    addressing: 0 /* UNKNOWN */,
    bytes: 1,
    cycle: 0,
};
class TraceWnd extends _wnd_wnd__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(wndMgr, nes, stream) {
        super(wndMgr, 400, 160, 'Trace');
        this.nes = nes;
        this.stream = stream;
        this.mem = new Uint8Array(MAX_BYTES);
        this.bins = new Array(MAX_BYTES);
        this.lines = new Array();
        const content = this.createContent();
        this.setContent(content);
        this.reset();
        this.subscription = this.stream
            .subscribe(type => {
            switch (type) {
                case 9 /* DESTROY */:
                    this.close();
                    break;
                case 5 /* RESET */:
                    this.reset();
                // Fall through.
                case 4 /* STEP */:
                case 3 /* PAUSE */:
                case 7 /* BREAK_POINT */:
                    this.updateStatus();
                    break;
            }
        });
    }
    reset() {
        this.lines = [];
    }
    updateStatus() {
        const cpu = this.nes.getCpu();
        const bus = this.nes.getBus();
        const pc = cpu.getRegs().pc;
        const op = bus.read8(pc);
        const inst = _nes_inst__WEBPACK_IMPORTED_MODULE_3__["kInstTable"][op] || kIllegalInstruction;
        for (let i = 0; i < inst.bytes; ++i) {
            const m = bus.read8(pc + i);
            this.mem[i] = m;
            this.bins[i] = _util_util__WEBPACK_IMPORTED_MODULE_6__["default"].hex(m, 2);
        }
        for (let i = inst.bytes; i < MAX_BYTES; ++i)
            this.bins[i] = '  ';
        const pcStr = _util_util__WEBPACK_IMPORTED_MODULE_6__["default"].hex(pc, 4);
        const binStr = this.bins.join(' ');
        const asmStr = Object(_nes_disasm__WEBPACK_IMPORTED_MODULE_4__["disassemble"])(inst, this.mem, 1, pc);
        this.putConsole(`${pcStr}: ${binStr}   ${asmStr}`);
    }
    close() {
        this.subscription.unsubscribe();
        super.close();
    }
    createContent() {
        const root = document.createElement('div');
        const textarea = document.createElement('textarea');
        textarea.className = 'fixed-font';
        _util_dom_util__WEBPACK_IMPORTED_MODULE_1__["default"].setStyles(textarea, {
            fontSize: '14px',
            width: '100%',
            height: '160px',
            resize: 'none',
            margin: '0',
            padding: '2px',
            border: 'none',
            boxSizing: 'border-box',
        });
        root.appendChild(textarea);
        this.textarea = textarea;
        return root;
    }
    putConsole(line) {
        this.lines.push(line);
        if (this.lines.length > MAX_LINE)
            this.lines.shift();
        this.textarea.value = this.lines.join('\n');
        this.textarea.scrollTop = this.textarea.scrollHeight;
    }
}
class ControlWnd extends _wnd_wnd__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(wndMgr, stream) {
        super(wndMgr, 256, 32, 'Control');
        this.stream = stream;
        const content = this.createElement();
        this.setContent(content);
        this.updateState(true);
        this.subscription = this.stream
            .subscribe(type => {
            switch (type) {
                case 9 /* DESTROY */:
                    this.close();
                    break;
                case 2 /* RUN */:
                    this.updateState(false);
                    break;
                case 3 /* PAUSE */:
                case 7 /* BREAK_POINT */:
                    this.updateState(true);
                    break;
            }
        });
    }
    updateState(paused) {
        this.stepBtn.disabled = !paused;
        this.runBtn.disabled = !paused;
        this.pauseBtn.disabled = paused;
    }
    close() {
        this.subscription.unsubscribe();
        super.close();
    }
    createElement() {
        const root = document.createElement('div');
        _util_dom_util__WEBPACK_IMPORTED_MODULE_1__["default"].setStyles(root, {
            width: '256px',
            height: '32px',
        });
        this.stepBtn = document.createElement('button');
        this.stepBtn.innerText = 'Step';
        this.stepBtn.addEventListener('click', () => {
            this.stream.triggerStep();
        });
        root.appendChild(this.stepBtn);
        this.runBtn = document.createElement('button');
        this.runBtn.innerText = 'Run';
        this.runBtn.addEventListener('click', () => {
            this.stream.triggerRun();
        });
        root.appendChild(this.runBtn);
        this.pauseBtn = document.createElement('button');
        this.pauseBtn.innerText = 'Pause';
        this.pauseBtn.addEventListener('click', () => {
            this.stream.triggerPause();
        });
        root.appendChild(this.pauseBtn);
        const resetBtn = document.createElement('button');
        resetBtn.innerText = 'Reset';
        resetBtn.addEventListener('click', () => {
            this.stream.triggerReset();
        });
        root.appendChild(resetBtn);
        const captureBtn = document.createElement('button');
        captureBtn.innerText = 'Capture';
        captureBtn.addEventListener('click', () => {
            this.stream.triggerScreenShot();
        });
        root.appendChild(captureBtn);
        return root;
    }
}


/***/ }),

/***/ "./main.ts":
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app */ "./app/app.ts");
/* harmony import */ var _util_dom_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/dom_util */ "./util/dom_util.ts");
/* harmony import */ var _app_js_powered_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/js_powered_app */ "./app/js_powered_app.ts");
/* harmony import */ var _util_gamepad_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/gamepad_manager */ "./util/gamepad_manager.ts");
/* harmony import */ var _util_storage_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util/storage_util */ "./util/storage_util.ts");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util/util */ "./util/util.ts");
/* harmony import */ var _wnd_window_manager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wnd/window_manager */ "./wnd/window_manager.ts");
/* harmony import */ var _nes_polyfill__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nes/polyfill */ "./nes/polyfill.ts");
/* harmony import */ var _nes_polyfill__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_nes_polyfill__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jszip */ "../node_modules/jszip/lib/index.js");
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jszip__WEBPACK_IMPORTED_MODULE_8__);
///<reference path="./decl/patch.d.ts" />









// Request Animation Frame
window.requestAnimationFrame = (function () {
    return (window.requestAnimationFrame || window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame || window.msRequestAnimationFrame);
})();
const KEY_VOLUME = 'volume';
class Main {
    constructor(root) {
        this.root = root;
        this.apps = [];
        this.volume = 1;
        this.wndMgr = new _wnd_window_manager__WEBPACK_IMPORTED_MODULE_6__["default"](root);
        this.volume = _util_util__WEBPACK_IMPORTED_MODULE_5__["default"].clamp(_util_storage_util__WEBPACK_IMPORTED_MODULE_4__["default"].getFloat(KEY_VOLUME, 1), 0, 1);
        this.setUpFileDrop();
        this.setUpGamePadLink();
        this.setUpVolumeLink();
        this.setUpOpenRomLink();
        this.setUpBlur();
    }
    setUpFileDrop() {
        // Handle file drop.
        if (!(window.File && window.FileReader && window.FileList && window.Blob))
            return;
        _util_dom_util__WEBPACK_IMPORTED_MODULE_1__["default"].handleFileDrop(this.root, (files, x, y) => this.createAppFromFiles(files, x, y));
        const dropDesc = document.getElementById('drop-desc');
        if (dropDesc)
            dropDesc.style.display = '';
    }
    createAppFromFiles(files, x, y) {
        // Load .js files
        for (let i = 0; i < files.length; ++i) {
            const file = files[i];
            const ext = _util_util__WEBPACK_IMPORTED_MODULE_5__["default"].getExt(file.name).toLowerCase();
            if (ext !== 'js')
                continue;
            const jsApp = new _app_js_powered_app__WEBPACK_IMPORTED_MODULE_2__["JsApp"](this.wndMgr, {
                title: file.name,
                centerX: x,
                centerY: y,
                onClosed: (app) => {
                    this.removeApp(app);
                },
            });
            jsApp.setFile(file);
            this.apps.push(jsApp);
        }
        const kTargetExts = ['nes'];
        // Unzip and flatten.
        const promises = new Array();
        for (let i = 0; i < files.length; ++i) {
            const file = files[i];
            let promise = null;
            const ext = _util_util__WEBPACK_IMPORTED_MODULE_5__["default"].getExt(file.name).toLowerCase();
            if (ext === 'js') {
                // Skip, because already processed.
            }
            else if (ext === 'zip') {
                promise = _util_dom_util__WEBPACK_IMPORTED_MODULE_1__["default"].loadFile(file)
                    .then(binary => {
                    const zip = new jszip__WEBPACK_IMPORTED_MODULE_8__();
                    return zip.loadAsync(binary);
                })
                    .then((loadedZip) => {
                    for (let fileName of Object.keys(loadedZip.files)) {
                        const ext2 = _util_util__WEBPACK_IMPORTED_MODULE_5__["default"].getExt(fileName).toLowerCase();
                        if (kTargetExts.indexOf(ext2) >= 0) {
                            return loadedZip.files[fileName].async('uint8array')
                                .then(unzipped => Promise.resolve({ type: ext2, binary: unzipped, fileName }));
                        }
                    }
                    return Promise.reject(`No .nes file included: ${file.name}`);
                });
            }
            else if (kTargetExts.indexOf(ext) >= 0) {
                promise = _util_dom_util__WEBPACK_IMPORTED_MODULE_1__["default"].loadFile(file)
                    .then(binary => Promise.resolve({ type: ext, binary, fileName: file.name }));
            }
            else {
                promise = Promise.reject(`Unsupported file: ${file.name}`);
            }
            if (promise)
                promises.push(promise);
        }
        Promise.all(promises)
            .then(results => {
            const typeMap = {};
            results.forEach(result => {
                if (!typeMap[result.type])
                    typeMap[result.type] = [];
                typeMap[result.type].push(result);
            });
            // Load .nes files.
            if (typeMap.nes) {
                typeMap.nes.forEach(file => {
                    this.createAppFromRom(file.binary, file.fileName, x, y);
                    x += 16;
                    y += 16;
                });
            }
        })
            .catch((e) => {
            this.wndMgr.showSnackbar(e.toString());
        });
    }
    createAppFromRom(romData, name, x, y) {
        const m = name.match(/^(.*?)\s*\(.*\)\.\w*$/);
        const title = m ? m[1] : name;
        const option = {
            title,
            centerX: x,
            centerY: y,
            onClosed: (app) => {
                this.removeApp(app);
            },
        };
        const app = new _app_app__WEBPACK_IMPORTED_MODULE_0__["App"](this.wndMgr, option);
        const result = app.loadRom(romData);
        if (result !== true) {
            this.wndMgr.showSnackbar(`${name}: ${result}`);
            app.close();
            return;
        }
        app.setVolume(this.volume);
        this.apps.push(app);
    }
    removeApp(app) {
        const index = this.apps.indexOf(app);
        if (index >= 0)
            this.apps.splice(index, 1);
    }
    setUpGamePadLink() {
        const gamepadText = document.getElementById('gamepad');
        if (gamepadText == null)
            return;
        if (!_util_gamepad_manager__WEBPACK_IMPORTED_MODULE_3__["GamepadManager"].isSupported()) {
            gamepadText.style.display = 'none';
            return;
        }
        gamepadText.addEventListener('click', () => {
            const gamepadWnd = new _util_gamepad_manager__WEBPACK_IMPORTED_MODULE_3__["GamepadWnd"](this.wndMgr);
            this.wndMgr.add(gamepadWnd);
        });
    }
    setUpVolumeLink() {
        const volumeText = document.getElementById('volume');
        const sliderContainer = document.getElementById('volume-slider-container');
        const slider = document.getElementById('volume-slider');
        if (volumeText == null || sliderContainer == null || slider == null)
            return;
        let dragging = false;
        let leave = false;
        sliderContainer.addEventListener('mousedown', (event) => {
            dragging = true;
            const sliderHeight = slider.parentNode.getBoundingClientRect().height;
            const updateSlider = (event2) => {
                const [x, y] = _util_dom_util__WEBPACK_IMPORTED_MODULE_1__["default"].getMousePosIn(event2, slider.parentNode);
                const height = _util_util__WEBPACK_IMPORTED_MODULE_5__["default"].clamp(sliderHeight - y, 0, sliderHeight);
                slider.style.height = `${height}px`;
                this.volume = height / sliderHeight;
                this.apps.forEach(app => {
                    app.setVolume(this.volume);
                });
            };
            _util_dom_util__WEBPACK_IMPORTED_MODULE_1__["default"].setMouseDragListener({
                move: updateSlider,
                up: (event2) => {
                    dragging = false;
                    if (leave)
                        hideSlider();
                    this.volume = Math.round(this.volume * 100) / 100;
                    _util_storage_util__WEBPACK_IMPORTED_MODULE_4__["default"].put(KEY_VOLUME, this.volume);
                },
            });
            updateSlider(event);
        });
        const showSlider = () => {
            const prect = volumeText.getBoundingClientRect();
            const w = parseInt(sliderContainer.style.width);
            const h = parseInt(sliderContainer.style.height);
            _util_dom_util__WEBPACK_IMPORTED_MODULE_1__["default"].setStyles(sliderContainer, {
                display: 'inherit',
                top: `${Math.round(prect.y - h)}px`,
                left: `${Math.round(prect.x + (prect.width - w) / 2)}px`,
            });
            const sliderHeight = slider.parentNode.getBoundingClientRect().height;
            slider.style.height = `${this.volume * sliderHeight}px`;
        };
        const hideSlider = () => {
            _util_dom_util__WEBPACK_IMPORTED_MODULE_1__["default"].setStyles(sliderContainer, {
                display: 'none',
            });
        };
        const toggleSlider = () => {
            if (sliderContainer.style.display === 'none')
                showSlider();
            else
                hideSlider();
        };
        volumeText.addEventListener('click', toggleSlider);
        volumeText.addEventListener('mouseenter', () => {
            showSlider();
        });
        sliderContainer.addEventListener('mouseenter', (event) => {
            leave = false;
        });
        sliderContainer.addEventListener('mouseleave', (event) => {
            leave = true;
            if (!dragging)
                hideSlider();
        });
    }
    setUpOpenRomLink() {
        const romFile = document.getElementById('rom-file');
        romFile.addEventListener('change', () => {
            
            
            var req = new XMLHttpRequest();
            req.open("GET", 'https://imadering.github.io/wemus/NES/examples/dt.nes');
            req.overrideMimeType("text/plain; charset=x-user-defined");
            req.onerror = () => console.log(`Error loading ${path}: ${req.statusText}`);
            
            req.onload = function() {
              if (this.status === 200) {
                romFile = this.responseText;
                
                
                const jsApp = new _app_js_powered_app__WEBPACK_IMPORTED_MODULE_2__["JsApp"](this.wndMgr, {
                title: 'test',
                centerX: x,
                centerY: y,
                onClosed: (app) => {
                    this.removeApp(app);
                },
            });
            jsApp.setFile(this.responseText);
            this.apps.push(jsApp);
                
                
              } else if (this.status === 0) {
                // Aborted, so ignore error
              } else {
                req.onerror();
              }
            };
            
            req.send();
        });
    }
    setUpBlur() {
        window.addEventListener('blur', () => {
            this.apps.forEach(app => { app.onBlur(); });
        });
        window.addEventListener('focus', () => {
            this.apps.forEach(app => { app.onFocus(); });
        });
    }
}
window.addEventListener('load', () => {
    _util_storage_util__WEBPACK_IMPORTED_MODULE_4__["default"].setKeyPrefix('nesemu:');
    _util_gamepad_manager__WEBPACK_IMPORTED_MODULE_3__["GamepadManager"].setUp();
    const root = document.getElementById('nesroot');
    if (root != null)
        new Main(root);
});


/***/ }),

/***/ "./nes/apu.ts":
/*!********************!*\
  !*** ./nes/apu.ts ***!
  \********************/
/*! exports provided: kChannelTypes, Apu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kChannelTypes", function() { return kChannelTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Apu", function() { return Apu; });
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/util */ "./util/util.ts");
// APU: Audio Processing Unit

const BASE = 0x4000;
const STATUS_REG = 0x15;
const PAD1_REG = 0x16;
const PAD2_REG = 0x17;
const FRAME_COUNTER = 0x17;
const IRQ_INHIBIT = 1 << 6;
const SEQUENCER_MODE = 1 << 7;
const CONSTANT_VOLUME = 0x10;
const LENGTH_COUNTER_HALT = 0x20;
const LENGTH_COUNTER_HALT_TRI = 0x80;
const ENVELOPE_LOOP = 0x20;
const CPU_CLOCK = 1789773; // Hz
const CHANNEL_COUNT = 4;
const CH_PULSE1 = 0;
const CH_PULSE2 = 1;
const CH_TRIANGLE = 2;
const CH_NOISE = 3;
const REG_STATUS = 0;
const REG_SWEEP = 1;
const REG_TIMER_L = 2;
const REG_TIMER_H = 3;
const kChannelTypes = [
    0 /* PULSE */,
    0 /* PULSE */,
    1 /* TRIANGLE */,
    3 /* NOISE */,
];
const kLengthTable = [
    0x0a, 0xfe, 0x14, 0x02, 0x28, 0x04, 0x50, 0x06, 0xa0, 0x08, 0x3c, 0x0a, 0x0e, 0x0c, 0x1a, 0x0e,
    0x0c, 0x10, 0x18, 0x12, 0x30, 0x14, 0x60, 0x16, 0xc0, 0x18, 0x48, 0x1a, 0x10, 0x1c, 0x20, 0x1e,
];
const kNoiseFrequencies = [4, 8, 16, 32, 64, 96, 128, 160, 202, 254, 380, 508, 762, 1016, 2034, 4068];
const kPulseDutyRatio = [0.125, 0.25, 0.5, -0.25];
const VBLANK_START = 241;
// ================================================================
// GamePad
class GamePad {
    constructor() {
        this.status = new Uint8Array(2);
        this.tmp = new Uint8Array(2);
    }
    setStatus(no, status) {
        // Prevent simultaneous pressing on LR and UD.
        const LR = 64 /* L */ | 128 /* R */, UD = 16 /* U */ | 32 /* D */;
        if ((status & LR) === LR)
            status &= ~LR;
        if ((status & UD) === UD)
            status &= ~UD;
        this.status[no] = status;
    }
    latch() {
        this.tmp[0] = this.status[0];
        this.tmp[1] = this.status[1];
    }
    shift(no) {
        const value = this.tmp[no];
        this.tmp[no] = value >> 1;
        return value & 1;
    }
}
// ================================================================
// Sound channel
class Channel {
    constructor() {
        this.regs = new Uint8Array(4);
        this.stopped = true;
    }
    reset() {
        this.regs.fill(0);
        this.stopped = true;
    }
    write(reg, value) {
        this.regs[reg] = value;
    }
    getVolume() { return 0; }
    getFrequency() { return 0; }
    getDutyRatio() { return 0.5; }
    stop() {
        this.stopped = true;
    }
    update() { }
    isPlaying() {
        return !this.stopped;
    }
}
class PulseChannel extends Channel {
    constructor() {
        super(...arguments);
        this.lengthCounter = 0;
        this.sweepCounter = 0;
        this.envelopeDivider = 0; // i.e. Envelope counter
        this.envelopeCounter = 0; // i.e. Envelope volume
        this.envelopeReset = false;
    }
    reset() {
        super.reset();
        this.sweepCounter = 0;
        this.envelopeDivider = this.envelopeCounter = 0;
    }
    write(reg, value) {
        super.write(reg, value);
        switch (reg) {
            case REG_STATUS:
                this.stopped = false;
                if ((value & CONSTANT_VOLUME) === 0) {
                    this.envelopeDivider = value & 0x0f;
                    this.envelopeCounter = 0x0f;
                }
                break;
            case REG_SWEEP:
                this.sweepCounter = (value >> 4) & 7;
                break;
            case REG_TIMER_H:
                this.lengthCounter = kLengthTable[value >> 3];
                this.stopped = false;
                this.envelopeReset = true;
                break;
            default:
                break;
        }
    }
    getVolume() {
        if (this.stopped)
            return 0;
        let v = this.regs[REG_STATUS];
        if ((v & CONSTANT_VOLUME) !== 0)
            return (v & 15) / 15;
        return this.envelopeCounter / 15;
    }
    getFrequency() {
        const value = this.regs[REG_TIMER_L] + ((this.regs[REG_TIMER_H] & 7) << 8);
        return ((CPU_CLOCK / 16) / (value + 1)) | 0;
    }
    getDutyRatio() {
        return kPulseDutyRatio[(this.regs[REG_STATUS] >> 6) & 3];
    }
    update() {
        if (this.stopped)
            return;
        this.updateLength();
        this.updateEnvelope();
        this.sweep();
    }
    updateLength() {
        let v = this.regs[REG_STATUS];
        if ((v & LENGTH_COUNTER_HALT) !== 0)
            return;
        let l = this.lengthCounter - 4;
        if (l <= 0) {
            l = 0;
            this.stopped = true;
        }
        this.lengthCounter = l;
    }
    updateEnvelope() {
        if ((this.regs[REG_STATUS] & CONSTANT_VOLUME) !== 0)
            return;
        if (this.envelopeReset) {
            this.envelopeReset = false;
            this.envelopeCounter = 0x0f;
            this.envelopeDivider = this.regs[REG_STATUS] & 0x0f;
            return;
        }
        const DEC = 2;
        if (this.envelopeDivider >= DEC) {
            this.envelopeDivider -= DEC;
        }
        else {
            if (this.envelopeCounter > 0) {
                --this.envelopeCounter;
                this.envelopeDivider += this.regs[REG_STATUS] & 0x0f;
            }
            else {
                this.envelopeCounter = 0;
                if ((this.regs[REG_STATUS] & ENVELOPE_LOOP) !== 0) {
                    this.envelopeCounter = 0x0f;
                    this.envelopeDivider += this.regs[REG_STATUS] & 0x0f;
                }
            }
        }
    }
    // APU Sweep: http://wiki.nesdev.com/w/index.php/APU_Sweep
    sweep() {
        const sweep = this.regs[REG_SWEEP];
        if ((sweep & 0x80) === 0) // Not enabled.
            return;
        let c = this.sweepCounter;
        c += 2; // 2 sequences per frame.
        const count = (sweep >> 4) & 7;
        if (c >= count) {
            c -= count;
            let freq = this.regs[REG_TIMER_L] + ((this.regs[REG_TIMER_H] & 7) << 8);
            const shift = sweep & 7;
            if (shift > 0) {
                const add = freq >> shift;
                if ((sweep & 0x08) === 0) {
                    freq += add;
                    if (freq > 0x07ff)
                        this.stopped = true;
                }
                else {
                    freq -= add;
                    if (freq < 8)
                        this.stopped = true;
                }
                this.regs[REG_TIMER_L] = freq & 0xff;
                this.regs[REG_TIMER_H] = (this.regs[REG_TIMER_H] & ~7) | ((freq & 0x0700) >> 8);
            }
            c -= 2; // 2 sequences per frame
            if (c <= 0) {
                this.sweepCounter = ((sweep >> 4) & 7) + c;
            }
        }
        this.sweepCounter = c;
    }
}
class TriangleChannel extends Channel {
    constructor() {
        super(...arguments);
        this.lengthCounter = 0;
    }
    write(reg, value) {
        super.write(reg, value);
        switch (reg) {
            case REG_STATUS:
            case REG_TIMER_H:
                this.lengthCounter = this.regs[REG_STATUS] & 0x7f;
                this.stopped = this.lengthCounter <= 0;
                break;
            default:
                break;
        }
    }
    getVolume() {
        if (this.stopped)
            return 0;
        return 1;
    }
    getFrequency() {
        const value = this.regs[REG_TIMER_L] + ((this.regs[REG_TIMER_H] & 7) << 8);
        return ((CPU_CLOCK / 32) / (value + 1)) | 0;
    }
    update() {
        if (this.stopped)
            return;
        this.updateLength();
    }
    updateLength() {
        let v = this.regs[REG_STATUS];
        if ((v & LENGTH_COUNTER_HALT_TRI) !== 0)
            return;
        let l = this.lengthCounter - 4;
        if (l <= 0) {
            l = 0;
            this.stopped = true;
        }
        this.lengthCounter = l;
    }
}
class NoiseChannel extends Channel {
    constructor() {
        super(...arguments);
        this.lengthCounter = 0;
    }
    write(reg, value) {
        super.write(reg, value);
        switch (reg) {
            case REG_TIMER_H: // Set length.
                this.lengthCounter = kLengthTable[value >> 3];
                this.stopped = false;
                break;
            default:
                break;
        }
    }
    getVolume() {
        if (this.stopped)
            return 0;
        let v = this.regs[REG_STATUS];
        if ((v & CONSTANT_VOLUME) !== 0)
            return (v & 15) / 15;
        return 1;
    }
    getFrequency() {
        const period = this.regs[REG_TIMER_L] & 15;
        return kNoiseFrequencies[period];
    }
    update() {
        if (this.stopped)
            return;
        this.updateLength();
    }
    updateLength() {
        let v = this.regs[REG_STATUS];
        if ((v & LENGTH_COUNTER_HALT) !== 0)
            return;
        let l = this.lengthCounter - 1;
        if (l <= 0) {
            l = 0;
            if ((this.regs[2] & 0x80) === 0) {
                this.stopped = true;
            }
        }
        this.lengthCounter = l;
    }
}
// ================================================================
// Apu
class Apu {
    constructor(triggerIrq) {
        this.triggerIrq = triggerIrq;
        this.regs = new Uint8Array(0x20);
        this.channels = new Array(CHANNEL_COUNT);
        this.frameInterrupt = 0; // 0=not occurred, 0x40=occurred
        this.dmcInterrupt = 0x80; // 0=not occurred, 0x80=occurred
        this.gamePad = new GamePad();
        this.channels[CH_PULSE1] = new PulseChannel();
        this.channels[CH_PULSE2] = new PulseChannel();
        this.channels[CH_TRIANGLE] = new TriangleChannel();
        this.channels[CH_NOISE] = new NoiseChannel();
    }
    getChannelTypes() {
        return kChannelTypes;
    }
    reset() {
        this.regs.fill(0);
        this.regs[FRAME_COUNTER] = IRQ_INHIBIT;
        this.frameInterrupt = 0;
        this.dmcInterrupt = 0x80; // TODO: Implement
        this.channels.forEach(channel => { channel.reset(); });
    }
    save() {
        return {
            regs: _util_util__WEBPACK_IMPORTED_MODULE_0__["default"].convertUint8ArrayToBase64String(this.regs),
        };
    }
    load(saveData) {
        this.regs = _util_util__WEBPACK_IMPORTED_MODULE_0__["default"].convertBase64StringToUint8Array(saveData.regs);
    }
    read(adr) {
        const reg = adr - BASE;
        switch (reg) {
            case STATUS_REG:
                {
                    // TODO: Implement.
                    let result = this.dmcInterrupt | this.frameInterrupt;
                    for (let ch = 0; ch < CHANNEL_COUNT; ++ch) {
                        if (this.channels[ch].isPlaying())
                            result |= 1 << ch;
                    }
                    // Reading this register clears the frame interrupt flag (but not the DMC interrupt flag).
                    this.frameInterrupt = 0;
                    return result;
                }
            case PAD1_REG:
            case PAD2_REG:
                return this.gamePad.shift(reg - PAD1_REG);
            default:
                return 0;
        }
    }
    write(adr, value) {
        const reg = adr - BASE;
        if (reg >= 0x20)
            return;
        this.regs[reg] = value;
        if (reg < 0x10) { // Sound
            const ch = reg >> 2;
            const r = reg & 3;
            this.channels[ch].write(r, value);
        }
        switch (reg) {
            case STATUS_REG:
                this.dmcInterrupt = 0; // Writing to this register clears the DMC interrupt flag.
                for (let ch = 0; ch < CHANNEL_COUNT; ++ch) {
                    if ((value & (1 << ch)) === 0)
                        this.channels[ch].stop();
                }
                break;
            case PAD1_REG: // Pad status. bit0 = Controller shift register strobe
                if ((value & 1) === 0) {
                    this.gamePad.latch();
                }
                break;
            default:
                break;
        }
    }
    getVolume(ch) {
        if ((this.regs[STATUS_REG] & (1 << ch)) === 0)
            return 0;
        return this.channels[ch].getVolume();
    }
    getFrequency(ch) {
        return this.channels[ch].getFrequency();
    }
    getDutyRatio(ch) {
        return this.channels[ch].getDutyRatio();
    }
    setPadStatus(no, status) {
        this.gamePad.setStatus(no, status);
    }
    onHblank(hcount) {
        switch (hcount) {
            case VBLANK_START:
                this.channels.forEach(channel => { channel.update(); });
                if (this.isIrqEnabled()) {
                    this.frameInterrupt = 0x40;
                    this.triggerIrq();
                }
                break;
            default:
                break;
        }
    }
    isIrqEnabled() {
        // http://wiki.nesdev.com/w/index.php/IRQ
        // Enable: $4017 write with bits 7-6 = 00
        return (this.regs[FRAME_COUNTER] & (IRQ_INHIBIT | SEQUENCER_MODE)) === 0;
    }
}


/***/ }),

/***/ "./nes/bus.ts":
/*!********************!*\
  !*** ./nes/bus.ts ***!
  \********************/
/*! exports provided: Bus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bus", function() { return Bus; });
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/util */ "./util/util.ts");

const BLOCK_SIZE = 0x2000;
class Bus {
    constructor() {
        this.readerFuncTable = new Array(0x10000 / BLOCK_SIZE);
        this.writerFuncTable = new Array(0x10000 / BLOCK_SIZE);
        this.readErrorReported = false;
        this.writeErrorReported = false;
        this.clearMemoryMap();
    }
    clearMemoryMap() {
        this.readerFuncTable.fill(_adr => 0xff);
        this.writerFuncTable.fill((_adr, _value) => { });
    }
    setReadMemory(start, end, func) {
        const startBlock = (start / BLOCK_SIZE) | 0;
        const endBlock = (end / BLOCK_SIZE) | 0;
        for (let i = startBlock; i <= endBlock; ++i)
            this.readerFuncTable[i] = func;
    }
    setWriteMemory(start, end, func) {
        const startBlock = (start / BLOCK_SIZE) | 0;
        const endBlock = (end / BLOCK_SIZE) | 0;
        for (let i = startBlock; i <= endBlock; ++i)
            this.writerFuncTable[i] = func;
    }
    read8(adr) {
        const block = (adr / BLOCK_SIZE) | 0;
        const reader = this.readerFuncTable[block];
        if (!reader) {
            if (!this.readErrorReported) {
                console.error(`Illegal read at ${_util_util__WEBPACK_IMPORTED_MODULE_0__["default"].hex(adr, 4)}`);
                this.readErrorReported = true;
            }
            return 0xbf; // Returns dummy value (undefined opcode, non plausible value).
        }
        return reader(adr);
    }
    write8(adr, value) {
        const block = (adr / BLOCK_SIZE) | 0;
        const writer = this.writerFuncTable[block];
        if (!writer) {
            if (!this.writeErrorReported) {
                const sadr = _util_util__WEBPACK_IMPORTED_MODULE_0__["default"].hex(adr, 4), sv = _util_util__WEBPACK_IMPORTED_MODULE_0__["default"].hex(value, 2);
                console.error(`Illegal write at ${sadr}, ${sv}`);
                this.writeErrorReported = true;
            }
            return;
        }
        return writer(adr, value);
    }
    dump(start, count) {
        const mem = new Array();
        for (let i = 0; i < count; ++i) {
            mem.push(this.read8(i + start));
        }
        for (let i = 0; i < count; i += 16) {
            const line = mem.splice(0, 16).map(x => _util_util__WEBPACK_IMPORTED_MODULE_0__["default"].hex(x, 2)).join(' ');
            console.log(`${_util_util__WEBPACK_IMPORTED_MODULE_0__["default"].hex(start + i, 4)}: ${line}`);
        }
    }
}


/***/ }),

/***/ "./nes/const.ts":
/*!**********************!*\
  !*** ./nes/const.ts ***!
  \**********************/
/*! exports provided: Const, kColors, kStaggered, kFlipBits */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Const", function() { return Const; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kColors", function() { return kColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kStaggered", function() { return kStaggered; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kFlipBits", function() { return kFlipBits; });
var Const;
(function (Const) {
    Const.WIDTH = 256;
    Const.HEIGHT = 240;
})(Const || (Const = {}));
const kColors = [
    124, 124, 124,
    0, 0, 252,
    0, 0, 188,
    68, 40, 188,
    148, 0, 132,
    168, 0, 32,
    168, 16, 0,
    136, 20, 0,
    80, 48, 0,
    0, 120, 0,
    0, 104, 0,
    0, 88, 0,
    0, 64, 88,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    188, 188, 188,
    0, 120, 248,
    0, 88, 248,
    104, 68, 252,
    216, 0, 204,
    228, 0, 88,
    248, 56, 0,
    228, 92, 16,
    172, 124, 0,
    0, 184, 0,
    0, 168, 0,
    0, 168, 68,
    0, 136, 136,
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
    248, 248, 248,
    60, 188, 252,
    104, 136, 252,
    152, 120, 248,
    248, 120, 248,
    248, 88, 152,
    248, 120, 88,
    252, 160, 68,
    248, 184, 0,
    184, 248, 24,
    88, 216, 84,
    88, 248, 152,
    0, 232, 216,
    120, 120, 120,
    0, 0, 0,
    0, 0, 0,
    252, 252, 252,
    164, 228, 252,
    184, 184, 248,
    216, 184, 248,
    248, 184, 248,
    248, 164, 192,
    240, 208, 176,
    252, 224, 168,
    248, 216, 120,
    216, 248, 120,
    184, 248, 184,
    184, 248, 216,
    0, 252, 252,
    248, 216, 248,
    0, 0, 0,
    0, 0, 0,
];
const kStaggered = (() => {
    const NBIT = 8;
    const N = 1 << NBIT;
    const array = new Uint16Array(N);
    for (let i = 0; i < N; ++i) {
        let d = 0;
        for (let j = 0; j < NBIT; ++j) {
            d <<= 2;
            if ((i & (1 << (NBIT - 1 - j))) !== 0)
                d |= 1;
        }
        array[i] = d;
    }
    return array;
})();
const kFlipBits = (() => {
    const NBIT = 8;
    const N = 1 << NBIT;
    const array = new Uint8Array(N);
    for (let i = 0; i < N; ++i) {
        let d = 0;
        for (let j = 0; j < NBIT; ++j) {
            d <<= 1;
            if ((i & (1 << j)) !== 0)
                d |= 1;
        }
        array[i] = d;
    }
    return array;
})();


/***/ }),

/***/ "./nes/cpu.ts":
/*!********************!*\
  !*** ./nes/cpu.ts ***!
  \********************/
/*! exports provided: Cpu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cpu", function() { return Cpu; });
/* harmony import */ var _inst__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inst */ "./nes/inst.ts");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/util */ "./util/util.ts");
/* harmony import */ var _disasm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./disasm */ "./nes/disasm.ts");
// CPU: MOS 6502



const CARRY_BIT = 0;
const ZERO_BIT = 1;
const IRQBLK_BIT = 2;
const DECIMAL_BIT = 3;
const BREAK_BIT = 4;
const RESERVED_BIT = 5;
const OVERFLOW_BIT = 6;
const NEGATIVE_BIT = 7;
const CARRY_FLAG = 1 << CARRY_BIT;
const ZERO_FLAG = 1 << ZERO_BIT;
const IRQBLK_FLAG = 1 << IRQBLK_BIT;
const DECIMAL_FLAG = 1 << DECIMAL_BIT;
const BREAK_FLAG = 1 << BREAK_BIT;
const RESERVED_FLAG = 1 << RESERVED_BIT;
const OVERFLOW_FLAG = 1 << OVERFLOW_BIT;
const NEGATIVE_FLAG = 1 << NEGATIVE_BIT;
const VEC_NMI = 0xfffa;
const VEC_RESET = 0xfffc;
const VEC_IRQ = 0xfffe;
const MAX_STEP_LOG = 200;
const _NZ_MASK = ~(NEGATIVE_FLAG | ZERO_FLAG);
const _NZC_MASK = ~(NEGATIVE_FLAG | ZERO_FLAG | CARRY_FLAG);
const kNZTable = (() => {
    const table = new Uint8Array(256);
    for (let i = 0; i < 256; ++i) {
        let value = 0;
        if (i === 0)
            value |= ZERO_FLAG;
        if ((i & 0x80) !== 0)
            value |= NEGATIVE_FLAG;
        table[i] = value;
    }
    return table;
})();
function setReset(p, flag, mask) {
    if (flag)
        return p | mask;
    return p & ~mask;
}
function inc8(value) {
    return (value + 1) & 0xff;
}
function dec8(value) {
    return (value - 1) & 0xff;
}
function toSigned(value) {
    return value < 0x80 ? value : value - 0x0100;
}
class Cpu {
    constructor(bus) {
        this.bus = bus;
        this.breakPoints = {};
        this.watchRead = {};
        this.watchWrite = {};
        this.paused = false;
        this.irqDetected = false;
        this.stepLogs = [];
        this.$DEBUG = typeof window !== 'undefined' && !!window.$DEBUG; // Accessing global variable!!!
        this.a = this.x = this.y = this.s = this.p = 0;
        this.pc = 0;
    }
    reset() {
        this.p = IRQBLK_FLAG | BREAK_FLAG | RESERVED_FLAG;
        this.s = (this.s - 3) & 0xff;
        this.pc = this.read16(VEC_RESET);
        this.stepLogs.length = 0;
    }
    getRegs() {
        return {
            a: this.a,
            x: this.x,
            y: this.y,
            s: this.s,
            p: this.p,
            pc: this.pc,
        };
    }
    save() {
        return {
            a: this.a,
            x: this.x,
            y: this.y,
            s: this.s,
            p: this.p,
            pc: this.pc,
        };
    }
    load(saveData) {
        this.a = saveData.a;
        this.x = saveData.x;
        this.y = saveData.y;
        this.s = saveData.s;
        this.p = saveData.p;
        this.pc = saveData.pc;
    }
    deleteAllBreakPoints() {
        this.breakPoints = {};
        this.watchRead = {};
        this.watchWrite = {};
    }
    pause(value) {
        this.paused = value;
    }
    isPaused() {
        return this.paused;
    }
    // Non-maskable interrupt
    nmi() {
        const vector = this.read16(VEC_NMI);
        if (this.breakPoints.nmi) {
            this.paused = true;
            console.warn(`paused because NMI: ${_util_util__WEBPACK_IMPORTED_MODULE_1__["default"].hex(this.pc, 4)}, ${_util_util__WEBPACK_IMPORTED_MODULE_1__["default"].hex(vector, 4)}`);
        }
        if (this.$DEBUG) {
            this.addStepLog(`NMI occurred at pc=${_util_util__WEBPACK_IMPORTED_MODULE_1__["default"].hex(this.pc, 4)}`);
        }
        this.push16(this.pc);
        this.push(this.p & ~BREAK_FLAG);
        this.pc = vector;
        this.p |= IRQBLK_FLAG;
    }
    requestIrq() {
        this.irqDetected = true;
    }
    step() {
        if (this.irqDetected && ((this.p & IRQBLK_FLAG) === 0)) {
            this.irqDetected = false;
            this.handleIrq();
        }
        let pc = this.pc;
        if (this.$DEBUG) {
            this.addStepLog(Object(_disasm__WEBPACK_IMPORTED_MODULE_2__["disasm"])(this.bus, pc));
        }
        const op = this.read8(pc++);
        const inst = _inst__WEBPACK_IMPORTED_MODULE_0__["kInstTable"][op];
        if (inst == null) {
            console.error(`Unhandled OPCODE, ${_util_util__WEBPACK_IMPORTED_MODULE_1__["default"].hex(this.pc - 1, 4)}: ${_util_util__WEBPACK_IMPORTED_MODULE_1__["default"].hex(op, 2)}`);
            this.paused = true;
            return 0;
        }
        this.pc += inst.bytes;
        const adr = this.getAdr(pc, inst.addressing);
        let cycle = inst.cycle;
        // ========================================================
        // Dispatch
        switch (inst.opType) {
            default:
            case 0 /* UNKNOWN */:
                break;
            case 1 /* NOP */:
                break;
            case 2 /* LDA */:
                this.a = this.read8(adr);
                this.setNZFlag(this.a);
                break;
            case 3 /* STA */:
                this.write8(adr, this.a);
                break;
            case 4 /* LDX */:
                this.x = this.read8(adr);
                this.setNZFlag(this.x);
                break;
            case 5 /* STX */:
                this.write8(adr, this.x);
                break;
            case 6 /* LDY */:
                this.y = this.read8(adr);
                this.setNZFlag(this.y);
                break;
            case 7 /* STY */:
                this.write8(adr, this.y);
                break;
            case 8 /* TAX */:
                this.x = this.a;
                this.setNZFlag(this.x);
                break;
            case 9 /* TAY */:
                this.y = this.a;
                this.setNZFlag(this.y);
                break;
            case 10 /* TXA */:
                this.a = this.x;
                this.setNZFlag(this.a);
                break;
            case 11 /* TYA */:
                this.a = this.y;
                this.setNZFlag(this.a);
                break;
            case 12 /* TXS */:
                this.s = this.x;
                break;
            case 13 /* TSX */:
                this.x = this.s;
                this.setNZFlag(this.x);
                break;
            case 14 /* ADC */:
                {
                    const carry = (this.p & CARRY_FLAG) !== 0 ? 1 : 0;
                    const operand = this.read8(adr);
                    const result = this.a + operand + carry;
                    const overflow = ((this.a ^ result) & (operand ^ result) & 0x80) !== 0;
                    this.a = result & 0xff;
                    this.setNZCFlag(this.a, result >= 0x0100);
                    this.setOverFlow(overflow);
                }
                break;
            case 15 /* SBC */:
                // The 6502 overflow flag explained mathematically
                // http://www.righto.com/2012/12/the-6502-overflow-flag-explained.html
                {
                    const carry = (this.p & CARRY_FLAG) !== 0 ? 1 : 0;
                    const operand = 255 - this.read8(adr);
                    const result = this.a + operand + carry;
                    const overflow = ((this.a ^ result) & (operand ^ result) & 0x80) !== 0;
                    this.a = result & 0xff;
                    this.setNZCFlag(this.a, result >= 0x0100);
                    this.setOverFlow(overflow);
                }
                break;
            case 16 /* INX */:
                this.x = inc8(this.x);
                this.setNZFlag(this.x);
                break;
            case 17 /* INY */:
                this.y = inc8(this.y);
                this.setNZFlag(this.y);
                break;
            case 18 /* INC */:
                {
                    const value = inc8(this.read8(adr));
                    this.write8(adr, value);
                    this.setNZFlag(value);
                }
                break;
            case 19 /* DEX */:
                this.x = dec8(this.x);
                this.setNZFlag(this.x);
                break;
            case 20 /* DEY */:
                this.y = dec8(this.y);
                this.setNZFlag(this.y);
                break;
            case 21 /* DEC */:
                {
                    const value = dec8(this.read8(adr));
                    this.write8(adr, value);
                    this.setNZFlag(value);
                }
                break;
            case 22 /* AND */:
                {
                    const value = this.read8(adr);
                    this.a &= value;
                    this.setNZFlag(this.a);
                }
                break;
            case 23 /* ORA */:
                {
                    const value = this.read8(adr);
                    this.a |= value;
                    this.setNZFlag(this.a);
                }
                break;
            case 24 /* EOR */:
                {
                    const value = this.read8(adr);
                    this.a ^= value;
                    this.setNZFlag(this.a);
                }
                break;
            case 25 /* ROL */:
                {
                    const isAcc = inst.addressing === 2 /* ACCUMULATOR */;
                    const value = isAcc ? this.a : this.read8(adr);
                    const oldCarry = (this.p & CARRY_FLAG) !== 0 ? 1 : 0;
                    const newCarry = (value & 0x80) !== 0;
                    const newValue = ((value << 1) | oldCarry) & 0xff;
                    if (isAcc)
                        this.a = newValue;
                    else
                        this.write8(adr, newValue);
                    this.setNZCFlag(newValue, newCarry);
                }
                break;
            case 26 /* ROR */:
                {
                    const isAcc = inst.addressing === 2 /* ACCUMULATOR */;
                    const value = isAcc ? this.a : this.read8(adr);
                    const oldCarry = (this.p & CARRY_FLAG) !== 0 ? 0x80 : 0;
                    const newCarry = (value & 0x01) !== 0;
                    const newValue = (value >> 1) | oldCarry;
                    if (isAcc)
                        this.a = newValue;
                    else
                        this.write8(adr, newValue);
                    this.setNZCFlag(newValue, newCarry);
                }
                break;
            case 27 /* ASL */:
                {
                    const isAcc = inst.addressing === 2 /* ACCUMULATOR */;
                    const value = isAcc ? this.a : this.read8(adr);
                    const newCarry = (value & 0x80) !== 0;
                    const newValue = (value << 1) & 0xff;
                    if (isAcc)
                        this.a = newValue;
                    else
                        this.write8(adr, newValue);
                    this.setNZCFlag(newValue, newCarry);
                }
                break;
            case 28 /* LSR */:
                {
                    const isAcc = inst.addressing === 2 /* ACCUMULATOR */;
                    const value = isAcc ? this.a : this.read8(adr);
                    const newCarry = (value & 0x01) !== 0;
                    const newValue = (value >> 1) & 0xff;
                    if (isAcc)
                        this.a = newValue;
                    else
                        this.write8(adr, newValue);
                    this.setNZCFlag(newValue, newCarry);
                }
                break;
            case 29 /* BIT */:
                {
                    const value = this.read8(adr);
                    const result = this.a & value;
                    this.setZero(result === 0);
                    const mask = NEGATIVE_FLAG | OVERFLOW_FLAG;
                    this.p = (this.p & ~mask) | (value & mask);
                }
                break;
            case 30 /* CMP */:
                {
                    const value = this.read8(adr);
                    const result = this.a - value;
                    this.setNZCFlag(result & 255, result >= 0);
                }
                break;
            case 31 /* CPX */:
                {
                    const value = this.read8(adr);
                    const result = this.x - value;
                    this.setNZCFlag(result & 255, result >= 0);
                }
                break;
            case 32 /* CPY */:
                {
                    const value = this.read8(adr);
                    const result = this.y - value;
                    this.setNZCFlag(result & 255, result >= 0);
                }
                break;
            case 33 /* JMP */:
                this.pc = adr;
                break;
            case 34 /* JSR */:
                this.push16(this.pc - 1);
                this.pc = adr;
                break;
            case 35 /* RTS */:
                this.pc = this.pop16() + 1;
                break;
            case 36 /* RTI */:
                this.p = this.pop() | RESERVED_FLAG;
                this.pc = this.pop16();
                break;
            case 37 /* BCC */:
                cycle += this.branch(adr, (this.p & CARRY_FLAG) === 0);
                break;
            case 38 /* BCS */:
                cycle += this.branch(adr, (this.p & CARRY_FLAG) !== 0);
                break;
            case 39 /* BPL */:
                cycle += this.branch(adr, (this.p & NEGATIVE_FLAG) === 0);
                break;
            case 40 /* BMI */:
                cycle += this.branch(adr, (this.p & NEGATIVE_FLAG) !== 0);
                break;
            case 41 /* BNE */:
                cycle += this.branch(adr, (this.p & ZERO_FLAG) === 0);
                break;
            case 42 /* BEQ */:
                cycle += this.branch(adr, (this.p & ZERO_FLAG) !== 0);
                break;
            case 43 /* BVC */:
                cycle += this.branch(adr, (this.p & OVERFLOW_FLAG) === 0);
                break;
            case 44 /* BVS */:
                cycle += this.branch(adr, (this.p & OVERFLOW_FLAG) !== 0);
                break;
            case 45 /* PHA */:
                this.push(this.a);
                break;
            case 46 /* PHP */:
                this.push(this.p | BREAK_FLAG);
                break;
            case 47 /* PLA */:
                this.a = this.pop();
                this.setNZFlag(this.a);
                break;
            case 48 /* PLP */:
                this.p = this.pop() | RESERVED_FLAG;
                break;
            case 49 /* CLC */:
                this.p &= ~CARRY_FLAG;
                break;
            case 50 /* SEC */:
                this.p |= CARRY_FLAG;
                break;
            case 51 /* SEI */:
                this.p |= IRQBLK_FLAG;
                break;
            case 52 /* CLI */:
                this.p &= ~IRQBLK_FLAG;
                break;
            case 53 /* CLV */:
                this.p &= ~OVERFLOW_FLAG;
                break;
            case 54 /* SED */:
                // SED: normal to BCD mode
                // not implemented on NES
                this.p |= DECIMAL_FLAG;
                break;
            case 55 /* CLD */:
                // CLD: BCD to normal mode
                // not implemented on NES
                this.p &= ~DECIMAL_FLAG;
                break;
            case 56 /* BRK */:
                this.push16(this.pc + 1);
                this.push(this.p | BREAK_FLAG);
                this.pc = this.read16(VEC_IRQ);
                this.p |= IRQBLK_FLAG;
                break;
        }
        // ========================================================
        if (this.breakPoints[this.pc]) {
            this.paused = true;
            console.warn(`paused because PC matched break point: ${_util_util__WEBPACK_IMPORTED_MODULE_1__["default"].hex(this.pc, 4)}`);
        }
        return cycle;
    }
    read8(adr) {
        const value = this.bus.read8(adr);
        if (this.watchRead[adr]) {
            this.paused = true;
            console.warn(`Break because watched point read: adr=${_util_util__WEBPACK_IMPORTED_MODULE_1__["default"].hex(adr, 4)}, value=${_util_util__WEBPACK_IMPORTED_MODULE_1__["default"].hex(value, 2)}`);
        }
        return value;
    }
    read16(adr) {
        const lo = this.read8(adr);
        const hi = this.read8(adr + 1);
        return (hi << 8) | lo;
    }
    read16Indirect(adr) {
        const lo = this.read8(adr);
        const hi = this.read8((adr & 0xff00) + ((adr + 1) & 0xff));
        return (hi << 8) | lo;
    }
    write8(adr, value) {
        this.bus.write8(adr, value);
        if (this.watchWrite[adr]) {
            this.paused = true;
            console.warn(`Break because watched point write: adr=${_util_util__WEBPACK_IMPORTED_MODULE_1__["default"].hex(adr, 4)}, value=${_util_util__WEBPACK_IMPORTED_MODULE_1__["default"].hex(value, 2)}`);
        }
    }
    push(value) {
        this.write8(0x0100 + this.s, value);
        this.s = dec8(this.s);
    }
    push16(value) {
        let s = this.s;
        this.write8(0x0100 + s, value >> 8);
        s = dec8(s);
        this.write8(0x0100 + s, value & 0xff);
        this.s = dec8(s);
    }
    pop() {
        this.s = inc8(this.s);
        return this.read8(0x0100 + this.s);
    }
    pop16() {
        let s = this.s;
        s = inc8(s);
        const l = this.read8(0x0100 + s);
        s = inc8(s);
        const h = this.read8(0x0100 + s);
        this.s = s;
        return (h << 8) | l;
    }
    // Set N and Z flag for the given value.
    setNZFlag(nz) {
        this.p = (this.p & _NZ_MASK) | kNZTable[nz];
    }
    // Set N, Z and C flag for the given value.
    setNZCFlag(nz, carry) {
        this.p = (this.p & _NZC_MASK) | kNZTable[nz] | (carry ? CARRY_FLAG : 0);
    }
    setZero(value) {
        this.p = setReset(this.p, value, ZERO_FLAG);
    }
    setOverFlow(value) {
        this.p = setReset(this.p, value, OVERFLOW_FLAG);
    }
    addStepLog(line) {
        if (this.stepLogs.length < MAX_STEP_LOG) {
            this.stepLogs.push(line);
        }
        else {
            for (let i = 1; i < MAX_STEP_LOG; ++i)
                this.stepLogs[i - 1] = this.stepLogs[i];
            this.stepLogs[MAX_STEP_LOG - 1] = line;
        }
    }
    getAdr(pc, addressing) {
        switch (addressing) {
            case 2 /* ACCUMULATOR */:
            case 1 /* IMPLIED */:
                return 0; // Dummy.
            case 3 /* IMMEDIATE */:
            case 14 /* RELATIVE */:
                return pc;
            case 5 /* ZEROPAGE */:
                return this.read8(pc);
            case 6 /* ZEROPAGE_X */:
                return (this.read8(pc) + this.x) & 0xff;
            case 7 /* ZEROPAGE_Y */:
                return (this.read8(pc) + this.y) & 0xff;
            case 8 /* ABSOLUTE */:
                return this.read16(pc);
            case 9 /* ABSOLUTE_X */:
                return (this.read16(pc) + this.x) & 0xffff;
            case 10 /* ABSOLUTE_Y */:
                return (this.read16(pc) + this.y) & 0xffff;
            case 12 /* INDIRECT_X */:
                {
                    const zeroPageAdr = this.read8(pc);
                    return this.read16Indirect((zeroPageAdr + this.x) & 0xff);
                }
            case 13 /* INDIRECT_Y */:
                {
                    const zeroPageAdr = this.read8(pc);
                    const base = this.read16Indirect(zeroPageAdr);
                    return (base + this.y) & 0xffff;
                }
            case 11 /* INDIRECT */:
                {
                    const adr = this.read16(pc);
                    return this.read16Indirect(adr);
                }
            default:
                console.error(`Illegal addressing: ${addressing}`);
                this.paused = true;
                return 0;
        }
    }
    branch(adr, cond) {
        if (!cond)
            return 0;
        const pc = this.pc;
        const newPc = (pc + toSigned(this.read8(adr))) & 0xffff;
        this.pc = newPc;
        return ((pc ^ newPc) & 0x0100) > 0 ? 2 : 1;
    }
    handleIrq() {
        if (this.$DEBUG) {
            this.addStepLog(`IRQ occurred at pc=${_util_util__WEBPACK_IMPORTED_MODULE_1__["default"].hex(this.pc, 4)}`);
        }
        this.push16(this.pc);
        this.push(this.p & ~BREAK_FLAG);
        this.pc = this.read16(VEC_IRQ);
        this.p |= IRQBLK_FLAG;
        return true;
    }
}


/***/ }),

/***/ "./nes/disasm.ts":
/*!***********************!*\
  !*** ./nes/disasm.ts ***!
  \***********************/
/*! exports provided: kOpcode, disassemble, disasm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kOpcode", function() { return kOpcode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disassemble", function() { return disassemble; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disasm", function() { return disasm; });
/* harmony import */ var _inst__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inst */ "./nes/inst.ts");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/util */ "./util/util.ts");


const kOpcode = {
    [2 /* LDA */]: 'LDA',
    [3 /* STA */]: 'STA',
    [4 /* LDX */]: 'LDX',
    [5 /* STX */]: 'STX',
    [6 /* LDY */]: 'LDY',
    [7 /* STY */]: 'STY',
    [8 /* TAX */]: 'TAX',
    [9 /* TAY */]: 'TAY',
    [10 /* TXA */]: 'TXA',
    [11 /* TYA */]: 'TYA',
    [12 /* TXS */]: 'TXS',
    [13 /* TSX */]: 'TSX',
    [14 /* ADC */]: 'ADC',
    [15 /* SBC */]: 'SBC',
    [16 /* INX */]: 'INX',
    [17 /* INY */]: 'INY',
    [18 /* INC */]: 'INC',
    [19 /* DEX */]: 'DEX',
    [20 /* DEY */]: 'DEY',
    [21 /* DEC */]: 'DEC',
    [22 /* AND */]: 'AND',
    [23 /* ORA */]: 'ORA',
    [24 /* EOR */]: 'EOR',
    [25 /* ROL */]: 'ROL',
    [26 /* ROR */]: 'ROR',
    [27 /* ASL */]: 'ASL',
    [28 /* LSR */]: 'LSR',
    [29 /* BIT */]: 'BIT',
    [30 /* CMP */]: 'CMP',
    [31 /* CPX */]: 'CPX',
    [32 /* CPY */]: 'CPY',
    [33 /* JMP */]: 'JMP',
    [34 /* JSR */]: 'JSR',
    [35 /* RTS */]: 'RTS',
    [36 /* RTI */]: 'RTI',
    [37 /* BCC */]: 'BCC',
    [38 /* BCS */]: 'BCS',
    [39 /* BPL */]: 'BPL',
    [40 /* BMI */]: 'BMI',
    [41 /* BNE */]: 'BNE',
    [42 /* BEQ */]: 'BEQ',
    [43 /* BVC */]: 'BVC',
    [44 /* BVS */]: 'BVS',
    [45 /* PHA */]: 'PHA',
    [46 /* PHP */]: 'PHP',
    [47 /* PLA */]: 'PLA',
    [48 /* PLP */]: 'PLP',
    [49 /* CLC */]: 'CLC',
    [50 /* SEC */]: 'SEC',
    [51 /* SEI */]: 'SEI',
    [52 /* CLI */]: 'CLI',
    [53 /* CLV */]: 'CLV',
    [54 /* SED */]: 'SED',
    [55 /* CLD */]: 'CLD',
    [56 /* BRK */]: 'BRK',
    [1 /* NOP */]: 'NOP',
};
function disassemble(inst, mem, start, pc) {
    let operand = '';
    switch (inst.addressing) {
        case 1 /* IMPLIED */:
        case 2 /* ACCUMULATOR */:
            break;
        case 3 /* IMMEDIATE */:
            operand = ` #$${_util_util__WEBPACK_IMPORTED_MODULE_1__["default"].hex(mem[start], 2)}`;
            break;
        case 4 /* IMMEDIATE16 */:
            operand = ` #$${_util_util__WEBPACK_IMPORTED_MODULE_1__["default"].hex(mem[start] | (mem[start + 1] << 8), 4)}`;
            break;
        case 5 /* ZEROPAGE */:
            operand = ` $${_util_util__WEBPACK_IMPORTED_MODULE_1__["default"].hex(mem[start], 2)}`;
            break;
        case 6 /* ZEROPAGE_X */:
            operand = ` $${_util_util__WEBPACK_IMPORTED_MODULE_1__["default"].hex(mem[start], 2)}, X`;
            break;
        case 7 /* ZEROPAGE_Y */:
            operand = ` $${_util_util__WEBPACK_IMPORTED_MODULE_1__["default"].hex(mem[start], 2)}, Y`;
            break;
        case 8 /* ABSOLUTE */:
            operand = ` $${_util_util__WEBPACK_IMPORTED_MODULE_1__["default"].hex(mem[start] | (mem[start + 1] << 8), 4)}`;
            break;
        case 9 /* ABSOLUTE_X */:
            operand = ` $${_util_util__WEBPACK_IMPORTED_MODULE_1__["default"].hex(mem[start] | (mem[start + 1] << 8), 4)}, X`;
            break;
        case 10 /* ABSOLUTE_Y */:
            operand = ` $${_util_util__WEBPACK_IMPORTED_MODULE_1__["default"].hex(mem[start] | (mem[start + 1] << 8), 4)}, Y`;
            break;
        case 11 /* INDIRECT */:
            operand = ` (\$${_util_util__WEBPACK_IMPORTED_MODULE_1__["default"].hex(mem[start] | (mem[start + 1] << 8), 4)})`;
            break;
        case 12 /* INDIRECT_X */:
            operand = ` (\$${_util_util__WEBPACK_IMPORTED_MODULE_1__["default"].hex(mem[start], 2)}, X)`;
            break;
        case 13 /* INDIRECT_Y */:
            operand = ` (\$${_util_util__WEBPACK_IMPORTED_MODULE_1__["default"].hex(mem[start], 2)}), Y`;
            break;
        case 14 /* RELATIVE */:
            {
                const offset = mem[start];
                if (offset < 0x80)
                    operand = ` +${offset}  ; $${_util_util__WEBPACK_IMPORTED_MODULE_1__["default"].hex(pc + inst.bytes + offset, 4)}`;
                else
                    operand = ` ${offset - 256}  ; \$${_util_util__WEBPACK_IMPORTED_MODULE_1__["default"].hex(pc + inst.bytes + offset - 256, 4)}`;
            }
            break;
        default:
            console.error(`Unhandled addressing: ${inst.addressing}`);
            break;
    }
    return `${kOpcode[inst.opType]}${operand}`;
}
const tmpmem = new Uint8Array(3);
const bins = new Array(3);
function disasm(bus, pc) {
    const op = bus.read8(pc);
    const inst = _inst__WEBPACK_IMPORTED_MODULE_0__["kInstTable"][op] || _inst__WEBPACK_IMPORTED_MODULE_0__["kIllegalInstruction"];
    for (let i = 0; i < inst.bytes; ++i) {
        const m = bus.read8(pc + i);
        tmpmem[i] = m;
        bins[i] = _util_util__WEBPACK_IMPORTED_MODULE_1__["default"].hex(m, 2);
    }
    for (let i = inst.bytes; i < 3; ++i)
        bins[i] = '  ';
    const pcStr = _util_util__WEBPACK_IMPORTED_MODULE_1__["default"].hex(pc, 4);
    const binStr = bins.join(' ');
    const asmStr = disassemble(inst, tmpmem, 1, pc);
    return `${pcStr}: ${binStr}   ${asmStr}`;
}


/***/ }),

/***/ "./nes/inst.ts":
/*!*********************!*\
  !*** ./nes/inst.ts ***!
  \*********************/
/*! exports provided: kIllegalInstruction, kInstTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kIllegalInstruction", function() { return kIllegalInstruction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kInstTable", function() { return kInstTable; });
// Instruction definitions
const kTable = [
    [0xea, 1 /* NOP */, 1 /* IMPLIED */, 1, 2],
    // LDA
    [0xa9, 2 /* LDA */, 3 /* IMMEDIATE */, 2, 2],
    [0xa5, 2 /* LDA */, 5 /* ZEROPAGE */, 2, 3],
    [0xb5, 2 /* LDA */, 6 /* ZEROPAGE_X */, 2, 4],
    [0xad, 2 /* LDA */, 8 /* ABSOLUTE */, 3, 4],
    [0xbd, 2 /* LDA */, 9 /* ABSOLUTE_X */, 3, 4],
    [0xb9, 2 /* LDA */, 10 /* ABSOLUTE_Y */, 3, 4],
    [0xa1, 2 /* LDA */, 12 /* INDIRECT_X */, 2, 6],
    [0xb1, 2 /* LDA */, 13 /* INDIRECT_Y */, 2, 5],
    // STA
    [0x85, 3 /* STA */, 5 /* ZEROPAGE */, 2, 3],
    [0x95, 3 /* STA */, 6 /* ZEROPAGE_X */, 2, 4],
    [0x8d, 3 /* STA */, 8 /* ABSOLUTE */, 3, 4],
    [0x9d, 3 /* STA */, 9 /* ABSOLUTE_X */, 3, 5],
    [0x99, 3 /* STA */, 10 /* ABSOLUTE_Y */, 3, 5],
    [0x95, 3 /* STA */, 6 /* ZEROPAGE_X */, 2, 4],
    [0x81, 3 /* STA */, 12 /* INDIRECT_X */, 2, 6],
    [0x91, 3 /* STA */, 13 /* INDIRECT_Y */, 2, 6],
    // LDX
    [0xa2, 4 /* LDX */, 3 /* IMMEDIATE */, 2, 2],
    [0xa6, 4 /* LDX */, 5 /* ZEROPAGE */, 2, 3],
    [0xb6, 4 /* LDX */, 7 /* ZEROPAGE_Y */, 2, 4],
    [0xae, 4 /* LDX */, 8 /* ABSOLUTE */, 3, 4],
    [0xbe, 4 /* LDX */, 10 /* ABSOLUTE_Y */, 3, 4],
    // STX
    [0x86, 5 /* STX */, 5 /* ZEROPAGE */, 2, 3],
    [0x96, 5 /* STX */, 7 /* ZEROPAGE_Y */, 2, 4],
    [0x8e, 5 /* STX */, 8 /* ABSOLUTE */, 3, 4],
    // LDY
    [0xa0, 6 /* LDY */, 3 /* IMMEDIATE */, 2, 2],
    [0xa4, 6 /* LDY */, 5 /* ZEROPAGE */, 2, 3],
    [0xb4, 6 /* LDY */, 6 /* ZEROPAGE_X */, 2, 4],
    [0xac, 6 /* LDY */, 8 /* ABSOLUTE */, 3, 4],
    [0xbc, 6 /* LDY */, 9 /* ABSOLUTE_X */, 3, 4],
    // STY
    [0x84, 7 /* STY */, 5 /* ZEROPAGE */, 2, 3],
    [0x94, 7 /* STY */, 6 /* ZEROPAGE_X */, 2, 4],
    [0x8c, 7 /* STY */, 8 /* ABSOLUTE */, 3, 4],
    //// T??
    [0xaa, 8 /* TAX */, 1 /* IMPLIED */, 1, 2],
    [0xa8, 9 /* TAY */, 1 /* IMPLIED */, 1, 2],
    [0x8a, 10 /* TXA */, 1 /* IMPLIED */, 1, 2],
    [0x98, 11 /* TYA */, 1 /* IMPLIED */, 1, 2],
    [0x9a, 12 /* TXS */, 1 /* IMPLIED */, 1, 2],
    [0xba, 13 /* TSX */, 1 /* IMPLIED */, 1, 2],
    // ADC
    [0x69, 14 /* ADC */, 3 /* IMMEDIATE */, 2, 2],
    [0x65, 14 /* ADC */, 5 /* ZEROPAGE */, 2, 3],
    [0x75, 14 /* ADC */, 6 /* ZEROPAGE_X */, 2, 4],
    [0x6d, 14 /* ADC */, 8 /* ABSOLUTE */, 3, 4],
    [0x7d, 14 /* ADC */, 9 /* ABSOLUTE_X */, 3, 4],
    [0x79, 14 /* ADC */, 10 /* ABSOLUTE_Y */, 3, 4],
    [0x61, 14 /* ADC */, 12 /* INDIRECT_X */, 2, 6],
    [0x71, 14 /* ADC */, 13 /* INDIRECT_Y */, 2, 5],
    // SBC
    [0xe9, 15 /* SBC */, 3 /* IMMEDIATE */, 2, 2],
    [0xe5, 15 /* SBC */, 5 /* ZEROPAGE */, 2, 3],
    [0xf5, 15 /* SBC */, 6 /* ZEROPAGE_X */, 2, 4],
    [0xed, 15 /* SBC */, 8 /* ABSOLUTE */, 3, 4],
    [0xfd, 15 /* SBC */, 9 /* ABSOLUTE_X */, 3, 4],
    [0xf9, 15 /* SBC */, 10 /* ABSOLUTE_Y */, 3, 4],
    [0xe1, 15 /* SBC */, 12 /* INDIRECT_X */, 2, 6],
    [0xf1, 15 /* SBC */, 13 /* INDIRECT_Y */, 2, 5],
    // CMP
    [0xc9, 30 /* CMP */, 3 /* IMMEDIATE */, 2, 2],
    [0xc5, 30 /* CMP */, 5 /* ZEROPAGE */, 2, 3],
    [0xd5, 30 /* CMP */, 6 /* ZEROPAGE_X */, 2, 4],
    [0xcd, 30 /* CMP */, 8 /* ABSOLUTE */, 3, 4],
    [0xdd, 30 /* CMP */, 9 /* ABSOLUTE_X */, 3, 4],
    [0xd9, 30 /* CMP */, 10 /* ABSOLUTE_Y */, 3, 4],
    [0xc1, 30 /* CMP */, 12 /* INDIRECT_X */, 2, 6],
    [0xd1, 30 /* CMP */, 13 /* INDIRECT_Y */, 2, 5],
    // CPX
    [0xe0, 31 /* CPX */, 3 /* IMMEDIATE */, 2, 2],
    [0xe4, 31 /* CPX */, 5 /* ZEROPAGE */, 2, 3],
    [0xec, 31 /* CPX */, 8 /* ABSOLUTE */, 3, 4],
    // CPY
    [0xc0, 32 /* CPY */, 3 /* IMMEDIATE */, 2, 2],
    [0xc4, 32 /* CPY */, 5 /* ZEROPAGE */, 2, 3],
    [0xcc, 32 /* CPY */, 8 /* ABSOLUTE */, 3, 4],
    // INX
    [0xe8, 16 /* INX */, 1 /* IMPLIED */, 1, 2],
    // INY
    [0xc8, 17 /* INY */, 1 /* IMPLIED */, 1, 2],
    // INC
    [0xe6, 18 /* INC */, 5 /* ZEROPAGE */, 2, 5],
    [0xf6, 18 /* INC */, 6 /* ZEROPAGE_X */, 2, 6],
    [0xee, 18 /* INC */, 8 /* ABSOLUTE */, 3, 6],
    [0xfe, 18 /* INC */, 9 /* ABSOLUTE_X */, 3, 7],
    // DEX
    [0xca, 19 /* DEX */, 1 /* IMPLIED */, 1, 2],
    // DEY
    [0x88, 20 /* DEY */, 1 /* IMPLIED */, 1, 2],
    // DEC
    [0xc6, 21 /* DEC */, 5 /* ZEROPAGE */, 2, 5],
    [0xd6, 21 /* DEC */, 6 /* ZEROPAGE_X */, 2, 6],
    [0xce, 21 /* DEC */, 8 /* ABSOLUTE */, 3, 6],
    [0xde, 21 /* DEC */, 9 /* ABSOLUTE_X */, 3, 7],
    // AND
    [0x29, 22 /* AND */, 3 /* IMMEDIATE */, 2, 2],
    [0x25, 22 /* AND */, 5 /* ZEROPAGE */, 2, 3],
    [0x35, 22 /* AND */, 6 /* ZEROPAGE_X */, 2, 4],
    [0x2d, 22 /* AND */, 8 /* ABSOLUTE */, 3, 4],
    [0x3d, 22 /* AND */, 9 /* ABSOLUTE_X */, 3, 4],
    [0x39, 22 /* AND */, 10 /* ABSOLUTE_Y */, 3, 4],
    [0x21, 22 /* AND */, 12 /* INDIRECT_X */, 2, 6],
    [0x31, 22 /* AND */, 13 /* INDIRECT_Y */, 2, 5],
    // ORA
    [0x09, 23 /* ORA */, 3 /* IMMEDIATE */, 2, 2],
    [0x05, 23 /* ORA */, 5 /* ZEROPAGE */, 2, 3],
    [0x15, 23 /* ORA */, 6 /* ZEROPAGE_X */, 2, 4],
    [0x0d, 23 /* ORA */, 8 /* ABSOLUTE */, 3, 4],
    [0x1d, 23 /* ORA */, 9 /* ABSOLUTE_X */, 3, 4],
    [0x19, 23 /* ORA */, 10 /* ABSOLUTE_Y */, 3, 4],
    [0x01, 23 /* ORA */, 12 /* INDIRECT_X */, 2, 6],
    [0x11, 23 /* ORA */, 13 /* INDIRECT_Y */, 2, 5],
    // EOR
    [0x49, 24 /* EOR */, 3 /* IMMEDIATE */, 2, 2],
    [0x45, 24 /* EOR */, 5 /* ZEROPAGE */, 2, 3],
    [0x55, 24 /* EOR */, 6 /* ZEROPAGE_X */, 2, 4],
    [0x4d, 24 /* EOR */, 8 /* ABSOLUTE */, 3, 4],
    [0x5d, 24 /* EOR */, 9 /* ABSOLUTE_X */, 3, 4],
    [0x59, 24 /* EOR */, 10 /* ABSOLUTE_Y */, 3, 4],
    [0x41, 24 /* EOR */, 12 /* INDIRECT_X */, 2, 6],
    [0x51, 24 /* EOR */, 13 /* INDIRECT_Y */, 2, 5],
    // ROL
    [0x2a, 25 /* ROL */, 2 /* ACCUMULATOR */, 1, 2],
    [0x26, 25 /* ROL */, 5 /* ZEROPAGE */, 2, 5],
    [0x36, 25 /* ROL */, 6 /* ZEROPAGE_X */, 2, 6],
    [0x2e, 25 /* ROL */, 8 /* ABSOLUTE */, 3, 6],
    [0x3e, 25 /* ROL */, 9 /* ABSOLUTE_X */, 3, 7],
    // ROR
    [0x6a, 26 /* ROR */, 2 /* ACCUMULATOR */, 1, 2],
    [0x66, 26 /* ROR */, 5 /* ZEROPAGE */, 2, 5],
    [0x76, 26 /* ROR */, 6 /* ZEROPAGE_X */, 2, 6],
    [0x6e, 26 /* ROR */, 8 /* ABSOLUTE */, 3, 6],
    [0x7e, 26 /* ROR */, 9 /* ABSOLUTE_X */, 3, 7],
    // ASL
    [0x0a, 27 /* ASL */, 2 /* ACCUMULATOR */, 1, 2],
    [0x06, 27 /* ASL */, 5 /* ZEROPAGE */, 2, 5],
    [0x16, 27 /* ASL */, 6 /* ZEROPAGE_X */, 2, 6],
    [0x0e, 27 /* ASL */, 8 /* ABSOLUTE */, 3, 6],
    [0x1e, 27 /* ASL */, 9 /* ABSOLUTE_X */, 3, 7],
    // LSR
    [0x4a, 28 /* LSR */, 2 /* ACCUMULATOR */, 1, 2],
    [0x46, 28 /* LSR */, 5 /* ZEROPAGE */, 2, 5],
    [0x56, 28 /* LSR */, 6 /* ZEROPAGE_X */, 2, 6],
    [0x4e, 28 /* LSR */, 8 /* ABSOLUTE */, 3, 6],
    [0x5e, 28 /* LSR */, 9 /* ABSOLUTE_X */, 3, 7],
    // BIT
    [0x24, 29 /* BIT */, 5 /* ZEROPAGE */, 2, 3],
    [0x2c, 29 /* BIT */, 8 /* ABSOLUTE */, 3, 4],
    // JMP
    [0x4c, 33 /* JMP */, 8 /* ABSOLUTE */, 3, 3],
    [0x6c, 33 /* JMP */, 11 /* INDIRECT */, 3, 5],
    // JSR
    [0x20, 34 /* JSR */, 8 /* ABSOLUTE */, 3, 6],
    // RTS
    [0x60, 35 /* RTS */, 1 /* IMPLIED */, 1, 6],
    // RTI
    [0x40, 36 /* RTI */, 1 /* IMPLIED */, 1, 6],
    // Branch
    [0x90, 37 /* BCC */, 14 /* RELATIVE */, 2, 2],
    [0xb0, 38 /* BCS */, 14 /* RELATIVE */, 2, 2],
    [0x10, 39 /* BPL */, 14 /* RELATIVE */, 2, 2],
    [0x30, 40 /* BMI */, 14 /* RELATIVE */, 2, 2],
    [0xd0, 41 /* BNE */, 14 /* RELATIVE */, 2, 2],
    [0xf0, 42 /* BEQ */, 14 /* RELATIVE */, 2, 2],
    [0x50, 43 /* BVC */, 14 /* RELATIVE */, 2, 2],
    [0x70, 44 /* BVS */, 14 /* RELATIVE */, 2, 2],
    // Push, Pop
    [0x48, 45 /* PHA */, 1 /* IMPLIED */, 1, 3],
    [0x08, 46 /* PHP */, 1 /* IMPLIED */, 1, 3],
    [0x68, 47 /* PLA */, 1 /* IMPLIED */, 1, 4],
    [0x28, 48 /* PLP */, 1 /* IMPLIED */, 1, 4],
    [0x18, 49 /* CLC */, 1 /* IMPLIED */, 1, 2],
    [0x38, 50 /* SEC */, 1 /* IMPLIED */, 1, 2],
    [0x78, 51 /* SEI */, 1 /* IMPLIED */, 1, 2],
    [0x58, 52 /* CLI */, 1 /* IMPLIED */, 1, 2],
    [0xb8, 53 /* CLV */, 1 /* IMPLIED */, 1, 2],
    [0xf8, 54 /* SED */, 1 /* IMPLIED */, 1, 2],
    [0xd8, 55 /* CLD */, 1 /* IMPLIED */, 1, 2],
    [0x00, 56 /* BRK */, 1 /* IMPLIED */, 1, 7],
];
const kIllegalInstruction = {
    opType: 0 /* UNKNOWN */,
    addressing: 0 /* UNKNOWN */,
    bytes: 1,
    cycle: 0,
};
const kInstTable = (() => {
    const table = new Array(256);
    table.fill(kIllegalInstruction);
    kTable.forEach(inst => {
        const [code, opType, addressing, bytes, cycle] = inst;
        table[code] = { opType, addressing, bytes, cycle };
    });
    return table;
})();


/***/ }),

/***/ "./nes/mapper/mapper.ts":
/*!******************************!*\
  !*** ./nes/mapper/mapper.ts ***!
  \******************************/
/*! exports provided: Mapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mapper", function() { return Mapper; });
class Mapper {
    reset() {
    }
    onHblank(_hcount) {
    }
    save() {
        return {};
    }
    load(_saveData) {
    }
    getExtraSoundChannelTypes() {
        return [];
    }
    getSoundVolume(_channel) {
        return 0;
    }
    getSoundFrequency(_channel) {
        return 0;
    }
    getSoundDutyRatio(_channel) {
        return 0.5;
    }
}


/***/ }),

/***/ "./nes/mapper/mapper000.ts":
/*!*********************************!*\
  !*** ./nes/mapper/mapper000.ts ***!
  \*********************************/
/*! exports provided: Mapper000 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mapper000", function() { return Mapper000; });
/* harmony import */ var _mapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapper */ "./nes/mapper/mapper.ts");

class Mapper000 extends _mapper__WEBPACK_IMPORTED_MODULE_0__["Mapper"] {
    static create(_options) {
        return new Mapper000();
    }
}


/***/ }),

/***/ "./nes/mapper/mapper001.ts":
/*!*********************************!*\
  !*** ./nes/mapper/mapper001.ts ***!
  \*********************************/
/*! exports provided: Mapper001 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mapper001", function() { return Mapper001; });
/* harmony import */ var _mapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapper */ "./nes/mapper/mapper.ts");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/util */ "./util/util.ts");
// MMC1


const kMirrorTable = [
    2 /* SINGLE0 */,
    3 /* SINGLE1 */,
    1 /* VERT */,
    0 /* HORZ */,
];
class Mapper001 extends _mapper__WEBPACK_IMPORTED_MODULE_0__["Mapper"] {
    constructor(options) {
        super();
        this.options = options;
        this.maxPrg = 0;
        this.ram = new Uint8Array(0x2000);
        this.register = 0;
        this.counter = 0;
        this.prgBankMode = 3;
        this.prgReg = 0;
        this.chrBank4k = true;
        this.chrBank = [0 << 2, 1 << 2];
        const BANK_BIT = 14; // 16KB
        this.maxPrg = (options.prgSize >> BANK_BIT) - 1;
        // Serial: 5bits.
        this.options.bus.setWriteMemory(0x8000, 0xffff, (adr, value) => {
            if ((value & 0x80) !== 0) { // Reset
                this.resetRegister();
                return;
            }
            this.register |= (value & 1) << this.counter;
            if (++this.counter < 5)
                return;
            // Register filled: branch according to bit 13~14.
            switch (adr & 0xe000) {
                case 0x8000: // Control
                    {
                        this.options.ppu.setMirrorMode(kMirrorTable[this.register & 3]);
                        this.prgBankMode = (this.register >> 2) & 3;
                        this.setPrgBank(this.prgReg, this.chrBank[0]);
                        const newChrBank4k = (this.register & 0x10) !== 0;
                        if (this.chrBank4k !== newChrBank4k) {
                            this.chrBank4k = newChrBank4k;
                            this.setChrBank(0, this.chrBank[0]);
                            this.setChrBank(1, this.chrBank[1]);
                        }
                    }
                    break;
                case 0xa000: // CHR bank 0
                    {
                        const bank = this.register;
                        if (this.chrBank[0] !== bank)
                            this.setChrBank(0, bank);
                        this.setPrgBank(this.prgReg, bank);
                    }
                    break;
                case 0xc000: // CHR bank 1
                    {
                        const bank = this.register;
                        if (this.chrBank[1] !== bank)
                            this.setChrBank(1, bank);
                    }
                    break;
                case 0xe000: // PRG bank
                    this.setPrgBank(this.register, this.chrBank[0]);
                    break;
                default:
                    break;
            }
            this.resetRegister();
        });
        // PRG RAM
        this.ram.fill(0xbf);
        this.options.bus.setReadMemory(0x6000, 0x7fff, (adr) => this.ram[adr & 0x1fff]);
        this.options.bus.setWriteMemory(0x6000, 0x7fff, (adr, value) => { this.ram[adr & 0x1fff] = value; });
        this.setPrgBank(0, 0xff);
    }
    static create(options) {
        return new Mapper001(options);
    }
    save() {
        return {
            ram: _util_util__WEBPACK_IMPORTED_MODULE_1__["default"].convertUint8ArrayToBase64String(this.ram),
            register: this.register,
            counter: this.counter,
            prgBankMode: this.prgBankMode,
            prgReg: this.prgReg,
            chrBank4k: this.chrBank4k,
            chrBank: this.chrBank,
        };
    }
    load(saveData) {
        this.ram = _util_util__WEBPACK_IMPORTED_MODULE_1__["default"].convertBase64StringToUint8Array(saveData.ram);
        this.register = saveData.register;
        this.counter = saveData.counter;
        this.prgBankMode = saveData.prgBankMode;
        this.chrBank4k = saveData.chrBank4k;
        for (let i = 0; i < 2; ++i)
            this.setChrBank(i, saveData.chrBank[i]);
        this.setPrgBank(saveData.prgReg, this.chrBank[0]);
    }
    resetRegister() {
        this.register = 0;
        this.counter = 0;
    }
    setChrBank(hilo, bank) {
        if (this.chrBank4k) {
            const chr = hilo << 2;
            const b = bank << 2;
            for (let i = 0; i < 4; ++i)
                this.options.ppu.setChrBankOffset(chr + i, b + i);
        }
        else {
            if (hilo === 0)
                this.options.ppu.setChrBank(bank >> 1);
        }
        this.chrBank[hilo] = bank;
    }
    setPrgBank(reg, chrBank0) {
        this.prgReg = reg;
        const highBit = chrBank0 & (0x10 & this.maxPrg);
        const bank = ((reg & 0x0f) | highBit) & this.maxPrg;
        let p0, p1;
        switch (this.prgBankMode) {
            case 0:
            case 1:
                p0 = bank & ~1;
                p1 = bank | 1;
                break;
            case 2:
                p0 = 0;
                p1 = bank;
                break;
            case 3:
                p0 = bank;
                p1 = (this.maxPrg & 0x0f) | highBit;
                break;
            default:
                return;
        }
        this.options.prgBankCtrl.setPrgBank(0, p0 << 1);
        this.options.prgBankCtrl.setPrgBank(1, (p0 << 1) + 1);
        this.options.prgBankCtrl.setPrgBank(2, p1 << 1);
        this.options.prgBankCtrl.setPrgBank(3, (p1 << 1) + 1);
    }
}


/***/ }),

/***/ "./nes/mapper/mapper002.ts":
/*!*********************************!*\
  !*** ./nes/mapper/mapper002.ts ***!
  \*********************************/
/*! exports provided: Mapper002, Mapper093 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mapper002", function() { return Mapper002; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mapper093", function() { return Mapper093; });
/* harmony import */ var _mapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapper */ "./nes/mapper/mapper.ts");
// UxROM

class Mapper002Base extends _mapper__WEBPACK_IMPORTED_MODULE_0__["Mapper"] {
    constructor(prgBankShift, options) {
        super();
        this.options = options;
        this.bank = 0;
        const BANK_BIT = 14;
        const count = options.prgSize >> BANK_BIT;
        this.options.prgBankCtrl.setPrgBank(0, 0);
        this.options.prgBankCtrl.setPrgBank(1, 1);
        this.options.prgBankCtrl.setPrgBank(2, count * 2 - 2);
        this.options.prgBankCtrl.setPrgBank(3, count * 2 - 1);
        // PRG ROM bank
        this.options.bus.setWriteMemory(0x8000, 0xffff, (_adr, value) => {
            const bank = (value >> prgBankShift) << 1;
            this.setBank(bank);
        });
    }
    save() {
        return {
            bank: this.bank,
        };
    }
    load(saveData) {
        this.setBank(saveData.bank);
    }
    setBank(bank) {
        this.bank = bank;
        this.options.prgBankCtrl.setPrgBank(0, bank);
        this.options.prgBankCtrl.setPrgBank(1, bank + 1);
    }
}
class Mapper002 extends Mapper002Base {
    static create(options) {
        return new Mapper002(options);
    }
    constructor(options) {
        super(0, options);
    }
}
// INES Mapper 093: Sunsoft-2 IC
// http://wiki.nesdev.com/w/index.php/INES_Mapper_093
// This mapper is deprecated for new development. Homebrew projects other than mapper tests should
// use UxROM (iNES Mapper 002) instead.
class Mapper093 extends Mapper002Base {
    static create(options) {
        return new Mapper093(options);
    }
    constructor(options) {
        super(4, options);
    }
}


/***/ }),

/***/ "./nes/mapper/mapper003.ts":
/*!*********************************!*\
  !*** ./nes/mapper/mapper003.ts ***!
  \*********************************/
/*! exports provided: Mapper003, Mapper185 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mapper003", function() { return Mapper003; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mapper185", function() { return Mapper185; });
/* harmony import */ var _mapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapper */ "./nes/mapper/mapper.ts");

class Mapper003 extends _mapper__WEBPACK_IMPORTED_MODULE_0__["Mapper"] {
    constructor(options) {
        super();
        this.options = options;
        this.chrBank = 0;
        // Chr ROM bank
        this.options.bus.setWriteMemory(0x8000, 0xffff, (_adr, value) => {
            this.chrBank = value;
            this.options.ppu.setChrBank(this.chrBank);
        });
    }
    static create(options) {
        return new Mapper003(options);
    }
    save() {
        return {
            chrBank: this.chrBank,
        };
    }
    load(saveData) {
        this.chrBank = saveData.chrBank;
        this.options.ppu.setChrBank(this.chrBank);
    }
}
class Mapper185 extends Mapper003 {
    static create(options) {
        return new Mapper185(options);
    }
    constructor(options) {
        super(options);
        options.ppu.writePpuDirect(0x0000, 1); // For "Mighty bomb jack(J)"
    }
}


/***/ }),

/***/ "./nes/mapper/mapper004.ts":
/*!*********************************!*\
  !*** ./nes/mapper/mapper004.ts ***!
  \*********************************/
/*! exports provided: Mapper004, Mapper088, Mapper118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mapper004", function() { return Mapper004; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mapper088", function() { return Mapper088; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mapper118", function() { return Mapper118; });
/* harmony import */ var _mapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapper */ "./nes/mapper/mapper.ts");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/util */ "./util/util.ts");
// MMC3


const VRETURN = 262;
class Mapper004 extends _mapper__WEBPACK_IMPORTED_MODULE_0__["Mapper"] {
    constructor(options) {
        super();
        this.options = options;
        this.regs = new Uint8Array(8);
        this.ram = new Uint8Array(0x2000); // PRG RAM
        this.maxPrg = 0;
        this.bankSelect = 0;
        this.irqHlineEnable = false;
        this.irqHlineValue = -1;
        this.irqHlineCounter = -1;
        this.irqLatch = 0;
        const BANK_BIT = 13; // 0x2000
        this.maxPrg = (options.prgSize >> BANK_BIT) - 1;
        this.options.prgBankCtrl.setPrgBank(3, this.maxPrg);
        this.ram.fill(0xff);
        this.options.bus.setReadMemory(0x6000, 0x7fff, (adr) => this.ram[adr & 0x1fff]);
        this.options.bus.setWriteMemory(0x6000, 0x7fff, (adr, value) => { this.ram[adr & 0x1fff] = value; });
        // Select
        this.options.bus.setWriteMemory(0x8000, 0x9fff, (adr, value) => {
            if ((adr & 1) === 0) {
                this.bankSelect = value;
                this.setPrgBank(this.bankSelect);
                this.setChrBank(this.bankSelect);
            }
            else {
                const reg = this.bankSelect & 0x07;
                this.regs[reg] = value;
                if (reg < 6) // CHR
                    this.setChrBank(this.bankSelect);
                else // PRG
                    this.setPrgBank(this.bankSelect);
            }
        });
        // Mirroring
        this.options.bus.setWriteMemory(0xa000, 0xbfff, (adr, value) => {
            if ((adr & 1) === 0) {
                this.options.ppu.setMirrorMode((value & 1) === 0 ? 1 /* VERT */ : 0 /* HORZ */);
            }
            else {
                // PRG RAM protect, TODO: Implement.
            }
        });
        // IRQ
        this.options.bus.setWriteMemory(0xc000, 0xdfff, (adr, value) => {
            if ((adr & 1) === 0) {
                this.irqLatch = value;
                this.setIrqHlineValue(this.irqLatch);
            }
            else {
                this.setIrqHlineValue(this.irqLatch);
            }
        });
        this.options.bus.setWriteMemory(0xe000, 0xffff, (adr, _value) => {
            if ((adr & 1) === 0) {
                this.enableIrqHline(false);
                this.resetIrqHlineCounter();
            }
            else {
                this.enableIrqHline(true);
            }
        });
        this.setPrgBank(this.bankSelect); // Initial
        // http://wiki.nesdev.com/w/index.php/INES#Flags_6
        // iNes header, flags 6
        // > Some mappers, such as MMC1, MMC3, and AxROM, can control nametable mirroring.
        // > They ignore bit 0
        let mirror = 1 /* VERT */;
        // Dirty hack: detect mirror mode from ROM hash.
        switch (this.options.romHash) {
            case '6c0cd447297e95e45db35a4373dbeae1': // Babel no Tou
            case 'e791b12fc3419a2e2f8a5ed64b210d72': // Dragon Spirit
            case '44c206c61ff37406815f21b922e105c7': // Family Pinball
                mirror = 0 /* HORZ */;
                break;
            default:
                break;
        }
        this.options.ppu.setMirrorMode(mirror); // Default vertical mirroring?
    }
    static create(options) {
        return new Mapper004(options);
    }
    reset() {
        this.irqHlineEnable = false;
        this.irqHlineValue = this.irqHlineCounter = -1;
    }
    save() {
        return {
            regs: _util_util__WEBPACK_IMPORTED_MODULE_1__["default"].convertUint8ArrayToBase64String(this.regs),
            ram: _util_util__WEBPACK_IMPORTED_MODULE_1__["default"].convertUint8ArrayToBase64String(this.ram),
            bankSelect: this.bankSelect,
            irqHlineEnable: this.irqHlineEnable,
            irqHlineValue: this.irqHlineValue,
            irqHlineCounter: this.irqHlineCounter,
            irqLatch: this.irqLatch,
        };
    }
    load(saveData) {
        this.regs = _util_util__WEBPACK_IMPORTED_MODULE_1__["default"].convertBase64StringToUint8Array(saveData.regs);
        this.ram = _util_util__WEBPACK_IMPORTED_MODULE_1__["default"].convertBase64StringToUint8Array(saveData.ram);
        this.bankSelect = saveData.bankSelect;
        this.irqHlineEnable = saveData.irqHlineEnable;
        this.irqHlineValue = saveData.irqHlineValue;
        this.irqHlineCounter = saveData.irqHlineCounter;
        this.irqLatch = saveData.irqLatch;
        this.setPrgBank(this.bankSelect);
        this.setChrBank(this.bankSelect);
    }
    onHblank(hcount) {
        // http://bobrost.com/nes/files/mmc3irqs.txt
        // Note: BGs OR sprites MUST be enabled in $2001 (bits 3 and 4)
        // in order for the countdown to occur.
        if ((this.options.ppu.getReg(1) & 0x18) !== 0) {
            if (--this.irqHlineCounter === 0 && this.irqHlineEnable) {
                this.options.cpu.requestIrq();
            }
        }
        switch (hcount) {
            case VRETURN:
                this.irqHlineCounter = this.irqHlineValue;
                break;
            default:
                break;
        }
    }
    setPrgBank(swap) {
        if ((swap & 0x40) === 0) {
            this.options.prgBankCtrl.setPrgBank(0, this.regs[6]);
            this.options.prgBankCtrl.setPrgBank(1, this.regs[7]);
            this.options.prgBankCtrl.setPrgBank(2, this.maxPrg - 1);
        }
        else {
            this.options.prgBankCtrl.setPrgBank(2, this.regs[6]);
            this.options.prgBankCtrl.setPrgBank(1, this.regs[7]);
            this.options.prgBankCtrl.setPrgBank(0, this.maxPrg - 1);
        }
    }
    setChrBank(swap) {
        if ((swap & 0x80) === 0) {
            this.options.ppu.setChrBankOffset(0, this.regs[0] & 0xfe);
            this.options.ppu.setChrBankOffset(1, this.regs[0] | 1);
            this.options.ppu.setChrBankOffset(2, this.regs[1] & 0xfe);
            this.options.ppu.setChrBankOffset(3, this.regs[1] | 1);
            this.options.ppu.setChrBankOffset(4, this.regs[2]);
            this.options.ppu.setChrBankOffset(5, this.regs[3]);
            this.options.ppu.setChrBankOffset(6, this.regs[4]);
            this.options.ppu.setChrBankOffset(7, this.regs[5]);
        }
        else {
            this.options.ppu.setChrBankOffset(4, this.regs[0] & 0xfe);
            this.options.ppu.setChrBankOffset(5, this.regs[0] | 1);
            this.options.ppu.setChrBankOffset(6, this.regs[1] & 0xfe);
            this.options.ppu.setChrBankOffset(7, this.regs[1] | 1);
            this.options.ppu.setChrBankOffset(0, this.regs[2]);
            this.options.ppu.setChrBankOffset(1, this.regs[3]);
            this.options.ppu.setChrBankOffset(2, this.regs[4]);
            this.options.ppu.setChrBankOffset(3, this.regs[5]);
        }
    }
    setIrqHlineValue(line) {
        this.irqHlineValue = line;
        this.irqHlineCounter = this.irqHlineValue;
    }
    enableIrqHline(value) {
        this.irqHlineEnable = value;
    }
    resetIrqHlineCounter() {
        this.irqHlineCounter = 0;
    }
}
class Mapper088 extends Mapper004 {
    constructor(options) {
        super(options);
        this.options = options;
        // Select
        this.options.bus.setWriteMemory(0x8000, 0x9fff, (adr, value) => {
            if ((adr & 1) === 0) {
                this.bankSelect = value & 0x07;
                this.setPrgBank(this.bankSelect);
                this.setChrBank(this.bankSelect);
            }
            else {
                const reg = this.bankSelect & 0x07;
                if (reg < 6) { // CHR
                    value &= 0x3f;
                    if (reg >= 2)
                        value |= 0x40;
                    this.regs[reg] = value;
                    this.setChrBank(this.bankSelect);
                }
                else { // PRG
                    this.regs[reg] = value;
                    this.setPrgBank(this.bankSelect);
                }
            }
        });
    }
    static create(options) {
        return new Mapper088(options);
    }
}
class Mapper118 extends Mapper004 {
    static create(options) {
        return new Mapper118(options);
    }
    constructor(options) {
        super(options);
        // Select
        this.options.bus.setWriteMemory(0x8000, 0x9fff, (adr, value) => {
            if ((adr & 1) === 0) {
                this.bankSelect = value;
                this.setPrgBank(this.bankSelect);
                this.setChrBank(this.bankSelect);
            }
            else {
                const reg = this.bankSelect & 0x07;
                this.regs[reg] = value & 0x7f;
                if (reg < 6) { // CHR
                    this.setChrBank(this.bankSelect);
                }
                else { // PRG
                    this.setPrgBank(this.bankSelect);
                }
                const chrA12 = this.regs[0] & 0x80;
                const bank = this.regs[0] & 7;
                if ((chrA12 === 0 && bank < 2) || (chrA12 !== 0 && bank >= 2 && bank < 6))
                    this.options.ppu.setMirrorMode((value & 0x80) === 0 ? 2 /* SINGLE0 */ : 3 /* SINGLE1 */);
            }
        });
    }
}


/***/ }),

/***/ "./nes/mapper/mapper007.ts":
/*!*********************************!*\
  !*** ./nes/mapper/mapper007.ts ***!
  \*********************************/
/*! exports provided: Mapper007 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mapper007", function() { return Mapper007; });
/* harmony import */ var _mapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapper */ "./nes/mapper/mapper.ts");
// AxROM

const kMirrorTable = [2 /* SINGLE0 */, 3 /* SINGLE1 */];
class Mapper007 extends _mapper__WEBPACK_IMPORTED_MODULE_0__["Mapper"] {
    constructor(options) {
        super();
        this.options = options;
        // 32KB switchable PRG ROM bank
        // const BANK_BIT = 15
        // const count = prgSize >> BANK_BIT
        // PRG ROM bank
        this.options.bus.setWriteMemory(0x8000, 0xffff, (_adr, value) => {
            const bank = value << 2;
            for (let i = 0; i < 4; ++i)
                this.options.prgBankCtrl.setPrgBank(i, bank + i);
            const namePage = (value >> 4) & 1;
            this.options.ppu.setMirrorMode(kMirrorTable[namePage]);
        });
    }
    static create(options) {
        return new Mapper007(options);
    }
}


/***/ }),

/***/ "./nes/mapper/mapper010.ts":
/*!*********************************!*\
  !*** ./nes/mapper/mapper010.ts ***!
  \*********************************/
/*! exports provided: Mapper010 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mapper010", function() { return Mapper010; });
/* harmony import */ var _mapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapper */ "./nes/mapper/mapper.ts");
// MMC4 (FxROM)

class Mapper010 extends _mapper__WEBPACK_IMPORTED_MODULE_0__["Mapper"] {
    constructor(options) {
        super();
        this.options = options;
        // const BANK_BIT = 14
        // const count = prgSize >> BANK_BIT
        // PRG ROM bank
        this.options.bus.setWriteMemory(0xa000, 0xbfff, (adr, value) => {
            if (adr < 0xb000) {
                const prgBank = value << 1;
                this.options.prgBankCtrl.setPrgBank(0, prgBank);
                this.options.prgBankCtrl.setPrgBank(1, prgBank + 1);
            }
            else {
                this.options.ppu.setChrBank(value);
            }
        });
        // TODO: Implement latch to switch CHR bank.
        this.options.bus.setWriteMemory(0xe000, 0xf000, (adr, value) => {
            if (adr >= 0xf000)
                this.options.ppu.setMirrorMode((value & 1) === 0 ? 1 /* VERT */ : 0 /* HORZ */);
        });
        // PRG RAM
        const ram = new Uint8Array(0x2000);
        ram.fill(0xbf);
        this.options.bus.setReadMemory(0x6000, 0x7fff, (adr) => ram[adr & 0x1fff]);
        this.options.bus.setWriteMemory(0x6000, 0x7fff, (adr, value) => { ram[adr & 0x1fff] = value; });
    }
    static create(options) {
        return new Mapper010(options);
    }
}


/***/ }),

/***/ "./nes/mapper/mapper019.ts":
/*!*********************************!*\
  !*** ./nes/mapper/mapper019.ts ***!
  \*********************************/
/*! exports provided: Mapper019 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mapper019", function() { return Mapper019; });
/* harmony import */ var _mapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapper */ "./nes/mapper/mapper.ts");
// Namco 163

class Mapper019 extends _mapper__WEBPACK_IMPORTED_MODULE_0__["Mapper"] {
    constructor(options) {
        super();
        this.options = options;
        // const BANK_BIT = 13
        // const count = prgSize >> BANK_BIT
        // CHR ROM bank
        this.options.bus.setWriteMemory(0x8000, 0xbfff, (adr, value) => {
            const bank = (adr >> 11) & 7;
            this.options.ppu.setChrBankOffset(bank, value);
        });
        // PRG ROM bank
        this.options.bus.setWriteMemory(0xe000, 0xffff, (adr, value) => {
            if (adr <= 0xf7ff) {
                const bank = (adr - 0xe000) / 0x800;
                this.options.prgBankCtrl.setPrgBank(bank, value);
            }
        });
    }
    static create(options) {
        return new Mapper019(options);
    }
}


/***/ }),

/***/ "./nes/mapper/mapper023.ts":
/*!*********************************!*\
  !*** ./nes/mapper/mapper023.ts ***!
  \*********************************/
/*! exports provided: Mapper023, Mapper025 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mapper023", function() { return Mapper023; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mapper025", function() { return Mapper025; });
/* harmony import */ var _mapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapper */ "./nes/mapper/mapper.ts");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/util */ "./util/util.ts");
// VRC4e
// http://wiki.nesdev.com/w/index.php/INES_Mapper_023


const IRQ_ENABLE_AFTER = 1 << 0;
const IRQ_ENABLE = 1 << 1;
const IRQ_MODE = 1 << 2;
const kMirrorTable = [1 /* VERT */, 0 /* HORZ */, 2 /* SINGLE0 */, 3 /* SINGLE1 */];
class Mapper023Base extends _mapper__WEBPACK_IMPORTED_MODULE_0__["Mapper"] {
    constructor(options, mapping) {
        super();
        this.options = options;
        this.ram = new Uint8Array(0x2000);
        this.prgBankMode = 0;
        this.prgBank = new Array(4);
        this.chrBank = new Array(8);
        this.irqControl = 0;
        this.irqLatch = 0;
        this.irqCounter = 0;
        const BANK_BIT = 13;
        const prgCount = options.prgSize >> BANK_BIT;
        this.setPrgBank(0, 0);
        this.setPrgBank(1, 1);
        this.setPrgBank(2, prgCount - 2);
        this.setPrgBank(3, prgCount - 1);
        // PRG ROM bank
        this.options.bus.setWriteMemory(0x8000, 0x9fff, (adr, value) => {
            if (0x8000 <= adr && adr <= 0x8006) {
                switch (this.prgBankMode) {
                    case 0:
                        this.setPrgBank(0, value);
                        break;
                    case 1:
                        this.setPrgBank(2, value);
                        break;
                }
            }
            else if ((adr & 0xff00) === 0x9000) {
                const reg = mapping[adr & 0xff];
                if (reg === 0 || reg === 2) { // Mirroring Control.
                    const mirrorMode = value & 3;
                    this.options.ppu.setMirrorMode(kMirrorTable[mirrorMode]);
                }
                else if (reg === 4 || reg === 6) { // PRG Swap Mode control.
                    this.prgBankMode = (value >> 1) & 1;
                    switch (this.prgBankMode) {
                        case 0:
                            this.setPrgBank(2, prgCount - 2);
                            break;
                        case 1:
                            this.setPrgBank(0, prgCount - 2);
                            break;
                    }
                }
            }
        });
        this.options.bus.setWriteMemory(0xa000, 0xbfff, (adr, value) => {
            if (0xa000 <= adr && adr <= 0xa006) {
                this.setPrgBank(1, value & (prgCount - 1));
            }
            else if ((adr & 0xff00) === 0xb000) {
                const reg = mapping[adr & 0xff];
                if (reg === 0) { // CHR Select 0
                    this.setChrBankOffset(0, (this.chrBank[0] & ~0x0f) | (value & 0x0f));
                }
                else if (reg === 2) {
                    this.setChrBankOffset(0, (this.chrBank[0] & ~0x1f0) | ((value & 0x1f) << 4));
                }
                else if (reg === 4) { // CHR Select 1
                    this.setChrBankOffset(1, (this.chrBank[1] & ~0x0f) | (value & 0x0f));
                }
                else if (reg === 6) {
                    this.setChrBankOffset(1, (this.chrBank[1] & ~0x1f0) | ((value & 0x1f) << 4));
                }
            }
        });
        this.options.bus.setWriteMemory(0xc000, 0xffff, (adr, value) => {
            if (0xc000 <= adr && adr <= 0xefff) { // CHR Select 2...7
                const reg = mapping[adr & 0xff];
                let ofs = 0, hi = false;
                if (reg === 0) {
                    ofs = 0;
                }
                else if (reg === 2) {
                    ofs = 0;
                    hi = true;
                }
                else if (reg === 4) {
                    ofs = 1;
                }
                else if (reg === 6) {
                    ofs = 1;
                    hi = true;
                }
                else {
                    return;
                }
                const bank = ((adr & 0x3000) >> 11) + 2 + ofs;
                let newValue;
                if (hi)
                    newValue = (this.chrBank[bank] & ~0x1f0) | ((value & 0x1f) << 4);
                else
                    newValue = (this.chrBank[bank] & ~0x0f) | (value & 0x0f);
                this.setChrBankOffset(bank, newValue);
            }
            else { // IRQ
                const reg = mapping[adr & 0xff];
                if (reg === 0) { // IRQ Latch: low 4 bits
                    this.irqLatch = (this.irqLatch & ~0x0f) | (value & 0x0f);
                }
                else if (reg === 2) { // IRQ Latch: high 4 bits
                    this.irqLatch = (this.irqLatch & ~0xf0) | ((value & 0x0f) << 4);
                }
                else if (reg === 4) { // IRQ Control
                    this.irqControl = value;
                    if ((this.irqControl & IRQ_ENABLE) !== 0) {
                        this.irqCounter = this.irqLatch;
                    }
                }
                else if (reg === 6) { // IRQ Acknowledge
                    // Copy to enable
                    const ea = this.irqControl & IRQ_ENABLE_AFTER;
                    this.irqControl = (this.irqControl & ~IRQ_ENABLE) | (ea << 1);
                }
            }
        });
        // PRG RAM
        this.ram.fill(0xff);
        this.options.bus.setReadMemory(0x6000, 0x7fff, (adr) => this.ram[adr & 0x1fff]);
        this.options.bus.setWriteMemory(0x6000, 0x7fff, (adr, value) => { this.ram[adr & 0x1fff] = value; });
    }
    reset() {
        this.irqControl = 0;
        this.irqLatch = this.irqCounter = 0;
    }
    save() {
        return {
            ram: _util_util__WEBPACK_IMPORTED_MODULE_1__["default"].convertUint8ArrayToBase64String(this.ram),
            prgBankMode: this.prgBankMode,
            prgBank: this.prgBank,
            chrBank: this.chrBank,
            irqControl: this.irqControl,
            irqLatch: this.irqLatch,
            irqCounter: this.irqCounter,
        };
    }
    load(saveData) {
        this.ram = _util_util__WEBPACK_IMPORTED_MODULE_1__["default"].convertBase64StringToUint8Array(saveData.ram);
        this.prgBankMode = saveData.prgBankMode;
        // this.prgBank = saveData.prgBank
        // this.chrBank = saveData.chrBank
        this.irqControl = saveData.irqControl;
        this.irqLatch = saveData.irqLatch;
        this.irqCounter = saveData.irqCounter;
        for (let i = 0; i < 4; ++i)
            this.setPrgBank(i, saveData.prgBank[i]);
        for (let i = 0; i < 8; ++i)
            this.setChrBankOffset(i, saveData.chrBank[i]);
    }
    onHblank(_hcount) {
        if ((this.irqControl & IRQ_ENABLE) !== 0) {
            let c = this.irqCounter;
            if ((this.irqControl & IRQ_MODE) === 0) { // scanline mode
                c += 1;
            }
            else { // cycle mode
                c += 185; // TODO: Calculate.
            }
            if (c > 255) {
                c = this.irqLatch;
                this.options.cpu.requestIrq();
            }
            this.irqCounter = c;
        }
    }
    setPrgBank(bank, value) {
        this.prgBank[bank] = value;
        this.options.prgBankCtrl.setPrgBank(bank, value);
    }
    setChrBankOffset(bank, value) {
        this.chrBank[bank] = value;
        this.options.ppu.setChrBankOffset(bank, value);
    }
}
class Mapper023 extends Mapper023Base {
    static create(options) {
        return new Mapper023(options);
    }
    constructor(options) {
        super(options, {
            0: 0,
            4: 2,
            8: 4,
            0x0c: 6,
            1: 2,
            2: 4,
            3: 6,
        });
    }
}
class Mapper025 extends Mapper023Base {
    static create(options) {
        return new Mapper025(options);
    }
    constructor(options) {
        super(options, {
            0: 0,
            1: 4,
            2: 2,
            3: 6,
        });
    }
}


/***/ }),

/***/ "./nes/mapper/mapper024.ts":
/*!*********************************!*\
  !*** ./nes/mapper/mapper024.ts ***!
  \*********************************/
/*! exports provided: Mapper024, Mapper026 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mapper024", function() { return Mapper024; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mapper026", function() { return Mapper026; });
/* harmony import */ var _mapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapper */ "./nes/mapper/mapper.ts");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/util */ "./util/util.ts");
// VRC6
// http://wiki.nesdev.com/w/index.php/VRC6


const IRQ_ENABLE_AFTER = 1 << 0;
const IRQ_ENABLE = 1 << 1;
const IRQ_MODE = 1 << 2;
const CPU_CLOCK = 1789773; // Hz
const VBLANK_START = 241;
const kMirrorTable = [1 /* VERT */, 0 /* HORZ */, 2 /* SINGLE0 */, 3 /* SINGLE1 */];
const kChrBankTable = [
    [0, 1, 2, 3, 4, 5, 6, 7],
    [0, 0, 1, 1, 2, 2, 3, 3],
    [0, 1, 2, 3, 4, 4, 5, 5],
    [0, 1, 2, 3, 4, 4, 5, 5],
];
const kChannelTypes = [
    0 /* PULSE */,
    0 /* PULSE */,
    2 /* SAWTOOTH */,
];
class Channel {
    constructor() {
        this.regs = new Array(4);
    }
    write(reg, value) {
        this.regs[reg] = value;
    }
    update() { }
    getVolume() { return 0; }
    getFrequency() { return 0; }
}
class PulseChannel extends Channel {
    getVolume() {
        if ((this.regs[2] & 0x80) === 0)
            return 0;
        return (this.regs[0] & 15) / 15;
    }
    getFrequency() {
        const f = this.regs[1] | ((this.regs[2] & 0x0f) << 8);
        return ((CPU_CLOCK / 16) / (f + 1)) | 0;
    }
}
class SawToothChannel extends Channel {
    constructor() {
        super(...arguments);
        this.acc = 0;
        this.count = 0;
    }
    write(reg, value) {
        super.write(reg, value);
        switch (reg) {
            case 2:
                this.count = 0;
                if ((value & 0x80) === 0) {
                    this.acc = 0;
                }
                break;
        }
    }
    update() {
        if ((this.regs[2] & 0x80) !== 0) {
            this.acc += (this.regs[0] & 0x3f) * 2;
            if (this.acc >= 256) {
                this.acc -= 256;
                this.count = 0;
            }
            ++this.count;
            if (this.count >= 7) {
                this.acc = 0;
                this.count = 0;
            }
        }
        else {
            this.acc = 0;
        }
    }
    getVolume() {
        if ((this.regs[2] & 0x80) === 0)
            return 0;
        // return (this.acc >> (8 - 3)) / 0x1f
        return 1;
    }
    getFrequency() {
        const f = this.regs[1] | ((this.regs[2] & 0x0f) << 8);
        return ((CPU_CLOCK / 14) / (f + 1)) | 0;
    }
}
class Mapper024Base extends _mapper__WEBPACK_IMPORTED_MODULE_0__["Mapper"] {
    constructor(options, mapping) {
        super();
        this.options = options;
        this.ram = new Uint8Array(0x2000);
        this.chrRegs = new Uint8Array(8);
        this.prgCount = 0;
        this.prgBank = 0;
        this.ppuBankMode = 0;
        this.mirrorMode = 0;
        this.irqControl = 0;
        this.irqLatch = 0;
        this.irqCounter = 0;
        this.channels = new Array(kChannelTypes.length);
        this.frequencyScaling = 0;
        const BANK_BIT = 13;
        this.prgCount = options.prgSize >> BANK_BIT;
        this.options.prgBankCtrl.setPrgBank(0, 0);
        this.options.prgBankCtrl.setPrgBank(1, 1);
        this.setPrgBank(this.prgCount - 2);
        // PRG ROM bank
        this.options.bus.setWriteMemory(0x8000, 0x9fff, (adr, value) => {
            if (0x8000 <= adr && adr <= 0x8003) {
                this.setPrgBank((value & (this.prgCount / 2 - 1)) << 1);
            }
            else if (0x9000 <= adr && adr <= 0x9002) {
                this.writeSound(0, adr & 3, value);
            }
            else if (adr === 0x9003) {
                this.frequencyScaling = value;
            }
        });
        this.options.bus.setWriteMemory(0xc000, 0xdfff, (adr, value) => {
            if (0xc000 <= adr && adr <= 0xc003) {
                this.options.prgBankCtrl.setPrgBank(2, value);
            }
        });
        // CHR ROM bank
        const b003 = 0xb000 | mapping[3];
        this.options.bus.setWriteMemory(0xa000, 0xbfff, (adr, value) => {
            if ((adr & 0xf0ff) === b003) {
                this.ppuBankMode = value & 3;
                this.setChrBank();
                this.mirrorMode = (value >> 2) & 3;
                this.options.ppu.setMirrorMode(kMirrorTable[this.mirrorMode]);
            }
            else if (0xa000 <= adr && adr <= 0xa002) {
                this.writeSound(1, adr & 3, value);
            }
            else if (0xb000 <= adr && adr <= 0xb002) {
                this.writeSound(2, adr & 3, value);
            }
        });
        this.options.bus.setWriteMemory(0xd000, 0xffff, (adr, value) => {
            if (0xd000 <= adr && adr <= 0xefff) {
                const high = ((adr - 0xd000) >> 10) & 4;
                const low = adr & 0x0f;
                if (low < 4) {
                    const reg = mapping[low] + high;
                    this.chrRegs[reg] = value;
                    this.setChrBank();
                }
            }
            else {
                const low = adr & 0xff;
                switch (low) {
                    case 0: // IRQ Latch: low 4 bits
                        this.irqLatch = value;
                        break;
                    case 1: // IRQ Control
                        this.irqControl = value;
                        if ((this.irqControl & IRQ_ENABLE) !== 0) {
                            this.irqCounter = this.irqLatch;
                        }
                        break;
                    case 2: // IRQ Acknowledge
                        // Copy to enable
                        const ea = this.irqControl & IRQ_ENABLE_AFTER;
                        this.irqControl = (this.irqControl & ~IRQ_ENABLE) | (ea << 1);
                        break;
                    default:
                        break;
                }
            }
        });
        // PRG RAM
        this.ram.fill(0xff);
        this.options.bus.setReadMemory(0x6000, 0x7fff, (adr) => this.ram[adr & 0x1fff]);
        this.options.bus.setWriteMemory(0x6000, 0x7fff, (adr, value) => { this.ram[adr & 0x1fff] = value; });
        this.setupAudio();
    }
    reset() {
        this.irqControl = 0;
        this.irqLatch = this.irqCounter = 0;
    }
    save() {
        return {
            ram: _util_util__WEBPACK_IMPORTED_MODULE_1__["default"].convertUint8ArrayToBase64String(this.ram),
            chrRegs: _util_util__WEBPACK_IMPORTED_MODULE_1__["default"].convertUint8ArrayToBase64String(this.chrRegs),
            prgCount: this.prgCount,
            prgBank: this.prgBank,
            ppuBankMode: this.ppuBankMode,
            mirrorMode: this.mirrorMode,
            irqControl: this.irqControl,
            irqLatch: this.irqLatch,
            irqCounter: this.irqCounter,
        };
    }
    load(saveData) {
        this.ram = _util_util__WEBPACK_IMPORTED_MODULE_1__["default"].convertBase64StringToUint8Array(saveData.ram);
        this.chrRegs = _util_util__WEBPACK_IMPORTED_MODULE_1__["default"].convertBase64StringToUint8Array(saveData.chrRegs);
        this.prgCount = saveData.prgCount;
        // this.prgBank = saveData.prgBank
        this.ppuBankMode = saveData.ppuBankMode;
        this.mirrorMode = saveData.mirrorMode;
        this.irqControl = saveData.irqControl;
        this.irqLatch = saveData.irqLatch;
        this.irqCounter = saveData.irqCounter;
        this.setPrgBank(saveData.prgBank);
        this.setChrBank();
    }
    onHblank(hcount) {
        if ((this.irqControl & IRQ_ENABLE) !== 0) {
            let c = this.irqCounter;
            if ((this.irqControl & IRQ_MODE) === 0) { // scanline mode
                c += 1;
            }
            else { // cycle mode
                c += 185; // TODO: Calculate.
            }
            if (c >= 255) {
                c = this.irqLatch;
                this.options.cpu.requestIrq();
            }
            this.irqCounter = c;
        }
        if (hcount === VBLANK_START)
            this.updateSound();
    }
    getExtraSoundChannelTypes() {
        return kChannelTypes;
    }
    getSoundVolume(channel) {
        const halt = (this.frequencyScaling & 0x01) !== 0;
        if (halt)
            return 0;
        return this.channels[channel].getVolume();
    }
    getSoundFrequency(channel) {
        let f = this.channels[channel].getFrequency();
        if ((this.frequencyScaling & 0x02) !== 0)
            f *= 16;
        if ((this.frequencyScaling & 0x04) !== 0)
            f *= 256;
        return f;
    }
    setPrgBank(prgBank) {
        this.prgBank = prgBank;
        this.options.prgBankCtrl.setPrgBank(0, prgBank);
        this.options.prgBankCtrl.setPrgBank(1, prgBank + 1);
    }
    setChrBank() {
        const table = kChrBankTable[this.ppuBankMode];
        for (let i = 0; i < 8; ++i)
            this.options.ppu.setChrBankOffset(i, this.chrRegs[table[i]]);
    }
    writeSound(channel, reg, value) {
        this.channels[channel].write(reg, value);
    }
    setupAudio() {
        for (let i = 0; i < this.channels.length; ++i) {
            const type = kChannelTypes[i];
            let channel;
            switch (type) {
                case 0 /* PULSE */:
                    channel = new PulseChannel();
                    break;
                case 2 /* SAWTOOTH */:
                    channel = new SawToothChannel();
                    break;
                default:
                    continue;
            }
            this.channels[i] = channel;
        }
    }
    updateSound() {
        for (let channel of this.channels) {
            channel.update();
        }
    }
}
class Mapper024 extends Mapper024Base {
    static create(options) {
        return new Mapper024(options);
    }
    constructor(options) {
        super(options, {
            0: 0,
            1: 1,
            2: 2,
            3: 3,
        });
    }
}
class Mapper026 extends Mapper024Base {
    static create(options) {
        return new Mapper026(options);
    }
    constructor(options) {
        super(options, {
            0: 0,
            1: 2,
            2: 1,
            3: 3,
        });
    }
}


/***/ }),

/***/ "./nes/mapper/mapper032.ts":
/*!*********************************!*\
  !*** ./nes/mapper/mapper032.ts ***!
  \*********************************/
/*! exports provided: Mapper032 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mapper032", function() { return Mapper032; });
/* harmony import */ var _mapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapper */ "./nes/mapper/mapper.ts");
// Irem's G-101

const kMirrorTable = [1 /* VERT */, 0 /* HORZ */];
class Mapper032 extends _mapper__WEBPACK_IMPORTED_MODULE_0__["Mapper"] {
    constructor(options) {
        super();
        this.options = options;
        const BANK_BIT = 13; // 0x2000
        const maxPrg = (options.prgSize >> BANK_BIT) - 1;
        const kLast2Bank = maxPrg - 1;
        let prgReg = [0, 1 << BANK_BIT];
        let prgMode = 0;
        const setPrgBank = () => {
            let p0, p1, p2;
            if (prgMode === 0) {
                p0 = prgReg[0];
                p1 = prgReg[1];
                p2 = kLast2Bank;
            }
            else {
                p2 = prgReg[0];
                p1 = prgReg[1];
                p0 = kLast2Bank;
            }
            this.options.prgBankCtrl.setPrgBank(0, p0);
            this.options.prgBankCtrl.setPrgBank(1, p1);
            this.options.prgBankCtrl.setPrgBank(2, p2);
        };
        // PRG RAM
        const ram = new Uint8Array(0x2000);
        ram.fill(0xbf);
        this.options.bus.setReadMemory(0x6000, 0x7fff, (adr) => ram[adr & 0x1fff]);
        this.options.bus.setWriteMemory(0x6000, 0x7fff, (adr, value) => { ram[adr & 0x1fff] = value; });
        // Select
        this.options.bus.setWriteMemory(0x8000, 0x9fff, (adr, value) => {
            if (adr <= 0x8fff) {
                prgReg[0] = value;
                setPrgBank();
            }
            else {
                this.options.ppu.setMirrorMode(kMirrorTable[value & 1]);
                prgMode = (value >> 1) & 1;
                setPrgBank();
            }
        });
        this.options.bus.setWriteMemory(0xa000, 0xbfff, (adr, value) => {
            if (adr <= 0xafff) {
                prgReg[1] = value;
                setPrgBank();
            }
            else {
                this.options.ppu.setChrBankOffset(adr & 7, value);
            }
        });
    }
    static create(options) {
        return new Mapper032(options);
    }
}


/***/ }),

/***/ "./nes/mapper/mapper069.ts":
/*!*********************************!*\
  !*** ./nes/mapper/mapper069.ts ***!
  \*********************************/
/*! exports provided: Mapper069 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mapper069", function() { return Mapper069; });
/* harmony import */ var _mapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapper */ "./nes/mapper/mapper.ts");
// Sunsoft FME-7

const kMirrorTable = [
    1 /* VERT */, 0 /* HORZ */, 2 /* SINGLE0 */, 3 /* SINGLE1 */,
];
class Mapper069 extends _mapper__WEBPACK_IMPORTED_MODULE_0__["Mapper"] {
    constructor(options) {
        super();
        this.options = options;
        // const BANK_BIT = 13
        // const count = prgSize >> BANK_BIT
        // CHR ROM bank
        let command = 0;
        this.options.bus.setWriteMemory(0x8000, 0x9fff, (_adr, value) => {
            command = value & 0x0f;
        });
        this.options.bus.setWriteMemory(0xa000, 0xbfff, (_adr, value) => {
            switch (command) {
                case 0x00:
                case 0x01:
                case 0x02:
                case 0x03:
                case 0x04:
                case 0x05:
                case 0x06:
                case 0x07:
                    this.options.ppu.setChrBankOffset(command, value);
                    break;
                case 0x09:
                case 0x0a:
                case 0x0b:
                    this.options.prgBankCtrl.setPrgBank(command - 9, value);
                    break;
                case 0x0c:
                    {
                        this.options.ppu.setMirrorMode(kMirrorTable[value & 3]);
                    }
                    break;
            }
        });
        // PRG RAM
        const ram = new Uint8Array(0x2000);
        ram.fill(0xbf);
        this.options.bus.setReadMemory(0x6000, 0x7fff, (adr) => ram[adr & 0x1fff]);
        this.options.bus.setWriteMemory(0x6000, 0x7fff, (adr, value) => { ram[adr & 0x1fff] = value; });
    }
    static create(options) {
        return new Mapper069(options);
    }
}


/***/ }),

/***/ "./nes/mapper/mapper073.ts":
/*!*********************************!*\
  !*** ./nes/mapper/mapper073.ts ***!
  \*********************************/
/*! exports provided: Mapper073 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mapper073", function() { return Mapper073; });
/* harmony import */ var _mapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapper */ "./nes/mapper/mapper.ts");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/util */ "./util/util.ts");
// VRC3
// http://wiki.nesdev.com/w/index.php/VRC3


class Mapper073 extends _mapper__WEBPACK_IMPORTED_MODULE_0__["Mapper"] {
    constructor(options) {
        super();
        this.options = options;
        this.ram = new Uint8Array(0x2000);
        this.prgBank = 0;
        this.irqEnable = false;
        this.irqValue = this.irqCounter = -1;
        const BANK_BIT = 14;
        const prgCount = options.prgSize >> BANK_BIT;
        this.options.prgBankCtrl.setPrgBank(0, 0);
        this.options.prgBankCtrl.setPrgBank(1, 1);
        this.setPrgBank((prgCount - 1) * 2);
        // PRG ROM bank
        this.options.bus.setWriteMemory(0xf000, 0xffff, (_adr, value) => {
            this.setPrgBank(value << 1);
        });
        // IRQ Latch 0, 1
        this.options.bus.setWriteMemory(0x8000, 0x9fff, (adr, value) => {
            if (adr < 0x9000)
                this.irqValue = (this.irqValue & 0xfff0) | (value & 0x0f);
            else
                this.irqValue = (this.irqValue & 0xff0f) | ((value & 0x0f) << 4);
        });
        // IRQ Latch 2, 3
        this.options.bus.setWriteMemory(0xa000, 0xbfff, (adr, value) => {
            if (adr < 0xb000)
                this.irqValue = (this.irqValue & 0xf0ff) | ((value & 0x0f) << 8);
            else
                this.irqValue = (this.irqValue & 0x0fff) | ((value & 0x0f) << 12);
        });
        this.options.bus.setWriteMemory(0xc000, 0xdfff, (adr, value) => {
            if (adr < 0xd000) {
                // IRQ Control
                this.enableIrq((value & 2) !== 0);
                this.irqCounter = this.irqValue;
            }
            else {
                // IRQ Acknowledge
            }
        });
        // PRG RAM
        this.ram.fill(0xff);
        this.options.bus.setReadMemory(0x6000, 0x7fff, (adr) => this.ram[adr & 0x1fff]);
        this.options.bus.setWriteMemory(0x6000, 0x7fff, (adr, value) => { this.ram[adr & 0x1fff] = value; });
    }
    static create(options) {
        return new Mapper073(options);
    }
    reset() {
        this.irqEnable = false;
        this.irqValue = this.irqCounter = -1;
    }
    save() {
        return {
            ram: _util_util__WEBPACK_IMPORTED_MODULE_1__["default"].convertUint8ArrayToBase64String(this.ram),
            prgBank: this.prgBank,
            irqEnable: this.irqEnable,
            irqValue: this.irqValue,
            irqCounter: this.irqCounter,
        };
    }
    load(saveData) {
        this.ram = _util_util__WEBPACK_IMPORTED_MODULE_1__["default"].convertBase64StringToUint8Array(saveData.ram);
        // this.prgBank = saveData.prgBank
        this.irqEnable = saveData.irqEnable;
        this.irqValue = saveData.irqValue;
        this.irqCounter = saveData.irqCounter;
        this.setPrgBank(saveData.prgBank);
    }
    onHblank(_hcount) {
        if (this.irqEnable && this.irqCounter > 0) {
            this.irqCounter -= 185; // TODO: Calculate.
            if (this.irqCounter < 0) {
                this.irqCounter = 0;
                this.options.cpu.requestIrq();
            }
        }
    }
    setPrgBank(prgBank) {
        this.prgBank = prgBank;
        this.options.prgBankCtrl.setPrgBank(0, prgBank);
        this.options.prgBankCtrl.setPrgBank(1, prgBank + 1);
    }
    enableIrq(value) {
        this.irqEnable = value;
    }
}


/***/ }),

/***/ "./nes/mapper/mapper075.ts":
/*!*********************************!*\
  !*** ./nes/mapper/mapper075.ts ***!
  \*********************************/
/*! exports provided: Mapper075 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mapper075", function() { return Mapper075; });
/* harmony import */ var _mapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapper */ "./nes/mapper/mapper.ts");
// VRC1

class Mapper075 extends _mapper__WEBPACK_IMPORTED_MODULE_0__["Mapper"] {
    constructor(options) {
        super();
        this.options = options;
        const BANK_BIT = 13;
        const count = options.prgSize >> BANK_BIT;
        for (let i = 0; i < 4; ++i)
            this.options.prgBankCtrl.setPrgBank(i, count - 1);
        const chrBank = [0, 0];
        const setChrBank = (bank, value) => {
            chrBank[bank] = value;
            const b = bank << 2;
            const ofs = value << 2;
            for (let i = 0; i < 4; ++i)
                this.options.ppu.setChrBankOffset(b + i, ofs + i);
        };
        // PRG ROM bank
        this.options.bus.setWriteMemory(0x8000, 0x9fff, (adr, value) => {
            if (adr < 0x9000)
                this.options.prgBankCtrl.setPrgBank(0, value);
            else {
                this.options.ppu.setMirrorMode((value & 1) === 0 ? 1 /* VERT */ : 0 /* HORZ */);
                setChrBank(0, (chrBank[0] & 0x0f) | ((value & 2) << 3));
                setChrBank(1, (chrBank[1] & 0x0f) | ((value & 4) << 2));
            }
        });
        this.options.bus.setWriteMemory(0xa000, 0xbfff, (adr, value) => {
            if (adr < 0xb000)
                this.options.prgBankCtrl.setPrgBank(1, value);
        });
        this.options.bus.setWriteMemory(0xc000, 0xdfff, (adr, value) => {
            if (adr < 0xd000)
                this.options.prgBankCtrl.setPrgBank(2, value);
        });
        // CHR ROM bank
        this.options.bus.setWriteMemory(0xe000, 0xffff, (adr, value) => {
            const bank = (adr >> 12) & 1;
            setChrBank(bank, (chrBank[bank] & 0x10) | (value & 0x0f));
        });
        // PRG RAM
        const ram = new Uint8Array(0x2000);
        ram.fill(0xbf);
        this.options.bus.setReadMemory(0x6000, 0x7fff, (adr) => ram[adr & 0x1fff]);
        this.options.bus.setWriteMemory(0x6000, 0x7fff, (adr, value) => { ram[adr & 0x1fff] = value; });
    }
    static create(options) {
        return new Mapper075(options);
    }
}


/***/ }),

/***/ "./nes/mapper/mapper087.ts":
/*!*********************************!*\
  !*** ./nes/mapper/mapper087.ts ***!
  \*********************************/
/*! exports provided: Mapper087 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mapper087", function() { return Mapper087; });
/* harmony import */ var _mapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapper */ "./nes/mapper/mapper.ts");

class Mapper087 extends _mapper__WEBPACK_IMPORTED_MODULE_0__["Mapper"] {
    constructor(options) {
        super();
        this.options = options;
        // PRG ROM bank
        this.options.bus.setWriteMemory(0x6000, 0x7fff, (_adr, value) => {
            const bank = ((value & 2) >> 1) | ((value & 1) << 1);
            this.options.ppu.setChrBank(bank);
        });
    }
    static create(options) {
        return new Mapper087(options);
    }
}


/***/ }),

/***/ "./nes/mapper/mapper184.ts":
/*!*********************************!*\
  !*** ./nes/mapper/mapper184.ts ***!
  \*********************************/
/*! exports provided: Mapper184 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mapper184", function() { return Mapper184; });
/* harmony import */ var _mapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapper */ "./nes/mapper/mapper.ts");
// Sunsoft-1 mapper

class Mapper184 extends _mapper__WEBPACK_IMPORTED_MODULE_0__["Mapper"] {
    constructor(options) {
        super();
        this.options = options;
        // CHR ROM bank
        this.options.bus.setWriteMemory(0x6000, 0x7fff, (_adr, value) => {
            const hi = ((value >> (4 - 2)) & (7 << 2)) + (4 << 2);
            const lo = (value & 7) << 2;
            for (let i = 0; i < 4; ++i)
                this.options.ppu.setChrBankOffset(i + 4, hi + i);
            for (let i = 0; i < 4; ++i)
                this.options.ppu.setChrBankOffset(i, lo + i);
        });
    }
    static create(options) {
        return new Mapper184(options);
    }
}


/***/ }),

/***/ "./nes/mapper/mapper_table.ts":
/*!************************************!*\
  !*** ./nes/mapper/mapper_table.ts ***!
  \************************************/
/*! exports provided: kMapperTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kMapperTable", function() { return kMapperTable; });
/* harmony import */ var _mapper000__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapper000 */ "./nes/mapper/mapper000.ts");
/* harmony import */ var _mapper001__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mapper001 */ "./nes/mapper/mapper001.ts");
/* harmony import */ var _mapper002__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mapper002 */ "./nes/mapper/mapper002.ts");
/* harmony import */ var _mapper003__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mapper003 */ "./nes/mapper/mapper003.ts");
/* harmony import */ var _mapper004__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mapper004 */ "./nes/mapper/mapper004.ts");
/* harmony import */ var _mapper007__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mapper007 */ "./nes/mapper/mapper007.ts");
/* harmony import */ var _mapper010__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mapper010 */ "./nes/mapper/mapper010.ts");
/* harmony import */ var _mapper019__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mapper019 */ "./nes/mapper/mapper019.ts");
/* harmony import */ var _mapper023__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mapper023 */ "./nes/mapper/mapper023.ts");
/* harmony import */ var _mapper024__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mapper024 */ "./nes/mapper/mapper024.ts");
/* harmony import */ var _mapper032__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mapper032 */ "./nes/mapper/mapper032.ts");
/* harmony import */ var _mapper069__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mapper069 */ "./nes/mapper/mapper069.ts");
/* harmony import */ var _mapper073__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./mapper073 */ "./nes/mapper/mapper073.ts");
/* harmony import */ var _mapper087__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./mapper087 */ "./nes/mapper/mapper087.ts");
/* harmony import */ var _mapper075__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./mapper075 */ "./nes/mapper/mapper075.ts");
/* harmony import */ var _mapper184__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./mapper184 */ "./nes/mapper/mapper184.ts");
















const kMapperTable = {
    0: _mapper000__WEBPACK_IMPORTED_MODULE_0__["Mapper000"].create,
    1: _mapper001__WEBPACK_IMPORTED_MODULE_1__["Mapper001"].create,
    2: _mapper002__WEBPACK_IMPORTED_MODULE_2__["Mapper002"].create,
    3: _mapper003__WEBPACK_IMPORTED_MODULE_3__["Mapper003"].create,
    4: _mapper004__WEBPACK_IMPORTED_MODULE_4__["Mapper004"].create,
    7: _mapper007__WEBPACK_IMPORTED_MODULE_5__["Mapper007"].create,
    10: _mapper010__WEBPACK_IMPORTED_MODULE_6__["Mapper010"].create,
    19: _mapper019__WEBPACK_IMPORTED_MODULE_7__["Mapper019"].create,
    23: _mapper023__WEBPACK_IMPORTED_MODULE_8__["Mapper023"].create,
    24: _mapper024__WEBPACK_IMPORTED_MODULE_9__["Mapper024"].create,
    25: _mapper023__WEBPACK_IMPORTED_MODULE_8__["Mapper025"].create,
    26: _mapper024__WEBPACK_IMPORTED_MODULE_9__["Mapper026"].create,
    32: _mapper032__WEBPACK_IMPORTED_MODULE_10__["Mapper032"].create,
    69: _mapper069__WEBPACK_IMPORTED_MODULE_11__["Mapper069"].create,
    73: _mapper073__WEBPACK_IMPORTED_MODULE_12__["Mapper073"].create,
    75: _mapper075__WEBPACK_IMPORTED_MODULE_14__["Mapper075"].create,
    87: _mapper087__WEBPACK_IMPORTED_MODULE_13__["Mapper087"].create,
    88: _mapper004__WEBPACK_IMPORTED_MODULE_4__["Mapper088"].create,
    93: _mapper002__WEBPACK_IMPORTED_MODULE_2__["Mapper093"].create,
    95: _mapper004__WEBPACK_IMPORTED_MODULE_4__["Mapper004"].create,
    118: _mapper004__WEBPACK_IMPORTED_MODULE_4__["Mapper118"].create,
    184: _mapper184__WEBPACK_IMPORTED_MODULE_15__["Mapper184"].create,
    185: _mapper003__WEBPACK_IMPORTED_MODULE_3__["Mapper185"].create,
    206: _mapper004__WEBPACK_IMPORTED_MODULE_4__["Mapper004"].create,
};


/***/ }),

/***/ "./nes/nes.ts":
/*!********************!*\
  !*** ./nes/nes.ts ***!
  \********************/
/*! exports provided: Nes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nes", function() { return Nes; });
/* harmony import */ var _apu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apu */ "./nes/apu.ts");
/* harmony import */ var _bus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bus */ "./nes/bus.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./const */ "./nes/const.ts");
/* harmony import */ var _cpu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cpu */ "./nes/cpu.ts");
/* harmony import */ var _ppu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ppu */ "./nes/ppu.ts");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/util */ "./util/util.ts");
/* harmony import */ var _mapper_mapper_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mapper/mapper_table */ "./nes/mapper/mapper_table.ts");
/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! md5 */ "../node_modules/md5/md5.js");
/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(md5__WEBPACK_IMPORTED_MODULE_7__);
// NES: Nintendo Entertainment System








const RAM_SIZE = 0x0800;
const VBLANK_START = 241;
const VBLANK_NMI = 242;
const VBLANK_END = 261;
const VRETURN = 262;
const VCYCLE = (VRETURN * 341 / 3) | 0;
const OAMDMA = 0x4014;
function getHblankCount(cpuCycle) {
    return (cpuCycle * (3 / 341)) | 0;
}
function isRomValid(romData) {
    // Check header.
    if (!(romData[0] === 0x4e && romData[1] === 0x45 && romData[2] === 0x53 &&
        romData[3] === 0x1a))
        return false;
    return true;
}
function getMapperNo(romData) {
    return ((romData[6] >> 4) & 0x0f) | (romData[7] & 0xf0);
}
function loadPrgRom(romData) {
    const start = 16, size = romData[4] * (16 * 1024);
    const prg = romData.slice(start, start + size);
    return new Uint8Array(prg);
}
function loadChrRom(romData) {
    const start = 16 + romData[4] * (16 * 1024), size = romData[5] * (8 * 1024);
    const chr = romData.slice(start, start + size);
    return new Uint8Array(chr);
}
class Nes {
    constructor() {
        this.ram = new Uint8Array(RAM_SIZE);
        this.cycleCount = 0;
        this.mapperNo = 0;
        this.prgRom = new Uint8Array(0);
        this.prgBank = [];
        this.apuChannelCount = 0;
        this.bus = new _bus__WEBPACK_IMPORTED_MODULE_1__["Bus"]();
        this.cpu = new _cpu__WEBPACK_IMPORTED_MODULE_3__["Cpu"](this.bus);
        this.ppu = new _ppu__WEBPACK_IMPORTED_MODULE_4__["Ppu"]();
        this.apu = new _apu__WEBPACK_IMPORTED_MODULE_0__["Apu"](() => { this.cpu.requestIrq(); });
        this.vblankCallback = (_leftV) => { };
        this.breakPointCallback = () => { };
        this.mapperNo = 0;
        this.mapper = this.createMapper(this.mapperNo);
    }
    static create() {
        return new Nes();
    }
    static getPaletColorString(col) {
        const r = _const__WEBPACK_IMPORTED_MODULE_2__["kColors"][col * 3];
        const g = _const__WEBPACK_IMPORTED_MODULE_2__["kColors"][col * 3 + 1];
        const b = _const__WEBPACK_IMPORTED_MODULE_2__["kColors"][col * 3 + 2];
        return `rgb(${r},${g},${b})`;
    }
    getBus() { return this.bus; }
    getCpu() { return this.cpu; }
    getPpu() { return this.ppu; }
    getCycleCount() { return this.cycleCount; }
    setVblankCallback(callback) {
        this.vblankCallback = callback;
    }
    setBreakPointCallback(callback) {
        this.breakPointCallback = callback;
    }
    setRomData(romData) {
        if (!isRomValid(romData))
            return 'Invalid format';
        this.mapperNo = getMapperNo(romData);
        if (!(this.mapperNo in _mapper_mapper_table__WEBPACK_IMPORTED_MODULE_6__["kMapperTable"]))
            return `Mapper ${this.mapperNo} not supported`;
        this.prgRom = loadPrgRom(romData);
        this.ppu.setChrData(loadChrRom(romData));
        this.ppu.setMirrorMode((romData[6] & 1) === 0 ? 0 /* HORZ */ : 1 /* VERT */);
        this.cpu.deleteAllBreakPoints();
        this.setMemoryMap();
        const romHash = md5__WEBPACK_IMPORTED_MODULE_7__(Array.from(romData));
        this.mapper = this.createMapper(this.mapperNo, romHash);
        return true;
    }
    save() {
        return {
            cpu: this.cpu.save(),
            ppu: this.ppu.save(),
            apu: this.apu.save(),
            mapper: this.mapper != null ? this.mapper.save() : null,
            ram: _util_util__WEBPACK_IMPORTED_MODULE_5__["default"].convertUint8ArrayToBase64String(this.ram),
        };
    }
    load(saveData) {
        this.reset();
        this.cpu.load(saveData.cpu);
        this.ppu.load(saveData.ppu);
        this.apu.load(saveData.apu);
        this.mapper.load(saveData.mapper);
        this.ram = _util_util__WEBPACK_IMPORTED_MODULE_5__["default"].convertBase64StringToUint8Array(saveData.ram);
    }
    reset() {
        this.ram.fill(0xff);
        this.cpu.reset();
        this.ppu.reset();
        this.apu.reset();
        this.cycleCount = 0;
        if (this.mapper != null)
            this.mapper.reset();
    }
    setPadStatus(no, status) {
        this.apu.setPadStatus(no, status);
    }
    runCycles(cycles) {
        try {
            let leftCycles = cycles;
            while (leftCycles > 0) {
                const c = this.step(leftCycles);
                leftCycles -= c;
                if (this.cpu.isPaused()) { // Hit break point.
                    this.breakPointCallback();
                    return 0;
                }
            }
            return -cycles;
        }
        catch (e) {
            this.cpu.pause(true);
            throw e;
        }
    }
    step(leftCycles) {
        const cycle = this.cpu.step();
        this.cycleCount = this.tryHblankEvent(this.cycleCount, cycle, leftCycles);
        return cycle;
    }
    getSoundChannelTypes() {
        const channels = this.apu.getChannelTypes();
        const extras = this.mapper.getExtraSoundChannelTypes();
        this.apuChannelCount = channels.length;
        return channels.concat(extras);
    }
    getSoundVolume(channel) {
        if (channel < this.apuChannelCount)
            return this.apu.getVolume(channel);
        return this.mapper.getSoundVolume(channel - this.apuChannelCount);
    }
    getSoundFrequency(channel) {
        if (channel < this.apuChannelCount)
            return this.apu.getFrequency(channel);
        return this.mapper.getSoundFrequency(channel - this.apuChannelCount);
    }
    getSoundDutyRatio(channel) {
        if (channel < this.apuChannelCount)
            return this.apu.getDutyRatio(channel);
        return this.mapper.getSoundDutyRatio(channel - this.apuChannelCount);
    }
    render(pixels) {
        this.ppu.render(pixels);
    }
    renderNameTable1(pixels, lineWidth, startX, startY, page) {
        this.ppu.renderNameTable1(pixels, lineWidth, startX, startY, page << 10);
    }
    renderPatternTable(pixels, lineWidth, colorGroups) {
        this.ppu.renderPattern(pixels, lineWidth, colorGroups);
    }
    setPrgBank(bank, page) {
        this.prgBank[bank] = page << 13;
    }
    setMemoryMap() {
        const bus = this.bus;
        bus.clearMemoryMap();
        bus.setReadMemory(0x2000, 0x3fff, (adr) => {
            const reg = adr & 7;
            return this.ppu.read(reg);
        });
        bus.setWriteMemory(0x2000, 0x3fff, (adr, value) => {
            const reg = adr & 7;
            this.ppu.write(reg, value);
        });
        bus.setReadMemory(0x4000, 0x5fff, (adr) => {
            return this.apu.read(adr);
        });
        bus.setWriteMemory(0x4000, 0x5fff, (adr, value) => {
            switch (adr) {
                case OAMDMA:
                    if (0 <= value && value <= 0x1f) { // RAM
                        this.ppu.copyWithDma(this.ram, value << 8);
                        // TODO: Consume CPU or GPU cycles.
                    }
                    else {
                        console.error(`OAMDMA not implemented except for RAM: ${_util_util__WEBPACK_IMPORTED_MODULE_5__["default"].hex(value, 2)}`);
                    }
                    break;
                default:
                    this.apu.write(adr, value);
                    break;
            }
        });
        // PRG ROM
        const prgMask = (this.prgRom.length - 1) | 0;
        this.prgBank = [0x0000,
            0x2000,
            -0x4000 & prgMask,
            -0x2000 & prgMask]; // 0xe000~
        bus.setReadMemory(0x8000, 0xffff, (adr) => {
            adr = adr | 0;
            const bank = (adr - 0x8000) >> 13;
            const offset = (adr & ((1 << 13) - 1)) | 0;
            return this.prgRom[((this.prgBank[bank] | 0) + offset) & prgMask] | 0;
        });
        // RAM
        bus.setReadMemory(0x0000, 0x1fff, (adr) => this.ram[adr & (RAM_SIZE - 1)]);
        bus.setWriteMemory(0x0000, 0x1fff, (adr, value) => { this.ram[adr & (RAM_SIZE - 1)] = value; });
    }
    createMapper(mapperNo, romHash) {
        const mapperFunc = _mapper_mapper_table__WEBPACK_IMPORTED_MODULE_6__["kMapperTable"][mapperNo];
        return mapperFunc({
            bus: this.bus,
            cpu: this.cpu,
            ppu: this.ppu,
            prgBankCtrl: this,
            prgSize: this.prgRom.length,
            romHash,
        });
    }
    tryHblankEvent(cycleCount, cycle, leftCycles) {
        let cycleCount2 = cycleCount + cycle;
        const beforeHcount = getHblankCount(cycleCount);
        let hcount = getHblankCount(cycleCount2);
        if (hcount > beforeHcount) {
            this.ppu.setHcount(hcount);
            this.apu.onHblank(hcount);
            switch (hcount) {
                case VBLANK_START:
                    this.ppu.setVBlank();
                    this.vblankCallback((leftCycles / VCYCLE) | 0);
                    break;
                case VBLANK_NMI:
                    this.interruptVBlank();
                    break;
                case VBLANK_END:
                    this.ppu.clearVBlank();
                    break;
                case VRETURN:
                    cycleCount2 -= (VRETURN * 341 / 3) | 0;
                    this.ppu.setHcount(0);
                    break;
                default:
                    break;
            }
            this.mapper.onHblank(hcount);
        }
        return cycleCount2;
    }
    interruptVBlank() {
        if (!this.ppu.interruptEnable())
            return;
        this.interruptNmi();
    }
    interruptNmi() {
        this.cpu.nmi();
    }
}


/***/ }),

/***/ "./nes/polyfill.ts":
/*!*************************!*\
  !*** ./nes/polyfill.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (!('fill' in Array.prototype)) {
    // IE doesn't support fill method for Array.
    /* tslint:disable:no-invalid-this */
    Array.prototype.fill = function (value, start = 0, end) {
        if (end === undefined)
            end = this.length;
        for (let i = start; i < end; ++i)
            this[i] = value;
        return this;
    };
    /* tslint:enable:no-invalid-this */
}
if (!('fill' in Uint8Array.prototype)) {
    // Safari doesn't support fill method for typed array.
    /* tslint:disable:no-invalid-this */
    Uint8Array.prototype.fill = function (value, start = 0, end) {
        if (end === undefined)
            end = this.length;
        for (let i = start; i < end; ++i)
            this[i] = value;
        return this;
    };
    /* tslint:enable:no-invalid-this */
}
if (!Uint8Array.prototype.slice) {
    /* tslint:disable:no-invalid-this */
    Uint8Array.prototype.slice = function (start, end) {
        if (end === undefined)
            end = this.length;
        const sliced = new Uint8Array(end - start);
        for (let i = 0; i < sliced.length; ++i)
            sliced[i] = this[i + start];
        return sliced;
    };
    /* tslint:enable:no-invalid-this */
}


/***/ }),

/***/ "./nes/ppu.ts":
/*!********************!*\
  !*** ./nes/ppu.ts ***!
  \********************/
/*! exports provided: Ppu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ppu", function() { return Ppu; });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./const */ "./nes/const.ts");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/util */ "./util/util.ts");
// PPU: Picutre Processing Unit
// PPU scrolling
// https://wiki.nesdev.com/w/index.php/PPU_scrolling


const REGISTER_COUNT = 8;
const VRAM_SIZE = 0x4000;
const OAM_SIZE = 0x0100;
// PPUCTRL ($2000)
const PPUCTRL = 0x00;
const VINT_ENABLE = 0x80; // V: 1=Trigger NMI when VBLANK start
const SPRITE_SIZE = 0x20;
const BG_PATTERN_TABLE_ADDRESS = 0x10;
const SPRITE_PATTERN_TABLE_ADDRESS = 0x08;
const INCREMENT_MODE = 0x04; // I: 1=+32, 0=+1
const BASE_NAMETABLE_ADDRESS = 0x03;
// PPUMASK ($2001)
const PPUMASK = 0x01;
const SHOW_SPRITE = 0x10;
const SHOW_BG = 0x08;
const SHOW_SPRITE_LEFT_8PX = 0x04;
const SHOW_BG_LEFT_8PX = 0x02;
// PPUSTATUS ($2002)
const PPUSTATUS = 0x02;
const VBLANK = 0x80;
const SPRITE0HIT = 0x40;
const SPRITE_OVERFLOW = 0x20;
// OAMADDR ($2003)
const OAMADDR = 0x03;
// OAMDATA ($2004)
const OAMDATA = 0x04;
const MAX_SPRITE = 64;
const PPUSCROLL = 0x05; // $2005
const PPUADDR = 0x06; // $2006
const PPUDATA = 0x07; // $2007
// Sprite
const FLIP_HORZ = 0x40;
const FLIP_VERT = 0x80;
// Palette
const PALET_ADR = 0x3f00;
const PALET_END_ADR = 0x3fff;
class HEvents {
    constructor() {
        this.count = 0;
        this.countNext = 0;
        this.events = new Array();
        this.eventsNext = new Array();
    }
    clear() {
        this.count = 0;
        this.countNext = 0;
    }
    swap() {
        // Add sentinel: Ensure that current frame has an event at hline 240.
        this.add(_const__WEBPACK_IMPORTED_MODULE_0__["Const"].HEIGHT, 0 /* DUMMY */, 0);
        const tmp = this.events;
        this.events = this.eventsNext;
        this.count = this.countNext;
        this.eventsNext = tmp;
        this.countNext = 0;
        this.add(0, 0 /* DUMMY */, 0); // Ensure that next frame has an event at hline 0.
    }
    getCount() {
        return this.count - 1; // Last one is sentinel, so -1
    }
    getEvent(index) {
        return this.events[index];
    }
    getCountNext() {
        return this.countNext;
    }
    getEventNext(index) {
        return this.eventsNext[index];
    }
    add(hcount, type, value, index = -1) {
        if (this.countNext >= this.eventsNext.length) {
            const hevent = {
                type,
                value,
                index,
                hcount,
            };
            this.eventsNext.push(hevent);
        }
        else {
            const hevent = this.eventsNext[this.countNext];
            hevent.type = type;
            hevent.value = value;
            hevent.index = index;
            hevent.hcount = hcount;
        }
        ++this.countNext;
    }
}
const kMirrorModeBitTable = [0x50, 0x44, 0x00, 0x55];
const kInitialPalette = [
    0x09, 0x01, 0x00, 0x01, 0x00, 0x02, 0x02, 0x0d, 0x08, 0x10, 0x08, 0x24, 0x00, 0x00, 0x04, 0x2c,
    0x09, 0x01, 0x34, 0x03, 0x00, 0x04, 0x00, 0x14, 0x08, 0x3a, 0x00, 0x02, 0x00, 0x20, 0x2c, 0x08,
];
const SPRITE_MASK = 0x80;
const kSpritePriorityMask = [SPRITE_MASK, 0xff];
function getNameTable(baseNameTable, bx, by, mirrorModeBit) {
    const page = (((bx >> 5) & 1) + (((by / 30) & 1) << 1)) ^ baseNameTable; // 0~3
    const m = (mirrorModeBit << (10 - (page << 1))) & 0x0c00;
    return 0x2000 + m;
}
function getPpuAddr(adr, mirrorModeBit) {
    adr &= 0x3fff;
    if (0x3000 <= adr && adr < 0x3f00)
        adr -= 0x1000; // Map 0x3000~3eff to 0x2000~
    if (0x2000 <= adr && adr < 0x3000) {
        const page = (adr >> 10) & 3;
        const m = (mirrorModeBit << (10 - (page << 1))) & 0x0c00;
        return (adr & 0xf3ff) | m;
    }
    if (PALET_ADR <= adr && adr <= PALET_END_ADR) {
        adr &= 0xff1f; // Repeat 0x3f00~0x3f1f --> 0x3fff
        // "Addresses $3F10/$3F14/$3F18/$3F1C are mirrors of $3F00/$3F04/$3F08/$3F0C."
        // http://wiki.nesdev.com/w/index.php/PPU_palettes#Memory_Map
        if ((adr & 0xfff3) === 0x3f10)
            adr &= 0xffef;
    }
    return adr;
}
function incPpuAddr(ppuAddr, ppuCtrl) {
    const add = ((ppuCtrl & INCREMENT_MODE) !== 0) ? 32 : 1;
    return (ppuAddr + add) & (VRAM_SIZE - 1);
}
function getBgPatternTableAddress(ppuCtrl) {
    return (ppuCtrl & BG_PATTERN_TABLE_ADDRESS) << 8;
}
function copyOffscreenToPixels(offscreen, pixels, vram) {
    const paletTable = PALET_ADR;
    const n = _const__WEBPACK_IMPORTED_MODULE_0__["Const"].WIDTH * _const__WEBPACK_IMPORTED_MODULE_0__["Const"].HEIGHT;
    let index = 0;
    for (let i = 0; i < n; ++i) {
        const pal = offscreen[i] & 0x1f;
        const col = vram[paletTable + pal] & 0x3f;
        const c = col * 3;
        pixels[index + 0] = _const__WEBPACK_IMPORTED_MODULE_0__["kColors"][c];
        pixels[index + 1] = _const__WEBPACK_IMPORTED_MODULE_0__["kColors"][c + 1];
        pixels[index + 2] = _const__WEBPACK_IMPORTED_MODULE_0__["kColors"][c + 2];
        index += 4;
    }
}
class HStatus {
    constructor() {
        this.ppuCtrl = 0;
        this.ppuMask = 0;
        this.chrBankOffset = new Array(8);
        this.mirrorModeBit = 0x44; // 2bit x 4screen
        this.scrollCurr = 0;
        this.scrollFineX = 0;
        this.reset();
    }
    reset() {
        this.ppuCtrl = 0;
        this.ppuMask = 0;
        this.scrollCurr = 0;
        this.scrollFineX = 0;
        for (let i = 0; i < 8; ++i)
            this.chrBankOffset[i] = i << 10;
    }
    copy(h) {
        this.ppuCtrl = h.ppuCtrl;
        this.ppuMask = h.ppuMask;
        this.mirrorModeBit = h.mirrorModeBit;
        for (let i = 0; i < 8; ++i)
            this.chrBankOffset[i] = h.chrBankOffset[i];
        this.scrollCurr = h.scrollCurr;
        this.scrollFineX = h.scrollFineX;
    }
    set(type, value, index) {
        switch (type) {
            case 0 /* DUMMY */:
                break;
            case 1 /* PPU_CTRL */:
                if (this.ppuCtrl === value)
                    return false;
                this.ppuCtrl = value;
                break;
            case 2 /* PPU_MASK */:
                if (this.ppuMask === value)
                    return false;
                this.ppuMask = value;
                break;
            case 3 /* CHR_BANK_OFFSET */:
                if (this.chrBankOffset[index] === value)
                    return false;
                this.chrBankOffset[index] = value;
                break;
            case 4 /* MIRROR_MODE_BIT */:
                if (this.mirrorModeBit === value)
                    return false;
                this.mirrorModeBit = value;
                break;
            case 5 /* SCROLL_CURR */:
                if (this.scrollCurr === value)
                    return false;
                this.scrollCurr = value;
                break;
            case 6 /* SCROLL_FINE_X */:
                if (this.scrollFineX === value)
                    return false;
                this.scrollFineX = value;
                break;
            default:
                console.error(`ERROR: type=${type}`);
                return false;
        }
        return true;
    }
}
class Ppu {
    constructor() {
        this.chrData = new Uint8Array(0);
        this.regs = new Uint8Array(REGISTER_COUNT);
        this.vram = new Uint8Array(VRAM_SIZE);
        this.oam = new Uint8Array(OAM_SIZE); // Object Attribute Memory
        this.mirrorMode = 1 /* VERT */;
        this.hcount = 0;
        this.latch = 0;
        this.ppuAddr = 0;
        this.bufferedValue = 0;
        this.hevents = new HEvents();
        this.hstatus = new HStatus();
        this.hstatusPrev = new HStatus();
        this.hstatusBak = new HStatus();
        this.scrollTemp = 0;
        this.offscreen = new Uint8Array(_const__WEBPACK_IMPORTED_MODULE_0__["Const"].WIDTH * _const__WEBPACK_IMPORTED_MODULE_0__["Const"].HEIGHT);
        this.reset();
    }
    reset() {
        this.regs.fill(0);
        this.vram.fill(0);
        this.oam.fill(0);
        this.hcount = 0;
        this.ppuAddr = 0;
        this.latch = 0;
        this.bufferedValue = 0;
        this.hevents.clear();
        this.hstatus.reset();
        this.hstatusPrev.reset();
        this.hstatusBak.reset();
        this.offscreen.fill(0);
        for (let i = 0; i < 16 * 2; ++i)
            this.vram[PALET_ADR + i] = kInitialPalette[i];
    }
    save() {
        const data = {
            regs: _util_util__WEBPACK_IMPORTED_MODULE_1__["default"].convertUint8ArrayToBase64String(this.regs),
            oam: _util_util__WEBPACK_IMPORTED_MODULE_1__["default"].convertUint8ArrayToBase64String(this.oam),
            mirrorMode: this.mirrorMode,
        };
        if (this.isChrRam()) {
            // Save VRAM including ChrRAM
            data.vram = _util_util__WEBPACK_IMPORTED_MODULE_1__["default"].convertUint8ArrayToBase64String(this.vram);
        }
        else {
            // Save VRAM except ChrROM
            data.vramHigh = _util_util__WEBPACK_IMPORTED_MODULE_1__["default"].convertUint8ArrayToBase64String(this.vram.subarray(0x2000));
        }
        return data;
    }
    load(saveData) {
        const isRam = this.isChrRam();
        this.regs = _util_util__WEBPACK_IMPORTED_MODULE_1__["default"].convertBase64StringToUint8Array(saveData.regs);
        this.oam = _util_util__WEBPACK_IMPORTED_MODULE_1__["default"].convertBase64StringToUint8Array(saveData.oam);
        this.mirrorMode = saveData.mirrorMode;
        if (isRam) {
            this.vram = _util_util__WEBPACK_IMPORTED_MODULE_1__["default"].convertBase64StringToUint8Array(saveData.vram);
            this.chrData = this.vram;
        }
        else {
            const vramHigh = _util_util__WEBPACK_IMPORTED_MODULE_1__["default"].convertBase64StringToUint8Array(saveData.vramHigh);
            for (let i = 0; i < vramHigh.length; ++i)
                this.vram[i + 0x2000] = vramHigh[i];
        }
        this.hstatus.mirrorModeBit = saveData.mirrorModeBit; // TODO: Confirm status restoration
        this.hstatus.set(1 /* PPU_CTRL */, this.regs[PPUCTRL], -1);
        this.hstatus.set(2 /* PPU_MASK */, this.regs[PPUMASK], -1);
        this.hstatus.set(4 /* MIRROR_MODE_BIT */, kMirrorModeBitTable[this.mirrorMode], -1);
    }
    setChrData(chrData) {
        const isRam = !(chrData && chrData.length > 0);
        if (isRam)
            this.chrData = this.vram;
        else
            this.chrData = chrData;
    }
    setChrBank(value) {
        const base = value << 3;
        for (let i = 0; i < 8; ++i)
            this.setChrBankOffset(i, base + i);
    }
    setChrBankOffset(bank, value) {
        const max = this.chrData.length;
        const offset = (value << 10) & (max - 1); // 0x0400
        this.incScrollCounter();
        this.addHevent(3 /* CHR_BANK_OFFSET */, offset, bank);
    }
    getMirrorMode() {
        return this.mirrorMode;
    }
    setMirrorMode(mode) {
        this.mirrorMode = mode;
        const bit = kMirrorModeBitTable[mode];
        this.incScrollCounter();
        this.addHevent(4 /* MIRROR_MODE_BIT */, bit);
    }
    read(reg) {
        let result = this.regs[reg];
        switch (reg) {
            case PPUSTATUS:
                this.regs[PPUSTATUS] &= ~VBLANK;
                this.latch = 0;
                break;
            case OAMDATA:
                result = this.oam[this.regs[OAMADDR]];
                break;
            case PPUDATA:
                {
                    const ppuAddr = this.ppuAddr;
                    const addr = getPpuAddr(ppuAddr, this.hstatus.mirrorModeBit);
                    if (PALET_ADR <= addr && addr <= PALET_END_ADR) {
                        result = this.readPpuDirect(addr); // Palette read shouldn't be buffered like other VRAM
                        // Palette read should also read VRAM into read buffer
                        this.bufferedValue = this.readPpuDirect(getPpuAddr(ppuAddr - 0x1000, this.hstatus.mirrorModeBit));
                    }
                    else {
                        result = this.bufferedValue;
                        this.bufferedValue = this.readPpuDirect(addr);
                    }
                    this.ppuAddr = incPpuAddr(this.ppuAddr, this.regs[PPUCTRL]);
                }
                break;
            default:
                break;
        }
        return result;
    }
    write(reg, value) {
        if (reg === PPUSTATUS) {
            value &= ~(VBLANK | SPRITE0HIT | SPRITE_OVERFLOW);
        }
        this.regs[reg] = value;
        switch (reg) {
            case PPUCTRL:
                {
                    this.incScrollCounter();
                    this.scrollTemp = (this.scrollTemp & ~0x0c00) | ((value & BASE_NAMETABLE_ADDRESS) << 10);
                    // At dot 257 of each scanline:
                    const scrollCurr = (this.hstatus.scrollCurr & ~0x041f) | (this.scrollTemp & 0x041f);
                    // this.scrollCurr = scrollCurr
                    // if (this.hcount >= 280 && this.hcount < 304) {
                    //   this.scrollCurr = (this.scrollCurr & ~0x7be0) | (this.scrollTemp & 0x7be0)
                    // }
                    this.addHevent(1 /* PPU_CTRL */, this.regs[PPUCTRL]);
                    this.addHevent(5 /* SCROLL_CURR */, scrollCurr);
                }
                break;
            case PPUMASK:
                this.incScrollCounter();
                this.addHevent(2 /* PPU_MASK */, this.regs[PPUMASK]);
                break;
            case OAMDATA:
                {
                    const oamAddr = this.regs[OAMADDR];
                    this.oam[oamAddr] = value;
                    this.regs[OAMADDR] = (oamAddr + 1) & 0xff;
                }
                break;
            case PPUSCROLL:
                this.incScrollCounter();
                if (this.latch === 0) {
                    this.scrollTemp = (this.scrollTemp & ~0x001f) | (value >> 3);
                    this.addHevent(6 /* SCROLL_FINE_X */, value & 7);
                    // At dot 257 of each scanline:
                    const scrollCurr = (this.hstatus.scrollCurr & ~0x041f) | (this.scrollTemp & 0x041f);
                    this.addHevent(5 /* SCROLL_CURR */, scrollCurr);
                }
                else {
                    this.scrollTemp = ((this.scrollTemp & ~0x73e0) | ((value & 0xf8) << (5 - 3)) |
                        ((value & 0x07) << 12));
                }
                this.latch = 1 - this.latch;
                break;
            case PPUADDR:
                if (this.latch === 0) {
                    this.scrollTemp = (this.scrollTemp & ~0x7f00) | ((value & 0x3f) << 8);
                    this.ppuAddr = value;
                }
                else {
                    this.scrollTemp = (this.scrollTemp & ~0x00ff) | value;
                    this.ppuAddr = this.scrollTemp;
                    this.addHevent(5 /* SCROLL_CURR */, this.scrollTemp);
                }
                this.latch = 1 - this.latch;
                break;
            case PPUDATA:
                {
                    const addr = getPpuAddr(this.ppuAddr, this.hstatus.mirrorModeBit);
                    this.vram[addr] = value;
                    this.ppuAddr = incPpuAddr(this.ppuAddr, this.regs[PPUCTRL]);
                }
                break;
            default:
                break;
        }
    }
    copyWithDma(array, start) {
        const dst = this.oam;
        let j = this.regs[OAMADDR];
        for (let i = 0; i < 256; ++i) {
            dst[j] = array[start + i];
            j = (j + 1) & 255;
        }
        // TODO: Block CPU.
    }
    setVBlank() {
        this.regs[PPUSTATUS] = this.regs[PPUSTATUS] | VBLANK;
        this.hevents.swap();
        // Move hstatusBak to hstatusPrev,
        // and keep current status into hstatusBak as a next start status.
        const tmp = this.hstatusPrev;
        this.hstatusPrev = this.hstatusBak;
        this.hstatusBak = tmp;
        this.hstatusBak.copy(this.hstatus);
    }
    clearVBlank() {
        this.regs[PPUSTATUS] &= ~(VBLANK | SPRITE0HIT);
        this.addHevent(5 /* SCROLL_CURR */, this.scrollTemp);
    }
    interruptEnable() {
        return (this.regs[PPUCTRL] & VINT_ENABLE) !== 0;
    }
    getSpritePatternTableAddress() {
        if ((this.regs[PPUCTRL] & SPRITE_SIZE) === 0)
            return ((this.regs[PPUCTRL] & SPRITE_PATTERN_TABLE_ADDRESS) << 9);
        return 0;
    }
    setHcount(hcount) {
        this.hcount = hcount;
        this.checkSprite0Hit(hcount);
    }
    render(pixels) {
        const h = this.hstatusPrev;
        const n = this.hevents.getCount();
        let sprChrStart = 0;
        for (let i = 0; i < n; ++i) {
            const hevent = this.hevents.getEvent(i);
            h.set(hevent.type, hevent.value, hevent.index);
            const hline0 = hevent.hcount;
            const hline1 = this.hevents.getEvent(i + 1).hcount;
            if (hline0 >= hline1)
                continue;
            // BG
            if ((h.ppuMask & SHOW_BG) === 0) {
                this.clearBg(this.offscreen, hline0, hline1, _const__WEBPACK_IMPORTED_MODULE_0__["Const"].WIDTH);
            }
            else {
                const baseNameTable = (h.scrollCurr & 0x0c00) >> 10;
                const bgChrStart = getBgPatternTableAddress(h.ppuCtrl);
                let x0 = 0;
                if ((h.ppuMask & SHOW_BG_LEFT_8PX) === 0) {
                    x0 = 8;
                    this.clearBg(this.offscreen, hline0, hline1, x0);
                }
                const scrollX = h.scrollFineX | ((h.scrollCurr & 0x001f) << 3);
                const scrollY = ((h.scrollCurr & 0x7000) >> 12) | ((h.scrollCurr & 0x03e0) >> (5 - 3));
                this.doRenderBg(scrollX, scrollY, baseNameTable, hline0, hline1, x0, h.chrBankOffset, h.mirrorModeBit, bgChrStart);
            }
            // Sprite
            if ((h.ppuMask & SHOW_SPRITE) !== 0) {
                if ((h.ppuCtrl & SPRITE_SIZE) === 0)
                    sprChrStart = (h.ppuCtrl & SPRITE_PATTERN_TABLE_ADDRESS) << 9;
                const x0 = (h.ppuMask & SHOW_SPRITE_LEFT_8PX) ? 0 : 8;
                this.renderSprite(hline0, hline1, x0, h.chrBankOffset, sprChrStart);
            }
        }
        copyOffscreenToPixels(this.offscreen, pixels, this.vram);
    }
    renderPattern(pixels, lineWidth, colorGroups) {
        const W = 8;
        const invert = (this.regs[PPUCTRL] & SPRITE_PATTERN_TABLE_ADDRESS) === 0 ? 1 : 0;
        for (let i = 0; i < 2; ++i) {
            const b = i ^ invert;
            const paletHigh = ((colorGroups[b] << 2) | (b << 4)) | 0;
            for (let by = 0; by < 16; ++by) {
                for (let bx = 0; bx < 16; ++bx) {
                    const chridx = (bx + by * 16 + i * 256) * 16;
                    for (let py = 0; py < W; ++py) {
                        const yy = by * W + py;
                        const idx = chridx + py;
                        const pat = ((_const__WEBPACK_IMPORTED_MODULE_0__["kStaggered"][this.readPpuDirect(idx + 8)] << 1) |
                            _const__WEBPACK_IMPORTED_MODULE_0__["kStaggered"][this.readPpuDirect(idx)]);
                        for (let px = 0; px < W; ++px) {
                            const xx = bx * W + px + i * (W * 16);
                            const pal = this.getPalet(paletHigh | ((pat >> ((W - 1 - px) << 1)) & 3));
                            const p = pal * 3;
                            const index = (yy * lineWidth + xx) * 4;
                            pixels[index + 0] = _const__WEBPACK_IMPORTED_MODULE_0__["kColors"][p + 0];
                            pixels[index + 1] = _const__WEBPACK_IMPORTED_MODULE_0__["kColors"][p + 1];
                            pixels[index + 2] = _const__WEBPACK_IMPORTED_MODULE_0__["kColors"][p + 2];
                        }
                    }
                }
            }
        }
    }
    writePpuDirect(addr, value) {
        if (addr >= 0x2000) {
            this.vram[addr] = value;
        }
        else {
            const bankOffset = this.hstatus.chrBankOffset[(addr >> 10) & 7];
            this.chrData[(addr & 0x3ff) + bankOffset] = value;
        }
    }
    dumpVram(start, count) {
        const mem = new Array();
        for (let i = 0; i < count; ++i) {
            mem.push(this.vram[getPpuAddr(start + i, this.hstatus.mirrorModeBit)]);
        }
        for (let i = 0; i < count; i += 16) {
            const line = mem.splice(0, 16).map(x => _util_util__WEBPACK_IMPORTED_MODULE_1__["default"].hex(x, 2)).join(' ');
            console.log(`${_util_util__WEBPACK_IMPORTED_MODULE_1__["default"].hex(start + i, 4)}: ${line}`);
        }
    }
    renderNameTable1(pixels, lineWidth, startX, startY, nameTableOffset) {
        const W = 8;
        const chrStart = getBgPatternTableAddress(this.regs[PPUCTRL]);
        const vram = this.vram;
        const paletTable = PALET_ADR;
        const clearColor = vram[paletTable] & 0x3f; // Universal background color
        const clearR = _const__WEBPACK_IMPORTED_MODULE_0__["kColors"][clearColor * 3 + 0];
        const clearG = _const__WEBPACK_IMPORTED_MODULE_0__["kColors"][clearColor * 3 + 1];
        const clearB = _const__WEBPACK_IMPORTED_MODULE_0__["kColors"][clearColor * 3 + 2];
        for (let bby = 0; bby < _const__WEBPACK_IMPORTED_MODULE_0__["Const"].HEIGHT / W; ++bby) {
            const by = (bby + 60) % 60;
            const ay = by % 30;
            for (let bbx = 0; bbx < _const__WEBPACK_IMPORTED_MODULE_0__["Const"].WIDTH / W; ++bbx) {
                const bx = bbx & 63;
                const ax = bx & 31;
                const nameTable = getNameTable(0, bx, by, this.hstatus.mirrorModeBit) + nameTableOffset;
                const name = vram[nameTable + ax + (ay << 5)];
                const chridx = name * 16 + chrStart;
                const palShift = (ax & 2) + ((ay & 2) << 1);
                const atrBlk = (ax >> 2) + ((ay << 1) & 0x0f8);
                const attributeTable = nameTable + 0x3c0;
                const paletHigh = ((vram[attributeTable + atrBlk] >> palShift) & 3) << 2;
                for (let py = 0; py < W; ++py) {
                    const yy = bby * W + py;
                    let pat = this.getBgPat(chridx, py, this.hstatus.chrBankOffset);
                    for (let px = 0; px < W; ++px) {
                        const xx = bbx * W + px;
                        const pal = pat >> 14; // & 3
                        pat = (pat << 2) & 0xffff;
                        let r = clearR, g = clearG, b = clearB;
                        if (pal !== 0) {
                            const palet = paletHigh + pal;
                            const col = vram[paletTable + palet] & 0x3f;
                            const c = col * 3;
                            r = _const__WEBPACK_IMPORTED_MODULE_0__["kColors"][c];
                            g = _const__WEBPACK_IMPORTED_MODULE_0__["kColors"][c + 1];
                            b = _const__WEBPACK_IMPORTED_MODULE_0__["kColors"][c + 2];
                        }
                        const index = ((yy + startY) * lineWidth + (xx + startX)) * 4;
                        pixels[index + 0] = r;
                        pixels[index + 1] = g;
                        pixels[index + 2] = b;
                    }
                }
            }
        }
    }
    getPalet(pal) {
        return this.vram[PALET_ADR + (pal & 31)] & 0x3f;
    }
    getReg(index) {
        return this.regs[index];
    }
    isChrRam() {
        return this.chrData === this.vram;
    }
    doRenderBg(scrollX, scrollY, baseNameTable, hline0, hline1, x0, chrBankOffset, mirrorModeBit, chrStart) {
        const W = 8;
        const LINE_WIDTH = _const__WEBPACK_IMPORTED_MODULE_0__["Const"].WIDTH;
        const vram = this.vram;
        const offscreen = this.offscreen;
        if (scrollY >= 240)
            scrollY = (scrollY - 256);
        for (let yy = hline0; yy < hline1; ++yy) {
            const yyy = yy - hline0 + scrollY;
            const by = ((yyy >> 3) + 60) % 60;
            const ay = by % 30;
            for (let bbx = 0; bbx < _const__WEBPACK_IMPORTED_MODULE_0__["Const"].WIDTH / W + 1; ++bbx) {
                const bx = (bbx + (scrollX >> 3)) & 63;
                const ax = bx & 31;
                const nameTable = getNameTable(baseNameTable, bx, by, mirrorModeBit);
                const name = vram[nameTable + ax + (ay << 5)];
                const chridx = name * 16 + chrStart;
                const palShift = (ax & 2) + ((ay & 2) << 1);
                const atrBlk = (ax >> 2) + ((ay << 1) & 0x0f8);
                const attributeTable = nameTable + 0x3c0;
                const paletHigh = ((vram[attributeTable + atrBlk] >> palShift) & 3) << 2;
                const px0 = bbx * W - (scrollX & 7);
                const pxStart = Math.max(x0 - px0, 0);
                const pxEnd = Math.min(_const__WEBPACK_IMPORTED_MODULE_0__["Const"].WIDTH - px0, W);
                let pat = this.getBgPat(chridx, yyy & 7, chrBankOffset);
                pat = (pat << (pxStart * 2)) & 0xffff;
                for (let px = pxStart; px < pxEnd; ++px) {
                    const xx = px + px0;
                    let pal = pat >> 14; // & 3
                    pat = (pat << 2) & 0xffff;
                    if (pal !== 0)
                        pal |= paletHigh;
                    const index = yy * LINE_WIDTH + xx;
                    offscreen[index] = pal;
                }
            }
        }
    }
    clearBg(offscreen, hline0, hline1, x) {
        const LINE_BYTES = _const__WEBPACK_IMPORTED_MODULE_0__["Const"].WIDTH;
        for (let i = hline0; i < hline1; ++i) {
            let index = i * LINE_BYTES;
            for (let j = 0; j < x; ++j)
                offscreen[index + j] = 0;
        }
    }
    isSprite8x16() {
        return (this.regs[PPUCTRL] & SPRITE_SIZE) !== 0;
    }
    renderSprite(hline0, hline1, x0, chrBankOffset, chrStart) {
        const W = 8;
        const LINE_WIDTH = _const__WEBPACK_IMPORTED_MODULE_0__["Const"].WIDTH;
        const PALET = 0x03;
        const offscreen = this.offscreen;
        const oam = this.oam;
        const isSprite8x16 = this.isSprite8x16();
        const h = isSprite8x16 ? 16 : 8;
        for (let i = 0; i < MAX_SPRITE; ++i) {
            const y = oam[i * 4] + 1;
            if (y + h < hline0 || y >= hline1)
                continue;
            const oamIndex = oam[i * 4 + 1];
            const attr = oam[i * 4 + 2];
            const flipVert = (attr & FLIP_VERT) !== 0;
            const flipHorz = (attr & FLIP_HORZ) !== 0;
            const x = oam[i * 4 + 3];
            const priorityMask = kSpritePriorityMask[(attr >> 5) & 1];
            const chridx = (isSprite8x16
                ? (oamIndex & 0xfe) * 16 + ((oamIndex & 1) << 12)
                : oamIndex * 16 + chrStart);
            const paletHigh = (((attr & PALET) << 2) | (0x10 | SPRITE_MASK));
            const py0 = Math.max(0, hline0 - y);
            const py1 = Math.min(h, Math.min(hline1 - y, _const__WEBPACK_IMPORTED_MODULE_0__["Const"].HEIGHT - y));
            const px0 = Math.max(x0 - x, 0);
            const px1 = Math.min(_const__WEBPACK_IMPORTED_MODULE_0__["Const"].WIDTH - x, W);
            for (let py = py0; py < py1; ++py) {
                const ppy = flipVert ? (h - 1) - py : py;
                const pat = this.getSpritePat(chridx, ppy, flipHorz, chrBankOffset);
                for (let px = px0; px < px1; ++px) {
                    const pal = (pat >> ((W - 1 - px) << 1)) & 3;
                    if (pal === 0)
                        continue;
                    const pixelIndex = (y + py) * LINE_WIDTH + (x + px);
                    if ((offscreen[pixelIndex] & priorityMask) !== 0) {
                        offscreen[pixelIndex] |= SPRITE_MASK;
                        continue;
                    }
                    offscreen[pixelIndex] = paletHigh + pal;
                }
            }
        }
    }
    getBgPat(chridx, py, chrBankOffset) {
        const idx = chridx + py;
        const bank = (idx >> 10) & 7;
        const p = chrBankOffset[bank] + (idx & 0x03ff);
        return _const__WEBPACK_IMPORTED_MODULE_0__["kStaggered"][this.chrData[p]] | (_const__WEBPACK_IMPORTED_MODULE_0__["kStaggered"][this.chrData[p + 8]] << 1);
    }
    getSpritePat(chridx, ppy, flipHorz, chrBankOffset) {
        const idx = chridx + (ppy & 7) + ((ppy & 8) << 1);
        const bank = (idx >> 10) & 7;
        const p = chrBankOffset[bank] + (idx & 0x03ff);
        let patHi = this.chrData[p + 8];
        let patLo = this.chrData[p];
        if (flipHorz) {
            patHi = _const__WEBPACK_IMPORTED_MODULE_0__["kFlipBits"][patHi];
            patLo = _const__WEBPACK_IMPORTED_MODULE_0__["kFlipBits"][patLo];
        }
        return _const__WEBPACK_IMPORTED_MODULE_0__["kStaggered"][patLo] | (_const__WEBPACK_IMPORTED_MODULE_0__["kStaggered"][patHi] << 1);
    }
    checkSprite0Hit(hcount) {
        if ((this.regs[PPUSTATUS] & SPRITE0HIT) !== 0 ||
            (this.regs[PPUMASK] & (SHOW_BG | SHOW_SPRITE)) !== (SHOW_BG | SHOW_SPRITE))
            return;
        const sprite0y = this.oam[0];
        if (hcount < sprite0y || hcount >= sprite0y + 16)
            return;
        const sprite0x = this.oam[3];
        if (sprite0x >= 255)
            return;
        const dy = this.getNonEmptySprite0Line();
        if (dy < 0 || hcount !== sprite0y + dy)
            return;
        this.regs[PPUSTATUS] |= SPRITE0HIT;
    }
    getNonEmptySprite0Line() {
        const oam = this.oam;
        const chrStart = this.getSpritePatternTableAddress();
        const isSprite8x16 = this.isSprite8x16();
        const h = isSprite8x16 ? 16 : 8;
        const i = 0;
        const index = oam[i * 4 + 1];
        const attr = oam[i * 4 + 2];
        const flipVert = (attr & FLIP_VERT) !== 0;
        const chridx = (isSprite8x16
            ? (index & 0xfe) * 16 + ((index & 1) << 12)
            : index * 16 + chrStart);
        for (let py = 0; py < h; ++py) {
            const ppy = flipVert ? (h - 1) - py : py;
            const pat = this.getSpritePat(chridx, ppy, false, this.hstatus.chrBankOffset);
            if (pat !== 0)
                return py;
        }
        return -1;
    }
    addHevent(type, value, index = -1) {
        // Apply immediately to the current state.
        if (!this.hstatus.set(type, value, index))
            return;
        let hcount = this.hcount + 1;
        if (hcount >= _const__WEBPACK_IMPORTED_MODULE_0__["Const"].HEIGHT)
            hcount = 0;
        this.hevents.add(hcount, type, value, index);
    }
    incScrollCounter() {
        const n = this.hevents.getCountNext();
        if (n <= 0)
            return;
        const h = this.hevents.getEventNext(n - 1);
        const hcount = this.hcount < _const__WEBPACK_IMPORTED_MODULE_0__["Const"].HEIGHT - 1 ? this.hcount + 1 : 0;
        const dy = hcount - h.hcount;
        if (dy <= 0)
            return;
        const inc = (t) => {
            let pageY = ((t >> 11) & 1) * 240;
            let y = ((t & 0x03e0) >> (5 - 3)) | ((t >> 12) & 7);
            if (y >= 240)
                y -= 256;
            const ny = pageY + y + dy;
            const p = (ny / 240) & 1;
            const sy = ny % 240;
            return (t & ~0x7be0) | ((sy & 0xf8) << (5 - 3)) | ((sy & 0x07) << 12) | (p << 11);
        };
        this.scrollTemp = inc(this.scrollTemp);
        this.addHevent(5 /* SCROLL_CURR */, inc(this.hstatus.scrollCurr));
    }
    readPpuDirect(addr) {
        if (addr >= 0x2000) {
            return this.vram[addr];
        }
        else {
            const bankOffset = this.hstatus.chrBankOffset[(addr >> 10) & 7];
            return this.chrData[(addr & 0x3ff) + bankOffset];
        }
    }
}


/***/ }),

/***/ "./util/audio_manager.ts":
/*!*******************************!*\
  !*** ./util/audio_manager.ts ***!
  \*******************************/
/*! exports provided: AudioManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioManager", function() { return AudioManager; });
class SoundChannel {
    destroy() {
        if (this.gainNode != null) {
            this.gainNode.disconnect();
            // this.gainNode = null
        }
    }
    constructor(context) {
        this.gainNode = context.createGain();
        this.gainNode.gain.setValueAtTime(0, context.currentTime);
    }
    start() {
    }
    setVolume(volume, context) {
        this.gainNode.gain.setValueAtTime(volume, context.currentTime);
    }
    setFrequency(_frequency) {
    }
    setDutyRatio(_ratio) {
    }
}
class OscillatorChannel extends SoundChannel {
    destroy() {
        super.destroy();
        if (this.oscillator != null) {
            this.oscillator.disconnect();
            // this.oscillator = null
        }
    }
    constructor(context) {
        super(context);
        this.oscillator = context.createOscillator();
        this.setupOscillator(this.oscillator, context);
    }
    start() {
        this.oscillator.start();
    }
    setFrequency(frequency) {
        const now = this.gainNode.context.currentTime;
        this.oscillator.frequency.setValueAtTime(frequency, now);
    }
}
class TriangleChannel extends OscillatorChannel {
    setupOscillator(oscillator, context) {
        oscillator.type = 'triangle';
        oscillator.connect(this.gainNode);
        this.gainNode.connect(context.destination);
    }
}
class SawtoothChannel extends OscillatorChannel {
    setupOscillator(oscillator, context) {
        oscillator.type = 'sawtooth';
        oscillator.connect(this.gainNode);
        this.gainNode.connect(context.destination);
    }
}
class NoiseChannel extends OscillatorChannel {
    setupOscillator(oscillator, context) {
        const count = 1024;
        const real = new Float32Array(count);
        const imag = new Float32Array(count);
        real[0] = imag[0] = 0; // DC
        for (let i = 1; i < count; ++i) {
            const t = Math.random() * (2 * Math.PI);
            real[i] = Math.cos(t);
            imag[i] = Math.sin(t);
        }
        const wave = context.createPeriodicWave(real, imag);
        oscillator.setPeriodicWave(wave);
        oscillator.connect(this.gainNode);
        this.gainNode.connect(context.destination);
    }
}
// Pulse with duty control.
class PulseChannel extends OscillatorChannel {
    constructor() {
        super(...arguments);
        this.frequency = 1;
        this.duty = 0.5;
    }
    destroy() {
        super.destroy();
        if (this.delay != null) {
            this.delay.disconnect();
            // this.delay = null
        }
    }
    setFrequency(frequency) {
        if (this.frequency === frequency)
            return;
        this.frequency = frequency;
        super.setFrequency(frequency);
        this.updateDelay();
    }
    setDutyRatio(ratio) {
        if (this.duty === ratio)
            return;
        this.duty = ratio;
        this.updateDelay();
    }
    setupOscillator(oscillator, context) {
        oscillator.type = 'sawtooth';
        const inverter = context.createGain();
        inverter.gain.value = -1;
        oscillator.connect(inverter);
        inverter.connect(this.gainNode);
        const delay = context.createDelay();
        oscillator.connect(delay);
        delay.connect(this.gainNode);
        this.delay = delay;
        this.gainNode.connect(context.destination);
    }
    updateDelay() {
        const now = this.delay.context.currentTime;
        this.delay.delayTime.setValueAtTime((1.0 - this.duty) / this.frequency, now);
    }
}
function createSoundChannel(context, type) {
    switch (type) {
        case 0 /* PULSE */:
            return new PulseChannel(context);
        case 1 /* TRIANGLE */:
            return new TriangleChannel(context);
        case 3 /* NOISE */:
            return new NoiseChannel(context);
        case 2 /* SAWTOOTH */:
            return new SawtoothChannel(context);
    }
}
class AudioManager {
    constructor(audioContextClass) {
        this.channels = new Array();
        this.masterVolume = 0;
        AudioManager.setUp(audioContextClass);
        this.masterVolume = 1.0;
    }
    static setUp(audioContextClass) {
        if (AudioManager.initialized)
            return;
        AudioManager.initialized = true;
        if (audioContextClass == null)
            return;
        AudioManager.context = new audioContextClass();
    }
    addChannel(type) {
        const context = AudioManager.context;
        if (context == null)
            return;
        const sc = createSoundChannel(context, type);
        sc.start();
        this.channels.push(sc);
    }
    getChannelCount() {
        return this.channels.length;
    }
    release() {
        if (this.channels != null) {
            for (let channel of this.channels) {
                channel.destroy();
            }
            this.channels.length = 0;
        }
    }
    setChannelFrequency(channel, frequency) {
        if (AudioManager.context == null)
            return;
        this.channels[channel].setFrequency(frequency);
    }
    setChannelVolume(channel, volume) {
        if (AudioManager.context == null)
            return;
        this.channels[channel].setVolume(volume * this.masterVolume, AudioManager.context);
    }
    setChannelDutyRatio(channel, ratio) {
        if (AudioManager.context == null)
            return;
        this.channels[channel].setDutyRatio(ratio);
    }
    setMasterVolume(volume) {
        const context = AudioManager.context;
        if (context == null)
            return;
        this.masterVolume = volume;
        if (volume <= 0) {
            this.channels.forEach(channel => {
                channel.setVolume(0, context);
            });
        }
    }
}
AudioManager.initialized = false;


/***/ }),

/***/ "./util/dom_util.ts":
/*!**************************!*\
  !*** ./util/dom_util.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DomUtil; });
class DomUtil {
    static clearCanvas(canvas) {
        const context = canvas.getContext('2d');
        if (context == null)
            return;
        context.strokeStyle = '';
        context.fillStyle = `rgb(64,64,64)`;
        context.fillRect(0, 0, canvas.width, canvas.height);
    }
    static removeAllChildren(element) {
        for (let child of element.childNodes)
            element.removeChild(child);
    }
    static setStyles(elem, styles) {
        Object.assign(elem.style, styles);
    }
    static loadFile(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = function (e) {
                const binary = new Uint8Array(e.target.result);
                resolve(binary);
            };
            reader.onerror = function (_e) {
                reject(reader.error);
            };
            reader.readAsArrayBuffer(file);
        });
    }
    static handleFileDrop(dropZone, onDropped) {
        function onDrop(event) {
            event.stopPropagation();
            event.preventDefault();
            const files = event.dataTransfer.files;
            if (files.length > 0) {
                onDropped(files, event.pageX, event.pageY);
            }
            return false;
        }
        function onDragOver(event) {
            event.stopPropagation();
            event.preventDefault();
            event.dataTransfer.dropEffect = 'copy';
            return false;
        }
        dropZone.addEventListener('dragover', onDragOver, false);
        dropZone.addEventListener('drop', onDrop, false);
    }
    static getCanvasContext2d(canvas) {
        const context = canvas.getContext('2d');
        if (context == null)
            throw new Error('2d context not supported or canvas already initialized');
        return context;
    }
    static timeout(millisec) {
        return new Promise(resolve => setTimeout(resolve, millisec));
    }
    static download(blob, filename) {
        const objectURL = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = objectURL;
        a.setAttribute('download', filename);
        a.click();
    }
    static chooseFile(callback) {
        const elem = document.createElement('input');
        elem.setAttribute('type', 'file');
        elem.setAttribute('accept', '.sav, application/json');
        elem.addEventListener('change', function (event) {
            callback(event.target.files);
        });
        elem.click();
    }
    // Register mouse drag event listener.
    static setMouseDragListener(mouseMove, mouseUp, useCapture) {
        let mouseLeave = null;
        let mouseLeaveTarget = null;
        if (typeof mouseMove === 'object') {
            const option = mouseMove;
            mouseMove = option.move;
            mouseUp = option.up;
            mouseLeave = option.leave;
            useCapture = option.useCapture;
            mouseLeaveTarget = (mouseLeave == null ? null : option.leaveTarget || document);
        }
        const unlisten = () => {
            document.removeEventListener('mousemove', mouseMove, useCapture);
            document.removeEventListener('mouseup', mouseUpDelegate, useCapture);
            if (mouseLeaveDelegate && mouseLeaveTarget)
                mouseLeaveTarget.removeEventListener('mouseleave', mouseLeaveDelegate, useCapture);
        };
        const mouseUpDelegate = ($event) => {
            if (mouseUp)
                mouseUp($event);
            unlisten();
        };
        const mouseLeaveDelegate = (mouseLeave == null ? null : ($event) => {
            if (mouseLeave && mouseLeave($event))
                unlisten();
        });
        document.addEventListener('mousemove', mouseMove, useCapture);
        document.addEventListener('mouseup', mouseUpDelegate, useCapture);
        if (mouseLeaveDelegate && mouseLeaveTarget)
            mouseLeaveTarget.addEventListener('mouseleave', mouseLeaveDelegate, useCapture);
    }
    static getMousePosIn(event, elem) {
        const rect = elem.getBoundingClientRect();
        const scrollLeft = document.body.scrollLeft;
        const scrollTop = document.body.scrollTop;
        return [event.pageX - rect.left - scrollLeft,
            event.pageY - rect.top - scrollTop];
    }
}


/***/ }),

/***/ "./util/gamepad_manager.ts":
/*!*********************************!*\
  !*** ./util/gamepad_manager.ts ***!
  \*********************************/
/*! exports provided: GamepadManager, GamepadWnd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamepadManager", function() { return GamepadManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamepadWnd", function() { return GamepadWnd; });
/* harmony import */ var _util_dom_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/dom_util */ "./util/dom_util.ts");
/* harmony import */ var _util_storage_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/storage_util */ "./util/storage_util.ts");
/* harmony import */ var _wnd_wnd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../wnd/wnd */ "./wnd/wnd.ts");



const kKeyTable = ['A', 'B', 'SELECT', 'START', 'U', 'D', 'L', 'R'];
// ================================================
// Manager.
class GamepadManager {
    static setUp() {
        if (GamepadManager.initialized)
            return;
        GamepadManager.loadSetting();
        GamepadManager.initialized = true;
    }
    static isSupported() {
        return 'Gamepad' in window;
    }
    static getState(padNo) {
        if (!GamepadManager.isSupported())
            return 0;
        const gamepads = navigator.getGamepads();
        if (padNo >= gamepads.length)
            return 0;
        const gamepad = gamepads[padNo];
        if (!gamepad)
            return 0;
        const THRESHOLD = GamepadManager.AXIS_THRESHOLD;
        let pad = 0;
        GamepadManager.padSettings.forEach((s, i) => {
            switch (s.type) {
                case 0 /* AXIS */:
                    const axis = gamepad.axes[s.index] || 0;
                    if (axis * s.direction >= THRESHOLD)
                        pad |= 1 << i;
                    break;
                case 1 /* BUTTON */:
                    const button = gamepad.buttons[s.index];
                    if (button && button.pressed)
                        pad |= 1 << i;
                    break;
            }
        });
        return pad;
    }
    static setButton(padbit, buttonIndex) {
        GamepadManager.padSettings[padbit].type = 1 /* BUTTON */;
        GamepadManager.padSettings[padbit].index = buttonIndex;
        GamepadManager.padSettings[padbit].direction = 1;
        GamepadManager.saveSetting();
    }
    static setAxis(padbit, axisIndex, direction) {
        GamepadManager.padSettings[padbit].type = 0 /* AXIS */;
        GamepadManager.padSettings[padbit].index = axisIndex;
        GamepadManager.padSettings[padbit].direction = direction;
        GamepadManager.saveSetting();
    }
    static saveSetting() {
        const data = {};
        GamepadManager.padSettings.forEach((s, i) => {
            const key = kKeyTable[i];
            switch (s.type) {
                default:
                    break;
                case 1 /* BUTTON */:
                    data[key] = {
                        button: s.index,
                    };
                    break;
                case 0 /* AXIS */:
                    data[key] = {
                        axis: s.index,
                        direction: s.direction,
                    };
                    break;
            }
        });
        _util_storage_util__WEBPACK_IMPORTED_MODULE_1__["default"].putObject('pad0', data);
    }
    static loadSetting() {
        const data = _util_storage_util__WEBPACK_IMPORTED_MODULE_1__["default"].getObject('pad0', {});
        if (typeof data === 'object') {
            Object.keys(data).forEach(key => {
                const index = kKeyTable.indexOf(key.toUpperCase());
                if (index < 0)
                    return;
                const d = data[key];
                if ('button' in d) {
                    GamepadManager.setButton(index, d.button);
                }
                else if ('axis' in d && 'direction' in d) {
                    GamepadManager.setAxis(index, d.axis, parseInt(d.direction, 10));
                }
            });
        }
    }
}
GamepadManager.AXIS_THRESHOLD = 0.5;
GamepadManager.initialized = false;
GamepadManager.padSettings = [
    { type: 1 /* BUTTON */, index: 0, direction: 1 },
    { type: 1 /* BUTTON */, index: 1, direction: 1 },
    { type: 1 /* BUTTON */, index: 2, direction: 1 },
    { type: 1 /* BUTTON */, index: 3, direction: 1 },
    { type: 0 /* AXIS */, index: 1, direction: -1 },
    { type: 0 /* AXIS */, index: 1, direction: 1 },
    { type: 0 /* AXIS */, index: 0, direction: -1 },
    { type: 0 /* AXIS */, index: 0, direction: 1 },
];
const kGamepadButtons = [
    { x: 40, y: 10, name: '&uarr;', padbit: 4 /* U */ },
    { x: 10, y: 40, name: '&larr;', padbit: 6 /* L */ },
    { x: 70, y: 40, name: '&rarr;', padbit: 7 /* R */ },
    { x: 40, y: 70, name: '&darr;', padbit: 5 /* D */ },
    { x: 130, y: 40, name: 'B', opt: { type: 'round' }, padbit: 1 /* B */ },
    { x: 175, y: 40, name: 'A', opt: { type: 'round' }, padbit: 0 /* A */ },
    { x: 50, y: 110, name: 'Select', opt: { width: 60, height: 20 }, padbit: 2 /* SELECT */ },
    { x: 120, y: 110, name: 'Start', opt: { width: 60, height: 20 }, padbit: 3 /* START */ },
];
function createButton(parent, x, y, name, opt = {}) {
    const btn = document.createElement('div');
    btn.className = 'gamepad-btn';
    _util_dom_util__WEBPACK_IMPORTED_MODULE_0__["default"].setStyles(btn, {
        left: `${x}px`,
        top: `${y}px`,
        width: `${opt.width || 30}px`,
        height: `${opt.height || 30}px`,
    });
    btn.innerHTML = name;
    if (opt.type === 'round')
        btn.style.borderRadius = '15px';
    parent.appendChild(btn);
    return btn;
}
class GamepadWnd extends _wnd_wnd__WEBPACK_IMPORTED_MODULE_2__["default"] {
    constructor(wndMgr) {
        super(wndMgr, 230, 150, 'Gamepad config');
        this.destroying = false;
        this.selectedButton = null;
        const content = document.createElement('div');
        content.className = 'gamepad-content';
        _util_dom_util__WEBPACK_IMPORTED_MODULE_0__["default"].setStyles(content, {
            width: '230px',
            height: '150px',
        });
        this.setContent(content);
        content.addEventListener('click', () => {
            this.setSelectedButton(null);
        });
        this.buttons = kGamepadButtons.map(d => {
            const btn = createButton(content, d.x, d.y, d.name, d.opt);
            btn.addEventListener('click', (event) => {
                event.stopPropagation();
                this.setSelectedButton(btn);
            });
            return btn;
        });
        this.selectedButton = null;
        const loopFn = () => {
            if (this.destroying)
                return;
            this.checkGamepad();
            requestAnimationFrame(loopFn);
        };
        requestAnimationFrame(loopFn);
    }
    close() {
        this.destroying = true;
        super.close();
    }
    checkGamepad() {
        const padNo = 0;
        if (!window.Gamepad)
            return;
        const gamepads = navigator.getGamepads();
        if (padNo >= gamepads.length)
            return;
        const gamepad = gamepads[padNo];
        if (!gamepad)
            return;
        if (this.selectedButton != null && this.isTop()) {
            const buttonIndex = this.buttons.indexOf(this.selectedButton);
            if (this.replaceGamepadButton(padNo, gamepad, buttonIndex))
                this.setSelectedButton(null);
        }
        this.checkGamepadPressed(padNo);
    }
    replaceGamepadButton(_padNo, gamepad, buttonIndex) {
        for (let i = 0; i < gamepad.buttons.length; ++i) {
            if (gamepad.buttons[i].pressed) {
                GamepadManager.setButton(kGamepadButtons[buttonIndex].padbit, i);
                return true;
            }
        }
        const THRESHOLD = GamepadManager.AXIS_THRESHOLD;
        for (let i = 0; i < gamepad.axes.length; ++i) {
            const v = gamepad.axes[i];
            if (v < -THRESHOLD) {
                GamepadManager.setAxis(kGamepadButtons[buttonIndex].padbit, i, -1);
                return true;
            }
            if (v > THRESHOLD) {
                GamepadManager.setAxis(kGamepadButtons[buttonIndex].padbit, i, 1);
                return true;
            }
        }
        return false;
    }
    checkGamepadPressed(padNo) {
        const pad = GamepadManager.getState(padNo);
        for (let i = 0; i < kGamepadButtons.length; ++i) {
            const button = this.buttons[i];
            if ((pad & (1 << kGamepadButtons[i].padbit)) === 0) {
                button.classList.remove('pressed');
            }
            else {
                button.classList.add('pressed');
            }
        }
    }
    setSelectedButton(btn) {
        if (this.selectedButton != null) {
            this.selectedButton.classList.remove('selected');
        }
        if (this.selectedButton === btn) {
            this.selectedButton = null;
            return;
        }
        this.selectedButton = btn;
        if (this.selectedButton != null) {
            this.selectedButton.classList.add('selected');
        }
    }
}


/***/ }),

/***/ "./util/memory_storage.ts":
/*!********************************!*\
  !*** ./util/memory_storage.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MemoryStorage; });
class MemoryStorage extends Storage {
    constructor() {
        super();
        this.storage = {};
    }
    setItem(key, value) {
        this.storage[key] = String(value);
    }
    getItem(key) {
        const value = this.storage[key];
        if (typeof value === 'undefined')
            return null;
        return value;
    }
    removeItem(key) {
        delete this.storage[key];
    }
    get length() {
        return Object.keys(this.storage).length;
    }
    key(i) {
        const keys = Object.keys(this.storage);
        return keys[i];
    }
}


/***/ }),

/***/ "./util/pad_key_handler.ts":
/*!*********************************!*\
  !*** ./util/pad_key_handler.ts ***!
  \*********************************/
/*! exports provided: PadKeyHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PadKeyHandler", function() { return PadKeyHandler; });
const kKeyTable = {
    [37 /* LEFT */]: { no: 0, bit: 64 /* L */ },
    [39 /* RIGHT */]: { no: 0, bit: 128 /* R */ },
    [38 /* UP */]: { no: 0, bit: 16 /* U */ },
    [40 /* DOWN */]: { no: 0, bit: 32 /* D */ },
    [90 /* Z */]: { no: 0, bit: 2 /* B */ },
    [88 /* X */]: { no: 0, bit: 1 /* A */ },
    [32 /* SPACE */]: { no: 0, bit: 4 /* SELECT */ },
    [13 /* RETURN */]: { no: 0, bit: 8 /* START */ },
    [74 /* J */]: { no: 1, bit: 64 /* L */ },
    [76 /* L */]: { no: 1, bit: 128 /* R */ },
    [73 /* I */]: { no: 1, bit: 16 /* U */ },
    [75 /* K */]: { no: 1, bit: 32 /* D */ },
    [81 /* Q */]: { no: 1, bit: 2 /* B */ },
    [87 /* W */]: { no: 1, bit: 1 /* A */ },
    [79 /* O */]: { no: 1, bit: 4 /* SELECT */ },
    [80 /* P */]: { no: 1, bit: 8 /* START */ },
};
class PadKeyHandler {
    constructor() {
        this.controller = [0, 0];
    }
    onKeyDown(keyCode) {
        const c = kKeyTable[keyCode];
        if (!c)
            return;
        this.controller[c.no] |= c.bit;
    }
    onKeyUp(keyCode) {
        const c = kKeyTable[keyCode];
        if (!c)
            return;
        this.controller[c.no] &= ~c.bit;
    }
    getStatus(no) {
        return this.controller[no];
    }
}


/***/ }),

/***/ "./util/pubsub.ts":
/*!************************!*\
  !*** ./util/pubsub.ts ***!
  \************************/
/*! exports provided: Subject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subject", function() { return Subject; });
function compactArray(array) {
    let n = 0;
    for (let i = 0; i < array.length; ++i) {
        if (array[i] != null)
            array[n++] = array[i];
    }
    array.length = n;
}
class Subject {
    constructor() {
        this.subscribers = new Array();
        this.anyRemoved = false;
    }
    subscribe(callback) {
        this.subscribers.push(callback);
        return {
            unsubscribe: () => {
                const i = this.subscribers.indexOf(callback);
                if (i !== -1) {
                    this.subscribers[i] = null;
                    this.anyRemoved = true;
                }
            },
        };
    }
    next(arg) {
        for (let s of this.subscribers)
            if (s != null)
                s(arg);
        if (this.anyRemoved) {
            compactArray(this.subscribers);
            this.anyRemoved = false;
        }
    }
}


/***/ }),

/***/ "./util/scaler.ts":
/*!************************!*\
  !*** ./util/scaler.ts ***!
  \************************/
/*! exports provided: Scaler, IdentityScaler, ScanlineScaler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scaler", function() { return Scaler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentityScaler", function() { return IdentityScaler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanlineScaler", function() { return ScanlineScaler; });
/* harmony import */ var _util_dom_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/dom_util */ "./util/dom_util.ts");

const WIDTH = 256;
const HEIGHT = 240;
function createCanvas(width, height) {
    const canvas = document.createElement('canvas');
    canvas.className = 'full-size';
    canvas.width = width;
    canvas.height = height;
    _util_dom_util__WEBPACK_IMPORTED_MODULE_0__["default"].setStyles(canvas, {
        display: 'block',
    });
    _util_dom_util__WEBPACK_IMPORTED_MODULE_0__["default"].clearCanvas(canvas);
    return canvas;
}
class Scaler {
    getCanvas() {
        return this.canvas;
    }
    reset() {
        _util_dom_util__WEBPACK_IMPORTED_MODULE_0__["default"].clearCanvas(this.canvas);
    }
}
class IdentityScaler extends Scaler {
    constructor() {
        super();
        this.canvas = createCanvas(WIDTH, HEIGHT);
        this.context = _util_dom_util__WEBPACK_IMPORTED_MODULE_0__["default"].getCanvasContext2d(this.canvas);
        this.imageData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
        this.canvas.classList.add('pixelated');
    }
    render(nes) {
        nes.render(this.imageData.data);
        this.context.putImageData(this.imageData, 0, 0);
    }
}
class ScanlineScaler extends Scaler {
    constructor() {
        super();
        this.canvas = createCanvas(WIDTH, HEIGHT * 2);
        this.context = _util_dom_util__WEBPACK_IMPORTED_MODULE_0__["default"].getCanvasContext2d(this.canvas);
        this.imageData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
        this.orgImageData = new ImageData(WIDTH, HEIGHT);
        for (let i = 0, n = WIDTH * HEIGHT; i < n; ++i) {
            this.orgImageData[i * 4 + 0] = 0;
            this.orgImageData[i * 4 + 1] = 0;
            this.orgImageData[i * 4 + 2] = 0;
            this.orgImageData[i * 4 + 3] = 255;
        }
    }
    render(nes) {
        nes.render(this.orgImageData.data);
        // Copy per scanline
        const src = this.orgImageData.data;
        const dst = this.imageData.data;
        for (let y = 0; y < HEIGHT; ++y) {
            // Even line: original color
            let si = y * (WIDTH * 4);
            let di = si * 2;
            for (let x = 0; x < WIDTH; ++x) {
                dst[di + 0] = src[si + 0]; // R
                dst[di + 1] = src[si + 1]; // G
                dst[di + 2] = src[si + 2]; // B
                dst[di + 3] = 255; // A
                si += 4;
                di += 4;
            }
            // Odd line: half color
            si = y * (WIDTH * 4);
            di = si * 2 + WIDTH * 4;
            for (let x = 0; x < WIDTH; ++x) {
                dst[di + 0] = src[si + 0] >> 1; // R
                dst[di + 1] = src[si + 1] >> 1; // G
                dst[di + 2] = src[si + 2] >> 1; // B
                dst[di + 3] = 255; // A
                si += 4;
                di += 4;
            }
        }
        this.context.putImageData(this.imageData, 0, 0);
    }
}


/***/ }),

/***/ "./util/storage_util.ts":
/*!******************************!*\
  !*** ./util/storage_util.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StorageUtil; });
/* harmony import */ var _memory_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./memory_storage */ "./util/memory_storage.ts");
// Local storage

let storage = window.localStorage;
let keyPrefix = '';
// Set up.
if (storage == null) {
    try {
        if ('localStorage' in window && window.localStorage != null) {
            storage = window.localStorage;
        }
    }
    catch (e) {
        // If we cannot use local storage, then use memory storage.
    }
    if (storage == null)
        storage = new _memory_storage__WEBPACK_IMPORTED_MODULE_0__["default"]();
}
// Get key.
function getKey(key) {
    return `${keyPrefix}${key}`;
}
class StorageUtil {
    // Set key prefix.
    static setKeyPrefix(prefix) {
        keyPrefix = prefix;
    }
    // Get string value.
    static get(key, defaultValue) {
        const k = getKey(key);
        return storage.getItem(k) || defaultValue;
    }
    // Get int value.
    static getInt(key, defaultValue) {
        const k = getKey(key);
        const item = storage.getItem(k);
        if (item == null)
            return defaultValue;
        const value = parseInt(item, 10);
        if (isNaN(value))
            return defaultValue;
        return value;
    }
    // Get float value.
    static getFloat(key, defaultValue) {
        const k = getKey(key);
        const item = storage.getItem(k);
        if (item == null)
            return defaultValue;
        const value = parseFloat(item);
        if (isNaN(value))
            return defaultValue;
        return value;
    }
    // Get bool value.
    static getBool(key, defaultValue) {
        const k = getKey(key);
        const value = storage.getItem(k);
        if (value === 'true')
            return true;
        if (value === 'false')
            return false;
        return defaultValue;
    }
    // Get object value.
    static getObject(key, defaultValue) {
        const k = getKey(key);
        const value = storage.getItem(k);
        try {
            if (value != null)
                return JSON.parse(value);
        }
        catch (e) {
            console.error(e);
        }
        return defaultValue;
    }
    // Put string value.
    static put(key, value) {
        const k = getKey(key);
        storage.setItem(k, value);
        return true;
    }
    // Put object value.
    static putObject(key, obj) {
        const k = getKey(key);
        storage.setItem(k, JSON.stringify(obj));
        return true;
    }
}


/***/ }),

/***/ "./util/util.ts":
/*!**********************!*\
  !*** ./util/util.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Util; });
const _btoa = typeof btoa !== 'undefined' ? btoa : (function (str) {
    const buffer = (str instanceof Buffer) ? str : Buffer.from(str.toString(), 'binary');
    return buffer.toString('base64');
});
const _atob = typeof atob !== 'undefined' ? atob : (function (str) {
    return new Buffer(str, 'base64').toString('binary');
});
class Util {
    static hex(x, order = 2) {
        const s = x.toString(16);
        const dif = s.length - order;
        if (dif > 0)
            return s.substring(dif);
        if (dif === 0)
            return s;
        const zeros = '0000000';
        return zeros.substring(zeros.length + dif) + s;
    }
    static clamp(x, min, max) {
        return x < min ? min : x > max ? max : x;
    }
    static getExt(fileName) {
        const index = fileName.lastIndexOf('.');
        if (index >= 0)
            return fileName.slice(index + 1);
        return '';
    }
    static convertUint8ArrayToBase64String(src) {
        const s = Array.from(src).map(x => String.fromCharCode(x)).join('');
        return _btoa(s);
    }
    static convertBase64StringToUint8Array(src) {
        const decoded = _atob(src);
        const array = new Array(decoded.length);
        for (let i = 0; i < decoded.length; ++i)
            array[i] = decoded.charCodeAt(i);
        return new Uint8Array(array);
    }
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/buffer/index.js */ "../node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./wnd/window_manager.ts":
/*!*******************************!*\
  !*** ./wnd/window_manager.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WindowManager; });
/* harmony import */ var _util_dom_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/dom_util */ "./util/dom_util.ts");
/* harmony import */ var _util_gamepad_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/gamepad_manager */ "./util/gamepad_manager.ts");
/* harmony import */ var _util_pad_key_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/pad_key_handler */ "./util/pad_key_handler.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



const BASE_PRIORITY = 100;
function setWindowZIndex(wnd, i, n) {
    wnd.getRootNode().style.zIndex = String(BASE_PRIORITY + (n - 1 - i));
}
class WindowManager {
    constructor(root) {
        this.root = root;
        this.windows = [];
        this.padKeyHandler = new _util_pad_key_handler__WEBPACK_IMPORTED_MODULE_2__["PadKeyHandler"]();
        this.pressingKeys = {};
        this.onKeyDown = (event) => {
            if (event.ctrlKey) { // Ctrl+W: Quit
                if (event.keyCode === 87 /* W */) {
                    if (this.windows.length > 0)
                        this.windows[0].close();
                    return;
                }
            }
            if (event.ctrlKey || event.altKey || event.metaKey)
                return;
            event.preventDefault();
            this.padKeyHandler.onKeyDown(event.keyCode);
            this.pressingKeys[event.keyCode] = true;
        };
        this.onKeyUp = (event) => {
            event.preventDefault();
            this.padKeyHandler.onKeyUp(event.keyCode);
            this.pressingKeys[event.keyCode] = false;
        };
        this.root.addEventListener('keydown', this.onKeyDown);
        this.root.addEventListener('keyup', this.onKeyUp);
        this.root.focus();
    }
    getPadStatus(wnd, i) {
        if (!wnd.isTop())
            return 0;
        return this.padKeyHandler.getStatus(i) | _util_gamepad_manager__WEBPACK_IMPORTED_MODULE_1__["GamepadManager"].getState(i);
    }
    getKeyPressing(wnd, keyCode) {
        return wnd.isTop() && this.pressingKeys[keyCode];
    }
    add(wnd) {
        this.windows.unshift(wnd);
        this.root.appendChild(wnd.getRootNode());
        this.updateWindowPriorities();
    }
    remove(wnd) {
        this.removeWnd(wnd);
        const elem = wnd.getRootNode();
        if (elem != null && elem.parentNode != null)
            elem.parentNode.removeChild(elem);
    }
    showSnackbar(message, option = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const wait = option.wait || 3000;
            const type = option.type || 'danger';
            const div = document.createElement('div');
            div.className = 'snackbar-container';
            div.style.zIndex = '10000';
            const box = document.createElement('div');
            box.className = `snackbar-box ${type}`;
            div.appendChild(box);
            const text = document.createTextNode(message);
            box.appendChild(text);
            this.root.appendChild(div);
            yield _util_dom_util__WEBPACK_IMPORTED_MODULE_0__["default"].timeout(20); // Dirty hack.
            div.style.top = '8px';
            yield _util_dom_util__WEBPACK_IMPORTED_MODULE_0__["default"].timeout(wait);
            div.style.top = '-32px';
            yield _util_dom_util__WEBPACK_IMPORTED_MODULE_0__["default"].timeout(500);
            this.root.removeChild(div);
        });
    }
    moveToTop(wnd) {
        const n = this.windows.length;
        if (n > 0 && this.windows[0] === wnd) // Already on the top
            return;
        let prev = wnd;
        for (let i = 0; i < n; ++i) {
            const tmp = this.windows[i];
            this.windows[i] = prev;
            if (tmp === wnd)
                break;
            prev = tmp;
        }
        this.updateWindowPriorities();
    }
    setFullscreen(element, callback) {
        const kList = [
            { fullscreen: 'requestFullscreen', change: 'fullscreenchange' },
            { fullscreen: 'webkitRequestFullScreen', change: 'webkitfullscreenchange' },
            { fullscreen: 'mozRequestFullScreen', change: 'mozfullscreenchange' },
            { fullscreen: 'msRequestFullscreen', change: 'MSFullscreenChange' },
        ];
        for (let i = 0; i < kList.length; ++i) {
            if (element[kList[i].fullscreen]) {
                element[kList[i].fullscreen]();
                const changeEvent = kList[i].change;
                const exitHandler = () => {
                    const isFullscreen = !!(document.fullScreen || document.mozFullScreen ||
                        document.webkitIsFullScreen);
                    if (isFullscreen) {
                        element.setAttribute('tabindex', '1');
                        element.style.cursor = 'none';
                        element.addEventListener('keydown', this.onKeyDown);
                        element.addEventListener('keyup', this.onKeyUp);
                    }
                    else {
                        element.removeAttribute('tabindex');
                        element.style.cursor = '';
                        element.removeEventListener('keydown', this.onKeyDown);
                        element.removeEventListener('keyup', this.onKeyUp);
                    }
                    if (callback)
                        callback(isFullscreen);
                    if (isFullscreen) {
                        element.focus();
                    }
                    else { // End
                        document.removeEventListener(changeEvent, exitHandler, false);
                        this.root.focus();
                    }
                };
                document.addEventListener(changeEvent, exitHandler, false);
                return true;
            }
        }
        return false;
    }
    removeWnd(wnd) {
        const index = this.windows.indexOf(wnd);
        if (index < 0)
            return;
        this.windows.splice(index, 1);
        this.updateWindowPriorities();
    }
    updateWindowPriorities() {
        const n = this.windows.length;
        for (let i = 0; i < n; ++i) {
            let wnd = this.windows[i];
            wnd.setTop(i === 0);
            setWindowZIndex(wnd, i, n);
        }
    }
}


/***/ }),

/***/ "./wnd/wnd.ts":
/*!********************!*\
  !*** ./wnd/wnd.ts ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Wnd; });
/* harmony import */ var _util_dom_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/dom_util */ "./util/dom_util.ts");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/util */ "./util/util.ts");


const Z_MENUBAR = 1000;
const Z_MENU_SUBITEM = Z_MENUBAR + 1;
function getOffsetRect(parent, target) {
    const prect = parent.getBoundingClientRect();
    const trect = target.getBoundingClientRect();
    return {
        left: trect.left - prect.left,
        top: trect.top - prect.top,
        right: trect.right - prect.left,
        bottom: trect.bottom - prect.top,
    };
}
function createHorizontalSplitter(parent, upperHeight) {
    const upper = document.createElement('div');
    upper.className = 'upper';
    _util_dom_util__WEBPACK_IMPORTED_MODULE_0__["default"].setStyles(upper, {
        position: 'absolute',
        overflow: 'hidden',
        left: 0,
        top: 0,
        right: 0,
        height: `${upperHeight}px`,
    });
    const lower = document.createElement('div');
    lower.className = 'lower';
    _util_dom_util__WEBPACK_IMPORTED_MODULE_0__["default"].setStyles(lower, {
        position: 'absolute',
        overflow: 'hidden',
        left: 0,
        bottom: 0,
        right: 0,
        top: `${upperHeight}px`,
    });
    parent.appendChild(upper);
    parent.appendChild(lower);
    return [upper, lower];
}
class Wnd {
    constructor(wndMgr, width, height, title) {
        this.wndMgr = wndMgr;
        this.clientMarginWidth = 0;
        this.clientMarginHeight = 0;
        this.bTop = false;
        this.callback = () => { };
        this.root = this.createRoot();
        this.root.className = 'wnd';
        this.root.style.position = 'absolute';
        const [upper, lower] = createHorizontalSplitter(this.root, Wnd.TITLEBAR_HEIGHT);
        this.clientMarginHeight += Wnd.TITLEBAR_HEIGHT;
        this.titleBar = this.createTitleBar(title);
        upper.appendChild(this.titleBar);
        this.contentHolder = lower;
        this.setClientSize(width, height);
    }
    setContent(content) {
        _util_dom_util__WEBPACK_IMPORTED_MODULE_0__["default"].removeAllChildren(this.contentHolder);
        this.contentHolder.appendChild(content);
        return this;
    }
    getContentHolder() {
        return this.contentHolder;
    }
    getRootElement() {
        return this.root;
    }
    setPos(x, y) {
        _util_dom_util__WEBPACK_IMPORTED_MODULE_0__["default"].setStyles(this.root, {
            left: `${x}px`,
            top: `${y}px`,
        });
        return this;
    }
    setTitle(title) {
        this.titleElem.innerText = title;
        return this;
    }
    setClientSize(width, height) {
        _util_dom_util__WEBPACK_IMPORTED_MODULE_0__["default"].setStyles(this.root, {
            width: `${width + this.clientMarginWidth}px`,
            height: `${height + this.clientMarginHeight}px`,
        });
        return this;
    }
    getWindowSize() {
        const width = parseInt(this.root.style.width || '-1', 10);
        const height = parseInt(this.root.style.height || '-1', 10);
        return { width, height };
    }
    setCallback(callback) {
        this.callback = callback;
        return this;
    }
    setFocus() {
        this.root.focus();
        return this;
    }
    isTop() {
        return this.bTop;
    }
    setTop(value) {
        this.bTop = value;
        if (value)
            this.root.classList.add('top');
        else
            this.root.classList.remove('top');
    }
    addMenuBar(menu) {
        const [upper, lower] = createHorizontalSplitter(this.root, Wnd.MENUBAR_HEIGHT);
        this.clientMarginHeight += Wnd.TITLEBAR_HEIGHT;
        this.contentHolder.appendChild(upper);
        this.contentHolder.appendChild(lower);
        this.menuBar = document.createElement('div');
        this.menuBar.className = 'menu-bar';
        this.menuBar.style.zIndex = String(Z_MENUBAR);
        menu.forEach((menuItem) => {
            const itemElem = document.createElement('div');
            itemElem.className = 'menu-item pull-left';
            itemElem.innerText = menuItem.label;
            itemElem.style.height = '100%';
            itemElem.addEventListener('click', (_event) => {
                if ('submenu' in menuItem) {
                    this.addSubmenu(menuItem, itemElem);
                    this.callback('openMenu');
                }
            });
            this.menuBar.appendChild(itemElem);
        });
        upper.appendChild(this.menuBar);
        this.contentHolder = lower;
        return this;
    }
    getRootNode() {
        return this.root;
    }
    close() {
        if (this.callback('close') === false)
            return; // Cancel close
        this.wndMgr.remove(this);
        // this.root = null
    }
    addResizeBox() {
        this.root.classList.add('resizable');
        const W = 8;
        const table = [
            {
                styleParams: { right: '-1px', bottom: '-1px', cursor: 'nwse-resize' },
                horz: 'right',
                vert: 'bottom',
            },
            {
                styleParams: { left: '-1px', bottom: '-1px', cursor: 'nesw-resize' },
                horz: 'left',
                vert: 'bottom',
            },
            {
                styleParams: { right: '-1px', top: '-1px', cursor: 'nesw-resize' },
                horz: 'right',
                vert: 'top',
            },
            {
                styleParams: { left: '-1px', top: '-1px', cursor: 'nwse-resize' },
                horz: 'left',
                vert: 'top',
            },
        ];
        const MIN_WIDTH = 64;
        const MIN_HEIGHT = 24 + Wnd.TITLEBAR_HEIGHT;
        table.forEach(param => {
            const resizeBox = document.createElement('div');
            resizeBox.style.position = 'absolute';
            Object.keys(param.styleParams).forEach((key) => {
                resizeBox.style[key] = param.styleParams[key];
            });
            _util_dom_util__WEBPACK_IMPORTED_MODULE_0__["default"].setStyles(resizeBox, {
                width: `${W}px`,
                height: `${W}px`,
                zIndex: '100',
            });
            resizeBox.addEventListener('mousedown', (event) => {
                event.stopPropagation();
                event.preventDefault();
                const [mx, my] = _util_dom_util__WEBPACK_IMPORTED_MODULE_0__["default"].getMousePosIn(event, resizeBox);
                const dragOfsX = param.horz === 'left' ? -mx : W - mx;
                const dragOfsY = param.vert === 'top' ? -my : W - my;
                const rect = this.root.getBoundingClientRect();
                const prect = this.root.parentNode.getBoundingClientRect();
                const box = {
                    left: rect.left - prect.left,
                    top: rect.top - prect.top,
                    right: rect.right - prect.left,
                    bottom: rect.bottom - prect.top,
                };
                _util_dom_util__WEBPACK_IMPORTED_MODULE_0__["default"].setMouseDragListener({
                    move: (event2) => {
                        let [x, y] = _util_dom_util__WEBPACK_IMPORTED_MODULE_0__["default"].getMousePosIn(event2, this.root.parentNode);
                        x = _util_util__WEBPACK_IMPORTED_MODULE_1__["default"].clamp(x, -dragOfsX, window.innerWidth - dragOfsX);
                        y = _util_util__WEBPACK_IMPORTED_MODULE_1__["default"].clamp(y, -dragOfsY, window.innerHeight - dragOfsY);
                        box[param.horz] = x + dragOfsX;
                        box[param.vert] = y + dragOfsY;
                        let width = box.right - box.left - 2; // For border width.
                        let height = box.bottom - box.top - 2;
                        if (width < MIN_WIDTH) {
                            box[param.horz] -= (MIN_WIDTH - width) * (param.horz === 'left' ? 1 : -1);
                        }
                        if (height < MIN_HEIGHT) {
                            box[param.vert] -= (MIN_HEIGHT - height) * (param.vert === 'top' ? 1 : -1);
                        }
                        _util_dom_util__WEBPACK_IMPORTED_MODULE_0__["default"].setStyles(this.root, {
                            width: `${box.right - box.left - 2}px`,
                            height: `${box.bottom - box.top - 2}px`,
                            left: `${box.left}px`,
                            top: `${box.top}px`,
                        });
                        this.callback('resize', width, height - Wnd.TITLEBAR_HEIGHT);
                    },
                    up: (_event2) => {
                        this.root.style['transition-property'] = null;
                    },
                });
                this.wndMgr.moveToTop(this);
                this.root.style['transition-property'] = 'none'; // To change size immediately.
            });
            this.root.appendChild(resizeBox);
        });
    }
    createRoot() {
        const root = document.createElement('div');
        root.addEventListener('mousedown', (event) => {
            event.stopPropagation();
            this.wndMgr.moveToTop(this);
            return false;
        });
        return root;
    }
    createTitleBar(title) {
        const titleBar = document.createElement('div');
        titleBar.className = 'title-bar clearfix';
        this.addTitleButton(titleBar, 'close', () => {
            this.close();
        });
        this.titleElem = this.addTitle(titleBar, title);
        titleBar.addEventListener('mousedown', (event) => {
            if (event.button !== 0)
                return false;
            // Move window position with dragging.
            event.preventDefault();
            let [mx, my] = _util_dom_util__WEBPACK_IMPORTED_MODULE_0__["default"].getMousePosIn(event, this.root);
            const dragOfsX = -mx;
            const dragOfsY = -my;
            const winSize = this.getWindowSize();
            _util_dom_util__WEBPACK_IMPORTED_MODULE_0__["default"].setMouseDragListener({
                move: (event2) => {
                    let [x, y] = _util_dom_util__WEBPACK_IMPORTED_MODULE_0__["default"].getMousePosIn(event2, this.root.parentNode);
                    x = _util_util__WEBPACK_IMPORTED_MODULE_1__["default"].clamp(x, -dragOfsX, window.innerWidth - winSize.width - dragOfsX);
                    y = _util_util__WEBPACK_IMPORTED_MODULE_1__["default"].clamp(y, -dragOfsY, window.innerHeight - winSize.height - dragOfsY);
                    _util_dom_util__WEBPACK_IMPORTED_MODULE_0__["default"].setStyles(this.root, {
                        left: `${x + dragOfsX}px`,
                        top: `${y + dragOfsY}px`,
                    });
                },
            });
            return true;
        });
        return titleBar;
    }
    addTitleButton(parent, className, clickCallback) {
        const button = document.createElement('div');
        button.className = `${className} btn`;
        button.addEventListener('click', clickCallback);
        button.addEventListener('mousedown', (event) => {
            event.preventDefault();
            event.stopPropagation();
        });
        parent.appendChild(button);
        return button;
    }
    addTitle(parent, title) {
        const titleElem = document.createElement('div');
        titleElem.className = 'title';
        titleElem.appendChild(document.createTextNode(title));
        parent.appendChild(titleElem);
        return titleElem;
    }
    addSubmenu(menuItem, itemElem) {
        const subItemHolder = document.createElement('div');
        subItemHolder.className = 'menu-subitem-holder';
        subItemHolder.style.zIndex = String(Z_MENU_SUBITEM);
        menuItem.submenu.forEach((submenuItem) => {
            const subItemElem = document.createElement('div');
            subItemElem.className = 'menu-item';
            subItemElem.innerText = submenuItem.label;
            subItemElem.addEventListener('click', (event) => {
                event.stopPropagation();
                if (submenuItem.click)
                    submenuItem.click();
            });
            subItemHolder.appendChild(subItemElem);
        });
        this.root.appendChild(subItemHolder);
        const rect = getOffsetRect(this.root, itemElem);
        _util_dom_util__WEBPACK_IMPORTED_MODULE_0__["default"].setStyles(subItemHolder, {
            left: `${rect.left - 1}px`,
            top: `${rect.bottom}px`,
        });
        // To handle earlier than menu open, pass useCapture=true
        const onClickOther = (_event) => {
            if (subItemHolder.parentNode != null)
                subItemHolder.parentNode.removeChild(subItemHolder);
            document.removeEventListener('click', onClickOther, true);
            this.callback('closeMenu');
        };
        document.addEventListener('click', onClickOther, true);
    }
}
Wnd.TITLEBAR_HEIGHT = 12;
Wnd.MENUBAR_HEIGHT = 12;


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
//# sourceMappingURL=main.map
