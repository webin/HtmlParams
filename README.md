HtmlParams v1.0
=====================
关于HtmlParams
---------
HtmlParams是一个用于获取Html静态页URL参数的JS工具包,使用它可以快速获取Html URL参数。
引用HtmlParams
---------
在使用HtmlParams前必须现在Html中引用HtmlParams的JS文件，引用方法如下：
``` 
<script src="HtmlParams.js"></script>
```
如果你觉得HtmlParams.js文档太大了，你还可以引用已压缩过的版本:
``` 
<script src="HtmlParams.min.js"></script>
```
API
---------
HtmlParams的使用方法非常简单，不需要引入任何第三方库，在引入HtmlParams.js文件后只需要使用以下方法就能轻松获取到URL参数。

JS文件引入后，必须在你所在网页的JS代码中生成一个HtmlParams对象，通过调用该对象的方法，你就可以获取到URL参数，生成对象代码如下:
``` 
var htmlParams=new HtmlParams();
```

----------
**htmlParams.getNormalParams('参数名');**//获取该参数名默认第一个参数值


    由于URL参数名是可以重复的，如:**sample.html?a=1&b=2&a=1**就出现了两个a参数值，一般情况下都是将他们转化为数组的，HtmlParams也是如此，将其转化为数组，使用该方法并不返回全部参数值，默认返回第一个参数值，也就是1;


----------
**htmlParams.getParamsObj('参数名');**//获取该参数名的参数对象

    在HtmlParams中，默认用ParamsObject对象存储URL参数数据，在建立HtmlParams对象的时候，程序就会自动初始化URL参数数据，按照参数名key生成ParamsObject对象，并存入HtmlParams对象的params数组中。

----------
