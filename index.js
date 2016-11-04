'use strict';

var INLINE_COMPRESS_REG = /<(script|style)( [^>]*?\b(?:(?:feather|data)-)?inline-compress\b[^>]*)>([\s\S]*?)<\/\1>/g;
var ug = require('uglify-js'), clean = require('clean-css');

module.exports = function(content, file, conf){
    if(file.isHtmlLike){

        content = content.replace(INLINE_COMPRESS_REG, function(_0, _1, _2, _3){
            if(_1 == 'script'){
                _3 = ug.minify(_3, {fromString: true}).code;
            }else{
                _3 = clean.process(_3, {processImport: false});
            }

            return '<' + _1 + _2.replace(/\s*(?:(?:feather|data)-)?inline-compress\s*/, ' ').replace(/\s*$/, '') + '>' + _3 + '</' + _1 + '>';
        });
    }

    return content;
}