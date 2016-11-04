feather2-postprocessor-inline-compress
======================
feather2-postprocessor-inline-compress是[feather2](http://github.com/feather-team/feather2)中的一个内联样式以及js进行压缩的插件，它可同样作为[fis](http://fis.baidu.com/)的插件进行使用。


#使用

```sh
npm install feather2-postprocessor-inline-compress
```

conf/conf.js
```js
feather.config.get('postprocessor').push('inline-compress');
```

index.html
```html
<script inline-compress>
(function(window){
console.log(123);
})(window);
</script>

<style type="text/css" inline-compress>
div{
  font-size: 12px;
  font-weight: bold;
}
</style>
```
