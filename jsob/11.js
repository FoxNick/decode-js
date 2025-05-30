(() => {
  function b(O) {
    b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (R) {
      return typeof R;
    } : function (R) {
      return R && "function" == typeof Symbol && R.constructor === Symbol && R !== Symbol.prototype ? "symbol" : typeof R;
    };
    return b(O);
  }
  function c(O, P) {
    var R = "undefined" != typeof Symbol && O[Symbol.iterator] || O["@@iterator"];
    if (!R) {
      if (Array.isArray(O) || (R = d(O)) || P && O && "number" == typeof O.length) {
        R && (O = R);
        var S = 0,
          T = function () {};
        return {
          s: T,
          n: function () {
            var a0 = {
              done: true
            };
            return S >= O.length ? a0 : {
              done: false,
              value: O[S++]
            };
          },
          e: function (Z) {
            throw Z;
          },
          f: T
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var U,
      V = true,
      W = false;
    return {
      s: function () {
        R = R.call(O);
      },
      n: function () {
        var a0 = R.next();
        V = a0.done;
        return a0;
      },
      e: function (a0) {
        W = true;
        U = a0;
      },
      f: function () {
        try {
          V || null == R.return || R.return();
        } finally {
          if (W) {
            throw U;
          }
        }
      }
    };
  }
  function d(O, P) {
    if (O) {
      if ("string" == typeof O) {
        return f(O, P);
      }
      var R = {}.toString.call(O).slice(8, -1);
      "Object" === R && O.constructor && (R = O.constructor.name);
      return "Map" === R || "Set" === R ? Array.from(O) : "Arguments" === R || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(R) ? f(O, P) : undefined;
    }
  }
  function f(O, P) {
    (null == P || P > O.length) && (P = O.length);
    for (var Q = 0, R = Array(P); Q < P; Q++) {
      R[Q] = O[Q];
    }
    return R;
  }
  function g() {
    'use strict';

    g = function () {
      return Q;
    };
    var P,
      Q = {},
      R = Object.prototype,
      U = R.hasOwnProperty,
      V = Object.defineProperty || function (an, ao, ap) {
        an[ao] = ap.value;
      },
      W = "function" == typeof Symbol ? Symbol : {},
      X = W.iterator || "@@iterator",
      Y = W.asyncIterator || "@@asyncIterator",
      Z = W.toStringTag || "@@toStringTag";
    function a0(an, ao, ap) {
      var aq = {
        value: ap,
        enumerable: true,
        configurable: true,
        writable: true
      };
      Object.defineProperty(an, ao, aq);
      return an[ao];
    }
    try {
      a0({}, "");
    } catch (ao) {
      a0 = function (ap, aq, ar) {
        return ap[aq] = ar;
      };
    }
    function a1(aq, ar, as, at) {
      var av = ar && ar.prototype instanceof a8 ? ar : a8,
        aw = Object.create(av.prototype),
        ax = new al(at || []);
      V(aw, "_invoke", {
        value: ah(aq, as, ax)
      });
      return aw;
    }
    function a2(aq, ar, as) {
      try {
        return {
          type: "normal",
          arg: aq.call(ar, as)
        };
      } catch (aw) {
        var au = {
          type: "throw",
          arg: aw
        };
        return au;
      }
    }
    Q.wrap = a1;
    var a3 = "suspendedStart",
      a4 = "suspendedYield",
      a5 = "executing",
      a6 = "completed",
      a7 = {};
    function a8() {}
    function a9() {}
    function aa() {}
    var ab = {};
    a0(ab, X, function () {
      return this;
    });
    var ac = Object.getPrototypeOf,
      ad = ac && ac(ac(am([])));
    ad && ad !== R && U.call(ad, X) && (ab = ad);
    aa.prototype = a8.prototype = Object.create(ab);
    var ae = aa.prototype;
    function af(aq) {
      ["next", "throw", "return"].forEach(function (at) {
        a0(aq, at, function (av) {
          return this._invoke(at, av);
        });
      });
    }
    function ag(aq, ar) {
      function av(aw, ax, ay, az) {
        var aB = a2(aq[aw], aq, ax);
        if ("throw" !== aB.type) {
          var aC = aB.arg,
            aD = aC.value;
          return aD && "object" == b(aD) && U.call(aD, "__await") ? ar.resolve(aD.__await).then(function (aG) {
            av("next", aG, ay, az);
          }, function (aG) {
            av("throw", aG, ay, az);
          }) : ar.resolve(aD).then(function (aG) {
            aC.value = aG;
            ay(aC);
          }, function (aG) {
            return av("throw", aG, ay, az);
          });
        }
        az(aB.arg);
      }
      var at;
      V(this, "_invoke", {
        value: function (aw, ax) {
          function az() {
            return new ar(function (aC, aD) {
              av(aw, ax, aC, aD);
            });
          }
          return at = at ? at.then(az, az) : az();
        }
      });
    }
    function ah(aq, ar, as) {
      var au = a3;
      return function (av, aw) {
        if (au === a5) {
          throw Error("Generator is already running");
        }
        if (au === a6) {
          if ("throw" === av) {
            throw aw;
          }
          var ay = {};
          ay.value = P;
          ay.done = true;
          return ay;
        }
        for (as.method = av, as.arg = aw;;) {
          var az = as.delegate;
          if (az) {
            var aA = ai(az, as);
            if (aA) {
              if (aA === a7) {
                continue;
              }
              return aA;
            }
          }
          if ("next" === as.method) {
            as.sent = as._sent = as.arg;
          } else {
            if ("throw" === as.method) {
              if (au === a3) {
                throw au = a6, as.arg;
              }
              as.dispatchException(as.arg);
            } else {
              "return" === as.method && as.abrupt("return", as.arg);
            }
          }
          au = a5;
          var aB = a2(aq, ar, as);
          if ("normal" === aB.type) {
            if (au = as.done ? a6 : a4, aB.arg === a7) {
              continue;
            }
            var aC = {};
            aC.value = aB.arg;
            aC.done = as.done;
            return aC;
          }
          "throw" === aB.type && (au = a6, as.method = "throw", as.arg = aB.arg);
        }
      };
    }
    function ai(aq, ar) {
      var aw = ar.method,
        ax = aq.iterator[aw];
      if (ax === P) {
        ar.delegate = null;
        "throw" === aw && aq.iterator.return && (ar.method = "return", ar.arg = P, ai(aq, ar), "throw" === ar.method) || "return" !== aw && (ar.method = "throw", ar.arg = new TypeError("The iterator does not provide a '" + aw + "' method"));
        return a7;
      }
      var au = a2(ax, aq.iterator, ar.arg);
      if ("throw" === au.type) {
        ar.method = "throw";
        ar.arg = au.arg;
        ar.delegate = null;
        return a7;
      }
      var av = au.arg;
      return av ? av.done ? (ar[aq.resultName] = av.value, ar.next = aq.nextLoc, "return" !== ar.method && (ar.method = "next", ar.arg = P), ar.delegate = null, a7) : av : (ar.method = "throw", ar.arg = new TypeError("iterator result is not an object"), ar.delegate = null, a7);
    }
    function aj(aq) {
      var ar = {
        tryLoc: aq[0]
      };
      var as = ar;
      1 in aq && (as.catchLoc = aq[1]);
      2 in aq && (as.finallyLoc = aq[2], as.afterLoc = aq[3]);
      this.tryEntries.push(as);
    }
    function ak(aq) {
      var at = aq.completion || {};
      at.type = "normal";
      delete at.arg;
      aq.completion = at;
    }
    function al(aq) {
      var ar = {
        tryLoc: "root"
      };
      this.tryEntries = [ar];
      aq.forEach(aj, this);
      this.reset(true);
    }
    function am(aq) {
      if (aq || "" === aq) {
        var as = aq[X];
        if (as) {
          return as.call(aq);
        }
        if ("function" == typeof aq.next) {
          return aq;
        }
        if (!isNaN(aq.length)) {
          var at = -1,
            au = function av() {
              for (; ++at < aq.length;) {
                if (U.call(aq, at)) {
                  av.value = aq[at];
                  av.done = false;
                  return av;
                }
              }
              av.value = P;
              av.done = true;
              return av;
            };
          return au.next = au;
        }
      }
      throw new TypeError(b(aq) + " is not iterable");
    }
    a9.prototype = aa;
    V(ae, "constructor", {
      value: aa,
      configurable: true
    });
    V(aa, "constructor", {
      value: a9,
      configurable: true
    });
    a9.displayName = a0(aa, Z, "GeneratorFunction");
    Q.isGeneratorFunction = function (aq) {
      var as = "function" == typeof aq && aq.constructor;
      return !!as && (as === a9 || "GeneratorFunction" === (as.displayName || as.name));
    };
    Q.mark = function (aq) {
      Object.setPrototypeOf ? Object.setPrototypeOf(aq, aa) : (aq.__proto__ = aa, a0(aq, Z, "GeneratorFunction"));
      aq.prototype = Object.create(ae);
      return aq;
    };
    Q.awrap = function (aq) {
      var ar = {
        __await: aq
      };
      return ar;
    };
    af(ag.prototype);
    a0(ag.prototype, Y, function () {
      return this;
    });
    Q.AsyncIterator = ag;
    Q.async = function (aq, ar, as, at, au) {
      undefined === au && (au = Promise);
      var aw = new ag(a1(aq, ar, as, at), au);
      return Q.isGeneratorFunction(ar) ? aw : aw.next().then(function (ax) {
        return ax.done ? ax.value : aw.next();
      });
    };
    af(ae);
    a0(ae, Z, "Generator");
    a0(ae, X, function () {
      return this;
    });
    a0(ae, "toString", function () {
      return "[object Generator]";
    });
    Q.keys = function (aq) {
      var as = Object(aq),
        at = [];
      for (var au in as) at.push(au);
      at.reverse();
      return function aw() {
        for (; at.length;) {
          var ay = at.pop();
          if (ay in as) {
            aw.value = ay;
            aw.done = false;
            return aw;
          }
        }
        aw.done = true;
        return aw;
      };
    };
    Q.values = am;
    al.prototype = {
      constructor: al,
      reset: function (aq) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = P, this.done = false, this.delegate = null, this.method = "next", this.arg = P, this.tryEntries.forEach(ak), !aq) {
          for (var ar in this) "t" === ar.charAt(0) && U.call(this, ar) && !isNaN(+ar.slice(1)) && (this[ar] = P);
        }
      },
      stop: function () {
        this.done = true;
        var aq = this.tryEntries[0].completion;
        if ("throw" === aq.type) {
          throw aq.arg;
        }
        return this.rval;
      },
      dispatchException: function (aq) {
        if (this.done) {
          throw aq;
        }
        var as = this;
        function az(aA, aB) {
          av.type = "throw";
          av.arg = aq;
          as.next = aA;
          aB && (as.method = "next", as.arg = P);
          return !!aB;
        }
        for (var at = this.tryEntries.length - 1; at >= 0; --at) {
          var au = this.tryEntries[at],
            av = au.completion;
          if ("root" === au.tryLoc) {
            return az("end");
          }
          if (au.tryLoc <= this.prev) {
            var aw = U.call(au, "catchLoc"),
              ax = U.call(au, "finallyLoc");
            if (aw && ax) {
              if (this.prev < au.catchLoc) {
                return az(au.catchLoc, true);
              }
              if (this.prev < au.finallyLoc) {
                return az(au.finallyLoc);
              }
            } else {
              if (aw) {
                if (this.prev < au.catchLoc) {
                  return az(au.catchLoc, true);
                }
              } else {
                if (!ax) {
                  throw Error("try statement without catch or finally");
                }
                if (this.prev < au.finallyLoc) {
                  return az(au.finallyLoc);
                }
              }
            }
          }
        }
      },
      abrupt: function (aq, ar) {
        for (var as = this.tryEntries.length - 1; as >= 0; --as) {
          var at = this.tryEntries[as];
          if (at.tryLoc <= this.prev && U.call(at, "finallyLoc") && this.prev < at.finallyLoc) {
            var au = at;
            break;
          }
        }
        au && ("break" === aq || "continue" === aq) && au.tryLoc <= ar && ar <= au.finallyLoc && (au = null);
        var av = au ? au.completion : {};
        av.type = aq;
        av.arg = ar;
        return au ? (this.method = "next", this.next = au.finallyLoc, a7) : this.complete(av);
      },
      complete: function (aq, ar) {
        if ("throw" === aq.type) {
          throw aq.arg;
        }
        "break" === aq.type || "continue" === aq.type ? this.next = aq.arg : "return" === aq.type ? (this.rval = this.arg = aq.arg, this.method = "return", this.next = "end") : "normal" === aq.type && ar && (this.next = ar);
        return a7;
      },
      finish: function (aq) {
        for (var ar = this.tryEntries.length - 1; ar >= 0; --ar) {
          var as = this.tryEntries[ar];
          if (as.finallyLoc === aq) {
            this.complete(as.completion, as.afterLoc);
            ak(as);
            return a7;
          }
        }
      },
      catch: function (aq) {
        for (var at = this.tryEntries.length - 1; at >= 0; --at) {
          var au = this.tryEntries[at];
          if (au.tryLoc === aq) {
            var av = au.completion;
            if ("throw" === av.type) {
              var aw = av.arg;
              ak(au);
            }
            return aw;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function (aq, ar, as) {
        this.delegate = {
          iterator: am(aq),
          resultName: ar,
          nextLoc: as
        };
        "next" === this.method && (this.arg = P);
        return a7;
      }
    };
    return Q;
  }
  function h(O, P, Q, R, S, T, U) {
    try {
      var W = O[T](U),
        X = W.value;
    } catch (Z) {
      return void Q(Z);
    }
    W.done ? P(X) : Promise.resolve(X).then(R, S);
  }
  function i(O) {
    return function () {
      var R = this,
        S = arguments;
      return new Promise(function (T, U) {
        var W = O.apply(R, S);
        function X(Z) {
          h(W, T, U, X, Y, "next", Z);
        }
        function Y(Z) {
          h(W, T, U, X, Y, "throw", Z);
        }
        X(undefined);
      });
    };
  }
  var j = ($.isNode() ? JSON.parse(process.env.YiLi) : $.getjson("YiLi")) || [],
    k = "true" === ($.isNode() ? process.env.YiLi_Open : $.getdata("YiLi_Open")) || false,
    l = undefined,
    m = "",
    n = "",
    o = "",
    p = "",
    q = "",
    r = "",
    s = "",
    t = "2",
    u = "2",
    v = "",
    w = [],
    x = "";
  function y() {
    return z.apply(this, arguments);
  }
  function z() {
    z = i(g().mark(function O() {
      var Q, R, S, T, U, V, W, X, Y, Z, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, aa, ab, ac, ad, ae;
      return g().wrap(function (af) {
        for (;;) {
          switch (af.prev = af.next) {
            case 0:
              console.log("作者：@xzxxn777\n频道：https://t.me/xzxxn777\n群组：https://t.me/xzxxn7777\n自用机场推荐：https://xn--diqv0fut7b.com\n");
              af.next = 3;
              return K();
            case 3:
              l = af.sent;
              Q = c(j);
              af.prev = 5;
              Q.s();
            case 7:
              if ((R = Q.n()).done) {
                af.next = 64;
                break;
              }
              S = R.value;
              m = S.mobile;
              s = S.unionId;
              p = S.nickName;
              o = S.avatarUrl;
              r = S.openId;
              q = S.yiliToken;
              console.log("用户：".concat(m, "开始任务"));
              af.next = 18;
              return C("/developer/oauth2/buyer/authorize?app_key=zdcade261b48eb4c5e");
            case 18:
              T = af.sent;
              af.next = 21;
              return E("/v2/wechat/applet/set-user-info", {
                headImg: o,
                phoneNum: m,
                nickName: p,
                openId: r,
                unionId: s,
                ciphertext: l.md5(s + "ui@op9889;as98gh12c3b1&!jiasdasdjlkyf98r4y3ujfnakhjrf098"),
                authorizationCode: T.data
              });
            case 21:
              if (U = af.sent, 200 == U.code) {
                af.next = 27;
                break;
              }
              console.log(U.message);
              af.next = 26;
              return M("用户：".concat(m, "\nyiliToken已过期，请重新获取"));
            case 26:
              return af.abrupt("continue", 62);
            case 27:
              console.log("登录成功");
              n = U.data.token;
              t = U.data.num1;
              u = U.data.num2;
              v = "";
              af.next = 34;
              return G("/fragmentActivity/fragment?activityId=1&openId=".concat(r));
            case 34:
              V = af.sent;
              W = c(V.data);
              af.prev = 36;
              W.s();
            case 38:
              if ((X = W.n()).done) {
                af.next = 53;
                break;
              }
              if (Y = X.value, !(Y.num > 0)) {
                af.next = 51;
                break;
              }
              af.next = 43;
              return G("/send/blessing?openId=".concat(r));
            case 43:
              Z = af.sent;
              console.log("祝福语：".concat(Z.data.statement));
              af.next = 47;
              return G("/send/card/code?fragmentId=5&blessingId=".concat(Z.data.id, "&openId=").concat(r));
            case 47:
              a0 = af.sent;
              console.log("赠送卡片：".concat(Y.fragmentName, " 口令：").concat(a0.data));
              v = a0.data;
              return af.abrupt("break", 53);
            case 51:
              af.next = 38;
              break;
            case 53:
              af.next = 58;
              break;
            case 55:
              af.prev = 55;
              af.t0 = af.catch(36);
              W.e(af.t0);
            case 58:
              af.prev = 58;
              W.f();
              return af.finish(58);
            case 61:
              var ai = {};
              ai.mobile = m;
              ai.token = n;
              ai.type = t;
              ai.type1 = u;
              ai.openId = r;
              ai.cardCode = v;
              w.push(ai);
            case 62:
              af.next = 7;
              break;
            case 64:
              af.next = 69;
              break;
            case 66:
              af.prev = 66;
              af.t1 = af.catch(5);
              Q.e(af.t1);
            case 69:
              af.prev = 69;
              Q.f();
              return af.finish(69);
            case 72:
              a1 = 0;
            case 73:
              if (!(a1 < w.length)) {
                af.next = 145;
                break;
              }
              if (m = w[a1].mobile, n = w[a1].token, t = w[a1].type, u = w[a1].type1, r = w[a1].openId, console.log("用户：".concat(m, "开始任务")), v = a1 + 1 >= w.length ? w[0].cardCode : w[a1 + 1].cardCode, !v) {
                af.next = 86;
                break;
              }
              af.next = 84;
              return G("/send/receive/card?linkCode=".concat(v, "&openId=").concat(r));
            case 84:
              a2 = af.sent;
              console.log("领取卡片：".concat(a2.message));
            case 86:
              af.next = 88;
              return G("/fragment/ticket/ticket-info?openId=".concat(r));
            case 88:
              if (a3 = af.sent, a3.data.sign) {
                af.next = 94;
                break;
              }
              af.next = 92;
              return G("/fragment/ticket/sign?openId=".concat(r));
            case 92:
              a4 = af.sent;
              console.log("签到：".concat(a4.message));
            case 94:
              if (a3.data.seePage) {
                af.next = 99;
                break;
              }
              af.next = 97;
              return G("/fragment/ticket/see-page?openId=".concat(r));
            case 97:
              a5 = af.sent;
              console.log("浏览：".concat(a5.message));
            case 99:
              af.next = 101;
              return G("/fragment/ticket/get?openId=".concat(r));
            case 101:
              a6 = af.sent;
              console.log("拥有抽卡次数：".concat(a6.data, "次"));
              a7 = 0;
            case 104:
              if (!(a7 < a6.data)) {
                af.next = 112;
                break;
              }
              af.next = 107;
              return G("/fragmentActivity/lottery?activityId=1&openId=".concat(r));
            case 107:
              a8 = af.sent;
              console.log("抽卡获得：".concat(a8.data.fragmentName));
            case 109:
              a7++;
              af.next = 104;
              break;
            case 112:
              af.next = 114;
              return G("/fragmentActivity/fragment?activityId=1&openId=".concat(r));
            case 114:
              a9 = af.sent;
              aa = c(a9.data);
              af.prev = 116;
              aa.s();
            case 118:
              if ((ab = aa.n()).done) {
                af.next = 134;
                break;
              }
              if (ac = ab.value, console.log("卡片：".concat(ac.fragmentName, " 数量：").concat(ac.num)), !(ac.num > 1 && k)) {
                af.next = 132;
                break;
              }
              ad = 1;
            case 123:
              if (!(ad < ac.num)) {
                af.next = 132;
                break;
              }
              af.next = 126;
              return G("/fragmentActivity/open-prize?fragmentId=".concat(ac.fragmentId, "&activityId=1&openId=").concat(r));
            case 126:
              ae = af.sent;
              console.log("翻卡获得：".concat(ae.data.prizeName));
              x += "用户".concat(m, " 翻卡获得：").concat(ae.data.prizeName, "\n");
            case 129:
              ad++;
              af.next = 123;
              break;
            case 132:
              af.next = 118;
              break;
            case 134:
              af.next = 139;
              break;
            case 136:
              af.prev = 136;
              af.t2 = af.catch(116);
              aa.e(af.t2);
            case 139:
              af.prev = 139;
              aa.f();
              return af.finish(139);
            case 142:
              a1++;
              af.next = 73;
              break;
            case 145:
              if (!x) {
                af.next = 148;
                break;
              }
              af.next = 148;
              return M(x);
            case 148:
            case "end":
              return af.stop();
          }
        }
      }, O, null, [[5, 66, 69, 72], [36, 55, 58, 61], [116, 136, 139, 142]]);
    }));
    return z.apply(this, arguments);
  }
  function A() {
    return B.apply(this, arguments);
  }
  function B() {
    B = i(g().mark(function P() {
      var Q, R, S, T;
      return g().wrap(function (U) {
        for (;;) {
          switch (U.prev = U.next) {
            case 0:
              if (Q = $request.headers["access-token"], Q) {
                U.next = 3;
                break;
              }
              return U.abrupt("return");
            case 3:
              if (R = $.toObj($response.body), R && R.data) {
                U.next = 6;
                break;
              }
              return U.abrupt("return");
            case 6:
              var V = {};
              V.mobile = R.data.mobile;
              V.openId = R.data.openId;
              V.unionId = R.data.unionId;
              V.nickName = R.data.nickName;
              V.avatarUrl = R.data.avatarUrl;
              V.yiliToken = Q;
              if (S = V, T = j.findIndex(function (W) {
                return W.mobile == S.mobile;
              }), -1 === T) {
                U.next = 18;
                break;
              }
              if (j[T].yiliToken != S.yiliToken) {
                U.next = 13;
                break;
              }
              return U.abrupt("return");
            case 13:
              j[T] = S;
              console.log(S.yiliToken);
              $.msg($.name, "🎉用户".concat(S.mobile, "更新yiliToken成功!"), "");
            case 16:
              U.next = 21;
              break;
            case 18:
              j.push(S);
              console.log(S.yiliToken);
              $.msg($.name, "🎉新增用户".concat(S.mobile, "成功!"), "");
            case 21:
              $.setjson(j, "YiLi");
            case 22:
            case "end":
              return U.stop();
          }
        }
      }, P);
    }));
    return B.apply(this, arguments);
  }
  function C(O) {
    return D.apply(this, arguments);
  }
  function D() {
    D = i(g().mark(function Q(R) {
      return g().wrap(function (U) {
        for (;;) {
          switch (U.prev = U.next) {
            case 0:
              return U.abrupt("return", new Promise(function (W) {
                var X = {
                  url: "https://msmarket.msx.digitalyili.com".concat(R),
                  headers: {
                    "register-source": "",
                    "forward-appid": "wx06af0ef532292cd3",
                    "source-type": "",
                    "content-type": "application/json",
                    "atv-page": "",
                    scene: "1089",
                    xweb_xhr: "1",
                    "access-token": q,
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 MicroMessenger/6.8.0(0x16080000) NetType/WIFI MiniProgramEnv/Mac MacWechat/WMPF MacWechat/3.8.7(0x13080712) XWEB/1191",
                    "tenant-id": "1559474730809618433",
                    accept: "*/*",
                    "Sec-Fetch-Site": "cross-site",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Referer: "https://servicewechat.com/wx06af0ef532292cd3/533/page-frame.html",
                    "Accept-Encoding": "gzip, deflate, br",
                    "Accept-Language": "zh-CN,zh;q=0.9"
                  }
                };
                $.get(X, function () {
                  var Z = i(g().mark(function a0(a1, a2, a3) {
                    return g().wrap(function (a5) {
                      for (;;) {
                        switch (a5.prev = a5.next) {
                          case 0:
                            if (a5.prev = 0, !a1) {
                              a5.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(a1)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            a5.next = 9;
                            break;
                          case 6:
                            a5.next = 8;
                            return $.wait(2000);
                          case 8:
                            W(JSON.parse(a3));
                          case 9:
                            a5.next = 14;
                            break;
                          case 11:
                            a5.prev = 11;
                            a5.t0 = a5.catch(0);
                            $.logErr(a5.t0, a2);
                          case 14:
                            a5.prev = 14;
                            W();
                            return a5.finish(14);
                          case 17:
                          case "end":
                            return a5.stop();
                        }
                      }
                    }, a0, null, [[0, 11, 14, 17]]);
                  }));
                  return function (a1, a2, a3) {
                    return Z.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return U.stop();
          }
        }
      }, Q);
    }));
    return D.apply(this, arguments);
  }
  function E(O, P) {
    return F.apply(this, arguments);
  }
  function F() {
    F = i(g().mark(function O(P, Q) {
      var S;
      return g().wrap(function (T) {
        for (;;) {
          switch (T.prev = T.next) {
            case 0:
              S = I();
              return T.abrupt("return", new Promise(function (V) {
                var X = {
                  url: "https://wx-camp-180-cny-api.mscampapi.digitalyili.com".concat(P),
                  headers: {
                    "content-type": "application/json",
                    xweb_xhr: "1",
                    timestamp: S.timestamp,
                    signature: S.signature,
                    uniquecode: S.uniquecode,
                    access_token: n,
                    token: n,
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 MicroMessenger/6.8.0(0x16080000) NetType/WIFI MiniProgramEnv/Mac MacWechat/WMPF MacWechat/3.8.7(0x13080712) XWEB/1191",
                    "app-version": "1.1.1",
                    accept: "*/*",
                    "Sec-Fetch-Site": "cross-site",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Referer: "https://servicewechat.com/wx06af0ef532292cd3/533/page-frame.html",
                    "Accept-Encoding": "gzip, deflate, br",
                    "Accept-Language": "zh-CN,zh;q=0.9"
                  },
                  body: JSON.stringify(Q)
                };
                $.post(X, function () {
                  var Y = i(g().mark(function Z(a0, a1, a2) {
                    return g().wrap(function (a5) {
                      for (;;) {
                        switch (a5.prev = a5.next) {
                          case 0:
                            if (a5.prev = 0, !a0) {
                              a5.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(a0)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            a5.next = 9;
                            break;
                          case 6:
                            a5.next = 8;
                            return $.wait(2000);
                          case 8:
                            V(JSON.parse(a2));
                          case 9:
                            a5.next = 14;
                            break;
                          case 11:
                            a5.prev = 11;
                            a5.t0 = a5.catch(0);
                            $.logErr(a5.t0, a1);
                          case 14:
                            a5.prev = 14;
                            V();
                            return a5.finish(14);
                          case 17:
                          case "end":
                            return a5.stop();
                        }
                      }
                    }, Z, null, [[0, 11, 14, 17]]);
                  }));
                  return function (a0, a1, a2) {
                    return Y.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return T.stop();
          }
        }
      }, O);
    }));
    return F.apply(this, arguments);
  }
  function G(O) {
    return H.apply(this, arguments);
  }
  function H() {
    H = i(g().mark(function O(P) {
      var R;
      return g().wrap(function (S) {
        for (;;) {
          switch (S.prev = S.next) {
            case 0:
              R = I();
              return S.abrupt("return", new Promise(function (U) {
                var V = {
                  url: "https://wx-camp-180-cny-api.mscampapi.digitalyili.com".concat(P),
                  headers: {
                    "content-type": "application/json",
                    xweb_xhr: "1",
                    timestamp: R.timestamp,
                    signature: R.signature,
                    uniquecode: R.uniquecode,
                    access_token: n,
                    token: n,
                    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 MicroMessenger/6.8.0(0x16080000) NetType/WIFI MiniProgramEnv/Mac MacWechat/WMPF MacWechat/3.8.7(0x13080712) XWEB/1191",
                    "app-version": "1.1.1",
                    accept: "*/*",
                    "Sec-Fetch-Site": "cross-site",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Referer: "https://servicewechat.com/wx06af0ef532292cd3/533/page-frame.html",
                    "Accept-Encoding": "gzip, deflate, br",
                    "Accept-Language": "zh-CN,zh;q=0.9"
                  }
                };
                $.get(V, function () {
                  var X = i(g().mark(function Y(Z, a0, a1) {
                    return g().wrap(function (a2) {
                      for (;;) {
                        switch (a2.prev = a2.next) {
                          case 0:
                            if (a2.prev = 0, !Z) {
                              a2.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(Z)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            a2.next = 9;
                            break;
                          case 6:
                            a2.next = 8;
                            return $.wait(2000);
                          case 8:
                            U(JSON.parse(a1));
                          case 9:
                            a2.next = 14;
                            break;
                          case 11:
                            a2.prev = 11;
                            a2.t0 = a2.catch(0);
                            $.logErr(a2.t0, a0);
                          case 14:
                            a2.prev = 14;
                            U();
                            return a2.finish(14);
                          case 17:
                          case "end":
                            return a2.stop();
                        }
                      }
                    }, Y, null, [[0, 11, 14, 17]]);
                  }));
                  return function (Z, a0, a1) {
                    return X.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return S.stop();
          }
        }
      }, O);
    }));
    return H.apply(this, arguments);
  }
  function I() {
    var O = Date.now(),
      P = O + "&" + String(Math.floor(100000 + 900000 * Math.random())),
      Q = "timeStamp:" + O + "&uniqueCode:" + P + {
        1: "963QQ45465465xcvdasfasdfzxEcadfafzafoi897as8dfw8g4za78qqfd878000df8/er78a",
        2: "363QQ45465465xcvdas89!safzafwa36paweoi897as8dfw8g4za78qqfd878000df8/er89b",
        3: "763Qi45895465xcv89as89!sa2616wa36paweoi897as8dfw8g4za78qqfd878000df8/eqr23b",
        4: "7531Qi45891546115xcv89as819!sa26161wa36pa81g4z1a78qqfd87810001df18/eqr213b",
        5: "3f53f1Qia4f5f91546fa115axcvfff89asf819!saff26161fwa36fpa81g4z1fa7/eqr21f3b",
        6: "egf513gf1Qifag4f5f9f154g6fa115afxgcvffgf89gasgf8g19!saffg2g6161gfg6fpa@g1g",
        7: "2e@gf513g2f1Qif@ag4!f5f92f215!4g6fa115afxgcvffgf89gasgf82g19!2gfwa3g62fpa2",
        8: "6e@!gf514g2fb1Qif@!bag41f89gasbgf8b2g19!2gfwa3gb62fbpa@g1g32b9999!",
        9: "6a@!gf514g2fb1Qif@!bag41f89gasbgf8b2g19!2gfwa3gb62fbpa@g1g32b9869!++3",
        10: "2e@gf513g2f1Qif@ag4!sdfzxEcadfafzafoi897as8dfw8g4za78qqfd8780df8==/er78a"
      }[u],
      R = l.md5(Q).toUpperCase(),
      S = 1 == t ? J(R) : 2 == t ? l.md5(R).toUpperCase() : 3 == t ? l.md5(J(Q)).toUpperCase() : 4 == t ? J(J(Q)) : R,
      T = {
        timestamp: O,
        uniquecode: P,
        signature: S
      };
    return T;
  }
  function J(O) {
    var P = l.createCryptoJS(),
      Q = P.enc.Utf8.parse("asdvbnqwer!=564av8952116lkouytb+"),
      R = P.enc.Utf8.parse("Y9uR16ByteIvH8q9"),
      S = P.enc.Utf8.parse(O),
      T = P.AES.encrypt(S, Q, {
        iv: R,
        mode: P.mode.CBC,
        padding: P.pad.Pkcs7
      });
    return P.enc.Base64.stringify(T.ciphertext);
  }
  function K() {
    return L.apply(this, arguments);
  }
  function L() {
    L = i(g().mark(function P() {
      var R;
      return g().wrap(function S(T) {
        for (;;) {
          switch (T.prev = T.next) {
            case 0:
              if (R = $.getdata("Utils_Code") || "", !R || !Object.keys(R).length) {
                T.next = 5;
                break;
              }
              console.log("✅ ".concat($.name, ": 缓存中存在Utils代码, 跳过下载"));
              eval(R);
              return T.abrupt("return", creatUtils());
            case 5:
              console.log("🚀 ".concat($.name, ": 开始下载Utils代码"));
              return T.abrupt("return", new Promise(function () {
                var W = i(g().mark(function X(Y) {
                  return g().wrap(function a0(a1) {
                    for (;;) {
                      switch (a1.prev = a1.next) {
                        case 0:
                          $.getScript("https://ghfast.top/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js").then(function (a3) {
                            $.setdata(a3, "Utils_Code");
                            eval(a3);
                            console.log("✅ Utils加载成功, 请继续");
                            Y(creatUtils());
                          });
                        case 1:
                        case "end":
                          return a1.stop();
                      }
                    }
                  }, X);
                }));
                return function (Y) {
                  return W.apply(this, arguments);
                };
              }()));
            case 7:
            case "end":
              return T.stop();
          }
        }
      }, P);
    }));
    return L.apply(this, arguments);
  }
  function M(O) {
    return N.apply(this, arguments);
  }
  function N() {
    N = i(g().mark(function Q(R) {
      return g().wrap(function (S) {
        for (;;) {
          switch (S.prev = S.next) {
            case 0:
              if (!$.isNode()) {
                S.next = 5;
                break;
              }
              S.next = 3;
              return notify.sendNotify($.name, R);
            case 3:
              S.next = 6;
              break;
            case 5:
              $.msg($.name, "", R);
            case 6:
            case "end":
              return S.stop();
          }
        }
      }, Q);
    }));
    return N.apply(this, arguments);
  }
  i(g().mark(function O() {
    return g().wrap(function (Q) {
      for (;;) {
        switch (Q.prev = Q.next) {
          case 0:
            if ("undefined" == typeof $request) {
              Q.next = 5;
              break;
            }
            Q.next = 3;
            return A();
          case 3:
            Q.next = 7;
            break;
          case 5:
            Q.next = 7;
            return y();
          case 7:
          case "end":
            return Q.stop();
        }
      }
    }, O);
  }))().catch(function (P) {
    $.log(P);
  }).finally(function () {
    $.done({});
  });
})();