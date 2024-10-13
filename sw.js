/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/10/11/we/0816166D2F6EF2FE10DF69F810A06E09.png","002a9845f4912c51cc768edefed984a2"],["/2024/10/11/we/22D3C6A00901015CF60C5531A5F25DD5.png","ea243bbb8f163d331c7c8b4e8907be4e"],["/2024/10/11/we/3BDC71113FA5A15AA6BCBAF81FBE66F9.png","5d78349b94cdedae982673857c3b0246"],["/2024/10/11/we/3BE92E81F1303599D052A1408A0D15C7.png","53fdb340a0ddf82e5d7937285b6629a1"],["/2024/10/11/we/3D11475D1DC537E69E0FB01F16DA02F7.jpg","48feda70fbe897bcb8e3102dc288d9a2"],["/2024/10/11/we/9BEB46612741BF75A1E4B20573C438EA.png","b19092f260fd21ad1ea1d27ddcde6442"],["/2024/10/11/we/EDB244F8F05A91A99E205C8D056B7415.png","6edbea94e6ec6755bf1b22e8b61a5407"],["/2024/10/11/we/F602F3BFEB7B158D6B14B71F0A8EAB1E.png","28367ead9c114d424883902dcbcd4ced"],["/2024/10/11/we/FD8CB2464F794306E40FADD387B561A7.png","ca48490d75d2b6c3034c21a093a89c63"],["/2024/10/11/we/index.html","82aa05c586436c0b8c01a13b05c5d934"],["/about/index.html","c9d3276b64ae336c1a792bac4949ad8c"],["/archives/2024/10/index.html","bb7ed5036ad92d71e2bdd13b3019267a"],["/archives/2024/index.html","22a9dd2d18ccceb9a0b2a307ee8ffcba"],["/archives/index.html","6e44308e0f82b50ebfcf812120ccc11b"],["/categories/index.html","26f99078c5e738c1c178957ca3f017f9"],["/comment/index.html","2275ecccc48f3db2d9bc8a501cae565d"],["/css/index.css","febf63ba01dfc120a7828160f355e800"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/bg_1.jpg","97a86680ae7b3221670efd53a13c7f61"],["/img/bg_2.jpg","e28c937fa12ffd966f41ad69ac85f2b5"],["/img/bg_3.jpg","90c8e7332502a91fc6e7f955603438c0"],["/img/bg_4.jpg","11068b8ec7da19560ba213fa56533645"],["/img/bg_5.jpg","d6289253cf60712e6c46b0e4a0310f2c"],["/img/bg_6.jpg","7396df8d3721e890efc4b4eae638feae"],["/img/bg_7.jpg","27fef5fcfac8645e8351ef220bc599d2"],["/img/bg_8.jpg","6822ad35824be0466677dc2ddca1ace1"],["/img/bg_dt.gif","65cb2c7cd0c15319cfc863ce594ee210"],["/img/favicon.png","37419d0a4d72c7bd8e12b1b2874e0459"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","d0405ca58deaf4fe64274fc667e84466"],["/js/main.js","c1abc98ff6aa69f598f43b8604fb7b3e"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","2e3ff3d156bb208f752d95375ebca557"],["/js/tw_cn.js","fd395fc3b4df9c7da17e730d173cfbea"],["/js/utils.js","2fd35bd141fd541a188ef52dd30108d5"],["/links/index.html","6b5cce9e4282e8ab930536aeb38bc635"],["/messageboard/index.html","c7d92614c09612f3a76ce63c1f039c29"],["/movies/index.html","b5c37dc62c7ef8bb55eeeb5933ebb9b8"],["/music/index.html","c387f117809427e5711d626d44a55ba2"],["/myself/index.html","ecfc77f2ca2527d34158117faf1aa11d"],["/photos/album/aaa/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/photos/album/aaa/bg_1.jpg","97a86680ae7b3221670efd53a13c7f61"],["/photos/album/aaa/bg_2.jpg","e28c937fa12ffd966f41ad69ac85f2b5"],["/photos/album/aaa/bg_3.jpg","90c8e7332502a91fc6e7f955603438c0"],["/photos/album/aaa/bg_4.jpg","11068b8ec7da19560ba213fa56533645"],["/photos/album/aaa/bg_5.jpg","d6289253cf60712e6c46b0e4a0310f2c"],["/photos/album/aaa/bg_6.jpg","7396df8d3721e890efc4b4eae638feae"],["/photos/album/aaa/bg_7.jpg","27fef5fcfac8645e8351ef220bc599d2"],["/photos/album/aaa/bg_8.jpg","6822ad35824be0466677dc2ddca1ace1"],["/photos/album/aaa/bg_dt.gif","65cb2c7cd0c15319cfc863ce594ee210"],["/photos/album/aaa/favicon.png","37419d0a4d72c7bd8e12b1b2874e0459"],["/photos/album/aaa/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/photos/album/index.html","69595f6bc24a35a59d66512e41656dec"],["/photos/index.html","411d0982f16249fa6c343312ac518516"],["/shuoshuo/index.html","87cccf93da51152db8922183f839dd91"],["/sw-register.js","3ed199c2a7b8b3575e1ad978a1d79041"],["/tags/index.html","f715ebfeae88d5258dae1fc2bd9a1c6d"],["/timeline/index.html","0a947c3fe9aab4f84fef0dcb0deeaf93"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
