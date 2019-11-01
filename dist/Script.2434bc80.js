// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"Js/functions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Imprimir_Numero_Display = Imprimir_Numero_Display;
exports.Seleccionar_Operador = Seleccionar_Operador;
exports.Run_Calculo = Run_Calculo;
exports.Clear = Clear;
exports.Validar_Tecla = Validar_Tecla;
exports.Seleccion_Operacion = Seleccion_Operacion;
exports.Iluminar_Boton = Iluminar_Boton;
exports.Remover_Iluminacion = Remover_Iluminacion;
exports.Transformar_Operación_Numero = Transformar_Operación_Numero;
exports.Asignar_Valor = Asignar_Valor;
exports.Clear_Display = Clear_Display;
exports.Calculo = Calculo;
exports.Mostrar_Resultado_en_Display = Mostrar_Resultado_en_Display;
exports.Encadenar_Operacion = Encadenar_Operacion;

var _Script = require("./Script");

// Declaración de variables operacionales
var Operacion;
var Numero1 = 0;
var Numero2;
var Resultado; // Funciones principales del programa

function Imprimir_Numero_Display(Boton) {
  var numero = Boton.value;

  if (_Script.display.textContent === "0") {
    _Script.display.textContent = numero;
  } else {
    _Script.display.textContent += numero;
  }
}

;

function Seleccionar_Operador(Boton) {
  Asignar_Valor();
  Iluminar_Boton(Boton);
  Seleccion_Operacion(Boton);
  Clear_Display();
}

;

function Run_Calculo(Boton) {
  Iluminar_Boton(Boton);
  Asignar_Valor();
  Calculo();
  Encadenar_Operacion();
  Mostrar_Resultado_en_Display();
}

;

function Imprimir_Punto(Boton) {
  var numero = Boton.value;

  if (_Script.display.textContent === "0") {} else {
    _Script.display.textContent += numero;
  }
}

;

function Clear() {
  _Script.display.textContent = 0;
  Numero1 = 0;
  Operacion;
}

;

function Validar_Tecla(Tecla) {
  switch (Tecla) {
    case 96:
    case 48:
      return Imprimir_Numero_Display(_Script.Boton_0);

    case 97:
    case 49:
      return Imprimir_Numero_Display(_Script.Boton_1);

    case 98:
    case 50:
      return Imprimir_Numero_Display(_Script.Boton_2);

    case 99:
    case 51:
      return Imprimir_Numero_Display(_Script.Boton_3);

    case 100:
    case 52:
      return Imprimir_Numero_Display(_Script.Boton_4);

    case 101:
    case 53:
      return Imprimir_Numero_Display(_Script.Boton_5);

    case 102:
    case 54:
      return Imprimir_Numero_Display(_Script.Boton_6);

    case 103:
    case 55:
      return Imprimir_Numero_Display(_Script.Boton_7);

    case 104:
    case 56:
      return Imprimir_Numero_Display(_Script.Boton_8);

    case 105:
    case 57:
      return Imprimir_Numero_Display(_Script.Boton_9);

    case 109:
    case 189:
      return Seleccionar_Operador(_Script.Boton_Resta);

    case 107:
    case 187:
      return Seleccionar_Operador(_Script.Boton_Suma);

    case 111:
      return Seleccionar_Operador(_Script.Boton_Division);

    case 106:
      return Seleccionar_Operador(_Script.Boton_Multiplicacion);

    case 13:
      return Run_Calculo(_Script.Boton_Igual);

    case 110:
    case 190:
      return Imprimir_Punto(_Script.Boton_Punto);

    case 8:
      return Clear();
  }
}

; // Funciones Secundarias

function Seleccion_Operacion(operacion) {
  Operacion = Transformar_Operación_Numero(operacion);
}

;

function Iluminar_Boton(Boton) {
  Boton.classList.add("Iluminacion");
  setTimeout(function () {
    return Remover_Iluminacion(Boton);
  }, 500);
}

;

function Remover_Iluminacion(Boton) {
  Boton.classList.remove("Iluminacion");
}

;

function Transformar_Operación_Numero(operacion) {
  switch (operacion) {
    case _Script.Boton_Division:
      return 1;

    case _Script.Boton_Multiplicacion:
      return 2;

    case _Script.Boton_Resta:
      return 3;

    case _Script.Boton_Suma:
      return 4;
  }
}

;

function Asignar_Valor() {
  if (Numero1 === 0) {
    Numero1 = Number(_Script.display.textContent);
  } else {
    Numero2 = Number(_Script.display.textContent);
  }
}

;

function Clear_Display() {
  _Script.display.textContent = 0;
}

;

function Calculo() {
  if (Operacion === 1) {
    return Resultado = Numero1 / Numero2;
  } else if (Operacion === 2) {
    return Resultado = Numero1 * Numero2;
  } else if (Operacion === 3) {
    return Resultado = Numero1 - Numero2;
  } else if (Operacion === 4) {
    return Resultado = Numero1 + Numero2;
  }
}

;

function Mostrar_Resultado_en_Display() {
  _Script.display.textContent = Resultado;
}

function Encadenar_Operacion() {
  Numero1 = Resultado;
}
},{"./Script":"Js/Script.js"}],"Js/Script.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Boton_Punto = exports.Boton_Igual = exports.Boton_Suma = exports.Boton_Resta = exports.Boton_Multiplicacion = exports.Boton_Division = exports.Boton_Borrar = exports.Boton_9 = exports.Boton_8 = exports.Boton_7 = exports.Boton_6 = exports.Boton_5 = exports.Boton_4 = exports.Boton_3 = exports.Boton_2 = exports.Boton_1 = exports.Boton_0 = exports.display = void 0;

var _functions = require("./functions");

// Selección de componentes
var display = document.getElementById("Display");
exports.display = display;
display.textContent = "0"; // Seleccion de Botones

var Boton_0 = document.getElementById("Boton-0");
exports.Boton_0 = Boton_0;
var Boton_1 = document.getElementById("Boton-1");
exports.Boton_1 = Boton_1;
var Boton_2 = document.getElementById("Boton-2");
exports.Boton_2 = Boton_2;
var Boton_3 = document.getElementById("Boton-3");
exports.Boton_3 = Boton_3;
var Boton_4 = document.getElementById("Boton-4");
exports.Boton_4 = Boton_4;
var Boton_5 = document.getElementById("Boton-5");
exports.Boton_5 = Boton_5;
var Boton_6 = document.getElementById("Boton-6");
exports.Boton_6 = Boton_6;
var Boton_7 = document.getElementById("Boton-7");
exports.Boton_7 = Boton_7;
var Boton_8 = document.getElementById("Boton-8");
exports.Boton_8 = Boton_8;
var Boton_9 = document.getElementById("Boton-9");
exports.Boton_9 = Boton_9;
var Boton_Borrar = document.getElementById("Boton-Borrar");
exports.Boton_Borrar = Boton_Borrar;
var Boton_Division = document.getElementById("Boton-Division");
exports.Boton_Division = Boton_Division;
var Boton_Multiplicacion = document.getElementById("Boton-Multiplicar");
exports.Boton_Multiplicacion = Boton_Multiplicacion;
var Boton_Resta = document.getElementById("Boton-Restar");
exports.Boton_Resta = Boton_Resta;
var Boton_Suma = document.getElementById("Boton-Suma");
exports.Boton_Suma = Boton_Suma;
var Boton_Igual = document.getElementById("Boton-Igual");
exports.Boton_Igual = Boton_Igual;
var Boton_Punto = document.getElementById("Boton-Punto"); // Declaración de variables operacionales

exports.Boton_Punto = Boton_Punto;
var Tecla_Pulsada; // Escuchar Eventos de mouse

Boton_0.addEventListener("click", function () {
  return (0, _functions.Imprimir_Numero_Display)(Boton_0);
});
Boton_1.addEventListener("click", function () {
  return (0, _functions.Imprimir_Numero_Display)(Boton_1);
});
Boton_2.addEventListener("click", function () {
  return (0, _functions.Imprimir_Numero_Display)(Boton_2);
});
Boton_3.addEventListener("click", function () {
  return (0, _functions.Imprimir_Numero_Display)(Boton_3);
});
Boton_4.addEventListener("click", function () {
  return (0, _functions.Imprimir_Numero_Display)(Boton_4);
});
Boton_5.addEventListener("click", function () {
  return (0, _functions.Imprimir_Numero_Display)(Boton_5);
});
Boton_6.addEventListener("click", function () {
  return (0, _functions.Imprimir_Numero_Display)(Boton_6);
});
Boton_7.addEventListener("click", function () {
  return (0, _functions.Imprimir_Numero_Display)(Boton_7);
});
Boton_8.addEventListener("click", function () {
  return (0, _functions.Imprimir_Numero_Display)(Boton_8);
});
Boton_9.addEventListener("click", function () {
  return (0, _functions.Imprimir_Numero_Display)(Boton_9);
});
Boton_Multiplicacion.addEventListener("click", function () {
  return (0, _functions.Seleccionar_Operador)(Boton_Multiplicacion);
});
Boton_Division.addEventListener("click", function () {
  return (0, _functions.Seleccionar_Operador)(Boton_Division);
});
Boton_Suma.addEventListener("click", function () {
  return (0, _functions.Seleccionar_Operador)(Boton_Suma);
});
Boton_Resta.addEventListener("click", function () {
  return (0, _functions.Seleccionar_Operador)(Boton_Resta);
});
Boton_Igual.addEventListener("click", function () {
  return (0, _functions.Run_Calculo)(Boton_Igual);
});
Boton_Borrar.addEventListener("click", function () {
  return (0, _functions.Clear)();
});
Boton_Punto.addEventListener("click", function () {
  return (0, _functions.Imprimir_Punto)(Boton_Punto);
}); // Escuchar Eventos de Teclado

window.addEventListener("keydown", function (event) {
  Tecla_Pulsada = event.keyCode;
  (0, _functions.Validar_Tecla)(Tecla_Pulsada);
});
},{"./functions":"Js/functions.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55694" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","Js/Script.js"], null)
//# sourceMappingURL=/Script.2434bc80.js.map