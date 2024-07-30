const _0x12419d = new _0x55b3e4("电信营业厅"),
  _0x2398a9 = require("crypto-js"),
  _0x152408 = ["\n", "&", "@"],
  _0x42d303 = ["chinaTelecomAccount"];
let _0x44434d = _0x42d303.map(_0x5a5144 => (_0x12419d.isNode() ? process.env[_0x5a5144] : _0x12419d.getdata(_0x5a5144)) || ""),
  _0x23f935 = [],
  _0x572b06 = 0,
  _0x2a40cd = 0;
const _0x7353a3 = ["查看我的云盘", "查看我的订单", "翻牌抽好礼"],
  _0x13b508 = "application/json;charset=utf-8",
  _0x99fba = "34d7cb0bcdf07523",
  _0x573e24 = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC+ugG5A8cZ3FqUKDwM57GM4io6JGcStivT8UdGt67PEOihLZTw3P7371+N47PrmsCpnTRzbTgcupKtUv8ImZalYk65dU8rjC/ridwhw9ffW2LBwvkEnDkkKKRi2liWIItDftJVBiWOh17o6gfbPoNrWORcAdcbpk2L+udld5kZNwIDAQAB",
  _0x3ab649 = "-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC+ugG5A8cZ3FqUKDwM57GM4io6JGcStivT8UdGt67PEOihLZTw3P7371+N47PrmsCpnTRzbTgcupKtUv8ImZalYk65dU8rjC/ridwhw9ffW2LBwvkEnDkkKKRi2liWIItDftJVBiWOh17o6gfbPoNrWORcAdcbpk2L+udld5kZNwIDAQAB\n-----END PUBLIC KEY-----";
JSEncrypt = node_rsa = jsencrypt = null;
const _0x44b15e = 8,
  _0x35f0c2 = 3.02,
  _0x3c522c = "chinaTelecom";
const _0x177a64 = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/code.json";
var _0x5f56ca = {
  _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  encode: function (_0x582c99) {
    var _0x139ca5 = "";
    var _0x3b9cb6, _0x2b13a3, _0x35f887, _0x211147, _0xf6c2fa, _0x24a72a, _0x25535d;
    var _0x3ea417 = 0;
    _0x582c99 = _0x5f56ca._utf8_encode(_0x582c99);
    while (_0x3ea417 < _0x582c99.length) {
      _0x3b9cb6 = _0x582c99.charCodeAt(_0x3ea417++);
      _0x2b13a3 = _0x582c99.charCodeAt(_0x3ea417++);
      _0x35f887 = _0x582c99.charCodeAt(_0x3ea417++);
      _0x211147 = _0x3b9cb6 >> 2;
      _0xf6c2fa = (_0x3b9cb6 & 3) << 4 | _0x2b13a3 >> 4;
      _0x24a72a = (_0x2b13a3 & 15) << 2 | _0x35f887 >> 6;
      _0x25535d = _0x35f887 & 63;
      if (isNaN(_0x2b13a3)) {
        _0x24a72a = _0x25535d = 64;
      } else {
        isNaN(_0x35f887) && (_0x25535d = 64);
      }
      _0x139ca5 = _0x139ca5 + this._keyStr.charAt(_0x211147) + this._keyStr.charAt(_0xf6c2fa) + this._keyStr.charAt(_0x24a72a) + this._keyStr.charAt(_0x25535d);
    }
    return _0x139ca5;
  },
  decode: function (_0xc14d77) {
    var _0x18eaf3 = "";
    var _0x26e6bd, _0x211c03, _0x3f0e8c;
    var _0xd82435, _0x50d4af, _0x4718fd, _0x1d46e5;
    var _0x66d09c = 0;
    _0xc14d77 = _0xc14d77.replace(/[^A-Za-z0-9+/=]/g, "");
    while (_0x66d09c < _0xc14d77.length) {
      _0xd82435 = this._keyStr.indexOf(_0xc14d77.charAt(_0x66d09c++));
      _0x50d4af = this._keyStr.indexOf(_0xc14d77.charAt(_0x66d09c++));
      _0x4718fd = this._keyStr.indexOf(_0xc14d77.charAt(_0x66d09c++));
      _0x1d46e5 = this._keyStr.indexOf(_0xc14d77.charAt(_0x66d09c++));
      _0x26e6bd = _0xd82435 << 2 | _0x50d4af >> 4;
      _0x211c03 = (_0x50d4af & 15) << 4 | _0x4718fd >> 2;
      _0x3f0e8c = (_0x4718fd & 3) << 6 | _0x1d46e5;
      _0x18eaf3 = _0x18eaf3 + String.fromCharCode(_0x26e6bd);
      _0x4718fd != 64 && (_0x18eaf3 = _0x18eaf3 + String.fromCharCode(_0x211c03));
      _0x1d46e5 != 64 && (_0x18eaf3 = _0x18eaf3 + String.fromCharCode(_0x3f0e8c));
    }
    _0x18eaf3 = _0x5f56ca._utf8_decode(_0x18eaf3);
    return _0x18eaf3;
  },
  _utf8_encode: function (_0x27fbd7) {
    _0x27fbd7 = _0x27fbd7.replace(/rn/g, "n");
    var _0x1677d4 = "";
    for (var _0x4c88dc = 0; _0x4c88dc < _0x27fbd7.length; _0x4c88dc++) {
      var _0x20ab0b = _0x27fbd7.charCodeAt(_0x4c88dc);
      if (_0x20ab0b < 128) {
        _0x1677d4 += String.fromCharCode(_0x20ab0b);
      } else {
        _0x20ab0b > 127 && _0x20ab0b < 2048 ? (_0x1677d4 += String.fromCharCode(_0x20ab0b >> 6 | 192), _0x1677d4 += String.fromCharCode(_0x20ab0b & 63 | 128)) : (_0x1677d4 += String.fromCharCode(_0x20ab0b >> 12 | 224), _0x1677d4 += String.fromCharCode(_0x20ab0b >> 6 & 63 | 128), _0x1677d4 += String.fromCharCode(_0x20ab0b & 63 | 128));
      }
    }
    return _0x1677d4;
  },
  _utf8_decode: function (_0x2cd0e1) {
    var _0x2829b8 = "";
    var _0x51b2c3 = 0;
    c1 = c2 = 0;
    var _0x16615c = c1;
    while (_0x51b2c3 < _0x2cd0e1.length) {
      _0x16615c = _0x2cd0e1.charCodeAt(_0x51b2c3);
      if (_0x16615c < 128) {
        _0x2829b8 += String.fromCharCode(_0x16615c);
        _0x51b2c3++;
      } else {
        _0x16615c > 191 && _0x16615c < 224 ? (c2 = _0x2cd0e1.charCodeAt(_0x51b2c3 + 1), _0x2829b8 += String.fromCharCode((_0x16615c & 31) << 6 | c2 & 63), _0x51b2c3 += 2) : (c2 = _0x2cd0e1.charCodeAt(_0x51b2c3 + 1), c3 = _0x2cd0e1.charCodeAt(_0x51b2c3 + 2), _0x2829b8 += String.fromCharCode((_0x16615c & 15) << 12 | (c2 & 63) << 6 | c3 & 63), _0x51b2c3 += 3);
      }
    }
    return _0x2829b8;
  }
};
function _0x53af54(_0x3bce6c, _0x4ebfb6, _0x45b79a, _0x5f0532, _0x23fbe3, _0x2e9b6d) {
  return _0x2398a9[_0x3bce6c].encrypt(_0x2398a9.enc.Utf8.parse(_0x5f0532), _0x2398a9.enc.Utf8.parse(_0x23fbe3), {
    mode: _0x2398a9.mode[_0x4ebfb6],
    padding: _0x2398a9.pad[_0x45b79a],
    iv: _0x2398a9.enc.Utf8.parse(_0x2e9b6d)
  }).ciphertext.toString(_0x2398a9.enc.Hex);
}
function _0x1af46f(_0x57eca2) {
  let _0x3d4be2 = "",
    _0x3e288b = JSON.stringify(_0x57eca2);
  if (node_rsa) {
    _0x3d4be2 = node_rsa.encrypt(_0x3e288b, "hex");
  } else {
    jsencrypt && (_0x3d4be2 = Buffer.from(jsencrypt.encrypt(_0x3e288b), "base64").toString("hex"));
  }
  return _0x3d4be2;
}
class _0x4c2e48 {
  constructor(_0x4fbc1e) {
    this.index = ++_0x572b06;
    this.name = this.index;
    this.valid = false;
    let _0x12d102 = _0x4fbc1e.split("#");
    _0x12d102.length >= 2 ? (this.phone = _0x12d102.shift(), this.passwd = _0x12d102.join("#"), this.UA = "CtClient;9.2.0;Android;10;MI 9;" + _0x5f56ca.encode(this.phone.slice(5, 11)).replace(/=/g, "") + "!#!" + _0x5f56ca.encode(this.phone.slice(0, 5)).replace(/=/g, "")) : (this.phone = _0x12d102[0], this.UA = "CtClient;9.2.0;Android;10;MI 9;" + _0x5f56ca.encode(this.phone.slice(5, 11)).replace(/=/g, "") + "!#!" + _0x5f56ca.encode(this.phone.slice(0, 5)).replace(/=/g, ""));
  }
  async taskApi(_0x1821c3 = {}) {
    let _0x52936f = {};
    try {
      let _0x18d758 = _0x1821c3.url.replace("//", "/").split("/")[1],
        _0x166412 = _0x1821c3.url;
      if (_0x1821c3.queryParam) {
        _0x166412 += "?" + _0x12419d.json2str(_0x1821c3.queryParam, "&", true);
      }
      const _0x5d39b0 = {
        Host: _0x18d758,
        Connection: "keep-alive",
        "User-Agent": this.UA
      };
      const _0x2cd349 = {
        url: _0x166412,
        headers: _0x5d39b0,
        timeout: 5000
      };
      if (_0x1821c3.body) {
        _0x2cd349.headers["Content-Type"] = _0x1821c3["Content-Type"] || _0x13b508;
        if (typeof _0x1821c3.body === "object") {
          if (_0x2cd349.headers["Content-Type"].includes("json")) {
            _0x2cd349.body = JSON.stringify(_0x1821c3.body);
          } else {
            for (let _0x4895a5 in _0x1821c3.body) {
              typeof _0x1821c3.body[_0x4895a5] === "object" && (_0x1821c3.body[_0x4895a5] = JSON.stringify(_0x1821c3.body[_0x4895a5]));
            }
            _0x2cd349.body = _0x12419d.json2str(_0x1821c3.body, "&");
          }
        } else {
          _0x2cd349.body = _0x1821c3.body;
        }
        _0x12419d.isNode() ? _0x2cd349.headers["Content-Length"] = _0x2cd349.body ? Buffer.byteLength(_0x2cd349.body, "utf8") : 0 : _0x2cd349.headers["Content-Length"] = _0x2cd349.body ? _0x2cd349.body.length : 0;
      }
      if (_0x1821c3.urlObjectParam) {
        Object.assign(_0x2cd349, _0x1821c3.urlObjectParam);
      }
      if (_0x1821c3.headerParam) {
        Object.assign(_0x2cd349.headers, _0x1821c3.headerParam);
      }
      if (_0x1821c3.debugIn) {
        console.log(_0x2cd349);
      }
      _0x52936f = Object.assign({}, await _0x3622c3(_0x1821c3.method, _0x2cd349));
      _0x52936f.statusCode = _0x52936f?.["err"]?.["response"]?.["statusCode"] || _0x52936f?.["resp"]?.["statusCode"];
      _0x52936f.statusCode != 200 && console.log("[" + _0x1821c3.fn + "]返回[" + _0x52936f.statusCode + "]");
      _0x1821c3.debugOut && (_0x52936f?.["resp"]?.["headers"]["set-cookie"] && console.log(_0x52936f?.["resp"]?.["headers"]["set-cookie"]), _0x52936f?.["resp"]?.["body"] && console.log(_0x52936f?.["resp"]?.["body"]));
      if (_0x52936f?.["resp"]?.["body"]) {
        if (typeof _0x52936f.resp.body === "object") {
          _0x52936f.result = _0x52936f.resp.body || {};
        } else {
          try {
            _0x52936f.result = JSON.parse(_0x52936f.resp.body) || {};
          } catch (_0x588538) {
            _0x52936f.result = _0x52936f.resp.body || {};
          }
        }
      } else {
        _0x52936f.result = {};
      }
    } catch (_0xd0a81f) {
      console.log(_0xd0a81f);
    } finally {
      return Promise.resolve(_0x52936f);
    }
  }
  async homeInfo() {
    let _0x179ec1 = {};
    try {
      const _0x4990c9 = {
        phone: this.phone
      };
      let _0x1340a2 = {
        fn: "homeInfo",
        method: "post",
        url: "https://wapside.189.cn:9001/jt-sign/api/home/homeInfo",
        body: {
          para: _0x1af46f(_0x4990c9)
        }
      };
      _0x179ec1 = Object.assign({}, await this.taskApi(_0x1340a2));
      let _0x23223a = _0x179ec1.result;
      if (_0x23223a.resoultCode == 0) {
        this.valid = true;
        this.coin = _0x23223a.totalCoin;
        console.log("手机号码：" + this.phone);
        console.log("金豆余额：" + this.coin);
        if (_0x23223a.amountEx) {
          let _0x54b6b4 = _0x12419d.time("yyyy-MM-dd", _0x23223a.expireDate);
          console.log("-- [" + _0x54b6b4 + "]将过期" + _0x23223a.amountEx + "金豆");
        }
      } else {
        console.log("查询账户信息失败: " + _0x23223a.resoultMsg);
      }
    } catch (_0x52d659) {
      console.log(_0x52d659);
    } finally {
      return Promise.resolve(_0x179ec1);
    }
  }
  async userCoinInfo() {
    let _0x1207f2 = {};
    try {
      const _0x10e355 = {
        phone: this.phone
      };
      let _0xe7f2e3 = {
        fn: "userCoinInfo",
        method: "post",
        url: "https://wapside.189.cn:9001/jt-sign/api/home/userCoinInfo",
        body: {
          para: _0x1af46f(_0x10e355)
        }
      };
      _0x1207f2 = Object.assign({}, await this.taskApi(_0xe7f2e3));
      let _0x1cd924 = _0x1207f2.result;
      if (_0x1cd924.resoultCode == 0) {
        this.valid = true;
        this.coin = _0x1cd924.totalCoin;
        console.log("手机号码：" + this.phone);
        console.log("金豆余额：" + this.coin);
        if (_0x1cd924.amountEx) {
          let _0x338ecc = _0x12419d.time("yyyy-MM-dd", _0x1cd924.expireDate);
          console.log("-- [" + _0x338ecc + "]将过期" + _0x1cd924.amountEx + "金豆");
        }
      } else {
        console.log("查询账户信息失败: " + _0x1cd924.resoultMsg);
      }
    } catch (_0x2f254c) {
      console.log(_0x2f254c);
    } finally {
      return Promise.resolve(_0x1207f2);
    }
  }
  async doSign() {
    let _0x5c34f1 = {};
    try {
      let _0x7ebf46 = {
          phone: this.phone,
          date: Date.now(),
          signSource: "smlprgrm"
        },
        _0x358c89 = {
          fn: "doSign",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/api/home/sign",
          body: {
            encode: _0x53af54("AES", "ECB", "Pkcs7", JSON.stringify(_0x7ebf46), _0x99fba, 0)
          }
        };
      _0x5c34f1 = Object.assign({}, await this.taskApi(_0x358c89));
      let _0xd35b98 = _0x5c34f1.result;
      _0xd35b98.resoultCode == 0 ? _0xd35b98.data.code == 1 ? console.log("签到成功，获得" + _0xd35b98.data.coin + "金豆") : console.log("签到失败: " + _0xd35b98.data.msg) : console.log("签到失败: " + (_0xd35b98.resoultMsg || _0xd35b98.error));
    } catch (_0x2a989b) {
      console.log(_0x2a989b);
    } finally {
      return Promise.resolve(_0x5c34f1);
    }
  }
  async getTask() {
    let _0x48de22 = {};
    try {
      const _0x37d4eb = {
        phone: this.phone
      };
      let _0x2c5118 = {
        fn: "getTask",
        method: "post",
        url: "https://wapside.189.cn:9001/jt-sign/paradise/getTask",
        body: {
          para: _0x1af46f(_0x37d4eb)
        }
      };
      _0x48de22 = Object.assign({}, await this.taskApi(_0x2c5118));
      let _0xf7895e = _0x48de22.result;
      if (_0xf7895e.resoultCode == 0) {
        console.log("------- 任务列表 -------");
        for (let _0x56ca06 of _0xf7895e.data) {
          let _0xc15789 = _0x56ca06.title.split(" ")[0],
            _0x3ba696 = _0x56ca06.status == 0 ? "未完成" : _0x56ca06.status == 1 ? "可领取" : "已完成";
          console.log("[" + _0xc15789 + "] -- " + _0x3ba696);
        }
        console.log("------------------------");
        for (let _0x26b3f6 of _0xf7895e.data) {
          switch (_0x26b3f6.status) {
            case "0":
              for (let _0x59f808 of _0x7353a3) {
                if (_0x26b3f6.title.includes(_0x59f808)) {
                  await this.polymerize(_0x26b3f6);
                  break;
                }
              }
              break;
            case "1":
              break;
          }
        }
      } else {
        console.log("获取任务列表失败: " + (_0xf7895e.resoultMsg || _0xf7895e.error));
      }
    } catch (_0x2a229f) {
      console.log(_0x2a229f);
    } finally {
      return Promise.resolve(_0x48de22);
    }
  }
  async polymerize(_0x244380) {
    let _0x2c4ffb = {};
    try {
      let _0x104cc1 = _0x244380.title.split(" ")[0];
      const _0x76db9c = {
        phone: this.phone,
        jobId: _0x244380.taskId
      };
      let _0x399e16 = {
        fn: "polymerize",
        method: "post",
        url: "https://wapside.189.cn:9001/jt-sign/paradise/polymerize",
        body: {
          para: _0x1af46f(_0x76db9c)
        }
      };
      _0x2c4ffb = Object.assign({}, await this.taskApi(_0x399e16));
      let _0x293e76 = _0x2c4ffb.result;
      _0x293e76.resoultCode == 0 ? console.log("完成任务[" + _0x104cc1 + "]成功: " + _0x293e76.resoultMsg) : console.log("完成任务[" + _0x104cc1 + "]失败: " + (_0x293e76.resoultMsg || _0x293e76.error));
    } catch (_0x25d1fb) {
      console.log(_0x25d1fb);
    } finally {
      return Promise.resolve(_0x2c4ffb);
    }
  }
  async receiveReward(_0x1e04f2) {
    let _0x19dfad = {};
    try {
      let _0x297c3d = _0x1e04f2.title.split(" ")[0];
      const _0x4ae79f = {
        phone: this.phone,
        jobId: _0x1e04f2.taskId,
        reward_id: _0x1e04f2.reward_id
      };
      let _0x47f294 = {
        fn: "receiveReward",
        method: "post",
        url: "https://wapside.189.cn:9001/jt-sign/paradise/receiveReward",
        body: {
          para: _0x1af46f(_0x4ae79f)
        }
      };
      _0x19dfad = Object.assign({}, await this.taskApi(_0x47f294));
      let _0x48d3a7 = _0x19dfad.result;
      _0x48d3a7.resoultCode == 0 ? console.log("领取任务[" + _0x297c3d + "]奖励成功: " + _0x48d3a7.resoultMsg) : console.log("领取任务[" + _0x297c3d + "]奖励失败: " + (_0x48d3a7.resoultMsg || _0x48d3a7.error));
    } catch (_0x3eabe4) {
      console.log(_0x3eabe4);
    } finally {
      return Promise.resolve(_0x19dfad);
    }
  }
  async activityMsg(_0x477b4b = {}) {
    let _0x53d8db = {};
    try {
      const _0x40109a = {
        phone: this.phone
      };
      let _0x5f5af6 = {
        fn: "activityMsg",
        method: "post",
        url: "https://wapside.189.cn:9001/jt-sign/reward/activityMsg",
        body: {
          para: _0x1af46f(_0x40109a)
        }
      };
      _0x53d8db = Object.assign({}, await this.taskApi(_0x5f5af6));
      let _0x1792b5 = _0x53d8db.result;
      if (_0x1792b5.totalDay >= 0) {
        console.log("已连续签到" + _0x1792b5.totalDay + "天");
        let _0x41c566 = _0x1792b5?.["date"]?.["id"];
        _0x41c566 && (await this.convertReward(_0x41c566));
      } else {
        console.log("查询连续签到失败: " + (_0x1792b5.resoultMsg || _0x1792b5.error));
      }
    } catch (_0x2a3cc4) {
      console.log(_0x2a3cc4);
    } finally {
      return Promise.resolve(_0x53d8db);
    }
  }
  async convertReward(_0xd6b702, _0x3f70ad = 0) {
    let _0x2abcdc = {};
    try {
      let _0x31ab8 = {
          phone: this.phone,
          rewardId: _0xd6b702,
          month: _0x12419d.time("yyyyMM")
        },
        _0x3dc27b = {
          fn: "convertReward",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/reward/convertReward",
          body: {
            para: _0x1af46f(_0x31ab8)
          }
        };
      _0x2abcdc = Object.assign({}, await this.taskApi(_0x3dc27b));
      let _0x5085cc = _0x2abcdc.result;
      _0x5085cc.code == 0 ? console.log("连续签到兑换话费成功：" + (_0x5085cc.msg || _0x5085cc.error)) : (console.log("连续签到兑换话费失败：" + (_0x5085cc.msg || _0x5085cc.error)), (_0x5085cc?.["msg"]?.["includes"]("兑换失败") || _0x5085cc?.["msg"]?.["includes"]("频繁")) && _0x3f70ad <= 8 && (await _0x12419d.wait(1000), _0x3f70ad++, await this.convertReward(_0xd6b702, _0x3f70ad)));
    } catch (_0x12873d) {
      console.log(_0x12873d);
    } finally {
      return Promise.resolve(_0x2abcdc);
    }
  }
  async getParadiseInfo(_0x587693 = {}) {
    let _0x13e63f = {};
    try {
      const _0x5ce8d3 = {
        phone: this.phone
      };
      let _0x115f82 = {
        fn: "activityMsg",
        method: "post",
        url: "https://wapside.189.cn:9001/jt-sign/paradise/getParadiseInfo",
        body: {
          para: _0x1af46f(_0x5ce8d3)
        }
      };
      _0x13e63f = Object.assign({}, await this.taskApi(_0x115f82));
      let _0x27ff24 = _0x13e63f.result;
      if (_0x27ff24.resoultCode == 0) {
        let _0x14253c = _0x27ff24?.["reward"]?.["id"];
        _0x14253c && (await this.convertReward(_0x14253c));
      } else {
        console.log("查询账号状态失败: " + (_0x27ff24.resoultMsg || _0x27ff24.error));
      }
    } catch (_0x5189b3) {
      console.log(_0x5189b3);
    } finally {
      return Promise.resolve(_0x13e63f);
    }
  }
  async userTask() {
    let _0x1f6c9b = {};
    try {
      console.log("\n============= 账号[" + this.index + "] =============");
      await this.userCoinInfo();
      if (!this.valid) {
        return Promise.resolve(_0x1f6c9b);
      }
      await this.doSign();
      await this.getTask();
      await this.activityMsg();
    } catch (_0x5dbab2) {
      console.log(_0x5dbab2);
    } finally {
      return Promise.resolve(_0x1f6c9b);
    }
  }
}
function _0x19fb2b() {
  console.log("\n开始检测依赖状态");
  try {
    global.window = {};
    const _0x302ed4 = require("jsencrypt");
    jsencrypt = new _0x302ed4();
    jsencrypt.setPublicKey(_0x573e24);
    console.log("现在使用的是 jsencrypt 依赖");
  } catch {
    try {
      const _0x21ec6b = require("node-rsa");
      node_rsa = new _0x21ec6b(_0x3ab649);
      const _0x5886f6 = {
        encryptionScheme: "pkcs1"
      };
      node_rsa.setOptions(_0x5886f6);
      console.log("现在使用的是 node-rsa 依赖");
    } catch {
      console.log("引用 jsencrypt 和 node-rsa 依赖失败, 请自行安装其中一种依赖再运行");
      process.exit(1);
    }
  }
}
!(async () => {
  if (!(await _0x26e1e1())) {
    return;
  }
  if (!_0x5b9f1d()) {
    return;
  }
  _0x19fb2b();
  for (let _0x224390 of _0x23f935) {
    await _0x224390.userTask();
  }
})().catch(_0x54fa99 => console.log(_0x54fa99)).finally(() => _0x12419d.done());
function _0x5b9f1d() {
  for (let _0x552558 of _0x44434d) {
    if (!_0x552558) {
      continue;
    }
    let _0x4bf0e8 = _0x152408[0];
    for (let _0x3ea157 of _0x152408) {
      if (_0x552558.includes(_0x3ea157)) {
        _0x4bf0e8 = _0x3ea157;
        break;
      }
    }
    for (let _0x34a1ed of _0x552558.split(_0x4bf0e8).filter(_0xc92722 => !!_0xc92722)) {
      _0x23f935.push(new _0x4c2e48(_0x34a1ed));
    }
  }
  _0x2a40cd = _0x23f935.length;
  if (!_0x2a40cd) {
    console.log("未找到CK，请检查变量" + _0x42d303.join("或"));
    return false;
  }
  console.log("共找到" + _0x2a40cd + "个账号");
  return true;
}
async function _0x26e1e1(_0x24f4e8 = 0) {
  let _0x1d5718 = false;
  try {
    const _0x4f1ddf = {
      url: _0x177a64,
      timeout: 5000
    };
    let _0x5012a4 = null,
      _0x1dd7a7 = await _0x3622c3("get", _0x4f1ddf);
    if (_0x1dd7a7.err) {
      console.log("服务器错误[" + _0x1dd7a7?.["resp"]?.["statusCode"] + "]，重试...");
    } else {
      try {
        typeof _0x1dd7a7.resp.body === "object" ? _0x5012a4 = _0x1dd7a7.resp.body : _0x5012a4 = JSON.parse(_0x1dd7a7.resp.body);
        _0x5012a4 = JSON.parse(_0x5012a4.data.file.data);
      } catch (_0x49ea94) {
        console.log(_0x49ea94);
      }
    }
    if (!_0x5012a4) {
      if (_0x24f4e8 < _0x44b15e) {
        _0x1d5718 = await _0x26e1e1(++_0x24f4e8);
      }
    } else {
      _0x5012a4?.["commonNotify"] && _0x5012a4.commonNotify.length > 0 && _0x12419d.logAndNotify(_0x5012a4.commonNotify.join("\n") + "\n", false);
      _0x5012a4?.["commonMsg"] && _0x5012a4.commonMsg.length > 0 && console.log(_0x5012a4.commonMsg.join("\n") + "\n");
      if (_0x5012a4[_0x3c522c]) {
        let _0x19c060 = _0x5012a4[_0x3c522c];
        _0x19c060.status == 0 ? _0x35f0c2 >= _0x19c060.version ? (_0x1d5718 = true, console.log(_0x19c060.msg[_0x19c060.status]), console.log(_0x19c060.updateMsg), console.log("现在运行的脚本版本是：" + _0x35f0c2 + "，最新脚本版本：" + _0x19c060.latestVersion)) : console.log(_0x19c060.versionMsg) : console.log(_0x19c060.msg[_0x19c060.status]);
      } else {
        console.log(_0x5012a4.errorMsg);
      }
    }
  } catch (_0x10437b) {
    console.log(_0x10437b);
  } finally {
    return Promise.resolve(_0x1d5718);
  }
}
async function _0x179672(_0xef43fa = 0) {
  let _0x13cd9a = false;
  try {
    const _0x46ac62 = {
      url: taskUrl,
      timeout: 5000
    };
    let _0x2c0597 = null,
      _0x2e2151 = await _0x3622c3("get", _0x46ac62);
    if (_0x2e2151.err) {
      console.log("服务器错误[" + _0x2e2151?.["resp"]?.["statusCode"] + "]，重试...");
    } else {
      try {
        typeof _0x2e2151.resp.body === "object" ? _0x2c0597 = _0x2e2151.resp.body : _0x2c0597 = JSON.parse(_0x2e2151.resp.body);
        _0x2c0597 = JSON.parse(_0x2c0597.data.file.data);
      } catch (_0x369e9a) {
        console.log(_0x369e9a);
      }
    }
    if (!_0x2c0597) {
      if (_0xef43fa < _0x44b15e) {
        _0x13cd9a = await _0x179672(++_0xef43fa);
      }
    }
  } catch (_0x1f1531) {
    console.log(_0x1f1531);
  } finally {
    return Promise.resolve(_0x13cd9a);
  }
  return;
}
async function _0x3622c3(_0x27a5b6, _0x1b77b4) {
  return new Promise(_0x3b8246 => {
    _0x12419d.send(_0x27a5b6, _0x1b77b4, async (_0x37e919, _0x4bc1d7, _0x533471) => {
      const _0x228edb = {
        err: _0x37e919,
        req: _0x4bc1d7,
        resp: _0x533471
      };
      _0x3b8246(_0x228edb);
    });
  });
}
function _0x55b3e4(_0x1d366c, _0x21ddf9) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  return new class {
    constructor(_0x53cd5f, _0x4174ca) {
      this.name = _0x53cd5f;
      this.notifyStr = "";
      this.notifyFlag = false;
      this.startTime = new Date().getTime();
      Object.assign(this, _0x4174ca);
      console.log(this.name + " 开始运行：\n");
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    getdata(_0x3a7c6a) {
      let _0x5f162b = this.getval(_0x3a7c6a);
      if (/^@/.test(_0x3a7c6a)) {
        const [, _0x56e482, _0x32d717] = /^@(.*?)\.(.*?)$/.exec(_0x3a7c6a),
          _0x8fec54 = _0x56e482 ? this.getval(_0x56e482) : "";
        if (_0x8fec54) {
          try {
            const _0x2e4922 = JSON.parse(_0x8fec54);
            _0x5f162b = _0x2e4922 ? this.lodash_get(_0x2e4922, _0x32d717, "") : _0x5f162b;
          } catch (_0x575a37) {
            _0x5f162b = "";
          }
        }
      }
      return _0x5f162b;
    }
    setdata(_0x2587d9, _0xc91559) {
      let _0x2e8de6 = !1;
      if (/^@/.test(_0xc91559)) {
        const [, _0x151cae, _0x4d9e14] = /^@(.*?)\.(.*?)$/.exec(_0xc91559),
          _0x5f0c5a = this.getval(_0x151cae),
          _0x238370 = _0x151cae ? "null" === _0x5f0c5a ? null : _0x5f0c5a || "{}" : "{}";
        try {
          const _0x1710d2 = JSON.parse(_0x238370);
          this.lodash_set(_0x1710d2, _0x4d9e14, _0x2587d9);
          _0x2e8de6 = this.setval(JSON.stringify(_0x1710d2), _0x151cae);
        } catch (_0x10a631) {
          const _0x213a04 = {};
          this.lodash_set(_0x213a04, _0x4d9e14, _0x2587d9);
          _0x2e8de6 = this.setval(JSON.stringify(_0x213a04), _0x151cae);
        }
      } else {
        _0x2e8de6 = this.setval(_0x2587d9, _0xc91559);
      }
      return _0x2e8de6;
    }
    getval(_0x29d12a) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x29d12a) : this.isQuanX() ? $prefs.valueForKey(_0x29d12a) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x29d12a]) : this.data && this.data[_0x29d12a] || null;
    }
    setval(_0x57ad4b, _0x328063) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x57ad4b, _0x328063) : this.isQuanX() ? $prefs.setValueForKey(_0x57ad4b, _0x328063) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x328063] = _0x57ad4b, this.writedata(), !0) : this.data && this.data[_0x328063] || null;
    }
    send(_0x24fb90, _0x57396b, _0xeb26c = () => {}) {
      if (_0x24fb90 != "get" && _0x24fb90 != "post" && _0x24fb90 != "put" && _0x24fb90 != "delete") {
        console.log("无效的http方法：" + _0x24fb90);
        return;
      }
      if (_0x24fb90 == "get" && _0x57396b.headers) {
        delete _0x57396b.headers["Content-Type"];
        delete _0x57396b.headers["Content-Length"];
      } else {
        if (_0x57396b.body && _0x57396b.headers) {
          if (!_0x57396b.headers["Content-Type"]) {
            _0x57396b.headers["Content-Type"] = "application/x-www-form-urlencoded";
          }
        }
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          _0x57396b.headers = _0x57396b.headers || {};
          const _0x24c8d5 = {
            "X-Surge-Skip-Scripting": !1
          };
          Object.assign(_0x57396b.headers, _0x24c8d5);
        }
        const _0x4cbf9c = {
          method: _0x24fb90,
          url: _0x57396b.url,
          headers: _0x57396b.headers,
          timeout: _0x57396b.timeout,
          data: _0x57396b.body
        };
        if (_0x24fb90 == "get") {
          delete _0x4cbf9c.data;
        }
        $axios(_0x4cbf9c).then(_0x419705 => {
          const {
              status: _0x11a4a8,
              request: _0x22b263,
              headers: _0x50aab0,
              data: _0x5b6b6e
            } = _0x419705,
            _0x240b67 = {
              statusCode: _0x11a4a8,
              headers: _0x50aab0,
              body: _0x5b6b6e
            };
          _0xeb26c(null, _0x22b263, _0x240b67);
        }).catch(_0x59a7c2 => console.log(_0x59a7c2));
      } else {
        if (this.isQuanX()) {
          const _0x20d1dc = {
            hints: !1
          };
          _0x57396b.method = _0x24fb90.toUpperCase();
          this.isNeedRewrite && (_0x57396b.opts = _0x57396b.opts || {}, Object.assign(_0x57396b.opts, _0x20d1dc));
          $task.fetch(_0x57396b).then(_0x28a148 => {
            const {
                statusCode: _0x1b8485,
                request: _0x57fd25,
                headers: _0xae7a26,
                body: _0x541990
              } = _0x28a148,
              _0x37be4c = {
                statusCode: _0x1b8485,
                headers: _0xae7a26,
                body: _0x541990
              };
            _0xeb26c(null, _0x57fd25, _0x37be4c);
          }, _0x332edb => _0xeb26c(_0x332edb));
        } else {
          if (this.isNode()) {
            this.got = this.got ? this.got : require("got");
            const {
                url: _0x2988cb,
                ..._0x2c1b24
              } = _0x57396b,
              _0x2c65d9 = {
                followRedirect: false
              };
            this.instance = this.got.extend(_0x2c65d9);
            this.instance[_0x24fb90](_0x2988cb, _0x2c1b24).then(_0x3aa678 => {
              const {
                  statusCode: _0x1ed3f3,
                  request: _0xfc54dc,
                  headers: _0x3a027a,
                  body: _0x36f644
                } = _0x3aa678,
                _0x3e76f9 = {
                  statusCode: _0x1ed3f3,
                  headers: _0x3a027a,
                  body: _0x36f644
                };
              _0xeb26c(null, _0xfc54dc, _0x3e76f9);
            }, _0xa009f4 => {
              const {
                message: _0x236d5a,
                request: _0x2ab990,
                response: _0x21f100
              } = _0xa009f4;
              _0xeb26c(_0x236d5a, _0x2ab990, _0x21f100);
            });
          }
        }
      }
    }
    time(_0x3e3ac0, _0x1ef33f = null) {
      let _0x5980a9 = _0x1ef33f ? new Date(_0x1ef33f) : new Date(),
        _0x3e0f01 = {
          "M+": _0x5980a9.getMonth() + 1,
          "d+": _0x5980a9.getDate(),
          "h+": _0x5980a9.getHours(),
          "m+": _0x5980a9.getMinutes(),
          "s+": _0x5980a9.getSeconds(),
          "q+": Math.floor((_0x5980a9.getMonth() + 3) / 3),
          S: this.padStr(_0x5980a9.getMilliseconds(), 3)
        };
      /(y+)/.test(_0x3e3ac0) && (_0x3e3ac0 = _0x3e3ac0.replace(RegExp.$1, (_0x5980a9.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x202d62 in _0x3e0f01) new RegExp("(" + _0x202d62 + ")").test(_0x3e3ac0) && (_0x3e3ac0 = _0x3e3ac0.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x3e0f01[_0x202d62] : ("00" + _0x3e0f01[_0x202d62]).substr(("" + _0x3e0f01[_0x202d62]).length)));
      return _0x3e3ac0;
    }
    async showmsg() {
      if (!this.notifyFlag) {
        return;
      }
      if (!this.notifyStr) {
        return;
      }
      let _0x1e5aa6 = this.name + " 运行通知\n\n" + this.notifyStr;
      if (_0x12419d.isNode()) {
        var _0x92fb3b = require("./sendNotify");
        console.log("\n============== 推送 ==============");
        await _0x92fb3b.sendNotify(this.name, _0x1e5aa6);
      } else {
        this.msg(_0x1e5aa6);
      }
    }
    logAndNotify(_0x39c963, _0x33c158 = true) {
      if (_0x33c158) {
        this.notifyFlag = true;
      }
      console.log(_0x39c963);
      this.notifyStr += _0x39c963;
      this.notifyStr += "\n";
    }
    logAndNotifyWithTime(_0x4c0c5e, _0x494642 = true) {
      if (_0x494642) {
        this.notifyFlag = true;
      }
      let _0x39efb0 = "[" + this.time("hh:mm:ss.S") + "]" + _0x4c0c5e;
      console.log(_0x39efb0);
      this.notifyStr += _0x39efb0;
      this.notifyStr += "\n";
    }
    logWithTime(_0x44f1cb) {
      console.log("[" + this.time("hh:mm:ss.S") + "]" + _0x44f1cb);
    }
    msg(_0x1f4525 = t, _0x2335b7 = "", _0x21c4c2 = "", _0x20ae63) {
      const _0x1ad854 = _0x57e409 => {
        if (!_0x57e409) {
          return _0x57e409;
        }
        if ("string" == typeof _0x57e409) {
          return this.isLoon() ? _0x57e409 : this.isQuanX() ? {
            "open-url": _0x57e409
          } : this.isSurge() ? {
            url: _0x57e409
          } : void 0;
        }
        if ("object" == typeof _0x57e409) {
          if (this.isLoon()) {
            let _0x48de50 = _0x57e409.openUrl || _0x57e409.url || _0x57e409["open-url"],
              _0x6ea4f8 = _0x57e409.mediaUrl || _0x57e409["media-url"];
            const _0x5d464a = {
              openUrl: _0x48de50,
              mediaUrl: _0x6ea4f8
            };
            return _0x5d464a;
          }
          if (this.isQuanX()) {
            let _0x1dce5b = _0x57e409["open-url"] || _0x57e409.url || _0x57e409.openUrl,
              _0x4b80b0 = _0x57e409["media-url"] || _0x57e409.mediaUrl;
            const _0x481244 = {
              "open-url": _0x1dce5b,
              "media-url": _0x4b80b0
            };
            return _0x481244;
          }
          if (this.isSurge()) {
            let _0x46d857 = _0x57e409.url || _0x57e409.openUrl || _0x57e409["open-url"];
            const _0x22d45c = {
              url: _0x46d857
            };
            return _0x22d45c;
          }
        }
      };
      this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x1f4525, _0x2335b7, _0x21c4c2, _0x1ad854(_0x20ae63)) : this.isQuanX() && $notify(_0x1f4525, _0x2335b7, _0x21c4c2, _0x1ad854(_0x20ae63)));
      let _0x4affb7 = ["", "============== 系统通知 =============="];
      _0x4affb7.push(_0x1f4525);
      _0x2335b7 && _0x4affb7.push(_0x2335b7);
      _0x21c4c2 && _0x4affb7.push(_0x21c4c2);
      console.log(_0x4affb7.join("\n"));
    }
    getMin(_0x26403f, _0x571e40) {
      return _0x26403f < _0x571e40 ? _0x26403f : _0x571e40;
    }
    getMax(_0x1ca199, _0x5d2b92) {
      return _0x1ca199 < _0x5d2b92 ? _0x5d2b92 : _0x1ca199;
    }
    padStr(_0xb01c9e, _0x59a30c, _0x57a600 = "0") {
      let _0x243c18 = String(_0xb01c9e),
        _0x5b8fe2 = _0x59a30c > _0x243c18.length ? _0x59a30c - _0x243c18.length : 0,
        _0x20fb9c = "";
      for (let _0x57893a = 0; _0x57893a < _0x5b8fe2; _0x57893a++) {
        _0x20fb9c += _0x57a600;
      }
      _0x20fb9c += _0x243c18;
      return _0x20fb9c;
    }
    json2str(_0x5e4a87, _0x518b6c, _0x27c452 = false) {
      let _0xe780cd = [];
      for (let _0x3f29e5 of Object.keys(_0x5e4a87).sort()) {
        let _0xe0f658 = _0x5e4a87[_0x3f29e5];
        if (_0xe0f658 && _0x27c452) {
          _0xe0f658 = encodeURIComponent(_0xe0f658);
        }
        _0xe780cd.push(_0x3f29e5 + "=" + _0xe0f658);
      }
      return _0xe780cd.join(_0x518b6c);
    }
    str2json(_0x479db4, _0x160141 = false) {
      let _0x2733a7 = {};
      for (let _0x507e9a of _0x479db4.split("&")) {
        if (!_0x507e9a) {
          continue;
        }
        let _0x48d53a = _0x507e9a.indexOf("=");
        if (_0x48d53a == -1) {
          continue;
        }
        let _0x1a0324 = _0x507e9a.substr(0, _0x48d53a),
          _0x5394c9 = _0x507e9a.substr(_0x48d53a + 1);
        if (_0x160141) {
          _0x5394c9 = decodeURIComponent(_0x5394c9);
        }
        _0x2733a7[_0x1a0324] = _0x5394c9;
      }
      return _0x2733a7;
    }
    randomPattern(_0xfff235, _0x4ad81c = "abcdef0123456789") {
      let _0x24f74d = "";
      for (let _0x2d0702 of _0xfff235) {
        if (_0x2d0702 == "x") {
          _0x24f74d += _0x4ad81c.charAt(Math.floor(Math.random() * _0x4ad81c.length));
        } else {
          _0x2d0702 == "X" ? _0x24f74d += _0x4ad81c.charAt(Math.floor(Math.random() * _0x4ad81c.length)).toUpperCase() : _0x24f74d += _0x2d0702;
        }
      }
      return _0x24f74d;
    }
    randomString(_0xb59e35, _0x4a61a6 = "abcdef0123456789") {
      let _0x178e67 = "";
      for (let _0x3d0982 = 0; _0x3d0982 < _0xb59e35; _0x3d0982++) {
        _0x178e67 += _0x4a61a6.charAt(Math.floor(Math.random() * _0x4a61a6.length));
      }
      return _0x178e67;
    }
    randomList(_0x12fe8d) {
      let _0x1f5903 = Math.floor(Math.random() * _0x12fe8d.length);
      return _0x12fe8d[_0x1f5903];
    }
    wait(_0x84442c) {
      return new Promise(_0x1f9403 => setTimeout(_0x1f9403, _0x84442c));
    }
    async done(_0x35d353 = {}) {
      await this.showmsg();
      const _0x55e56a = new Date().getTime(),
        _0x28c632 = (_0x55e56a - this.startTime) / 1000;
      console.log("\n" + this.name + " 运行结束，共运行了 " + _0x28c632 + " 秒！");
      if (this.isSurge() || this.isQuanX() || this.isLoon()) {
        $done(_0x35d353);
      }
    }
  }(_0x1d366c, _0x21ddf9);
}