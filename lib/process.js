'use strict';

const fs = require('hexo-fs');

function lazyProcess(htmlContent) {
    return htmlContent.replace(/<img(.*?)src="(.*?)"(.*?)>/gi, function (str, p1, p2) {
        // might be duplicate
        if(/loading=/gi.test(str)){
            return str;
        }
        if(/src="data:image(.*?)/gi.test(str)) {
            return str;
        }
        if(/no-lazy/gi.test(str)) {
            return str;
        }
        if (cdnconfig.enabled && p2.indexOf("http") !== 0) {
            var srcreal = cdnconfig.url+p2;
        }
        return str.replace(p2, srcreal + '" loading="lazy');
    });
}
module.exports.processPost = function (data) {
    data.content = lazyProcess.call(this, data.content);
    return data;
};
module.exports.processSite = function (htmlContent) {
    return lazyProcess.call(this, htmlContent);
};

