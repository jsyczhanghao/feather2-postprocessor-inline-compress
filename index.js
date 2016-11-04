'use strict';

var INLINE_COMPRESS_REG = /(<(script|style)([\s\S]+?\binline-compress\b[^>]*)>)([\s\S]*?)<\/\2>/g;
var ug = require('uglify-js'), clean = require('clean-css');

module.exports = function(content, file, conf){
    if(file.isHtmlLike){
        var tmp;

        content = content.replace(INLINE_COMPRESS_REG, function(_0, _1, _2, _3, _4){
            if(_2 == 'script'){
                _4 = ug.minify(_4, {fromString: true}).code;
            }else{
                _4 = clean.process(_4, {processImport: false});
            }

            return '<' + _2 + _3.replace(/\s*inline-compress\s*/, ' ').replace(/\s*$/, '') + '>' + _4 + '</' + _2 + '>';
        });
    }

    return content;
}