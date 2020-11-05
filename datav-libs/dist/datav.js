(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('vue')) :
  typeof define === 'function' && define.amd ? define(['vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.datav = factory(global.vue));
}(this, (function (vue) { 'use strict';

  var script = {
    name: 'TestComponent',
    setup: function setup() {
      var message = 'hello world';
      return {
        message: message
      };
    }
  };

  var _withId = /*#__PURE__*/vue.withScopeId("data-v-07bdddea");

  vue.pushScopeId("data-v-07bdddea");

  var _hoisted_1 = {
    "class": "test"
  };

  vue.popScopeId();

  var render = /*#__PURE__*/_withId(function render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createBlock("div", _hoisted_1, vue.toDisplayString($setup.message), 1
    /* TEXT */
    );
  });

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z = ".test[data-v-07bdddea] {\n  color: red;\n}";
  styleInject(css_248z);

  script.render = render;
  script.__scopeId = "data-v-07bdddea";
  script.__file = "src/Test.vue";

  var name = "datav-libs";
  var description = "datav components library";
  var version = "1.0.0";
  var main = "index.js";
  var scripts = {
  	dev: "rollup -wc rollup.config.dev.js",
  	build: "rollup -c rollup.config.dev.js",
  	"build:prod": "rollup -c rollup.config.prod.js"
  };
  var author = "ynzy <758922096@qq.com>";
  var license = "MIT";
  var devDependencies = {
  	"@babel/core": "^7.12.3",
  	"@babel/plugin-transform-flow-strip-types": "^7.12.1",
  	"@babel/preset-env": "^7.12.1",
  	"@rollup/plugin-buble": "^0.21.3",
  	"@vue/compiler-sfc": "^3.0.2",
  	rollup: "^2.33.1",
  	"rollup-plugin-babel": "^4.4.0",
  	"rollup-plugin-commonjs": "^10.1.0",
  	"rollup-plugin-json": "^4.0.0",
  	"rollup-plugin-node-resolve": "^5.2.0",
  	"rollup-plugin-postcss": "^3.1.8",
  	"rollup-plugin-replace": "^2.2.0",
  	"rollup-plugin-terser": "^7.0.2",
  	"rollup-plugin-vue": "^6.0.0-beta.11"
  };
  var dependencies = {
  	"sam-test-data": "0.0.5",
  	sass: "^1.29.0"
  };
  var json = {
  	name: name,
  	description: description,
  	version: version,
  	main: main,
  	scripts: scripts,
  	author: author,
  	license: license,
  	devDependencies: devDependencies,
  	dependencies: dependencies
  };

  console.log(json);
  function index (Vue) {
    Vue.component(script.name, script);
  }

  return index;

})));
