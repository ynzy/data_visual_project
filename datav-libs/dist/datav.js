(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('vue')) :
  typeof define === 'function' && define.amd ? define(['vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.datav = factory(global.Vue));
}(this, (function (vue) { 'use strict';

  var script = {
    name: 'Test',
    data: function data() {
      return {};
    },
    methods: {},
    mounted: function mounted() {},
    components: {}
  };

  var _withId = /*#__PURE__*/vue.withScopeId("data-v-2d356c94");

  var render = /*#__PURE__*/_withId(function render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createBlock("div", null, "hello world 1");
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

  var css_248z = "@charset \"UTF-8\";\n/* @import url(); 引入css类 */";
  styleInject(css_248z);

  script.render = render;
  script.__scopeId = "data-v-2d356c94";
  script.__file = "src/component/Test/Test.vue";

  script.install = function (Vue) {
    Vue.component(script.name, script);
  };

  var script$1 = {
    name: 'Test2',
    data: function data() {
      return {};
    },
    methods: {},
    mounted: function mounted() {},
    components: {}
  };

  var _withId$1 = /*#__PURE__*/vue.withScopeId("data-v-451f65d4");

  var render$1 = /*#__PURE__*/_withId$1(function render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createBlock("div", null, "hello world 2");
  });

  var css_248z$1 = "@charset \"UTF-8\";\n/* @import url(); 引入css类 */";
  styleInject(css_248z$1);

  script$1.render = render$1;
  script$1.__scopeId = "data-v-451f65d4";
  script$1.__file = "src/component/Test2/Test2.vue";

  script$1.install = function (Vue) {
    Vue.component(script$1.name, script$1);
  };

  var components = [script, script$1]; // will install the plugin only once

  var install = function install(Vue) {
    components.forEach(function (component) {
      Vue.component(component.name, component);
    });
  };

  if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  } // To allow use as module (npm/webpack/etc.) export component


  var index = {
    install: install,
    Test: script,
    Test2: script$1
  };

  return index;

})));
