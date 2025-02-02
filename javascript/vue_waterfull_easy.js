!(function (e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t())
    : 'function' == typeof define && (define.amd || defined.cmd)
    ? define([], t)
    : 'object' == typeof exports
    ? (exports.vueWaterfallEasy = t())
    : (e.vueWaterfallEasy = t());
})('undefined' != typeof self ? self : this, function () {
  return (function (e) {
    function t(i) {
      if (n[i]) return n[i].exports;
      var a = (n[i] = { i: i, l: !1, exports: {} });
      return e[i].call(a.exports, a, a.exports, t), (a.l = !0), a.exports;
    }
    var n = {};
    return (
      (t.m = e),
      (t.c = n),
      (t.d = function (e, n, i) {
        t.o(e, n) ||
          Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: i,
          });
      }),
      (t.n = function (e) {
        var n =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return t.d(n, 'a', n), n;
      }),
      (t.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (t.p = ''),
      t((t.s = 5))
    );
  })([
    function (e, t) {
      function n(e, t) {
        var n = e[1] || '',
          a = e[3];
        if (!a) return n;
        if (t && 'function' == typeof btoa) {
          var r = i(a);
          return [n]
            .concat(
              a.sources.map(function (e) {
                return '/*# sourceURL=' + a.sourceRoot + e + ' */';
              })
            )
            .concat([r])
            .join('\n');
        }
        return [n].join('\n');
      }
      function i(e) {
        return (
          '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,' +
          btoa(unescape(encodeURIComponent(JSON.stringify(e)))) +
          ' */'
        );
      }
      e.exports = function (e) {
        var t = [];
        return (
          (t.toString = function () {
            return this.map(function (t) {
              var i = n(t, e);
              return t[2] ? '@media ' + t[2] + '{' + i + '}' : i;
            }).join('');
          }),
          (t.i = function (e, n) {
            'string' == typeof e && (e = [[null, e, '']]);
            for (var i = {}, a = 0; a < this.length; a++) {
              var r = this[a][0];
              'number' == typeof r && (i[r] = !0);
            }
            for (a = 0; a < e.length; a++) {
              var s = e[a];
              ('number' == typeof s[0] && i[s[0]]) ||
                (n && !s[2]
                  ? (s[2] = n)
                  : n && (s[2] = '(' + s[2] + ') and (' + n + ')'),
                t.push(s));
            }
          }),
          t
        );
      };
    },
    function (e, t, n) {
      function i(e) {
        for (var t = 0; t < e.length; t++) {
          var n = e[t],
            i = c[n.id];
          if (i) {
            i.refs++;
            for (var a = 0; a < i.parts.length; a++) i.parts[a](n.parts[a]);
            for (; a < n.parts.length; a++) i.parts.push(r(n.parts[a]));
            i.parts.length > n.parts.length &&
              (i.parts.length = n.parts.length);
          } else {
            for (var s = [], a = 0; a < n.parts.length; a++)
              s.push(r(n.parts[a]));
            c[n.id] = { id: n.id, refs: 1, parts: s };
          }
        }
      }
      function a() {
        var e = document.createElement('style');
        return (e.type = 'text/css'), u.appendChild(e), e;
      }
      function r(e) {
        var t,
          n,
          i = document.querySelector('style[' + v + '~="' + e.id + '"]');
        if (i) {
          if (A) return p;
          i.parentNode.removeChild(i);
        }
        if (m) {
          var r = h++;
          (i = f || (f = a())),
            (t = s.bind(null, i, r, !1)),
            (n = s.bind(null, i, r, !0));
        } else
          (i = a()),
            (t = o.bind(null, i)),
            (n = function () {
              i.parentNode.removeChild(i);
            });
        return (
          t(e),
          function (i) {
            if (i) {
              if (
                i.css === e.css &&
                i.media === e.media &&
                i.sourceMap === e.sourceMap
              )
                return;
              t((e = i));
            } else n();
          }
        );
      }
      function s(e, t, n, i) {
        var a = n ? '' : i.css;
        if (e.styleSheet) e.styleSheet.cssText = b(t, a);
        else {
          var r = document.createTextNode(a),
            s = e.childNodes;
          s[t] && e.removeChild(s[t]),
            s.length ? e.insertBefore(r, s[t]) : e.appendChild(r);
        }
      }
      function o(e, t) {
        var n = t.css,
          i = t.media,
          a = t.sourceMap;
        if (
          (i && e.setAttribute('media', i),
          g.ssrId && e.setAttribute(v, t.id),
          a &&
            ((n += '\n/*# sourceURL=' + a.sources[0] + ' */'),
            (n +=
              '\n/*# sourceMappingURL=data:application/json;base64,' +
              btoa(unescape(encodeURIComponent(JSON.stringify(a)))) +
              ' */')),
          e.styleSheet)
        )
          e.styleSheet.cssText = n;
        else {
          for (; e.firstChild; ) e.removeChild(e.firstChild);
          e.appendChild(document.createTextNode(n));
        }
      }
      var l = 'undefined' != typeof document;
      if ('undefined' != typeof DEBUG && DEBUG && !l)
        throw new Error(
          "vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
        );
      var d = n(8),
        c = {},
        u = l && (document.head || document.getElementsByTagName('head')[0]),
        f = null,
        h = 0,
        A = !1,
        p = function () {},
        g = null,
        v = 'data-vue-ssr-id',
        m =
          'undefined' != typeof navigator &&
          /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
      e.exports = function (e, t, n, a) {
        (A = n), (g = a || {});
        var r = d(e, t);
        return (
          i(r),
          function (t) {
            for (var n = [], a = 0; a < r.length; a++) {
              var s = r[a],
                o = c[s.id];
              o.refs--, n.push(o);
            }
            t ? ((r = d(e, t)), i(r)) : (r = []);
            for (var a = 0; a < n.length; a++) {
              var o = n[a];
              if (0 === o.refs) {
                for (var l = 0; l < o.parts.length; l++) o.parts[l]();
                delete c[o.id];
              }
            }
          }
        );
      };
      var b = (function () {
        var e = [];
        return function (t, n) {
          return (e[t] = n), e.filter(Boolean).join('\n');
        };
      })();
    },
    function (e, t) {
      e.exports = function (e, t, n, i, a, r) {
        var s,
          o = (e = e || {}),
          l = typeof e.default;
        ('object' !== l && 'function' !== l) || ((s = e), (o = e.default));
        var d = 'function' == typeof o ? o.options : o;
        t &&
          ((d.render = t.render),
          (d.staticRenderFns = t.staticRenderFns),
          (d._compiled = !0)),
          n && (d.functional = !0),
          a && (d._scopeId = a);
        var c;
        if (
          (r
            ? ((c = function (e) {
                (e =
                  e ||
                  (this.$vnode && this.$vnode.ssrContext) ||
                  (this.parent &&
                    this.parent.$vnode &&
                    this.parent.$vnode.ssrContext)),
                  e ||
                    'undefined' == typeof __VUE_SSR_CONTEXT__ ||
                    (e = __VUE_SSR_CONTEXT__),
                  i && i.call(this, e),
                  e &&
                    e._registeredComponents &&
                    e._registeredComponents.add(r);
              }),
              (d._ssrRegister = c))
            : i && (c = i),
          c)
        ) {
          var u = d.functional,
            f = u ? d.render : d.beforeCreate;
          u
            ? ((d._injectStyles = c),
              (d.render = function (e, t) {
                return c.call(t), f(e, t);
              }))
            : (d.beforeCreate = f ? [].concat(f, c) : [c]);
        }
        return { esModule: s, exports: o, options: d };
      };
    },
    function (e, t, n) {
      'use strict';
      var i = n(9);
      t.a = {
        name: 'vue-waterfall-easy',
        components: { alink: i.a },
        props: {
          width: { type: Number },
          height: { type: [Number, String] },
          reachBottomDistance: { type: Number, default: 20 },
          loadingDotCount: { type: Number, default: 3 },
          loadingDotStyle: { type: Object },
          gap: { type: Number, default: 20 },
          mobileGap: { type: Number, default: 8 },
          maxCols: { type: Number, default: 5 },
          imgsArr: { type: Array, required: !0 },
          srcKey: { type: String, default: 'src' },
          hrefKey: { type: String, default: 'href' },
          imgWidth: { type: Number, default: 240 },
          isRouterLink: { type: Boolean, default: !1 },
          linkRange: { type: String, default: 'card' },
          loadingTimeOut: { type: Number, default: 500 },
          cardAnimationClass: {
            type: [String],
            default: 'default-card-animation',
          },
          enablePullDownEvent: { type: Boolean, default: !1 },
        },
        data: function () {
          return {
            msg: 'this is from vue-waterfall-easy.vue',
            isMobile: !!navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i),
            isPreloading: !0,
            isPreloading_c: !0,
            imgsArr_c: [],
            loadedCount: 0,
            cols: NaN,
            imgBoxEls: null,
            beginIndex: 0,
            colsHeightArr: [],
            LoadingTimer: null,
            isFirstLoad: !0,
            over: !1,
          };
        },
        computed: {
          colWidth: function () {
            return this.imgWidth + this.gap;
          },
          imgWidth_c: function () {
            return this.isMobile
              ? window.innerWidth / 2 - this.mobileGap
              : this.imgWidth;
          },
          hasLoadingSlot: function () {
            return !!this.$scopedSlots.loading;
          },
        },
        mounted: function () {
          var e = this;
          this.bindClickEvent(),
            this.loadingMiddle(),
            this.preload(),
            (this.cols = this.calcuCols()),
            this.$on('preloaded', function () {
              (e.isFirstLoad = !1),
                (e.imgsArr_c = e.imgsArr.concat([])),
                e.$nextTick(function () {
                  (e.isPreloading = !1),
                    (e.imgBoxEls = e.$el.getElementsByClassName('img-box')),
                    e.waterfall();
                });
            }),
            this.isMobile ||
              this.width ||
              window.addEventListener('resize', this.response),
            this.isMobile && this.enablePullDownEvent && this.pullDown(),
            this.scroll();
        },
        beforeDestroy: function () {
          window.removeEventListener('resize', this.response);
        },
        watch: {
          isPreloading: function (e, t) {
            var n = this;
            e
              ? setTimeout(function () {
                  n.isPreloading && (n.isPreloading_c = !0);
                }, this.loadingTimeOut)
              : (this.isPreloading_c = !1);
          },
          imgsArr: function (e, t) {
            (this.imgsArr_c.length > e.length ||
              (this.imgsArr_c.length > 0 && e[0] && !e[0]._height)) &&
              this.reset(),
              this.preload();
          },
        },
        methods: {
          preload: function (e, t) {
            var n = this;
            this.imgsArr.forEach(function (e, t) {
              if (!(t < n.loadedCount)) {
                if (!e[n.srcKey])
                  return (
                    (n.imgsArr[t]._height = '0'),
                    void (
                      ++n.loadedCount == n.imgsArr.length &&
                      n.$emit('preloaded')
                    )
                  );
                var i = new Image();
                (i.src = e[n.srcKey]),
                  (i.onload = i.onerror =
                    function (e) {
                      n.loadedCount++,
                        (n.imgsArr[t]._height =
                          'load' == e.type
                            ? Math.round(n.imgWidth_c / (i.width / i.height))
                            : n.isMobile
                            ? n.imgWidth_c
                            : n.imgWidth),
                        'error' == e.type &&
                          ((n.imgsArr[t]._error = !0),
                          n.$emit('imgError', n.imgsArr[t])),
                        n.loadedCount == n.imgsArr.length &&
                          n.$emit('preloaded');
                    });
              }
            });
          },
          calcuCols: function () {
            var e = this.width ? this.width : window.innerWidth,
              t = parseInt(e / this.colWidth);
            return (
              (t = 0 === t ? 1 : t),
              this.isMobile ? 2 : t > this.maxCols ? this.maxCols : t
            );
          },
          waterfall: function () {
            if (this.imgBoxEls) {
              var e,
                t,
                n,
                i = this.isMobile
                  ? this.imgBoxEls[0].offsetWidth
                  : this.colWidth;
              0 == this.beginIndex && (this.colsHeightArr = []);
              for (var a = this.beginIndex; a < this.imgsArr.length; a++) {
                if (!this.imgBoxEls[a]) return;
                if (((n = this.imgBoxEls[a].offsetHeight), a < this.cols))
                  this.colsHeightArr.push(n), (e = 0), (t = a * i);
                else {
                  var r = Math.min.apply(null, this.colsHeightArr),
                    s = this.colsHeightArr.indexOf(r);
                  (e = r), (t = s * i), (this.colsHeightArr[s] = r + n);
                }
                (this.imgBoxEls[a].style.left = t + 'px'),
                  (this.imgBoxEls[a].style.top = e + 'px');
              }
              this.beginIndex = this.imgsArr.length;
            }
          },
          response: function () {
            var e = this.cols;
            (this.cols = this.calcuCols()),
              e !== this.cols &&
                ((this.beginIndex = 0),
                this.waterfall(),
                this.over && this.setOverTipPos());
          },
          scrollFn: function () {
            var e = this.$refs.scrollEl;
            if (!this.isPreloading) {
              var t = Math.min.apply(null, this.colsHeightArr);
              e.scrollTop + e.offsetHeight > t - this.reachBottomDistance &&
                ((this.isPreloading = !0), this.$emit('scrollReachBottom'));
            }
          },
          scroll: function () {
            this.$refs.scrollEl.addEventListener('scroll', this.scrollFn);
          },
          waterfallOver: function () {
            this.$refs.scrollEl.removeEventListener('scroll', this.scrollFn),
              (this.isPreloading = !1),
              (this.over = !0),
              this.setOverTipPos();
          },
          setOverTipPos: function () {
            var e = this,
              t = Math.max.apply(null, this.colsHeightArr);
            this.$nextTick(function () {
              e.$refs.over.style.top = t + 'px';
            });
          },
          bindClickEvent: function () {
            var e = this;
            this.$el
              .querySelector('.vue-waterfall-easy')
              .addEventListener('click', function (t) {
                var n = t.target;
                if (
                  -1 === t.target.className.indexOf('over') &&
                  -1 == n.className.indexOf('img-box')
                ) {
                  for (; -1 == n.className.indexOf('img-inner-box'); )
                    n = n.parentNode;
                  var i = n.getAttribute('data-index');
                  e.$emit('click', t, { index: i, value: e.imgsArr_c[i] });
                }
              });
          },
          pullDown: function () {
            var e,
              t = this,
              n = this.$el.querySelector('.vue-waterfall-easy-scroll');
            n.addEventListener('touchmove', function (i) {
              if (0 === n.scrollTop) {
                var a = i.changedTouches[0];
                e || (e = a.pageY);
                var r = a.pageY - e;
                r > 0 && i.preventDefault(), t.$emit('pullDownMove', r);
              }
            }),
              n.addEventListener('touchend', function (i) {
                0 === n.scrollTop && ((e = NaN), t.$emit('pullDownEnd'));
              });
          },
          loadingMiddle: function () {
            var e = this.$el.querySelector('.vue-waterfall-easy-scroll'),
              t = e.offsetWidth - e.clientWidth;
            this.$el.querySelector('.loading').style.marginLeft = -t / 2 + 'px';
          },
          reset: function () {
            (this.imgsArr_c = []),
              (this.beginIndex = 0),
              (this.loadedCount = 0),
              (this.isFirstLoad = !0),
              (this.isPreloading = !0),
              this.scroll(),
              (this.over = !1);
          },
        },
      };
    },
    function (e, t, n) {
      'use strict';
      t.a = {
        name: 'alink',
        props: ['to'],
        data: function () {
          return { msg: 'this is from alink.vue' };
        },
        methods: {},
      };
    },
    function (e, t, n) {
      'use strict';
      function i(e) {
        s || n(6);
      }
      Object.defineProperty(t, '__esModule', { value: !0 });
      var a = n(3),
        r = n(13),
        s = !1,
        o = n(2),
        l = i,
        d = o(a.a, r.a, !1, l, 'data-v-ded6b974', null);
      (d.options.__file = 'src\\vue-waterfall-easy\\vue-waterfall-easy.vue'),
        (t.default = d.exports);
    },
    function (e, t, n) {
      var i = n(7);
      'string' == typeof i && (i = [[e.i, i, '']]),
        i.locals && (e.exports = i.locals);
      n(1)('5fd04388', i, !1, {});
    },
    function (e, t, n) {
      (t = e.exports = n(0)(!1)),
        t.push([
          e.i,
          '\n.vue-waterfall-easy-container[data-v-ded6b974] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n.vue-waterfall-easy-container .vue-waterfall-easy-scroll[data-v-ded6b974] {\n    position: relative;\n    width: 100%;\n    height: 100%;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    -webkit-overflow-scrolling: touch;\n}\n.vue-waterfall-easy-container .vue-waterfall-easy[data-v-ded6b974] {\n    position: absolute;\n    width: 100%;\n}\n@-webkit-keyframes show-card-data-v-ded6b974 {\n0% {\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5);\n}\n100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n}\n}\n@keyframes show-card-data-v-ded6b974 {\n0% {\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5);\n}\n100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n}\n}\n.vue-waterfall-easy-container .vue-waterfall-easy > .img-box[data-v-ded6b974] {\n      position: absolute;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      width: 50%;\n}\n.vue-waterfall-easy-container .vue-waterfall-easy > .img-box.default-card-animation[data-v-ded6b974] {\n      -webkit-animation: show-card-data-v-ded6b974 0.4s;\n              animation: show-card-data-v-ded6b974 0.4s;\n      -webkit-transition: left 0.6s, top 0.6s;\n      transition: left 0.6s, top 0.6s;\n      -webkit-transition-delay: 0.1s;\n              transition-delay: 0.1s;\n}\n.vue-waterfall-easy-container .vue-waterfall-easy a[data-v-ded6b974] {\n      display: block;\n}\n.vue-waterfall-easy-container .vue-waterfall-easy a.img-inner-box[data-v-ded6b974] {\n      -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);\n              box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);\n      border-radius: 4px;\n}\n.vue-waterfall-easy-container .vue-waterfall-easy .__err__ .img-wraper[data-v-ded6b974] {\n      background-image: url(data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAAeAAD/4QMraHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjk1M0JCM0QwNkVFNDExRThCNTJCQUQ2RDFGQzg0NzIxIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjk1M0JCM0NGNkVFNDExRThCNTJCQUQ2RDFGQzg0NzIxIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTYwRUMyMDE2RUUzMTFFOEJCRTU5RTFDODg1ODgwMjYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QTYwRUMyMDI2RUUzMTFFOEJCRTU5RTFDODg1ODgwMjYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAQCwsLDAsQDAwQFw8NDxcbFBAQFBsfFxcXFxcfHhcaGhoaFx4eIyUnJSMeLy8zMy8vQEBAQEBAQEBAQEBAQEBAAREPDxETERUSEhUUERQRFBoUFhYUGiYaGhwaGiYwIx4eHh4jMCsuJycnLis1NTAwNTVAQD9AQEBAQEBAQEBAQED/wAARCACRAJEDASIAAhEBAxEB/8QAZQAAAwEBAQAAAAAAAAAAAAAAAAIDAQQHAQEAAAAAAAAAAAAAAAAAAAAAEAACAQMDBAEFAAMBAAAAAAAAAQIRMQMhQRJRYYEycZHBIkITsdFSYhEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A9AAAAAMFnNQWt9kAwkssVbV9CTnKb10XQVtLSyAd5ZuzURW27yfhmX9RlDI+wD4Vf/ZVi41SKCdeNI3YEnOXJtOiBZZr/wBGcMi2Ft7AXjli76PoOcqael0Mpyg9NV0A6QEhNTWl90MBoAAAAAAGGiTlxjXfZAZkycdEqyI3q26sOrd92CTm6bbsA1boh1i3lqPGKiqIZAYklYHY0x6tIDY2B3NdjEBgNJ3NACTxbx0E1TozoYsoqSowI2o06MtjyctGqSItODptsw6NX2YHSaJCXKNd90OAAAAYznnLnJvZWK5pUjRXloiNdwCjk0l9S0YqKohcSpGrvLUcDUBLK23x23FWNtVSAuHch/KXQP5PoBdqq77GJ1XfczFVKjVBcuPk6rXqBQCH8n0D+UugFwZD+bV1oNif5OOzQDyipKjI0cW0/qXYmVVjVXjqAkZcHXZ3OhHNXcthlWNHeOjAoAABDLKs6bISlWl1Busm+42Jfm30At2BmI1gRy+3gpD1XwTy+3gpH1QDASyt8uKdFuJRw1iwOjdBKy+TIutGbK3kAAxtJNuwiywdmA7s/glj9/BV04unQli9l8AWDsBjAhSja6D4pUnTZmZV+afUVOkk+4HUBgAc0bD4v2+fsJGw+L9vn7AVQMEDAjl9vBSHqvgnl9vBSHqvgDJwbfJC8JPSlEO5wTo3qMnUDEqNGz0jXoD08BRSXyBB/m6u2xvFPQ1qjoDAVNxqv1ZuJUnT5BGw9/AFQYAwJZf1+fsJKw+X9fn7CSsB0AAAc7VG13GxP82uoZFSbezFWkkwOgGCBgRy15adDZTaioq7QZPfwZQDFFfPc2MnB0vE1AwCc+WituPjaS4kzU6agPkS9hEVeqJJU0AAh7+ACHv4AqAAwI5X+aXQVKrS7g3WTY2ONZp7IC9AAAJ5lWNf+dSV1XqdL1VGc8lxk47bAUxyqqO60GIpuL5LyuxZNNVVtmAmVfkpbbi1RYAI1QVRYAI1QJ1aRYzdAbJ8Y1I1RZggI1SNxL8uW1NCoAYxckqKiu9Bm0lV23ZFtyfJ+F2Ayyr0K4VSNf8ArUnFcpKO250LRUQABoAYLkhzXdWHMA5u26uNGXF9tx8uOusfYlbTcC6aaqrdTTnTlHVfQrHJF6PRsBwAAC5i9vg0xbgaAIAAxtJVduosskVotWiTcpav6ANKXJ9the27sF9NyuLHTWXsA2OHBd3cYDQAAAAAAAwSeNS1syhgHNRxdJfUK10ujoaTuJLCrp0Amm1Ztdhv6z3Sfkxwmu4leqoBT+1P1f8AkZy4469daEaopllRqPRAH9ZOyp5Fbbu2+xmuyGUJvsAtaaWQUcnSP1Kxwq7dR0krALDGo63Y4GgAAAAAAAAAAAAAAAAAshJ7AAGK6B3YABsNx4gADAAAAAAAAAAAAAf/2Q==);\n      background-repeat: no-repeat;\n      background-position: center;\n      background-size: 50% 50%;\n}\n.vue-waterfall-easy-container .vue-waterfall-easy .__err__ .img-wraper img[data-v-ded6b974] {\n        display: none;\n}\n.vue-waterfall-easy-container .vue-waterfall-easy a.img-wraper > img[data-v-ded6b974] {\n      width: 100%;\n      display: block;\n      border: none;\n}\n.vue-waterfall-easy-container .vue-waterfall-easy .over[data-v-ded6b974] {\n      position: absolute;\n      width: 100%;\n      text-align: center;\n      font-size: 12px;\n      line-height: 1.6;\n      color: #aaa;\n}\n.vue-waterfall-easy-container > .loading.first[data-v-ded6b974] {\n    bottom: 50%;\n    -webkit-transform: translate(-50%, 50%);\n            transform: translate(-50%, 50%);\n}\n.vue-waterfall-easy-container > .loading[data-v-ded6b974] {\n    position: absolute;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n    bottom: 6px;\n    z-index: 999;\n}\n@-webkit-keyframes ball-beat-data-v-ded6b974 {\n50% {\n    opacity: 0.2;\n    -webkit-transform: scale(0.75);\n            transform: scale(0.75);\n}\n100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n}\n}\n@keyframes ball-beat-data-v-ded6b974 {\n50% {\n    opacity: 0.2;\n    -webkit-transform: scale(0.75);\n            transform: scale(0.75);\n}\n100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n}\n}\n.vue-waterfall-easy-container > .loading.ball-beat > .dot[data-v-ded6b974] {\n      vertical-align: bottom;\n      background-color: #4b15ab;\n      width: 12px;\n      height: 12px;\n      border-radius: 50%;\n      margin: 3px;\n      -webkit-animation-fill-mode: both;\n              animation-fill-mode: both;\n      display: inline-block;\n      -webkit-animation: ball-beat-data-v-ded6b974 0.7s 0s infinite linear;\n              animation: ball-beat-data-v-ded6b974 0.7s 0s infinite linear;\n}\n.vue-waterfall-easy-container > .loading.ball-beat > .dot[data-v-ded6b974]:nth-child(2n-1) {\n      -webkit-animation-delay: 0.35s;\n              animation-delay: 0.35s;\n}\n',
          '',
        ]);
    },
    function (e, t) {
      e.exports = function (e, t) {
        for (var n = [], i = {}, a = 0; a < t.length; a++) {
          var r = t[a],
            s = r[0],
            o = r[1],
            l = r[2],
            d = r[3],
            c = { id: e + ':' + a, css: o, media: l, sourceMap: d };
          i[s] ? i[s].parts.push(c) : n.push((i[s] = { id: s, parts: [c] }));
        }
        return n;
      };
    },
    function (e, t, n) {
      'use strict';
      function i(e) {
        s || n(10);
      }
      var a = n(4),
        r = n(12),
        s = !1,
        o = n(2),
        l = i,
        d = o(a.a, r.a, !1, l, null, null);
      (d.options.__file = 'src\\vue-waterfall-easy\\components\\alink.vue'),
        (t.a = d.exports);
    },
    function (e, t, n) {
      var i = n(11);
      'string' == typeof i && (i = [[e.i, i, '']]),
        i.locals && (e.exports = i.locals);
      n(1)('75b4b0a0', i, !1, {});
    },
    function (e, t, n) {
      (t = e.exports = n(0)(!1)), t.push([e.i, '', '']);
    },
    function (e, t, n) {
      'use strict';
      var i = function () {
          var e = this,
            t = e.$createElement;
          return (e._self._c || t)(
            'a',
            { staticClass: 'alink', attrs: { href: e.to, target: '_blank' } },
            [e._t('default')],
            2
          );
        },
        a = [];
      i._withStripped = !0;
      var r = { render: i, staticRenderFns: a };
      t.a = r;
    },
    function (e, t, n) {
      'use strict';
      var i = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            'div',
            {
              staticClass: 'vue-waterfall-easy-container',
              style: {
                width: e.width && !e.isMobile ? e.width + 'px' : '',
                height:
                  parseFloat(e.height) == e.height ? e.height + 'px' : e.height,
              },
            },
            [
              n(
                'div',
                {
                  directives: [
                    {
                      name: 'show',
                      rawName: 'v-show',
                      value: e.isPreloading_c,
                      expression: 'isPreloading_c',
                    },
                  ],
                  staticClass: 'loading ball-beat',
                  class: { first: e.isFirstLoad },
                },
                [
                  e._t('loading', null, { isFirstLoad: e.isFirstLoad }),
                  e._l(e.loadingDotCount, function (t) {
                    return e.hasLoadingSlot
                      ? e._e()
                      : n('div', {
                          staticClass: 'dot',
                          style: e.loadingDotStyle,
                        });
                  }),
                ],
                2
              ),
              n(
                'div',
                { ref: 'scrollEl', staticClass: 'vue-waterfall-easy-scroll' },
                [
                  e._t('waterfall-head'),
                  n(
                    'div',
                    {
                      staticClass: 'vue-waterfall-easy',
                      style: e.isMobile
                        ? ''
                        : {
                            width: e.colWidth * e.cols + 'px',
                            left: '50%',
                            marginLeft: (-1 * e.colWidth * e.cols) / 2 + 'px',
                          },
                    },
                    [
                      e._l(e.imgsArr_c, function (t, i) {
                        return n(
                          'div',
                          {
                            staticClass: 'img-box',
                            class: [
                              e.cardAnimationClass,
                              { __err__: t._error },
                            ],
                            style: {
                              padding:
                                (e.isMobile ? e.mobileGap : e.gap) / 2 + 'px',
                              width: e.isMobile ? '' : e.colWidth + 'px',
                            },
                          },
                          [
                            n(
                              e.isRouterLink && 'card' == e.linkRange
                                ? 'router-link'
                                : 'alink',
                              {
                                tag: 'component',
                                staticClass: 'img-inner-box',
                                attrs: {
                                  'data-index': i,
                                  to: 'card' == e.linkRange && t[e.hrefKey],
                                },
                              },
                              [
                                t[e.srcKey]
                                  ? n(
                                      e.isRouterLink && 'img' == e.linkRange
                                        ? 'router-link'
                                        : 'alink',
                                      {
                                        tag: 'component',
                                        staticClass: 'img-wraper',
                                        style: {
                                          width: e.imgWidth_c + 'px',
                                          height:
                                            !!t._height && t._height + 'px',
                                        },
                                        attrs: {
                                          to:
                                            'img' == e.linkRange &&
                                            t[e.hrefKey],
                                        },
                                      },
                                      [
                                        n('img', {
                                          attrs: { src: t[e.srcKey] },
                                        }),
                                      ]
                                    )
                                  : e._e(),
                                e._t('default', null, { index: i, value: t }),
                              ],
                              2
                            ),
                          ],
                          1
                        );
                      }),
                      e.over
                        ? n(
                            'div',
                            { ref: 'over', staticClass: 'over' },
                            [e._t('waterfall-over', [e._v('被你看光了')])],
                            2
                          )
                        : e._e(),
                    ],
                    2
                  ),
                ],
                2
              ),
            ]
          );
        },
        a = [];
      i._withStripped = !0;
      var r = { render: i, staticRenderFns: a };
      t.a = r;
    },
  ]).default;
});
