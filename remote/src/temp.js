var moduleMap = {
	"./counter": () => {return __webpack_require__.e("src_counter_js")
	.then(() => (() => ((__webpack_require__( "./src/counter.js")))));},

	"./reducer": () => {return __webpack_require__.e("src_reducers_js").then(() => (() => ((__webpack_require__(/*! ./src/reducers */ "./src/reducers.js")))));}};

	var get = (module, getScope) => {__webpack_require__.R = getScope;
		getScope = (__webpack_require__.o(moduleMap, module)? moduleMap[module](): Promise.resolve().then(() => {throw new Error(\'Module "\' + module + \'" does not exist in container.\');}));

	__webpack_require__.R = undefined;return getScope;

};

	var init = (shareScope, initScope) => {if (!__webpack_require__.S) return;var name = "default"var oldScope = __webpack_require__.S[name];if(oldScope && oldScope !== shareScope) throw new Error("Container initialization failed as it has already been initialized with a different share scope");

	__webpack_require__.S[name] = shareScope;return __webpack_require__.I(name, initScope);};
	// This exports getters to disallow
	modifications__webpack_require__.d(exports, {get: () => (get),init: () => (init)});
