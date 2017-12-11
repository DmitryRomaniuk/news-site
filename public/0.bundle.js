webpackJsonp([0],{

/***/ "./lib/getChannelNews.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.getChannelNews = mod.exports;
  }
})(this, function () {
  "use strict";

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports);
      global.getChannelNews = mod.exports;
    }
  })(void 0, function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
      value: true
    });
    _exports.default = void 0;

    function _asyncToGenerator(fn) {
      return function () {
        var self = this,
            args = arguments;
        return new Promise(function (resolve, reject) {
          var gen = fn.apply(self, args);

          function step(key, arg) {
            try {
              var info = gen[key](arg);
              var value = info.value;
            } catch (error) {
              reject(error);
              return;
            }

            if (info.done) {
              resolve(value);
            } else {
              Promise.resolve(value).then(_next, _throw);
            }
          }

          function _next(value) {
            step("next", value);
          }

          function _throw(err) {
            step("throw", err);
          }

          _next();
        });
      };
    }

    var _default = function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(id) {
        var urlChannel, response;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                urlChannel = "https://newsapi.org/v2/top-headlines?sources=".concat(id, "&apiKey=1013e5c10e394f778a09b8476d2b9570");
                _context.next = 3;
                return fetch(urlChannel, {
                  method: 'GET',
                  mode: 'cors'
                });

              case 3:
                response = _context.sent;
                _context.next = 6;
                return response.json();

              case 6:
                return _context.abrupt("return", _context.sent);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    _exports.default = _default;
  });
});

/***/ }),

/***/ "./lib/loadMainPage.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.loadMainPage = mod.exports;
  }
})(this, function () {
  "use strict";

  (function (global, factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("./lib/getChannelNews.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
      factory(exports, require("./getChannelNews"));
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports, global.getChannelNews);
      global.loadMainPage = mod.exports;
    }
  })(void 0, function (_exports, _getChannelNews) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
      value: true
    });
    _exports.default = void 0;
    _getChannelNews = _interopRequireDefault(_getChannelNews);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    function _asyncToGenerator(fn) {
      return function () {
        var self = this,
            args = arguments;
        return new Promise(function (resolve, reject) {
          var gen = fn.apply(self, args);

          function step(key, arg) {
            try {
              var info = gen[key](arg);
              var value = info.value;
            } catch (error) {
              reject(error);
              return;
            }

            if (info.done) {
              resolve(value);
            } else {
              Promise.resolve(value).then(_next, _throw);
            }
          }

          function _next(value) {
            step("next", value);
          }

          function _throw(err) {
            step("throw", err);
          }

          _next();
        });
      };
    }

    var _default = function _default() {
      console.log(1);
      document.querySelector('.list-news').addEventListener('click', function (event) {
        $('.list-news').hide();
        $('#back-to-list').show();

        var getArticles = function () {
          var _ref = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _ref2, articles, wrapper;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return (0, _getChannelNews.default)(event.target.parentNode.id);

                  case 2:
                    _ref2 = _context.sent;
                    articles = _ref2.articles;
                    wrapper = document.createElement("div");
                    articles.forEach(function (_ref3) {
                      var description = _ref3.description,
                          title = _ref3.title,
                          author = _ref3.author,
                          url = _ref3.url,
                          urlToImage = _ref3.urlToImage;
                      var article = document.createElement("article");
                      article.classList.add('col-12', 'col-md-6', 'one-article');
                      var titleDiv = document.createElement("div");
                      var image = document.createElement("img");
                      image.setAttribute('src', urlToImage);
                      var link = document.createElement("a");
                      link.setAttribute('href', url);
                      link.innerText = title;
                      titleDiv.appendChild(link);
                      var descriptionDiv = document.createElement("div");
                      descriptionDiv.innerText = description;
                      var authorDiv = document.createElement("div");
                      authorDiv.innerText = !!author ? "Author: ".concat(author) : null;
                      article.appendChild(image);
                      article.appendChild(authorDiv);
                      article.appendChild(titleDiv);
                      article.appendChild(descriptionDiv);
                      wrapper.appendChild(article);
                    });
                    wrapper.classList.add('row');
                    document.querySelector('.channel-show-news').appendChild(wrapper);
                    $('.channel-news').show();

                  case 9:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          return function getArticles() {
            return _ref.apply(this, arguments);
          };
        }();

        getArticles();
      });
      document.querySelector('#back-to-list').addEventListener('click', function () {
        $('#back-to-list').hide();
        $('.channel-show-news').children().remove();
        $('.list-news').show();
      });
      var urlChannel = "https://newsapi.org/v2/sources?language=en&apiKey=1013e5c10e394f778a09b8476d2b9570";
      var myHeaders = new Headers();

      var getDataForMain = function () {
        var _ref4 = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee2() {
          var response, _ref5, sources, wrapper;

          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return fetch(urlChannel, {
                    method: 'GET',
                    mode: 'cors',
                    headers: myHeaders
                  });

                case 2:
                  response = _context2.sent;
                  _context2.next = 5;
                  return response.json();

                case 5:
                  _ref5 = _context2.sent;
                  sources = _ref5.sources;
                  wrapper = document.createElement("div");
                  sources.forEach(function (_ref6) {
                    var id = _ref6.id,
                        name = _ref6.name,
                        description = _ref6.description,
                        url = _ref6.url;
                    var link = document.createElement("a");
                    link.setAttribute('href', '#');
                    link.setAttribute('title', name);
                    link.setAttribute('id', id);
                    var img = document.createElement("img");
                    img.setAttribute('alt', id);
                    var createUrl = "https://icons.better-idea.org/icon?url=".concat(url, "&amp;size=70..120..200");
                    img.setAttribute('src', createUrl);
                    img.classList.add('icon', 'logo');
                    link.appendChild(img);
                    var divTitle = document.createElement("div");
                    divTitle.setAttribute('title', name);
                    divTitle.classList.add('title');
                    divTitle.innerText = name;
                    link.appendChild(divTitle);
                    var divDescription = document.createElement("div");
                    divDescription.setAttribute('title', name);
                    divDescription.classList.add('description');
                    divDescription.innerText = description;
                    link.appendChild(divDescription);
                    var divKbd = document.createElement("div");
                    var kbd = document.createElement("kbd");
                    kbd.innerText = id;
                    divKbd.appendChild(kbd);
                    link.appendChild(divKbd);
                    var article = document.createElement("article");
                    article.classList.add('col-12', 'col-md-6');
                    article.appendChild(link);
                    wrapper.appendChild(article);
                    wrapper.classList.add('row');
                    document.querySelector('.list-news').appendChild(wrapper);
                  });

                case 9:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        return function getDataForMain() {
          return _ref4.apply(this, arguments);
        };
      }();

      return getDataForMain();
    };

    _exports.default = _default;
  });
});

/***/ })

});