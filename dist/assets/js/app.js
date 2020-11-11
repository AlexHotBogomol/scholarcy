"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e) {
  var t = {};

  function i(s) {
    if (t[s]) return t[s].exports;
    var r = t[s] = {
      i: s,
      l: !1,
      exports: {}
    };
    return e[s].call(r.exports, r, r.exports, i), r.l = !0, r.exports;
  }

  i.m = e, i.c = t, i.d = function (e, t, s) {
    i.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: s
    });
  }, i.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, i.t = function (e, t) {
    if (1 & t && (e = i(e)), 8 & t) return e;
    if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
    var s = Object.create(null);
    if (i.r(s), Object.defineProperty(s, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var r in e) {
      i.d(s, r, function (t) {
        return e[t];
      }.bind(null, r));
    }
    return s;
  }, i.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return i.d(t, "a", t), t;
  }, i.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, i.p = "", i(i.s = 1);
}([, function (e, t, i) {
  "use strict";

  function s(e) {
    return null !== e && "object" == _typeof(e) && "constructor" in e && e.constructor === Object;
  }

  function r(e, t) {
    void 0 === e && (e = {}), void 0 === t && (t = {}), Object.keys(t).forEach(function (i) {
      void 0 === e[i] ? e[i] = t[i] : s(t[i]) && s(e[i]) && Object.keys(t[i]).length > 0 && r(e[i], t[i]);
    });
  }

  i.r(t);
  var n = {
    body: {},
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    activeElement: {
      blur: function blur() {},
      nodeName: ""
    },
    querySelector: function querySelector() {
      return null;
    },
    querySelectorAll: function querySelectorAll() {
      return [];
    },
    getElementById: function getElementById() {
      return null;
    },
    createEvent: function createEvent() {
      return {
        initEvent: function initEvent() {}
      };
    },
    createElement: function createElement() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute: function setAttribute() {},
        getElementsByTagName: function getElementsByTagName() {
          return [];
        }
      };
    },
    createElementNS: function createElementNS() {
      return {};
    },
    importNode: function importNode() {
      return null;
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    }
  };

  function a() {
    var e = "undefined" != typeof document ? document : {};
    return r(e, n), e;
  }

  var o = {
    document: n,
    navigator: {
      userAgent: ""
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    },
    history: {
      replaceState: function replaceState() {},
      pushState: function pushState() {},
      go: function go() {},
      back: function back() {}
    },
    CustomEvent: function CustomEvent() {
      return this;
    },
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    getComputedStyle: function getComputedStyle() {
      return {
        getPropertyValue: function getPropertyValue() {
          return "";
        }
      };
    },
    Image: function Image() {},
    Date: function Date() {},
    screen: {},
    setTimeout: function setTimeout() {},
    clearTimeout: function clearTimeout() {},
    matchMedia: function matchMedia() {
      return {};
    },
    requestAnimationFrame: function requestAnimationFrame(e) {
      return "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0);
    },
    cancelAnimationFrame: function cancelAnimationFrame(e) {
      "undefined" != typeof setTimeout && clearTimeout(e);
    }
  };

  function l() {
    var e = "undefined" != typeof window ? window : {};
    return r(e, o), e;
  }

  function d(e) {
    return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
      return e.__proto__ || Object.getPrototypeOf(e);
    })(e);
  }

  function h(e, t) {
    return (h = Object.setPrototypeOf || function (e, t) {
      return e.__proto__ = t, e;
    })(e, t);
  }

  function u() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }

  function p(e, t, i) {
    return (p = u() ? Reflect.construct : function (e, t, i) {
      var s = [null];
      s.push.apply(s, t);
      var r = new (Function.bind.apply(e, s))();
      return i && h(r, i.prototype), r;
    }).apply(null, arguments);
  }

  function c(e) {
    var t = "function" == typeof Map ? new Map() : void 0;
    return (c = function c(e) {
      if (null === e || (i = e, -1 === Function.toString.call(i).indexOf("[native code]"))) return e;
      var i;
      if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");

      if (void 0 !== t) {
        if (t.has(e)) return t.get(e);
        t.set(e, s);
      }

      function s() {
        return p(e, arguments, d(this).constructor);
      }

      return s.prototype = Object.create(e.prototype, {
        constructor: {
          value: s,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), h(s, e);
    })(e);
  }

  var v = function (e) {
    var t, i;

    function s(t) {
      var i, s, r;
      return i = e.call.apply(e, [this].concat(t)) || this, s = function (e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }(i), r = s.__proto__, Object.defineProperty(s, "__proto__", {
        get: function get() {
          return r;
        },
        set: function set(e) {
          r.__proto__ = e;
        }
      }), i;
    }

    return i = e, (t = s).prototype = Object.create(i.prototype), t.prototype.constructor = t, t.__proto__ = i, s;
  }(c(Array));

  function f(e) {
    void 0 === e && (e = []);
    var t = [];
    return e.forEach(function (e) {
      Array.isArray(e) ? t.push.apply(t, f(e)) : t.push(e);
    }), t;
  }

  function m(e, t) {
    return Array.prototype.filter.call(e, t);
  }

  function g(e, t) {
    var i = l(),
        s = a(),
        r = [];
    if (!t && e instanceof v) return e;
    if (!e) return new v(r);

    if ("string" == typeof e) {
      var n = e.trim();

      if (n.indexOf("<") >= 0 && n.indexOf(">") >= 0) {
        var o = "div";
        0 === n.indexOf("<li") && (o = "ul"), 0 === n.indexOf("<tr") && (o = "tbody"), 0 !== n.indexOf("<td") && 0 !== n.indexOf("<th") || (o = "tr"), 0 === n.indexOf("<tbody") && (o = "table"), 0 === n.indexOf("<option") && (o = "select");
        var d = s.createElement(o);
        d.innerHTML = n;

        for (var h = 0; h < d.childNodes.length; h += 1) {
          r.push(d.childNodes[h]);
        }
      } else r = function (e, t) {
        if ("string" != typeof e) return [e];

        for (var i = [], s = t.querySelectorAll(e), r = 0; r < s.length; r += 1) {
          i.push(s[r]);
        }

        return i;
      }(e.trim(), t || s);
    } else if (e.nodeType || e === i || e === s) r.push(e);else if (Array.isArray(e)) {
      if (e instanceof v) return e;
      r = e;
    }

    return new v(function (e) {
      for (var t = [], i = 0; i < e.length; i += 1) {
        -1 === t.indexOf(e[i]) && t.push(e[i]);
      }

      return t;
    }(r));
  }

  g.fn = v.prototype;
  var C = "resize scroll".split(" ");

  function w(e) {
    return function () {
      for (var t = arguments.length, i = new Array(t), s = 0; s < t; s++) {
        i[s] = arguments[s];
      }

      if (void 0 === i[0]) {
        for (var r = 0; r < this.length; r += 1) {
          C.indexOf(e) < 0 && (e in this[r] ? this[r][e]() : g(this[r]).trigger(e));
        }

        return this;
      }

      return this.on.apply(this, [e].concat(i));
    };
  }

  w("click"), w("blur"), w("focus"), w("focusin"), w("focusout"), w("keyup"), w("keydown"), w("keypress"), w("submit"), w("change"), w("mousedown"), w("mousemove"), w("mouseup"), w("mouseenter"), w("mouseleave"), w("mouseout"), w("mouseover"), w("touchstart"), w("touchend"), w("touchmove"), w("resize"), w("scroll");
  var b = {
    addClass: function addClass() {
      for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) {
        t[i] = arguments[i];
      }

      var s = f(t.map(function (e) {
        return e.split(" ");
      }));
      return this.forEach(function (e) {
        var t;
        (t = e.classList).add.apply(t, s);
      }), this;
    },
    removeClass: function removeClass() {
      for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) {
        t[i] = arguments[i];
      }

      var s = f(t.map(function (e) {
        return e.split(" ");
      }));
      return this.forEach(function (e) {
        var t;
        (t = e.classList).remove.apply(t, s);
      }), this;
    },
    hasClass: function hasClass() {
      for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) {
        t[i] = arguments[i];
      }

      var s = f(t.map(function (e) {
        return e.split(" ");
      }));
      return m(this, function (e) {
        return s.filter(function (t) {
          return e.classList.contains(t);
        }).length > 0;
      }).length > 0;
    },
    toggleClass: function toggleClass() {
      for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) {
        t[i] = arguments[i];
      }

      var s = f(t.map(function (e) {
        return e.split(" ");
      }));
      this.forEach(function (e) {
        s.forEach(function (t) {
          e.classList.toggle(t);
        });
      });
    },
    attr: function attr(e, t) {
      if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;

      for (var i = 0; i < this.length; i += 1) {
        if (2 === arguments.length) this[i].setAttribute(e, t);else for (var s in e) {
          this[i][s] = e[s], this[i].setAttribute(s, e[s]);
        }
      }

      return this;
    },
    removeAttr: function removeAttr(e) {
      for (var t = 0; t < this.length; t += 1) {
        this[t].removeAttribute(e);
      }

      return this;
    },
    transform: function transform(e) {
      for (var t = 0; t < this.length; t += 1) {
        this[t].style.transform = e;
      }

      return this;
    },
    transition: function transition(e) {
      for (var t = 0; t < this.length; t += 1) {
        this[t].style.transitionDuration = "string" != typeof e ? e + "ms" : e;
      }

      return this;
    },
    on: function on() {
      for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) {
        t[i] = arguments[i];
      }

      var s = t[0],
          r = t[1],
          n = t[2],
          a = t[3];

      function o(e) {
        var t = e.target;

        if (t) {
          var i = e.target.dom7EventData || [];
          if (i.indexOf(e) < 0 && i.unshift(e), g(t).is(r)) n.apply(t, i);else for (var s = g(t).parents(), a = 0; a < s.length; a += 1) {
            g(s[a]).is(r) && n.apply(s[a], i);
          }
        }
      }

      function l(e) {
        var t = e && e.target && e.target.dom7EventData || [];
        t.indexOf(e) < 0 && t.unshift(e), n.apply(this, t);
      }

      "function" == typeof t[1] && (s = t[0], n = t[1], a = t[2], r = void 0), a || (a = !1);

      for (var d, h = s.split(" "), u = 0; u < this.length; u += 1) {
        var p = this[u];
        if (r) for (d = 0; d < h.length; d += 1) {
          var c = h[d];
          p.dom7LiveListeners || (p.dom7LiveListeners = {}), p.dom7LiveListeners[c] || (p.dom7LiveListeners[c] = []), p.dom7LiveListeners[c].push({
            listener: n,
            proxyListener: o
          }), p.addEventListener(c, o, a);
        } else for (d = 0; d < h.length; d += 1) {
          var v = h[d];
          p.dom7Listeners || (p.dom7Listeners = {}), p.dom7Listeners[v] || (p.dom7Listeners[v] = []), p.dom7Listeners[v].push({
            listener: n,
            proxyListener: l
          }), p.addEventListener(v, l, a);
        }
      }

      return this;
    },
    off: function off() {
      for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) {
        t[i] = arguments[i];
      }

      var s = t[0],
          r = t[1],
          n = t[2],
          a = t[3];
      "function" == typeof t[1] && (s = t[0], n = t[1], a = t[2], r = void 0), a || (a = !1);

      for (var o = s.split(" "), l = 0; l < o.length; l += 1) {
        for (var d = o[l], h = 0; h < this.length; h += 1) {
          var u = this[h],
              p = void 0;
          if (!r && u.dom7Listeners ? p = u.dom7Listeners[d] : r && u.dom7LiveListeners && (p = u.dom7LiveListeners[d]), p && p.length) for (var c = p.length - 1; c >= 0; c -= 1) {
            var v = p[c];
            n && v.listener === n || n && v.listener && v.listener.dom7proxy && v.listener.dom7proxy === n ? (u.removeEventListener(d, v.proxyListener, a), p.splice(c, 1)) : n || (u.removeEventListener(d, v.proxyListener, a), p.splice(c, 1));
          }
        }
      }

      return this;
    },
    trigger: function trigger() {
      for (var e = l(), t = arguments.length, i = new Array(t), s = 0; s < t; s++) {
        i[s] = arguments[s];
      }

      for (var r = i[0].split(" "), n = i[1], a = 0; a < r.length; a += 1) {
        for (var o = r[a], d = 0; d < this.length; d += 1) {
          var h = this[d];

          if (e.CustomEvent) {
            var u = new e.CustomEvent(o, {
              detail: n,
              bubbles: !0,
              cancelable: !0
            });
            h.dom7EventData = i.filter(function (e, t) {
              return t > 0;
            }), h.dispatchEvent(u), h.dom7EventData = [], delete h.dom7EventData;
          }
        }
      }

      return this;
    },
    transitionEnd: function transitionEnd(e) {
      var t = this;
      return e && t.on("transitionend", function i(s) {
        s.target === this && (e.call(this, s), t.off("transitionend", i));
      }), this;
    },
    outerWidth: function outerWidth(e) {
      if (this.length > 0) {
        if (e) {
          var t = this.styles();
          return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"));
        }

        return this[0].offsetWidth;
      }

      return null;
    },
    outerHeight: function outerHeight(e) {
      if (this.length > 0) {
        if (e) {
          var t = this.styles();
          return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"));
        }

        return this[0].offsetHeight;
      }

      return null;
    },
    styles: function styles() {
      var e = l();
      return this[0] ? e.getComputedStyle(this[0], null) : {};
    },
    offset: function offset() {
      if (this.length > 0) {
        var e = l(),
            t = a(),
            i = this[0],
            s = i.getBoundingClientRect(),
            r = t.body,
            n = i.clientTop || r.clientTop || 0,
            o = i.clientLeft || r.clientLeft || 0,
            d = i === e ? e.scrollY : i.scrollTop,
            h = i === e ? e.scrollX : i.scrollLeft;
        return {
          top: s.top + d - n,
          left: s.left + h - o
        };
      }

      return null;
    },
    css: function css(e, t) {
      var i,
          s = l();

      if (1 === arguments.length) {
        if ("string" != typeof e) {
          for (i = 0; i < this.length; i += 1) {
            for (var r in e) {
              this[i].style[r] = e[r];
            }
          }

          return this;
        }

        if (this[0]) return s.getComputedStyle(this[0], null).getPropertyValue(e);
      }

      if (2 === arguments.length && "string" == typeof e) {
        for (i = 0; i < this.length; i += 1) {
          this[i].style[e] = t;
        }

        return this;
      }

      return this;
    },
    each: function each(e) {
      return e ? (this.forEach(function (t, i) {
        e.apply(t, [t, i]);
      }), this) : this;
    },
    html: function html(e) {
      if (void 0 === e) return this[0] ? this[0].innerHTML : null;

      for (var t = 0; t < this.length; t += 1) {
        this[t].innerHTML = e;
      }

      return this;
    },
    text: function text(e) {
      if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;

      for (var t = 0; t < this.length; t += 1) {
        this[t].textContent = e;
      }

      return this;
    },
    is: function is(e) {
      var t,
          i,
          s = l(),
          r = a(),
          n = this[0];
      if (!n || void 0 === e) return !1;

      if ("string" == typeof e) {
        if (n.matches) return n.matches(e);
        if (n.webkitMatchesSelector) return n.webkitMatchesSelector(e);
        if (n.msMatchesSelector) return n.msMatchesSelector(e);

        for (t = g(e), i = 0; i < t.length; i += 1) {
          if (t[i] === n) return !0;
        }

        return !1;
      }

      if (e === r) return n === r;
      if (e === s) return n === s;

      if (e.nodeType || e instanceof v) {
        for (t = e.nodeType ? [e] : e, i = 0; i < t.length; i += 1) {
          if (t[i] === n) return !0;
        }

        return !1;
      }

      return !1;
    },
    index: function index() {
      var e,
          t = this[0];

      if (t) {
        for (e = 0; null !== (t = t.previousSibling);) {
          1 === t.nodeType && (e += 1);
        }

        return e;
      }
    },
    eq: function eq(e) {
      if (void 0 === e) return this;
      var t = this.length;
      if (e > t - 1) return g([]);

      if (e < 0) {
        var i = t + e;
        return g(i < 0 ? [] : [this[i]]);
      }

      return g([this[e]]);
    },
    append: function append() {
      for (var e, t = a(), i = 0; i < arguments.length; i += 1) {
        e = i < 0 || arguments.length <= i ? void 0 : arguments[i];

        for (var s = 0; s < this.length; s += 1) {
          if ("string" == typeof e) {
            var r = t.createElement("div");

            for (r.innerHTML = e; r.firstChild;) {
              this[s].appendChild(r.firstChild);
            }
          } else if (e instanceof v) for (var n = 0; n < e.length; n += 1) {
            this[s].appendChild(e[n]);
          } else this[s].appendChild(e);
        }
      }

      return this;
    },
    prepend: function prepend(e) {
      var t,
          i,
          s = a();

      for (t = 0; t < this.length; t += 1) {
        if ("string" == typeof e) {
          var r = s.createElement("div");

          for (r.innerHTML = e, i = r.childNodes.length - 1; i >= 0; i -= 1) {
            this[t].insertBefore(r.childNodes[i], this[t].childNodes[0]);
          }
        } else if (e instanceof v) for (i = 0; i < e.length; i += 1) {
          this[t].insertBefore(e[i], this[t].childNodes[0]);
        } else this[t].insertBefore(e, this[t].childNodes[0]);
      }

      return this;
    },
    next: function next(e) {
      return this.length > 0 ? e ? this[0].nextElementSibling && g(this[0].nextElementSibling).is(e) ? g([this[0].nextElementSibling]) : g([]) : this[0].nextElementSibling ? g([this[0].nextElementSibling]) : g([]) : g([]);
    },
    nextAll: function nextAll(e) {
      var t = [],
          i = this[0];
      if (!i) return g([]);

      for (; i.nextElementSibling;) {
        var s = i.nextElementSibling;
        e ? g(s).is(e) && t.push(s) : t.push(s), i = s;
      }

      return g(t);
    },
    prev: function prev(e) {
      if (this.length > 0) {
        var t = this[0];
        return e ? t.previousElementSibling && g(t.previousElementSibling).is(e) ? g([t.previousElementSibling]) : g([]) : t.previousElementSibling ? g([t.previousElementSibling]) : g([]);
      }

      return g([]);
    },
    prevAll: function prevAll(e) {
      var t = [],
          i = this[0];
      if (!i) return g([]);

      for (; i.previousElementSibling;) {
        var s = i.previousElementSibling;
        e ? g(s).is(e) && t.push(s) : t.push(s), i = s;
      }

      return g(t);
    },
    parent: function parent(e) {
      for (var t = [], i = 0; i < this.length; i += 1) {
        null !== this[i].parentNode && (e ? g(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
      }

      return g(t);
    },
    parents: function parents(e) {
      for (var t = [], i = 0; i < this.length; i += 1) {
        for (var s = this[i].parentNode; s;) {
          e ? g(s).is(e) && t.push(s) : t.push(s), s = s.parentNode;
        }
      }

      return g(t);
    },
    closest: function closest(e) {
      var t = this;
      return void 0 === e ? g([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
    },
    find: function find(e) {
      for (var t = [], i = 0; i < this.length; i += 1) {
        for (var s = this[i].querySelectorAll(e), r = 0; r < s.length; r += 1) {
          t.push(s[r]);
        }
      }

      return g(t);
    },
    children: function children(e) {
      for (var t = [], i = 0; i < this.length; i += 1) {
        for (var s = this[i].children, r = 0; r < s.length; r += 1) {
          e && !g(s[r]).is(e) || t.push(s[r]);
        }
      }

      return g(t);
    },
    filter: function filter(e) {
      return g(m(this, e));
    },
    remove: function remove() {
      for (var e = 0; e < this.length; e += 1) {
        this[e].parentNode && this[e].parentNode.removeChild(this[e]);
      }

      return this;
    }
  };
  Object.keys(b).forEach(function (e) {
    g.fn[e] = b[e];
  });
  var T,
      y,
      S,
      x = g;

  function E(e, t) {
    return void 0 === t && (t = 0), setTimeout(e, t);
  }

  function M() {
    return Date.now();
  }

  function P(e) {
    return "object" == _typeof(e) && null !== e && e.constructor && e.constructor === Object;
  }

  function k() {
    for (var e = Object(arguments.length <= 0 ? void 0 : arguments[0]), t = 1; t < arguments.length; t += 1) {
      var i = t < 0 || arguments.length <= t ? void 0 : arguments[t];
      if (null != i) for (var s = Object.keys(Object(i)), r = 0, n = s.length; r < n; r += 1) {
        var a = s[r],
            o = Object.getOwnPropertyDescriptor(i, a);
        void 0 !== o && o.enumerable && (P(e[a]) && P(i[a]) ? k(e[a], i[a]) : !P(e[a]) && P(i[a]) ? (e[a] = {}, k(e[a], i[a])) : e[a] = i[a]);
      }
    }

    return e;
  }

  function L(e, t) {
    Object.keys(t).forEach(function (i) {
      P(t[i]) && Object.keys(t[i]).forEach(function (s) {
        "function" == typeof t[i][s] && (t[i][s] = t[i][s].bind(e));
      }), e[i] = t[i];
    });
  }

  function O() {
    return T || (T = function () {
      var e = l(),
          t = a();
      return {
        touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
        pointerEvents: !!e.PointerEvent && "maxTouchPoints" in e.navigator && e.navigator.maxTouchPoints >= 0,
        observer: "MutationObserver" in e || "WebkitMutationObserver" in e,
        passiveListener: function () {
          var t = !1;

          try {
            var i = Object.defineProperty({}, "passive", {
              get: function get() {
                t = !0;
              }
            });
            e.addEventListener("testPassiveListener", null, i);
          } catch (e) {}

          return t;
        }(),
        gestures: "ongesturestart" in e
      };
    }()), T;
  }

  function A(e) {
    return void 0 === e && (e = {}), y || (y = function (e) {
      var t = (void 0 === e ? {} : e).userAgent,
          i = O(),
          s = l(),
          r = s.navigator.platform,
          n = t || s.navigator.userAgent,
          a = {
        ios: !1,
        android: !1
      },
          o = s.screen.width,
          d = s.screen.height,
          h = n.match(/(Android);?[\s\/]+([\d.]+)?/),
          u = n.match(/(iPad).*OS\s([\d_]+)/),
          p = n.match(/(iPod)(.*OS\s([\d_]+))?/),
          c = !u && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
          v = "Win32" === r,
          f = "MacIntel" === r;
      return !u && f && i.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(o + "x" + d) >= 0 && ((u = n.match(/(Version)\/([\d.]+)/)) || (u = [0, 1, "13_0_0"]), f = !1), h && !v && (a.os = "android", a.android = !0), (u || c || p) && (a.os = "ios", a.ios = !0), a;
    }(e)), y;
  }

  function z() {
    return S || (S = function () {
      var e,
          t = l();
      return {
        isEdge: !!t.navigator.userAgent.match(/Edge/g),
        isSafari: (e = t.navigator.userAgent.toLowerCase(), e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0),
        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
      };
    }()), S;
  }

  var I = {
    name: "resize",
    create: function create() {
      var e = this;
      k(e, {
        resize: {
          resizeHandler: function resizeHandler() {
            e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"));
          },
          orientationChangeHandler: function orientationChangeHandler() {
            e && !e.destroyed && e.initialized && e.emit("orientationchange");
          }
        }
      });
    },
    on: {
      init: function init(e) {
        var t = l();
        t.addEventListener("resize", e.resize.resizeHandler), t.addEventListener("orientationchange", e.resize.orientationChangeHandler);
      },
      destroy: function destroy(e) {
        var t = l();
        t.removeEventListener("resize", e.resize.resizeHandler), t.removeEventListener("orientationchange", e.resize.orientationChangeHandler);
      }
    }
  };

  function B() {
    return (B = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var i = arguments[t];

        for (var s in i) {
          Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s]);
        }
      }

      return e;
    }).apply(this, arguments);
  }

  var D = {
    attach: function attach(e, t) {
      void 0 === t && (t = {});
      var i = l(),
          s = this,
          r = new (i.MutationObserver || i.WebkitMutationObserver)(function (e) {
        if (1 !== e.length) {
          var t = function t() {
            s.emit("observerUpdate", e[0]);
          };

          i.requestAnimationFrame ? i.requestAnimationFrame(t) : i.setTimeout(t, 0);
        } else s.emit("observerUpdate", e[0]);
      });
      r.observe(e, {
        attributes: void 0 === t.attributes || t.attributes,
        childList: void 0 === t.childList || t.childList,
        characterData: void 0 === t.characterData || t.characterData
      }), s.observer.observers.push(r);
    },
    init: function init() {
      if (this.support.observer && this.params.observer) {
        if (this.params.observeParents) for (var e = this.$el.parents(), t = 0; t < e.length; t += 1) {
          this.observer.attach(e[t]);
        }
        this.observer.attach(this.$el[0], {
          childList: this.params.observeSlideChildren
        }), this.observer.attach(this.$wrapperEl[0], {
          attributes: !1
        });
      }
    },
    destroy: function destroy() {
      this.observer.observers.forEach(function (e) {
        e.disconnect();
      }), this.observer.observers = [];
    }
  },
      G = {
    name: "observer",
    params: {
      observer: !1,
      observeParents: !1,
      observeSlideChildren: !1
    },
    create: function create() {
      L(this, {
        observer: B(B({}, D), {}, {
          observers: []
        })
      });
    },
    on: {
      init: function init(e) {
        e.observer.init();
      },
      destroy: function destroy(e) {
        e.observer.destroy();
      }
    }
  };

  function N(e) {
    var t = a(),
        i = l(),
        s = this.touchEventsData,
        r = this.params,
        n = this.touches;

    if (!this.animating || !r.preventInteractionOnTransition) {
      var o = e;
      o.originalEvent && (o = o.originalEvent);
      var d = x(o.target);
      if ("wrapper" !== r.touchEventsTarget || d.closest(this.wrapperEl).length) if (s.isTouchEvent = "touchstart" === o.type, s.isTouchEvent || !("which" in o) || 3 !== o.which) if (!(!s.isTouchEvent && "button" in o && o.button > 0)) if (!s.isTouched || !s.isMoved) if (!!r.noSwipingClass && "" !== r.noSwipingClass && o.target && o.target.shadowRoot && e.path && e.path[0] && (d = x(e.path[0])), r.noSwiping && d.closest(r.noSwipingSelector ? r.noSwipingSelector : "." + r.noSwipingClass)[0]) this.allowClick = !0;else if (!r.swipeHandler || d.closest(r.swipeHandler)[0]) {
        n.currentX = "touchstart" === o.type ? o.targetTouches[0].pageX : o.pageX, n.currentY = "touchstart" === o.type ? o.targetTouches[0].pageY : o.pageY;
        var h = n.currentX,
            u = n.currentY,
            p = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
            c = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;

        if (!p || !(h <= c || h >= i.screen.width - c)) {
          if (k(s, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0
          }), n.startX = h, n.startY = u, s.touchStartTime = M(), this.allowClick = !0, this.updateSize(), this.swipeDirection = void 0, r.threshold > 0 && (s.allowThresholdMove = !1), "touchstart" !== o.type) {
            var v = !0;
            d.is(s.formElements) && (v = !1), t.activeElement && x(t.activeElement).is(s.formElements) && t.activeElement !== d[0] && t.activeElement.blur();
            var f = v && this.allowTouchMove && r.touchStartPreventDefault;
            (r.touchStartForcePreventDefault || f) && o.preventDefault();
          }

          this.emit("touchStart", o);
        }
      }
    }
  }

  function $(e) {
    var t = a(),
        i = this.touchEventsData,
        s = this.params,
        r = this.touches,
        n = this.rtlTranslate,
        o = e;

    if (o.originalEvent && (o = o.originalEvent), i.isTouched) {
      if (!i.isTouchEvent || "touchmove" === o.type) {
        var l = "touchmove" === o.type && o.targetTouches && (o.targetTouches[0] || o.changedTouches[0]),
            d = "touchmove" === o.type ? l.pageX : o.pageX,
            h = "touchmove" === o.type ? l.pageY : o.pageY;
        if (o.preventedByNestedSwiper) return r.startX = d, void (r.startY = h);
        if (!this.allowTouchMove) return this.allowClick = !1, void (i.isTouched && (k(r, {
          startX: d,
          startY: h,
          currentX: d,
          currentY: h
        }), i.touchStartTime = M()));
        if (i.isTouchEvent && s.touchReleaseOnEdges && !s.loop) if (this.isVertical()) {
          if (h < r.startY && this.translate <= this.maxTranslate() || h > r.startY && this.translate >= this.minTranslate()) return i.isTouched = !1, void (i.isMoved = !1);
        } else if (d < r.startX && this.translate <= this.maxTranslate() || d > r.startX && this.translate >= this.minTranslate()) return;
        if (i.isTouchEvent && t.activeElement && o.target === t.activeElement && x(o.target).is(i.formElements)) return i.isMoved = !0, void (this.allowClick = !1);

        if (i.allowTouchCallbacks && this.emit("touchMove", o), !(o.targetTouches && o.targetTouches.length > 1)) {
          r.currentX = d, r.currentY = h;
          var u = r.currentX - r.startX,
              p = r.currentY - r.startY;

          if (!(this.params.threshold && Math.sqrt(Math.pow(u, 2) + Math.pow(p, 2)) < this.params.threshold)) {
            var c;
            if (void 0 === i.isScrolling) this.isHorizontal() && r.currentY === r.startY || this.isVertical() && r.currentX === r.startX ? i.isScrolling = !1 : u * u + p * p >= 25 && (c = 180 * Math.atan2(Math.abs(p), Math.abs(u)) / Math.PI, i.isScrolling = this.isHorizontal() ? c > s.touchAngle : 90 - c > s.touchAngle);
            if (i.isScrolling && this.emit("touchMoveOpposite", o), void 0 === i.startMoving && (r.currentX === r.startX && r.currentY === r.startY || (i.startMoving = !0)), i.isScrolling) i.isTouched = !1;else if (i.startMoving) {
              this.allowClick = !1, !s.cssMode && o.cancelable && o.preventDefault(), s.touchMoveStopPropagation && !s.nested && o.stopPropagation(), i.isMoved || (s.loop && this.loopFix(), i.startTranslate = this.getTranslate(), this.setTransition(0), this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !s.grabCursor || !0 !== this.allowSlideNext && !0 !== this.allowSlidePrev || this.setGrabCursor(!0), this.emit("sliderFirstMove", o)), this.emit("sliderMove", o), i.isMoved = !0;
              var v = this.isHorizontal() ? u : p;
              r.diff = v, v *= s.touchRatio, n && (v = -v), this.swipeDirection = v > 0 ? "prev" : "next", i.currentTranslate = v + i.startTranslate;
              var f = !0,
                  m = s.resistanceRatio;

              if (s.touchReleaseOnEdges && (m = 0), v > 0 && i.currentTranslate > this.minTranslate() ? (f = !1, s.resistance && (i.currentTranslate = this.minTranslate() - 1 + Math.pow(-this.minTranslate() + i.startTranslate + v, m))) : v < 0 && i.currentTranslate < this.maxTranslate() && (f = !1, s.resistance && (i.currentTranslate = this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - i.startTranslate - v, m))), f && (o.preventedByNestedSwiper = !0), !this.allowSlideNext && "next" === this.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !this.allowSlidePrev && "prev" === this.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), s.threshold > 0) {
                if (!(Math.abs(v) > s.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
                if (!i.allowThresholdMove) return i.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, i.currentTranslate = i.startTranslate, void (r.diff = this.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY);
              }

              s.followFinger && !s.cssMode && ((s.freeMode || s.watchSlidesProgress || s.watchSlidesVisibility) && (this.updateActiveIndex(), this.updateSlidesClasses()), s.freeMode && (0 === i.velocities.length && i.velocities.push({
                position: r[this.isHorizontal() ? "startX" : "startY"],
                time: i.touchStartTime
              }), i.velocities.push({
                position: r[this.isHorizontal() ? "currentX" : "currentY"],
                time: M()
              })), this.updateProgress(i.currentTranslate), this.setTranslate(i.currentTranslate));
            }
          }
        }
      }
    } else i.startMoving && i.isScrolling && this.emit("touchMoveOpposite", o);
  }

  function H(e) {
    var t = this,
        i = t.touchEventsData,
        s = t.params,
        r = t.touches,
        n = t.rtlTranslate,
        a = t.$wrapperEl,
        o = t.slidesGrid,
        l = t.snapGrid,
        d = e;
    if (d.originalEvent && (d = d.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", d), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && s.grabCursor && t.setGrabCursor(!1), i.isMoved = !1, void (i.startMoving = !1);
    s.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
    var h,
        u = M(),
        p = u - i.touchStartTime;
    if (t.allowClick && (t.updateClickedSlide(d), t.emit("tap click", d), p < 300 && u - i.lastClickTime < 300 && t.emit("doubleTap doubleClick", d)), i.lastClickTime = M(), E(function () {
      t.destroyed || (t.allowClick = !0);
    }), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === r.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void (i.startMoving = !1);
    if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, h = s.followFinger ? n ? t.translate : -t.translate : -i.currentTranslate, !s.cssMode) if (s.freeMode) {
      if (h < -t.minTranslate()) return void t.slideTo(t.activeIndex);
      if (h > -t.maxTranslate()) return void (t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));

      if (s.freeModeMomentum) {
        if (i.velocities.length > 1) {
          var c = i.velocities.pop(),
              v = i.velocities.pop(),
              f = c.position - v.position,
              m = c.time - v.time;
          t.velocity = f / m, t.velocity /= 2, Math.abs(t.velocity) < s.freeModeMinimumVelocity && (t.velocity = 0), (m > 150 || M() - c.time > 300) && (t.velocity = 0);
        } else t.velocity = 0;

        t.velocity *= s.freeModeMomentumVelocityRatio, i.velocities.length = 0;
        var g = 1e3 * s.freeModeMomentumRatio,
            C = t.velocity * g,
            w = t.translate + C;
        n && (w = -w);
        var b,
            T,
            y = !1,
            S = 20 * Math.abs(t.velocity) * s.freeModeMomentumBounceRatio;
        if (w < t.maxTranslate()) s.freeModeMomentumBounce ? (w + t.maxTranslate() < -S && (w = t.maxTranslate() - S), b = t.maxTranslate(), y = !0, i.allowMomentumBounce = !0) : w = t.maxTranslate(), s.loop && s.centeredSlides && (T = !0);else if (w > t.minTranslate()) s.freeModeMomentumBounce ? (w - t.minTranslate() > S && (w = t.minTranslate() + S), b = t.minTranslate(), y = !0, i.allowMomentumBounce = !0) : w = t.minTranslate(), s.loop && s.centeredSlides && (T = !0);else if (s.freeModeSticky) {
          for (var x, P = 0; P < l.length; P += 1) {
            if (l[P] > -w) {
              x = P;
              break;
            }
          }

          w = -(w = Math.abs(l[x] - w) < Math.abs(l[x - 1] - w) || "next" === t.swipeDirection ? l[x] : l[x - 1]);
        }

        if (T && t.once("transitionEnd", function () {
          t.loopFix();
        }), 0 !== t.velocity) {
          if (g = n ? Math.abs((-w - t.translate) / t.velocity) : Math.abs((w - t.translate) / t.velocity), s.freeModeSticky) {
            var k = Math.abs((n ? -w : w) - t.translate),
                L = t.slidesSizesGrid[t.activeIndex];
            g = k < L ? s.speed : k < 2 * L ? 1.5 * s.speed : 2.5 * s.speed;
          }
        } else if (s.freeModeSticky) return void t.slideToClosest();

        s.freeModeMomentumBounce && y ? (t.updateProgress(b), t.setTransition(g), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating = !0, a.transitionEnd(function () {
          t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(s.speed), setTimeout(function () {
            t.setTranslate(b), a.transitionEnd(function () {
              t && !t.destroyed && t.transitionEnd();
            });
          }, 0));
        })) : t.velocity ? (t.updateProgress(w), t.setTransition(g), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, a.transitionEnd(function () {
          t && !t.destroyed && t.transitionEnd();
        }))) : t.updateProgress(w), t.updateActiveIndex(), t.updateSlidesClasses();
      } else if (s.freeModeSticky) return void t.slideToClosest();

      (!s.freeModeMomentum || p >= s.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
    } else {
      for (var O = 0, A = t.slidesSizesGrid[0], z = 0; z < o.length; z += z < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup) {
        var I = z < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
        void 0 !== o[z + I] ? h >= o[z] && h < o[z + I] && (O = z, A = o[z + I] - o[z]) : h >= o[z] && (O = z, A = o[o.length - 1] - o[o.length - 2]);
      }

      var B = (h - o[O]) / A,
          D = O < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;

      if (p > s.longSwipesMs) {
        if (!s.longSwipes) return void t.slideTo(t.activeIndex);
        "next" === t.swipeDirection && (B >= s.longSwipesRatio ? t.slideTo(O + D) : t.slideTo(O)), "prev" === t.swipeDirection && (B > 1 - s.longSwipesRatio ? t.slideTo(O + D) : t.slideTo(O));
      } else {
        if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
        t.navigation && (d.target === t.navigation.nextEl || d.target === t.navigation.prevEl) ? d.target === t.navigation.nextEl ? t.slideTo(O + D) : t.slideTo(O) : ("next" === t.swipeDirection && t.slideTo(O + D), "prev" === t.swipeDirection && t.slideTo(O));
      }
    }
  }

  function F() {
    var e = this.params,
        t = this.el;

    if (!t || 0 !== t.offsetWidth) {
      e.breakpoints && this.setBreakpoint();
      var i = this.allowSlideNext,
          s = this.allowSlidePrev,
          r = this.snapGrid;
      this.allowSlideNext = !0, this.allowSlidePrev = !0, this.updateSize(), this.updateSlides(), this.updateSlidesClasses(), ("auto" === e.slidesPerView || e.slidesPerView > 1) && this.isEnd && !this.isBeginning && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0), this.autoplay && this.autoplay.running && this.autoplay.paused && this.autoplay.run(), this.allowSlidePrev = s, this.allowSlideNext = i, this.params.watchOverflow && r !== this.snapGrid && this.checkOverflow();
    }
  }

  function V(e) {
    this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()));
  }

  function j() {
    var e = this.wrapperEl,
        t = this.rtlTranslate;
    this.previousTranslate = this.translate, this.isHorizontal() ? this.translate = t ? e.scrollWidth - e.offsetWidth - e.scrollLeft : -e.scrollLeft : this.translate = -e.scrollTop, -0 === this.translate && (this.translate = 0), this.updateActiveIndex(), this.updateSlidesClasses();
    var i = this.maxTranslate() - this.minTranslate();
    (0 === i ? 0 : (this.translate - this.minTranslate()) / i) !== this.progress && this.updateProgress(t ? -this.translate : this.translate), this.emit("setTranslate", this.translate, !1);
  }

  var _ = !1;

  function W() {}

  var R = {
    init: !0,
    direction: "horizontal",
    touchEventsTarget: "container",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    nested: !1,
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    freeMode: !1,
    freeModeMomentum: !0,
    freeModeMomentumRatio: 1,
    freeModeMomentumBounce: !0,
    freeModeMomentumBounceRatio: 1,
    freeModeMomentumVelocityRatio: 1,
    freeModeSticky: !1,
    freeModeMinimumVelocity: .02,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerColumn: 1,
    slidesPerColumnFill: "column",
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !1,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: .5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 0,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: .85,
    watchSlidesProgress: !1,
    watchSlidesVisibility: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    preloadImages: !0,
    updateOnImagesReady: !0,
    loop: !1,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopFillGroupWithBlank: !1,
    loopPreventsSlide: !0,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    containerModifierClass: "swiper-container-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-invisible-blank",
    slideActiveClass: "swiper-slide-active",
    slideDuplicateActiveClass: "swiper-slide-duplicate-active",
    slideVisibleClass: "swiper-slide-visible",
    slideDuplicateClass: "swiper-slide-duplicate",
    slideNextClass: "swiper-slide-next",
    slideDuplicateNextClass: "swiper-slide-duplicate-next",
    slidePrevClass: "swiper-slide-prev",
    slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
    wrapperClass: "swiper-wrapper",
    runCallbacksOnInit: !0,
    _emitClasses: !1
  };

  function q(e, t) {
    for (var i = 0; i < t.length; i++) {
      var s = t[i];
      s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s);
    }
  }

  var X = {
    modular: {
      useParams: function useParams(e) {
        var t = this;
        t.modules && Object.keys(t.modules).forEach(function (i) {
          var s = t.modules[i];
          s.params && k(e, s.params);
        });
      },
      useModules: function useModules(e) {
        void 0 === e && (e = {});
        var t = this;
        t.modules && Object.keys(t.modules).forEach(function (i) {
          var s = t.modules[i],
              r = e[i] || {};
          s.on && t.on && Object.keys(s.on).forEach(function (e) {
            t.on(e, s.on[e]);
          }), s.create && s.create.bind(t)(r);
        });
      }
    },
    eventsEmitter: {
      on: function on(e, t, i) {
        var s = this;
        if ("function" != typeof t) return s;
        var r = i ? "unshift" : "push";
        return e.split(" ").forEach(function (e) {
          s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][r](t);
        }), s;
      },
      once: function once(e, t, i) {
        var s = this;
        if ("function" != typeof t) return s;

        function r() {
          s.off(e, r), r.__emitterProxy && delete r.__emitterProxy;

          for (var i = arguments.length, n = new Array(i), a = 0; a < i; a++) {
            n[a] = arguments[a];
          }

          t.apply(s, n);
        }

        return r.__emitterProxy = t, s.on(e, r, i);
      },
      onAny: function onAny(e, t) {
        if ("function" != typeof e) return this;
        var i = t ? "unshift" : "push";
        return this.eventsAnyListeners.indexOf(e) < 0 && this.eventsAnyListeners[i](e), this;
      },
      offAny: function offAny(e) {
        if (!this.eventsAnyListeners) return this;
        var t = this.eventsAnyListeners.indexOf(e);
        return t >= 0 && this.eventsAnyListeners.splice(t, 1), this;
      },
      off: function off(e, t) {
        var i = this;
        return i.eventsListeners ? (e.split(" ").forEach(function (e) {
          void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].forEach(function (s, r) {
            (s === t || s.__emitterProxy && s.__emitterProxy === t) && i.eventsListeners[e].splice(r, 1);
          });
        }), i) : i;
      },
      emit: function emit() {
        var e,
            t,
            i,
            s = this;
        if (!s.eventsListeners) return s;

        for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++) {
          n[a] = arguments[a];
        }

        "string" == typeof n[0] || Array.isArray(n[0]) ? (e = n[0], t = n.slice(1, n.length), i = s) : (e = n[0].events, t = n[0].data, i = n[0].context || s), t.unshift(i);
        var o = Array.isArray(e) ? e : e.split(" ");
        return o.forEach(function (e) {
          if (s.eventsAnyListeners && s.eventsAnyListeners.length && s.eventsAnyListeners.forEach(function (s) {
            s.apply(i, [e].concat(t));
          }), s.eventsListeners && s.eventsListeners[e]) {
            var r = [];
            s.eventsListeners[e].forEach(function (e) {
              r.push(e);
            }), r.forEach(function (e) {
              e.apply(i, t);
            });
          }
        }), s;
      }
    },
    update: {
      updateSize: function updateSize() {
        var e,
            t,
            i = this.$el;
        e = void 0 !== this.params.width && null !== this.params.width ? this.params.width : i[0].clientWidth, t = void 0 !== this.params.height && null !== this.params.width ? this.params.height : i[0].clientHeight, 0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(i.css("padding-left") || 0, 10) - parseInt(i.css("padding-right") || 0, 10), t = t - parseInt(i.css("padding-top") || 0, 10) - parseInt(i.css("padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(t) && (t = 0), k(this, {
          width: e,
          height: t,
          size: this.isHorizontal() ? e : t
        }));
      },
      updateSlides: function updateSlides() {
        var e = l(),
            t = this.params,
            i = this.$wrapperEl,
            s = this.size,
            r = this.rtlTranslate,
            n = this.wrongRTL,
            a = this.virtual && t.virtual.enabled,
            o = a ? this.virtual.slides.length : this.slides.length,
            d = i.children("." + this.params.slideClass),
            h = a ? this.virtual.slides.length : d.length,
            u = [],
            p = [],
            c = [];

        function v(e, i) {
          return !t.cssMode || i !== d.length - 1;
        }

        var f = t.slidesOffsetBefore;
        "function" == typeof f && (f = t.slidesOffsetBefore.call(this));
        var m = t.slidesOffsetAfter;
        "function" == typeof m && (m = t.slidesOffsetAfter.call(this));
        var g = this.snapGrid.length,
            C = this.snapGrid.length,
            w = t.spaceBetween,
            b = -f,
            T = 0,
            y = 0;

        if (void 0 !== s) {
          var S, x;
          "string" == typeof w && w.indexOf("%") >= 0 && (w = parseFloat(w.replace("%", "")) / 100 * s), this.virtualSize = -w, r ? d.css({
            marginLeft: "",
            marginTop: ""
          }) : d.css({
            marginRight: "",
            marginBottom: ""
          }), t.slidesPerColumn > 1 && (S = Math.floor(h / t.slidesPerColumn) === h / this.params.slidesPerColumn ? h : Math.ceil(h / t.slidesPerColumn) * t.slidesPerColumn, "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (S = Math.max(S, t.slidesPerView * t.slidesPerColumn)));

          for (var E, M = t.slidesPerColumn, P = S / M, L = Math.floor(h / t.slidesPerColumn), O = 0; O < h; O += 1) {
            x = 0;
            var A = d.eq(O);

            if (t.slidesPerColumn > 1) {
              var z = void 0,
                  I = void 0,
                  B = void 0;

              if ("row" === t.slidesPerColumnFill && t.slidesPerGroup > 1) {
                var D = Math.floor(O / (t.slidesPerGroup * t.slidesPerColumn)),
                    G = O - t.slidesPerColumn * t.slidesPerGroup * D,
                    N = 0 === D ? t.slidesPerGroup : Math.min(Math.ceil((h - D * M * t.slidesPerGroup) / M), t.slidesPerGroup);
                z = (I = G - (B = Math.floor(G / N)) * N + D * t.slidesPerGroup) + B * S / M, A.css({
                  "-webkit-box-ordinal-group": z,
                  "-moz-box-ordinal-group": z,
                  "-ms-flex-order": z,
                  "-webkit-order": z,
                  order: z
                });
              } else "column" === t.slidesPerColumnFill ? (B = O - (I = Math.floor(O / M)) * M, (I > L || I === L && B === M - 1) && (B += 1) >= M && (B = 0, I += 1)) : I = O - (B = Math.floor(O / P)) * P;

              A.css("margin-" + (this.isHorizontal() ? "top" : "left"), 0 !== B && t.spaceBetween && t.spaceBetween + "px");
            }

            if ("none" !== A.css("display")) {
              if ("auto" === t.slidesPerView) {
                var $ = e.getComputedStyle(A[0], null),
                    H = A[0].style.transform,
                    F = A[0].style.webkitTransform;
                if (H && (A[0].style.transform = "none"), F && (A[0].style.webkitTransform = "none"), t.roundLengths) x = this.isHorizontal() ? A.outerWidth(!0) : A.outerHeight(!0);else if (this.isHorizontal()) {
                  var V = parseFloat($.getPropertyValue("width") || 0),
                      j = parseFloat($.getPropertyValue("padding-left") || 0),
                      _ = parseFloat($.getPropertyValue("padding-right") || 0),
                      W = parseFloat($.getPropertyValue("margin-left") || 0),
                      R = parseFloat($.getPropertyValue("margin-right") || 0),
                      q = $.getPropertyValue("box-sizing");

                  if (q && "border-box" === q) x = V + W + R;else {
                    var X = A[0],
                        Y = X.clientWidth;
                    x = V + j + _ + W + R + (X.offsetWidth - Y);
                  }
                } else {
                  var U = parseFloat($.getPropertyValue("height") || 0),
                      K = parseFloat($.getPropertyValue("padding-top") || 0),
                      J = parseFloat($.getPropertyValue("padding-bottom") || 0),
                      Q = parseFloat($.getPropertyValue("margin-top") || 0),
                      Z = parseFloat($.getPropertyValue("margin-bottom") || 0),
                      ee = $.getPropertyValue("box-sizing");
                  if (ee && "border-box" === ee) x = U + Q + Z;else {
                    var te = A[0],
                        ie = te.clientHeight;
                    x = U + K + J + Q + Z + (te.offsetHeight - ie);
                  }
                }
                H && (A[0].style.transform = H), F && (A[0].style.webkitTransform = F), t.roundLengths && (x = Math.floor(x));
              } else x = (s - (t.slidesPerView - 1) * w) / t.slidesPerView, t.roundLengths && (x = Math.floor(x)), d[O] && (this.isHorizontal() ? d[O].style.width = x + "px" : d[O].style.height = x + "px");

              d[O] && (d[O].swiperSlideSize = x), c.push(x), t.centeredSlides ? (b = b + x / 2 + T / 2 + w, 0 === T && 0 !== O && (b = b - s / 2 - w), 0 === O && (b = b - s / 2 - w), Math.abs(b) < .001 && (b = 0), t.roundLengths && (b = Math.floor(b)), y % t.slidesPerGroup == 0 && u.push(b), p.push(b)) : (t.roundLengths && (b = Math.floor(b)), (y - Math.min(this.params.slidesPerGroupSkip, y)) % this.params.slidesPerGroup == 0 && u.push(b), p.push(b), b = b + x + w), this.virtualSize += x + w, T = x, y += 1;
            }
          }

          if (this.virtualSize = Math.max(this.virtualSize, s) + m, r && n && ("slide" === t.effect || "coverflow" === t.effect) && i.css({
            width: this.virtualSize + t.spaceBetween + "px"
          }), t.setWrapperSize && (this.isHorizontal() ? i.css({
            width: this.virtualSize + t.spaceBetween + "px"
          }) : i.css({
            height: this.virtualSize + t.spaceBetween + "px"
          })), t.slidesPerColumn > 1 && (this.virtualSize = (x + t.spaceBetween) * S, this.virtualSize = Math.ceil(this.virtualSize / t.slidesPerColumn) - t.spaceBetween, this.isHorizontal() ? i.css({
            width: this.virtualSize + t.spaceBetween + "px"
          }) : i.css({
            height: this.virtualSize + t.spaceBetween + "px"
          }), t.centeredSlides)) {
            E = [];

            for (var se = 0; se < u.length; se += 1) {
              var re = u[se];
              t.roundLengths && (re = Math.floor(re)), u[se] < this.virtualSize + u[0] && E.push(re);
            }

            u = E;
          }

          if (!t.centeredSlides) {
            E = [];

            for (var ne = 0; ne < u.length; ne += 1) {
              var ae = u[ne];
              t.roundLengths && (ae = Math.floor(ae)), u[ne] <= this.virtualSize - s && E.push(ae);
            }

            u = E, Math.floor(this.virtualSize - s) - Math.floor(u[u.length - 1]) > 1 && u.push(this.virtualSize - s);
          }

          if (0 === u.length && (u = [0]), 0 !== t.spaceBetween && (this.isHorizontal() ? r ? d.filter(v).css({
            marginLeft: w + "px"
          }) : d.filter(v).css({
            marginRight: w + "px"
          }) : d.filter(v).css({
            marginBottom: w + "px"
          })), t.centeredSlides && t.centeredSlidesBounds) {
            var oe = 0;
            c.forEach(function (e) {
              oe += e + (t.spaceBetween ? t.spaceBetween : 0);
            });
            var le = (oe -= t.spaceBetween) - s;
            u = u.map(function (e) {
              return e < 0 ? -f : e > le ? le + m : e;
            });
          }

          if (t.centerInsufficientSlides) {
            var de = 0;

            if (c.forEach(function (e) {
              de += e + (t.spaceBetween ? t.spaceBetween : 0);
            }), (de -= t.spaceBetween) < s) {
              var he = (s - de) / 2;
              u.forEach(function (e, t) {
                u[t] = e - he;
              }), p.forEach(function (e, t) {
                p[t] = e + he;
              });
            }
          }

          k(this, {
            slides: d,
            snapGrid: u,
            slidesGrid: p,
            slidesSizesGrid: c
          }), h !== o && this.emit("slidesLengthChange"), u.length !== g && (this.params.watchOverflow && this.checkOverflow(), this.emit("snapGridLengthChange")), p.length !== C && this.emit("slidesGridLengthChange"), (t.watchSlidesProgress || t.watchSlidesVisibility) && this.updateSlidesOffset();
        }
      },
      updateAutoHeight: function updateAutoHeight(e) {
        var t,
            i = [],
            s = 0;
        if ("number" == typeof e ? this.setTransition(e) : !0 === e && this.setTransition(this.params.speed), "auto" !== this.params.slidesPerView && this.params.slidesPerView > 1) {
          if (this.params.centeredSlides) this.visibleSlides.each(function (e) {
            i.push(e);
          });else for (t = 0; t < Math.ceil(this.params.slidesPerView); t += 1) {
            var r = this.activeIndex + t;
            if (r > this.slides.length) break;
            i.push(this.slides.eq(r)[0]);
          }
        } else i.push(this.slides.eq(this.activeIndex)[0]);

        for (t = 0; t < i.length; t += 1) {
          if (void 0 !== i[t]) {
            var n = i[t].offsetHeight;
            s = n > s ? n : s;
          }
        }

        s && this.$wrapperEl.css("height", s + "px");
      },
      updateSlidesOffset: function updateSlidesOffset() {
        for (var e = this.slides, t = 0; t < e.length; t += 1) {
          e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop;
        }
      },
      updateSlidesProgress: function updateSlidesProgress(e) {
        void 0 === e && (e = this && this.translate || 0);
        var t = this.params,
            i = this.slides,
            s = this.rtlTranslate;

        if (0 !== i.length) {
          void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
          var r = -e;
          s && (r = e), i.removeClass(t.slideVisibleClass), this.visibleSlidesIndexes = [], this.visibleSlides = [];

          for (var n = 0; n < i.length; n += 1) {
            var a = i[n],
                o = (r + (t.centeredSlides ? this.minTranslate() : 0) - a.swiperSlideOffset) / (a.swiperSlideSize + t.spaceBetween);

            if (t.watchSlidesVisibility || t.centeredSlides && t.autoHeight) {
              var l = -(r - a.swiperSlideOffset),
                  d = l + this.slidesSizesGrid[n];
              (l >= 0 && l < this.size - 1 || d > 1 && d <= this.size || l <= 0 && d >= this.size) && (this.visibleSlides.push(a), this.visibleSlidesIndexes.push(n), i.eq(n).addClass(t.slideVisibleClass));
            }

            a.progress = s ? -o : o;
          }

          this.visibleSlides = x(this.visibleSlides);
        }
      },
      updateProgress: function updateProgress(e) {
        if (void 0 === e) {
          var t = this.rtlTranslate ? -1 : 1;
          e = this && this.translate && this.translate * t || 0;
        }

        var i = this.params,
            s = this.maxTranslate() - this.minTranslate(),
            r = this.progress,
            n = this.isBeginning,
            a = this.isEnd,
            o = n,
            l = a;
        0 === s ? (r = 0, n = !0, a = !0) : (n = (r = (e - this.minTranslate()) / s) <= 0, a = r >= 1), k(this, {
          progress: r,
          isBeginning: n,
          isEnd: a
        }), (i.watchSlidesProgress || i.watchSlidesVisibility || i.centeredSlides && i.autoHeight) && this.updateSlidesProgress(e), n && !o && this.emit("reachBeginning toEdge"), a && !l && this.emit("reachEnd toEdge"), (o && !n || l && !a) && this.emit("fromEdge"), this.emit("progress", r);
      },
      updateSlidesClasses: function updateSlidesClasses() {
        var e,
            t = this.slides,
            i = this.params,
            s = this.$wrapperEl,
            r = this.activeIndex,
            n = this.realIndex,
            a = this.virtual && i.virtual.enabled;
        t.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = a ? this.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + r + '"]') : t.eq(r)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + n + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + n + '"]').addClass(i.slideDuplicateActiveClass));
        var o = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
        i.loop && 0 === o.length && (o = t.eq(0)).addClass(i.slideNextClass);
        var l = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
        i.loop && 0 === l.length && (l = t.eq(-1)).addClass(i.slidePrevClass), i.loop && (o.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), l.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass)), this.emitSlidesClasses();
      },
      updateActiveIndex: function updateActiveIndex(e) {
        var t,
            i = this.rtlTranslate ? this.translate : -this.translate,
            s = this.slidesGrid,
            r = this.snapGrid,
            n = this.params,
            a = this.activeIndex,
            o = this.realIndex,
            l = this.snapIndex,
            d = e;

        if (void 0 === d) {
          for (var h = 0; h < s.length; h += 1) {
            void 0 !== s[h + 1] ? i >= s[h] && i < s[h + 1] - (s[h + 1] - s[h]) / 2 ? d = h : i >= s[h] && i < s[h + 1] && (d = h + 1) : i >= s[h] && (d = h);
          }

          n.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0);
        }

        if (r.indexOf(i) >= 0) t = r.indexOf(i);else {
          var u = Math.min(n.slidesPerGroupSkip, d);
          t = u + Math.floor((d - u) / n.slidesPerGroup);
        }

        if (t >= r.length && (t = r.length - 1), d !== a) {
          var p = parseInt(this.slides.eq(d).attr("data-swiper-slide-index") || d, 10);
          k(this, {
            snapIndex: t,
            realIndex: p,
            previousIndex: a,
            activeIndex: d
          }), this.emit("activeIndexChange"), this.emit("snapIndexChange"), o !== p && this.emit("realIndexChange"), (this.initialized || this.params.runCallbacksOnInit) && this.emit("slideChange");
        } else t !== l && (this.snapIndex = t, this.emit("snapIndexChange"));
      },
      updateClickedSlide: function updateClickedSlide(e) {
        var t = this.params,
            i = x(e.target).closest("." + t.slideClass)[0],
            s = !1;
        if (i) for (var r = 0; r < this.slides.length; r += 1) {
          this.slides[r] === i && (s = !0);
        }
        if (!i || !s) return this.clickedSlide = void 0, void (this.clickedIndex = void 0);
        this.clickedSlide = i, this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(x(i).attr("data-swiper-slide-index"), 10) : this.clickedIndex = x(i).index(), t.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide();
      }
    },
    translate: {
      getTranslate: function getTranslate(e) {
        void 0 === e && (e = this.isHorizontal() ? "x" : "y");
        var t = this.params,
            i = this.rtlTranslate,
            s = this.translate,
            r = this.$wrapperEl;
        if (t.virtualTranslate) return i ? -s : s;
        if (t.cssMode) return s;

        var n = function (e, t) {
          void 0 === t && (t = "x");
          var i,
              s,
              r,
              n = l(),
              a = n.getComputedStyle(e, null);
          return n.WebKitCSSMatrix ? ((s = a.transform || a.webkitTransform).split(",").length > 6 && (s = s.split(", ").map(function (e) {
            return e.replace(",", ".");
          }).join(", ")), r = new n.WebKitCSSMatrix("none" === s ? "" : s)) : i = (r = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (s = n.WebKitCSSMatrix ? r.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (s = n.WebKitCSSMatrix ? r.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), s || 0;
        }(r[0], e);

        return i && (n = -n), n || 0;
      },
      setTranslate: function setTranslate(e, t) {
        var i = this.rtlTranslate,
            s = this.params,
            r = this.$wrapperEl,
            n = this.wrapperEl,
            a = this.progress,
            o = 0,
            l = 0;
        this.isHorizontal() ? o = i ? -e : e : l = e, s.roundLengths && (o = Math.floor(o), l = Math.floor(l)), s.cssMode ? n[this.isHorizontal() ? "scrollLeft" : "scrollTop"] = this.isHorizontal() ? -o : -l : s.virtualTranslate || r.transform("translate3d(" + o + "px, " + l + "px, 0px)"), this.previousTranslate = this.translate, this.translate = this.isHorizontal() ? o : l;
        var d = this.maxTranslate() - this.minTranslate();
        (0 === d ? 0 : (e - this.minTranslate()) / d) !== a && this.updateProgress(e), this.emit("setTranslate", this.translate, t);
      },
      minTranslate: function minTranslate() {
        return -this.snapGrid[0];
      },
      maxTranslate: function maxTranslate() {
        return -this.snapGrid[this.snapGrid.length - 1];
      },
      translateTo: function translateTo(e, t, i, s, r) {
        void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), void 0 === s && (s = !0);
        var n = this,
            a = n.params,
            o = n.wrapperEl;
        if (n.animating && a.preventInteractionOnTransition) return !1;
        var l,
            d = n.minTranslate(),
            h = n.maxTranslate();

        if (l = s && e > d ? d : s && e < h ? h : e, n.updateProgress(l), a.cssMode) {
          var u,
              p = n.isHorizontal();
          if (0 === t) o[p ? "scrollLeft" : "scrollTop"] = -l;else if (o.scrollTo) o.scrollTo(((u = {})[p ? "left" : "top"] = -l, u.behavior = "smooth", u));else o[p ? "scrollLeft" : "scrollTop"] = -l;
          return !0;
        }

        return 0 === t ? (n.setTransition(0), n.setTranslate(l), i && (n.emit("beforeTransitionStart", t, r), n.emit("transitionEnd"))) : (n.setTransition(t), n.setTranslate(l), i && (n.emit("beforeTransitionStart", t, r), n.emit("transitionStart")), n.animating || (n.animating = !0, n.onTranslateToWrapperTransitionEnd || (n.onTranslateToWrapperTransitionEnd = function (e) {
          n && !n.destroyed && e.target === this && (n.$wrapperEl[0].removeEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), n.$wrapperEl[0].removeEventListener("webkitTransitionEnd", n.onTranslateToWrapperTransitionEnd), n.onTranslateToWrapperTransitionEnd = null, delete n.onTranslateToWrapperTransitionEnd, i && n.emit("transitionEnd"));
        }), n.$wrapperEl[0].addEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), n.$wrapperEl[0].addEventListener("webkitTransitionEnd", n.onTranslateToWrapperTransitionEnd))), !0;
      }
    },
    transition: {
      setTransition: function setTransition(e, t) {
        this.params.cssMode || this.$wrapperEl.transition(e), this.emit("setTransition", e, t);
      },
      transitionStart: function transitionStart(e, t) {
        void 0 === e && (e = !0);
        var i = this.activeIndex,
            s = this.params,
            r = this.previousIndex;

        if (!s.cssMode) {
          s.autoHeight && this.updateAutoHeight();
          var n = t;

          if (n || (n = i > r ? "next" : i < r ? "prev" : "reset"), this.emit("transitionStart"), e && i !== r) {
            if ("reset" === n) return void this.emit("slideResetTransitionStart");
            this.emit("slideChangeTransitionStart"), "next" === n ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart");
          }
        }
      },
      transitionEnd: function transitionEnd(e, t) {
        void 0 === e && (e = !0);
        var i = this.activeIndex,
            s = this.previousIndex,
            r = this.params;

        if (this.animating = !1, !r.cssMode) {
          this.setTransition(0);
          var n = t;

          if (n || (n = i > s ? "next" : i < s ? "prev" : "reset"), this.emit("transitionEnd"), e && i !== s) {
            if ("reset" === n) return void this.emit("slideResetTransitionEnd");
            this.emit("slideChangeTransitionEnd"), "next" === n ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd");
          }
        }
      }
    },
    slide: {
      slideTo: function slideTo(e, t, i, s) {
        if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), "number" != typeof e && "string" != typeof e) throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. [" + _typeof(e) + "] given.");

        if ("string" == typeof e) {
          var r = parseInt(e, 10);
          if (!isFinite(r)) throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [" + e + "] given.");
          e = r;
        }

        var n = this,
            a = e;
        a < 0 && (a = 0);
        var o = n.params,
            l = n.snapGrid,
            d = n.slidesGrid,
            h = n.previousIndex,
            u = n.activeIndex,
            p = n.rtlTranslate,
            c = n.wrapperEl;
        if (n.animating && o.preventInteractionOnTransition) return !1;
        var v = Math.min(n.params.slidesPerGroupSkip, a),
            f = v + Math.floor((a - v) / n.params.slidesPerGroup);
        f >= l.length && (f = l.length - 1), (u || o.initialSlide || 0) === (h || 0) && i && n.emit("beforeSlideChangeStart");
        var m,
            g = -l[f];
        if (n.updateProgress(g), o.normalizeSlideIndex) for (var C = 0; C < d.length; C += 1) {
          -Math.floor(100 * g) >= Math.floor(100 * d[C]) && (a = C);
        }

        if (n.initialized && a !== u) {
          if (!n.allowSlideNext && g < n.translate && g < n.minTranslate()) return !1;
          if (!n.allowSlidePrev && g > n.translate && g > n.maxTranslate() && (u || 0) !== a) return !1;
        }

        if (m = a > u ? "next" : a < u ? "prev" : "reset", p && -g === n.translate || !p && g === n.translate) return n.updateActiveIndex(a), o.autoHeight && n.updateAutoHeight(), n.updateSlidesClasses(), "slide" !== o.effect && n.setTranslate(g), "reset" !== m && (n.transitionStart(i, m), n.transitionEnd(i, m)), !1;

        if (o.cssMode) {
          var w,
              b = n.isHorizontal(),
              T = -g;
          if (p && (T = c.scrollWidth - c.offsetWidth - T), 0 === t) c[b ? "scrollLeft" : "scrollTop"] = T;else if (c.scrollTo) c.scrollTo(((w = {})[b ? "left" : "top"] = T, w.behavior = "smooth", w));else c[b ? "scrollLeft" : "scrollTop"] = T;
          return !0;
        }

        return 0 === t ? (n.setTransition(0), n.setTranslate(g), n.updateActiveIndex(a), n.updateSlidesClasses(), n.emit("beforeTransitionStart", t, s), n.transitionStart(i, m), n.transitionEnd(i, m)) : (n.setTransition(t), n.setTranslate(g), n.updateActiveIndex(a), n.updateSlidesClasses(), n.emit("beforeTransitionStart", t, s), n.transitionStart(i, m), n.animating || (n.animating = !0, n.onSlideToWrapperTransitionEnd || (n.onSlideToWrapperTransitionEnd = function (e) {
          n && !n.destroyed && e.target === this && (n.$wrapperEl[0].removeEventListener("transitionend", n.onSlideToWrapperTransitionEnd), n.$wrapperEl[0].removeEventListener("webkitTransitionEnd", n.onSlideToWrapperTransitionEnd), n.onSlideToWrapperTransitionEnd = null, delete n.onSlideToWrapperTransitionEnd, n.transitionEnd(i, m));
        }), n.$wrapperEl[0].addEventListener("transitionend", n.onSlideToWrapperTransitionEnd), n.$wrapperEl[0].addEventListener("webkitTransitionEnd", n.onSlideToWrapperTransitionEnd))), !0;
      },
      slideToLoop: function slideToLoop(e, t, i, s) {
        void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
        var r = e;
        return this.params.loop && (r += this.loopedSlides), this.slideTo(r, t, i, s);
      },
      slideNext: function slideNext(e, t, i) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        var s = this.params,
            r = this.animating,
            n = this.activeIndex < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup;

        if (s.loop) {
          if (r && s.loopPreventsSlide) return !1;
          this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft;
        }

        return this.slideTo(this.activeIndex + n, e, t, i);
      },
      slidePrev: function slidePrev(e, t, i) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        var s = this.params,
            r = this.animating,
            n = this.snapGrid,
            a = this.slidesGrid,
            o = this.rtlTranslate;

        if (s.loop) {
          if (r && s.loopPreventsSlide) return !1;
          this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft;
        }

        function l(e) {
          return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
        }

        var d,
            h = l(o ? this.translate : -this.translate),
            u = n.map(function (e) {
          return l(e);
        }),
            p = (n[u.indexOf(h)], n[u.indexOf(h) - 1]);
        return void 0 === p && s.cssMode && n.forEach(function (e) {
          !p && h >= e && (p = e);
        }), void 0 !== p && (d = a.indexOf(p)) < 0 && (d = this.activeIndex - 1), this.slideTo(d, e, t, i);
      },
      slideReset: function slideReset(e, t, i) {
        return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, i);
      },
      slideToClosest: function slideToClosest(e, t, i, s) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === s && (s = .5);
        var r = this.activeIndex,
            n = Math.min(this.params.slidesPerGroupSkip, r),
            a = n + Math.floor((r - n) / this.params.slidesPerGroup),
            o = this.rtlTranslate ? this.translate : -this.translate;

        if (o >= this.snapGrid[a]) {
          var l = this.snapGrid[a];
          o - l > (this.snapGrid[a + 1] - l) * s && (r += this.params.slidesPerGroup);
        } else {
          var d = this.snapGrid[a - 1];
          o - d <= (this.snapGrid[a] - d) * s && (r -= this.params.slidesPerGroup);
        }

        return r = Math.max(r, 0), r = Math.min(r, this.slidesGrid.length - 1), this.slideTo(r, e, t, i);
      },
      slideToClickedSlide: function slideToClickedSlide() {
        var e,
            t = this,
            i = t.params,
            s = t.$wrapperEl,
            r = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView,
            n = t.clickedIndex;

        if (i.loop) {
          if (t.animating) return;
          e = parseInt(x(t.clickedSlide).attr("data-swiper-slide-index"), 10), i.centeredSlides ? n < t.loopedSlides - r / 2 || n > t.slides.length - t.loopedSlides + r / 2 ? (t.loopFix(), n = s.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), E(function () {
            t.slideTo(n);
          })) : t.slideTo(n) : n > t.slides.length - r ? (t.loopFix(), n = s.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), E(function () {
            t.slideTo(n);
          })) : t.slideTo(n);
        } else t.slideTo(n);
      }
    },
    loop: {
      loopCreate: function loopCreate() {
        var e = this,
            t = a(),
            i = e.params,
            s = e.$wrapperEl;
        s.children("." + i.slideClass + "." + i.slideDuplicateClass).remove();
        var r = s.children("." + i.slideClass);

        if (i.loopFillGroupWithBlank) {
          var n = i.slidesPerGroup - r.length % i.slidesPerGroup;

          if (n !== i.slidesPerGroup) {
            for (var o = 0; o < n; o += 1) {
              var l = x(t.createElement("div")).addClass(i.slideClass + " " + i.slideBlankClass);
              s.append(l);
            }

            r = s.children("." + i.slideClass);
          }
        }

        "auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = r.length), e.loopedSlides = Math.ceil(parseFloat(i.loopedSlides || i.slidesPerView, 10)), e.loopedSlides += i.loopAdditionalSlides, e.loopedSlides > r.length && (e.loopedSlides = r.length);
        var d = [],
            h = [];
        r.each(function (t, i) {
          var s = x(t);
          i < e.loopedSlides && h.push(t), i < r.length && i >= r.length - e.loopedSlides && d.push(t), s.attr("data-swiper-slide-index", i);
        });

        for (var u = 0; u < h.length; u += 1) {
          s.append(x(h[u].cloneNode(!0)).addClass(i.slideDuplicateClass));
        }

        for (var p = d.length - 1; p >= 0; p -= 1) {
          s.prepend(x(d[p].cloneNode(!0)).addClass(i.slideDuplicateClass));
        }
      },
      loopFix: function loopFix() {
        this.emit("beforeLoopFix");
        var e,
            t = this.activeIndex,
            i = this.slides,
            s = this.loopedSlides,
            r = this.allowSlidePrev,
            n = this.allowSlideNext,
            a = this.snapGrid,
            o = this.rtlTranslate;
        this.allowSlidePrev = !0, this.allowSlideNext = !0;
        var l = -a[t] - this.getTranslate();
        if (t < s) e = i.length - 3 * s + t, e += s, this.slideTo(e, 0, !1, !0) && 0 !== l && this.setTranslate((o ? -this.translate : this.translate) - l);else if (t >= i.length - s) {
          e = -i.length + t + s, e += s, this.slideTo(e, 0, !1, !0) && 0 !== l && this.setTranslate((o ? -this.translate : this.translate) - l);
        }
        this.allowSlidePrev = r, this.allowSlideNext = n, this.emit("loopFix");
      },
      loopDestroy: function loopDestroy() {
        var e = this.$wrapperEl,
            t = this.params,
            i = this.slides;
        e.children("." + t.slideClass + "." + t.slideDuplicateClass + ",." + t.slideClass + "." + t.slideBlankClass).remove(), i.removeAttr("data-swiper-slide-index");
      }
    },
    grabCursor: {
      setGrabCursor: function setGrabCursor(e) {
        if (!(this.support.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked || this.params.cssMode)) {
          var t = this.el;
          t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab";
        }
      },
      unsetGrabCursor: function unsetGrabCursor() {
        this.support.touch || this.params.watchOverflow && this.isLocked || this.params.cssMode || (this.el.style.cursor = "");
      }
    },
    manipulation: {
      appendSlide: function appendSlide(e) {
        var t = this.$wrapperEl,
            i = this.params;
        if (i.loop && this.loopDestroy(), "object" == _typeof(e) && "length" in e) for (var s = 0; s < e.length; s += 1) {
          e[s] && t.append(e[s]);
        } else t.append(e);
        i.loop && this.loopCreate(), i.observer && this.support.observer || this.update();
      },
      prependSlide: function prependSlide(e) {
        var t = this.params,
            i = this.$wrapperEl,
            s = this.activeIndex;
        t.loop && this.loopDestroy();
        var r = s + 1;

        if ("object" == _typeof(e) && "length" in e) {
          for (var n = 0; n < e.length; n += 1) {
            e[n] && i.prepend(e[n]);
          }

          r = s + e.length;
        } else i.prepend(e);

        t.loop && this.loopCreate(), t.observer && this.support.observer || this.update(), this.slideTo(r, 0, !1);
      },
      addSlide: function addSlide(e, t) {
        var i = this.$wrapperEl,
            s = this.params,
            r = this.activeIndex;
        s.loop && (r -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + s.slideClass));
        var n = this.slides.length;
        if (e <= 0) this.prependSlide(t);else if (e >= n) this.appendSlide(t);else {
          for (var a = r > e ? r + 1 : r, o = [], l = n - 1; l >= e; l -= 1) {
            var d = this.slides.eq(l);
            d.remove(), o.unshift(d);
          }

          if ("object" == _typeof(t) && "length" in t) {
            for (var h = 0; h < t.length; h += 1) {
              t[h] && i.append(t[h]);
            }

            a = r > e ? r + t.length : r;
          } else i.append(t);

          for (var u = 0; u < o.length; u += 1) {
            i.append(o[u]);
          }

          s.loop && this.loopCreate(), s.observer && this.support.observer || this.update(), s.loop ? this.slideTo(a + this.loopedSlides, 0, !1) : this.slideTo(a, 0, !1);
        }
      },
      removeSlide: function removeSlide(e) {
        var t = this.params,
            i = this.$wrapperEl,
            s = this.activeIndex;
        t.loop && (s -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + t.slideClass));
        var r,
            n = s;

        if ("object" == _typeof(e) && "length" in e) {
          for (var a = 0; a < e.length; a += 1) {
            r = e[a], this.slides[r] && this.slides.eq(r).remove(), r < n && (n -= 1);
          }

          n = Math.max(n, 0);
        } else r = e, this.slides[r] && this.slides.eq(r).remove(), r < n && (n -= 1), n = Math.max(n, 0);

        t.loop && this.loopCreate(), t.observer && this.support.observer || this.update(), t.loop ? this.slideTo(n + this.loopedSlides, 0, !1) : this.slideTo(n, 0, !1);
      },
      removeAllSlides: function removeAllSlides() {
        for (var e = [], t = 0; t < this.slides.length; t += 1) {
          e.push(t);
        }

        this.removeSlide(e);
      }
    },
    events: {
      attachEvents: function attachEvents() {
        var e = a(),
            t = this.params,
            i = this.touchEvents,
            s = this.el,
            r = this.wrapperEl,
            n = this.device,
            o = this.support;
        this.onTouchStart = N.bind(this), this.onTouchMove = $.bind(this), this.onTouchEnd = H.bind(this), t.cssMode && (this.onScroll = j.bind(this)), this.onClick = V.bind(this);
        var l = !!t.nested;
        if (!o.touch && o.pointerEvents) s.addEventListener(i.start, this.onTouchStart, !1), e.addEventListener(i.move, this.onTouchMove, l), e.addEventListener(i.end, this.onTouchEnd, !1);else {
          if (o.touch) {
            var d = !("touchstart" !== i.start || !o.passiveListener || !t.passiveListeners) && {
              passive: !0,
              capture: !1
            };
            s.addEventListener(i.start, this.onTouchStart, d), s.addEventListener(i.move, this.onTouchMove, o.passiveListener ? {
              passive: !1,
              capture: l
            } : l), s.addEventListener(i.end, this.onTouchEnd, d), i.cancel && s.addEventListener(i.cancel, this.onTouchEnd, d), _ || (e.addEventListener("touchstart", W), _ = !0);
          }

          (t.simulateTouch && !n.ios && !n.android || t.simulateTouch && !o.touch && n.ios) && (s.addEventListener("mousedown", this.onTouchStart, !1), e.addEventListener("mousemove", this.onTouchMove, l), e.addEventListener("mouseup", this.onTouchEnd, !1));
        }
        (t.preventClicks || t.preventClicksPropagation) && s.addEventListener("click", this.onClick, !0), t.cssMode && r.addEventListener("scroll", this.onScroll), t.updateOnWindowResize ? this.on(n.ios || n.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", F, !0) : this.on("observerUpdate", F, !0);
      },
      detachEvents: function detachEvents() {
        var e = a(),
            t = this.params,
            i = this.touchEvents,
            s = this.el,
            r = this.wrapperEl,
            n = this.device,
            o = this.support,
            l = !!t.nested;
        if (!o.touch && o.pointerEvents) s.removeEventListener(i.start, this.onTouchStart, !1), e.removeEventListener(i.move, this.onTouchMove, l), e.removeEventListener(i.end, this.onTouchEnd, !1);else {
          if (o.touch) {
            var d = !("onTouchStart" !== i.start || !o.passiveListener || !t.passiveListeners) && {
              passive: !0,
              capture: !1
            };
            s.removeEventListener(i.start, this.onTouchStart, d), s.removeEventListener(i.move, this.onTouchMove, l), s.removeEventListener(i.end, this.onTouchEnd, d), i.cancel && s.removeEventListener(i.cancel, this.onTouchEnd, d);
          }

          (t.simulateTouch && !n.ios && !n.android || t.simulateTouch && !o.touch && n.ios) && (s.removeEventListener("mousedown", this.onTouchStart, !1), e.removeEventListener("mousemove", this.onTouchMove, l), e.removeEventListener("mouseup", this.onTouchEnd, !1));
        }
        (t.preventClicks || t.preventClicksPropagation) && s.removeEventListener("click", this.onClick, !0), t.cssMode && r.removeEventListener("scroll", this.onScroll), this.off(n.ios || n.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", F);
      }
    },
    breakpoints: {
      setBreakpoint: function setBreakpoint() {
        var e = this.activeIndex,
            t = this.initialized,
            i = this.loopedSlides,
            s = void 0 === i ? 0 : i,
            r = this.params,
            n = this.$el,
            a = r.breakpoints;

        if (a && (!a || 0 !== Object.keys(a).length)) {
          var o = this.getBreakpoint(a);

          if (o && this.currentBreakpoint !== o) {
            var l = o in a ? a[o] : void 0;
            l && ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach(function (e) {
              var t = l[e];
              void 0 !== t && (l[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto");
            });
            var d = l || this.originalParams,
                h = r.slidesPerColumn > 1,
                u = d.slidesPerColumn > 1;
            h && !u ? (n.removeClass(r.containerModifierClass + "multirow " + r.containerModifierClass + "multirow-column"), this.emitContainerClasses()) : !h && u && (n.addClass(r.containerModifierClass + "multirow"), "column" === d.slidesPerColumnFill && n.addClass(r.containerModifierClass + "multirow-column"), this.emitContainerClasses());
            var p = d.direction && d.direction !== r.direction,
                c = r.loop && (d.slidesPerView !== r.slidesPerView || p);
            p && t && this.changeDirection(), k(this.params, d), k(this, {
              allowTouchMove: this.params.allowTouchMove,
              allowSlideNext: this.params.allowSlideNext,
              allowSlidePrev: this.params.allowSlidePrev
            }), this.currentBreakpoint = o, this.emit("_beforeBreakpoint", d), c && t && (this.loopDestroy(), this.loopCreate(), this.updateSlides(), this.slideTo(e - s + this.loopedSlides, 0, !1)), this.emit("breakpoint", d);
          }
        }
      },
      getBreakpoint: function getBreakpoint(e) {
        var t = l();

        if (e) {
          var i = !1,
              s = Object.keys(e).map(function (e) {
            if ("string" == typeof e && 0 === e.indexOf("@")) {
              var i = parseFloat(e.substr(1));
              return {
                value: t.innerHeight * i,
                point: e
              };
            }

            return {
              value: e,
              point: e
            };
          });
          s.sort(function (e, t) {
            return parseInt(e.value, 10) - parseInt(t.value, 10);
          });

          for (var r = 0; r < s.length; r += 1) {
            var n = s[r],
                a = n.point;
            n.value <= t.innerWidth && (i = a);
          }

          return i || "max";
        }
      }
    },
    checkOverflow: {
      checkOverflow: function checkOverflow() {
        var e = this.params,
            t = this.isLocked,
            i = this.slides.length > 0 && e.slidesOffsetBefore + e.spaceBetween * (this.slides.length - 1) + this.slides[0].offsetWidth * this.slides.length;
        e.slidesOffsetBefore && e.slidesOffsetAfter && i ? this.isLocked = i <= this.size : this.isLocked = 1 === this.snapGrid.length, this.allowSlideNext = !this.isLocked, this.allowSlidePrev = !this.isLocked, t !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock"), t && t !== this.isLocked && (this.isEnd = !1, this.navigation && this.navigation.update());
      }
    },
    classes: {
      addClasses: function addClasses() {
        var e = this.classNames,
            t = this.params,
            i = this.rtl,
            s = this.$el,
            r = this.device,
            n = [];
        n.push("initialized"), n.push(t.direction), t.freeMode && n.push("free-mode"), t.autoHeight && n.push("autoheight"), i && n.push("rtl"), t.slidesPerColumn > 1 && (n.push("multirow"), "column" === t.slidesPerColumnFill && n.push("multirow-column")), r.android && n.push("android"), r.ios && n.push("ios"), t.cssMode && n.push("css-mode"), n.forEach(function (i) {
          e.push(t.containerModifierClass + i);
        }), s.addClass(e.join(" ")), this.emitContainerClasses();
      },
      removeClasses: function removeClasses() {
        var e = this.$el,
            t = this.classNames;
        e.removeClass(t.join(" ")), this.emitContainerClasses();
      }
    },
    images: {
      loadImage: function loadImage(e, t, i, s, r, n) {
        var a,
            o = l();

        function d() {
          n && n();
        }

        x(e).parent("picture")[0] || e.complete && r ? d() : t ? ((a = new o.Image()).onload = d, a.onerror = d, s && (a.sizes = s), i && (a.srcset = i), t && (a.src = t)) : d();
      },
      preloadImages: function preloadImages() {
        var e = this;

        function t() {
          null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
        }

        e.imagesToLoad = e.$el.find("img");

        for (var i = 0; i < e.imagesToLoad.length; i += 1) {
          var s = e.imagesToLoad[i];
          e.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, t);
        }
      }
    }
  },
      Y = {},
      U = function () {
    function e() {
      for (var t, i, s = arguments.length, r = new Array(s), n = 0; n < s; n++) {
        r[n] = arguments[n];
      }

      1 === r.length && r[0].constructor && r[0].constructor === Object ? i = r[0] : (t = r[0], i = r[1]), i || (i = {}), i = k({}, i), t && !i.el && (i.el = t);
      var a = this;
      a.support = O(), a.device = A({
        userAgent: i.userAgent
      }), a.browser = z(), a.eventsListeners = {}, a.eventsAnyListeners = [], void 0 === a.modules && (a.modules = {}), Object.keys(a.modules).forEach(function (e) {
        var t = a.modules[e];

        if (t.params) {
          var s = Object.keys(t.params)[0],
              r = t.params[s];
          if ("object" != _typeof(r) || null === r) return;
          if (!(s in i) || !("enabled" in r)) return;
          !0 === i[s] && (i[s] = {
            enabled: !0
          }), "object" != _typeof(i[s]) || "enabled" in i[s] || (i[s].enabled = !0), i[s] || (i[s] = {
            enabled: !1
          });
        }
      });
      var o = k({}, R);
      a.useParams(o), a.params = k({}, o, Y, i), a.originalParams = k({}, a.params), a.passedParams = k({}, i), a.params && a.params.on && Object.keys(a.params.on).forEach(function (e) {
        a.on(e, a.params.on[e]);
      }), a.params && a.params.onAny && a.onAny(a.params.onAny), a.$ = x;
      var l = x(a.params.el);

      if (t = l[0]) {
        if (l.length > 1) {
          var d = [];
          return l.each(function (t) {
            var s = k({}, i, {
              el: t
            });
            d.push(new e(s));
          }), d;
        }

        var h, u, p;
        return t.swiper = a, t && t.shadowRoot && t.shadowRoot.querySelector ? (h = x(t.shadowRoot.querySelector("." + a.params.wrapperClass))).children = function (e) {
          return l.children(e);
        } : h = l.children("." + a.params.wrapperClass), k(a, {
          $el: l,
          el: t,
          $wrapperEl: h,
          wrapperEl: h[0],
          classNames: [],
          slides: x(),
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          isHorizontal: function isHorizontal() {
            return "horizontal" === a.params.direction;
          },
          isVertical: function isVertical() {
            return "vertical" === a.params.direction;
          },
          rtl: "rtl" === t.dir.toLowerCase() || "rtl" === l.css("direction"),
          rtlTranslate: "horizontal" === a.params.direction && ("rtl" === t.dir.toLowerCase() || "rtl" === l.css("direction")),
          wrongRTL: "-webkit-box" === h.css("display"),
          activeIndex: 0,
          realIndex: 0,
          isBeginning: !0,
          isEnd: !1,
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: !1,
          allowSlideNext: a.params.allowSlideNext,
          allowSlidePrev: a.params.allowSlidePrev,
          touchEvents: (u = ["touchstart", "touchmove", "touchend", "touchcancel"], p = ["mousedown", "mousemove", "mouseup"], a.support.pointerEvents && (p = ["pointerdown", "pointermove", "pointerup"]), a.touchEventsTouch = {
            start: u[0],
            move: u[1],
            end: u[2],
            cancel: u[3]
          }, a.touchEventsDesktop = {
            start: p[0],
            move: p[1],
            end: p[2]
          }, a.support.touch || !a.params.simulateTouch ? a.touchEventsTouch : a.touchEventsDesktop),
          touchEventsData: {
            isTouched: void 0,
            isMoved: void 0,
            allowTouchCallbacks: void 0,
            touchStartTime: void 0,
            isScrolling: void 0,
            currentTranslate: void 0,
            startTranslate: void 0,
            allowThresholdMove: void 0,
            formElements: "input, select, option, textarea, button, video, label",
            lastClickTime: M(),
            clickTimeout: void 0,
            velocities: [],
            allowMomentumBounce: void 0,
            isTouchEvent: void 0,
            startMoving: void 0
          },
          allowClick: !0,
          allowTouchMove: a.params.allowTouchMove,
          touches: {
            startX: 0,
            startY: 0,
            currentX: 0,
            currentY: 0,
            diff: 0
          },
          imagesToLoad: [],
          imagesLoaded: 0
        }), a.useModules(), a.emit("_swiper"), a.params.init && a.init(), a;
      }
    }

    var t,
        i,
        s,
        r = e.prototype;
    return r.emitContainerClasses = function () {
      var e = this;

      if (e.params._emitClasses && e.el) {
        var t = e.el.className.split(" ").filter(function (t) {
          return 0 === t.indexOf("swiper-container") || 0 === t.indexOf(e.params.containerModifierClass);
        });
        e.emit("_containerClasses", t.join(" "));
      }
    }, r.getSlideClasses = function (e) {
      var t = this;
      return e.className.split(" ").filter(function (e) {
        return 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass);
      }).join(" ");
    }, r.emitSlidesClasses = function () {
      var e = this;
      e.params._emitClasses && e.el && e.slides.each(function (t) {
        var i = e.getSlideClasses(t);
        e.emit("_slideClass", t, i);
      });
    }, r.slidesPerViewDynamic = function () {
      var e = this.params,
          t = this.slides,
          i = this.slidesGrid,
          s = this.size,
          r = this.activeIndex,
          n = 1;

      if (e.centeredSlides) {
        for (var a, o = t[r].swiperSlideSize, l = r + 1; l < t.length; l += 1) {
          t[l] && !a && (n += 1, (o += t[l].swiperSlideSize) > s && (a = !0));
        }

        for (var d = r - 1; d >= 0; d -= 1) {
          t[d] && !a && (n += 1, (o += t[d].swiperSlideSize) > s && (a = !0));
        }
      } else for (var h = r + 1; h < t.length; h += 1) {
        i[h] - i[r] < s && (n += 1);
      }

      return n;
    }, r.update = function () {
      var e = this;

      if (e && !e.destroyed) {
        var t = e.snapGrid,
            i = e.params;
        i.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (s(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || s(), i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update");
      }

      function s() {
        var t = e.rtlTranslate ? -1 * e.translate : e.translate,
            i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
        e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses();
      }
    }, r.changeDirection = function (e, t) {
      void 0 === t && (t = !0);
      var i = this.params.direction;
      return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e || (this.$el.removeClass("" + this.params.containerModifierClass + i).addClass("" + this.params.containerModifierClass + e), this.emitContainerClasses(), this.params.direction = e, this.slides.each(function (t) {
        "vertical" === e ? t.style.width = "" : t.style.height = "";
      }), this.emit("changeDirection"), t && this.update()), this;
    }, r.init = function () {
      this.initialized || (this.emit("beforeInit"), this.params.breakpoints && this.setBreakpoint(), this.addClasses(), this.params.loop && this.loopCreate(), this.updateSize(), this.updateSlides(), this.params.watchOverflow && this.checkOverflow(), this.params.grabCursor && this.setGrabCursor(), this.params.preloadImages && this.preloadImages(), this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit), this.attachEvents(), this.initialized = !0, this.emit("init"), this.emit("afterInit"));
    }, r.destroy = function (e, t) {
      void 0 === e && (e = !0), void 0 === t && (t = !0);
      var i,
          s = this,
          r = s.params,
          n = s.$el,
          a = s.$wrapperEl,
          o = s.slides;
      return void 0 === s.params || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), r.loop && s.loopDestroy(), t && (s.removeClasses(), n.removeAttr("style"), a.removeAttr("style"), o && o.length && o.removeClass([r.slideVisibleClass, r.slideActiveClass, r.slideNextClass, r.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), s.emit("destroy"), Object.keys(s.eventsListeners).forEach(function (e) {
        s.off(e);
      }), !1 !== e && (s.$el[0].swiper = null, i = s, Object.keys(i).forEach(function (e) {
        try {
          i[e] = null;
        } catch (e) {}

        try {
          delete i[e];
        } catch (e) {}
      })), s.destroyed = !0), null;
    }, e.extendDefaults = function (e) {
      k(Y, e);
    }, e.installModule = function (t) {
      e.prototype.modules || (e.prototype.modules = {});
      var i = t.name || Object.keys(e.prototype.modules).length + "_" + M();
      e.prototype.modules[i] = t;
    }, e.use = function (t) {
      return Array.isArray(t) ? (t.forEach(function (t) {
        return e.installModule(t);
      }), e) : (e.installModule(t), e);
    }, t = e, s = [{
      key: "extendedDefaults",
      get: function get() {
        return Y;
      }
    }, {
      key: "defaults",
      get: function get() {
        return R;
      }
    }], (i = null) && q(t.prototype, i), s && q(t, s), e;
  }();

  Object.keys(X).forEach(function (e) {
    Object.keys(X[e]).forEach(function (t) {
      U.prototype[t] = X[e][t];
    });
  }), U.use([I, G]);
  var K = U;

  function J() {
    return (J = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var i = arguments[t];

        for (var s in i) {
          Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s]);
        }
      }

      return e;
    }).apply(this, arguments);
  }

  var Q = {
    update: function update() {
      var e = this.params.navigation;

      if (!this.params.loop) {
        var t = this.navigation,
            i = t.$nextEl,
            s = t.$prevEl;
        s && s.length > 0 && (this.isBeginning ? s.addClass(e.disabledClass) : s.removeClass(e.disabledClass), s[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass)), i && i.length > 0 && (this.isEnd ? i.addClass(e.disabledClass) : i.removeClass(e.disabledClass), i[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass));
      }
    },
    onPrevClick: function onPrevClick(e) {
      e.preventDefault(), this.isBeginning && !this.params.loop || this.slidePrev();
    },
    onNextClick: function onNextClick(e) {
      e.preventDefault(), this.isEnd && !this.params.loop || this.slideNext();
    },
    init: function init() {
      var e,
          t,
          i = this.params.navigation;
      (i.nextEl || i.prevEl) && (i.nextEl && (e = x(i.nextEl), this.params.uniqueNavElements && "string" == typeof i.nextEl && e.length > 1 && 1 === this.$el.find(i.nextEl).length && (e = this.$el.find(i.nextEl))), i.prevEl && (t = x(i.prevEl), this.params.uniqueNavElements && "string" == typeof i.prevEl && t.length > 1 && 1 === this.$el.find(i.prevEl).length && (t = this.$el.find(i.prevEl))), e && e.length > 0 && e.on("click", this.navigation.onNextClick), t && t.length > 0 && t.on("click", this.navigation.onPrevClick), k(this.navigation, {
        $nextEl: e,
        nextEl: e && e[0],
        $prevEl: t,
        prevEl: t && t[0]
      }));
    },
    destroy: function destroy() {
      var e = this.navigation,
          t = e.$nextEl,
          i = e.$prevEl;
      t && t.length && (t.off("click", this.navigation.onNextClick), t.removeClass(this.params.navigation.disabledClass)), i && i.length && (i.off("click", this.navigation.onPrevClick), i.removeClass(this.params.navigation.disabledClass));
    }
  },
      Z = {
    name: "navigation",
    params: {
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: !1,
        disabledClass: "swiper-button-disabled",
        hiddenClass: "swiper-button-hidden",
        lockClass: "swiper-button-lock"
      }
    },
    create: function create() {
      L(this, {
        navigation: J({}, Q)
      });
    },
    on: {
      init: function init(e) {
        e.navigation.init(), e.navigation.update();
      },
      toEdge: function toEdge(e) {
        e.navigation.update();
      },
      fromEdge: function fromEdge(e) {
        e.navigation.update();
      },
      destroy: function destroy(e) {
        e.navigation.destroy();
      },
      click: function click(e, t) {
        var i,
            s = e.navigation,
            r = s.$nextEl,
            n = s.$prevEl;
        !e.params.navigation.hideOnClick || x(t.target).is(n) || x(t.target).is(r) || (r ? i = r.hasClass(e.params.navigation.hiddenClass) : n && (i = n.hasClass(e.params.navigation.hiddenClass)), !0 === i ? e.emit("navigationShow") : e.emit("navigationHide"), r && r.toggleClass(e.params.navigation.hiddenClass), n && n.toggleClass(e.params.navigation.hiddenClass));
      }
    }
  };

  function ee() {
    return (ee = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var i = arguments[t];

        for (var s in i) {
          Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s]);
        }
      }

      return e;
    }).apply(this, arguments);
  }

  var te = {
    update: function update() {
      var e = this.rtl,
          t = this.params.pagination;

      if (t.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
        var i,
            s = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
            r = this.pagination.$el,
            n = this.params.loop ? Math.ceil((s - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;

        if (this.params.loop ? ((i = Math.ceil((this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup)) > s - 1 - 2 * this.loopedSlides && (i -= s - 2 * this.loopedSlides), i > n - 1 && (i -= n), i < 0 && "bullets" !== this.params.paginationType && (i = n + i)) : i = void 0 !== this.snapIndex ? this.snapIndex : this.activeIndex || 0, "bullets" === t.type && this.pagination.bullets && this.pagination.bullets.length > 0) {
          var a,
              o,
              l,
              d = this.pagination.bullets;
          if (t.dynamicBullets && (this.pagination.bulletSize = d.eq(0)[this.isHorizontal() ? "outerWidth" : "outerHeight"](!0), r.css(this.isHorizontal() ? "width" : "height", this.pagination.bulletSize * (t.dynamicMainBullets + 4) + "px"), t.dynamicMainBullets > 1 && void 0 !== this.previousIndex && (this.pagination.dynamicBulletIndex += i - this.previousIndex, this.pagination.dynamicBulletIndex > t.dynamicMainBullets - 1 ? this.pagination.dynamicBulletIndex = t.dynamicMainBullets - 1 : this.pagination.dynamicBulletIndex < 0 && (this.pagination.dynamicBulletIndex = 0)), a = i - this.pagination.dynamicBulletIndex, l = ((o = a + (Math.min(d.length, t.dynamicMainBullets) - 1)) + a) / 2), d.removeClass(t.bulletActiveClass + " " + t.bulletActiveClass + "-next " + t.bulletActiveClass + "-next-next " + t.bulletActiveClass + "-prev " + t.bulletActiveClass + "-prev-prev " + t.bulletActiveClass + "-main"), r.length > 1) d.each(function (e) {
            var s = x(e),
                r = s.index();
            r === i && s.addClass(t.bulletActiveClass), t.dynamicBullets && (r >= a && r <= o && s.addClass(t.bulletActiveClass + "-main"), r === a && s.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), r === o && s.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next"));
          });else {
            var h = d.eq(i),
                u = h.index();

            if (h.addClass(t.bulletActiveClass), t.dynamicBullets) {
              for (var p = d.eq(a), c = d.eq(o), v = a; v <= o; v += 1) {
                d.eq(v).addClass(t.bulletActiveClass + "-main");
              }

              if (this.params.loop) {
                if (u >= d.length - t.dynamicMainBullets) {
                  for (var f = t.dynamicMainBullets; f >= 0; f -= 1) {
                    d.eq(d.length - f).addClass(t.bulletActiveClass + "-main");
                  }

                  d.eq(d.length - t.dynamicMainBullets - 1).addClass(t.bulletActiveClass + "-prev");
                } else p.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), c.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next");
              } else p.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), c.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next");
            }
          }

          if (t.dynamicBullets) {
            var m = Math.min(d.length, t.dynamicMainBullets + 4),
                g = (this.pagination.bulletSize * m - this.pagination.bulletSize) / 2 - l * this.pagination.bulletSize,
                C = e ? "right" : "left";
            d.css(this.isHorizontal() ? C : "top", g + "px");
          }
        }

        if ("fraction" === t.type && (r.find("." + t.currentClass).text(t.formatFractionCurrent(i + 1)), r.find("." + t.totalClass).text(t.formatFractionTotal(n))), "progressbar" === t.type) {
          var w;
          w = t.progressbarOpposite ? this.isHorizontal() ? "vertical" : "horizontal" : this.isHorizontal() ? "horizontal" : "vertical";
          var b = (i + 1) / n,
              T = 1,
              y = 1;
          "horizontal" === w ? T = b : y = b, r.find("." + t.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + T + ") scaleY(" + y + ")").transition(this.params.speed);
        }

        "custom" === t.type && t.renderCustom ? (r.html(t.renderCustom(this, i + 1, n)), this.emit("paginationRender", r[0])) : this.emit("paginationUpdate", r[0]), r[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](t.lockClass);
      }
    },
    render: function render() {
      var e = this.params.pagination;

      if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
        var t = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
            i = this.pagination.$el,
            s = "";

        if ("bullets" === e.type) {
          for (var r = this.params.loop ? Math.ceil((t - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length, n = 0; n < r; n += 1) {
            e.renderBullet ? s += e.renderBullet.call(this, n, e.bulletClass) : s += "<" + e.bulletElement + ' class="' + e.bulletClass + '"></' + e.bulletElement + ">";
          }

          i.html(s), this.pagination.bullets = i.find("." + e.bulletClass);
        }

        "fraction" === e.type && (s = e.renderFraction ? e.renderFraction.call(this, e.currentClass, e.totalClass) : '<span class="' + e.currentClass + '"></span> / <span class="' + e.totalClass + '"></span>', i.html(s)), "progressbar" === e.type && (s = e.renderProgressbar ? e.renderProgressbar.call(this, e.progressbarFillClass) : '<span class="' + e.progressbarFillClass + '"></span>', i.html(s)), "custom" !== e.type && this.emit("paginationRender", this.pagination.$el[0]);
      }
    },
    init: function init() {
      var e = this,
          t = e.params.pagination;

      if (t.el) {
        var i = x(t.el);
        0 !== i.length && (e.params.uniqueNavElements && "string" == typeof t.el && i.length > 1 && (i = e.$el.find(t.el)), "bullets" === t.type && t.clickable && i.addClass(t.clickableClass), i.addClass(t.modifierClass + t.type), "bullets" === t.type && t.dynamicBullets && (i.addClass("" + t.modifierClass + t.type + "-dynamic"), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && i.addClass(t.progressbarOppositeClass), t.clickable && i.on("click", "." + t.bulletClass, function (t) {
          t.preventDefault();
          var i = x(this).index() * e.params.slidesPerGroup;
          e.params.loop && (i += e.loopedSlides), e.slideTo(i);
        }), k(e.pagination, {
          $el: i,
          el: i[0]
        }));
      }
    },
    destroy: function destroy() {
      var e = this.params.pagination;

      if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
        var t = this.pagination.$el;
        t.removeClass(e.hiddenClass), t.removeClass(e.modifierClass + e.type), this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && t.off("click", "." + e.bulletClass);
      }
    }
  },
      ie = {
    name: "pagination",
    params: {
      pagination: {
        el: null,
        bulletElement: "span",
        clickable: !1,
        hideOnClick: !1,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: !1,
        type: "bullets",
        dynamicBullets: !1,
        dynamicMainBullets: 1,
        formatFractionCurrent: function formatFractionCurrent(e) {
          return e;
        },
        formatFractionTotal: function formatFractionTotal(e) {
          return e;
        },
        bulletClass: "swiper-pagination-bullet",
        bulletActiveClass: "swiper-pagination-bullet-active",
        modifierClass: "swiper-pagination-",
        currentClass: "swiper-pagination-current",
        totalClass: "swiper-pagination-total",
        hiddenClass: "swiper-pagination-hidden",
        progressbarFillClass: "swiper-pagination-progressbar-fill",
        progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
        clickableClass: "swiper-pagination-clickable",
        lockClass: "swiper-pagination-lock"
      }
    },
    create: function create() {
      L(this, {
        pagination: ee({
          dynamicBulletIndex: 0
        }, te)
      });
    },
    on: {
      init: function init(e) {
        e.pagination.init(), e.pagination.render(), e.pagination.update();
      },
      activeIndexChange: function activeIndexChange(e) {
        (e.params.loop || void 0 === e.snapIndex) && e.pagination.update();
      },
      snapIndexChange: function snapIndexChange(e) {
        e.params.loop || e.pagination.update();
      },
      slidesLengthChange: function slidesLengthChange(e) {
        e.params.loop && (e.pagination.render(), e.pagination.update());
      },
      snapGridLengthChange: function snapGridLengthChange(e) {
        e.params.loop || (e.pagination.render(), e.pagination.update());
      },
      destroy: function destroy(e) {
        e.pagination.destroy();
      },
      click: function click(e, t) {
        e.params.pagination.el && e.params.pagination.hideOnClick && e.pagination.$el.length > 0 && !x(t.target).hasClass(e.params.pagination.bulletClass) && (!0 === e.pagination.$el.hasClass(e.params.pagination.hiddenClass) ? e.emit("paginationShow") : e.emit("paginationHide"), e.pagination.$el.toggleClass(e.params.pagination.hiddenClass));
      }
    }
  };
  K.use([Z, ie]), document.addEventListener("DOMContentLoaded", function () {
    new K("#reviews-slider", {
      speed: 400,
      spaceBetween: 100,
      loop: !0,
      direction: "horizontal",
      allowTouchMove: !0,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: !0
      }
    });
  });
}]);