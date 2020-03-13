webpackJsonp([1],{M1Vu:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("yqhJ"),i=n("p18z"),l={name:"addArticle",data:function(){return{article:{title:"",tag:"",top:!1,content:{}},initData:i.a,restaurants:[]}},components:{Markdown:a.a},methods:{change:function(){console.log(arguments[0],this.article),this.article.content=arguments[0]},querySearch:function(e,t){var n=this.restaurants;t(e?n.filter(this.createFilter(e)):n)},createFilter:function(e){return function(t){return 0===t.value.toLowerCase().indexOf(e.toLowerCase())}},loadAll:function(){return[{value:"vue"},{value:"node.js"}]},handleSelect:function(e){console.log(e)},submitArticle:function(){this.$axios.post("/api/addArticle",{data:this.article}).then(function(e){console.log(e)}).catch(function(e){console.log(e)})}},mounted:function(){this.restaurants=this.loadAll()}},r={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"addArticle"},[n("el-form",{ref:"article",attrs:{model:e.article,"label-width":"80px"}},[n("el-form-item",{attrs:{label:"文章标题"}},[n("el-input",{model:{value:e.article.title,callback:function(t){e.$set(e.article,"title",t)},expression:"article.title"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"标签"}},[n("el-autocomplete",{staticClass:"inline-input",attrs:{"fetch-suggestions":e.querySearch,placeholder:"请输入内容"},on:{select:e.handleSelect},model:{value:e.article.tag,callback:function(t){e.$set(e.article,"tag",t)},expression:"article.tag"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"是否置顶"}},[n("el-switch",{model:{value:e.article.top,callback:function(t){e.$set(e.article,"top",t)},expression:"article.top"}})],1)],1),e._v(" "),n("Markdown",{attrs:{onchange:e.change,initData:e.initData}}),e._v(" "),n("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"end"}},[n("el-button",{staticClass:"subBtn",attrs:{type:"primary"},on:{click:e.submitArticle}},[e._v("发布")])],1)],1)},staticRenderFns:[]};var o=n("VU/8")(l,r,!1,function(e){n("X1hu")},"data-v-23a48c0f",null);t.default=o.exports},X1hu:function(e,t){},cpI8:function(e,t){},p18z:function(e,t,n){"use strict";t.a='# 初始值\n\n### 多语言代码高亮 Codes\n\n#### 行内代码 Inline code\n\n执行命令：`npm install marked`\n\n#### 缩进风格\n\n即缩进四个空格，也做为实现类似`<pre>`预格式化文本(Preformatted Text)的功能。\n\n    <?php\n        echo "Hello world!";\n    ?>\n    \n预格式化文本：\n\n    | First Header  | Second Header |\n    | ------------- | ------------- |\n    | Content Cell  | Content Cell  |\n    | Content Cell  | Content Cell  |\n#### java代码\n\n```java\npublic class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println("Hello World");\n    }\n}\n```\n#### JS代码　\n\n```javascript\nfunction test(){\n\tconsole.log("Hello world!");\n}\n \n(function(){\n    var box = function(){\n        return box.fn.init();\n    };\n\n    box.prototype = box.fn = {\n        init : function(){\n            console.log(\'box.init()\');\n\n\t\t\treturn this;\n        },\n\n\t\tadd : function(str){\n\t\t\talert("add", str);\n\n\t\t\treturn this;\n\t\t},\n\n\t\tremove : function(str){\n\t\t\talert("remove", str);\n\n\t\t\treturn this;\n\t\t}\n    };\n    \n    box.fn.init.prototype = box.fn;\n    \n    window.box =box;\n})();\n\nvar testBox = box();\ntestBox.add("jQuery").remove("jQuery");\n```\n\n#### HTML代码 HTML codes\n\n```html\n<!DOCTYPE html>\n<html>\n    <head>\n        <mate charest="utf-8" />\n        <title>Hello world!</title>\n    </head>\n    <body>\n        <h1>Hello world!</h1>\n    </body>\n</html>\n```\n### 列表 Lists\n\n#### 无序列表（减号）Unordered Lists (-)\n                \n- 列表一\n- 列表二\n- 列表三\n     \n#### 无序列表（星号）Unordered Lists (*)\n\n* 列表一\n* 列表二\n* 列表三\n\n#### 无序列表（加号和嵌套）Unordered Lists (+)\n                \n+ 列表一\n+ 列表二\n    + 列表二-1\n    + 列表二-2\n    + 列表二-3\n+ 列表三\n    * 列表一\n    * 列表二\n    * 列表三\n\n#### 有序列表 Ordered Lists (-)\n                \n1. 第一行\n2. 第二行\n3. 第三行\n\n#### GFM task list\n\n- [x] GFM task list 1\n- [x] GFM task list 2\n- [ ] GFM task list 3\n    - [ ] GFM task list 3-1\n    - [ ] GFM task list 3-2\n    - [ ] GFM task list 3-3\n- [ ] GFM task list 4\n    - [ ] GFM task list 4-1\n    - [ ] GFM task list 4-2\n                \n----### 绘制表格 Tables\n\n| 项目        | 价格   |  数量  |\n| --------   | -----:  | :----:  |\n| 计算机      | $1600   |   5     |\n| 手机        |   $12   |   12   |\n| 管线        |    $1    |  234  |\n                    \n\n| Function name | Description                    |\n| ------------- | ------------------------------ |\n| `help()`      | Display the help window.       |\n| `destroy()`   | **Destroy your computer!**     |\n\n| Left-Aligned  | Center Aligned  | Right Aligned |\n| :------------ |:---------------:| -----:|\n| col 3 is      | some wordy text | $1600 |\n| col 2 is      | centered        |   $12 |\n| zebra stripes | are neat        |    $1 |\n\n\n            \n### 科学公式 TeX(KaTeX)\n                    \n$$E=mc^2$$\n\n行内的公式$$E=mc^2$$行内的公式，行内的$$E=mc^2$$公式。\n\n$$\\(\\sqrt{3x-1}+(1+x)^2\\)$$\n                    \n$$\\sin(\\alpha)^{\\theta}=\\sum_{i=0}^{n}(x^i + \\cos(f))$$\n多行公式：\n\n```math\n\\displaystyle\n\\left( \\sum\\_{k=1}^n a\\_k b\\_k \\right)^2\n\\leq\n\\left( \\sum\\_{k=1}^n a\\_k^2 \\right)\n\\left( \\sum\\_{k=1}^n b\\_k^2 \\right)\n```\n```katex\n\\displaystyle \n    \\frac{1}{\n        \\Bigl(\\sqrt{\\phi \\sqrt{5}}-\\phi\\Bigr) e^{\n        \\frac25 \\pi}} = 1+\\frac{e^{-2\\pi}} {1+\\frac{e^{-4\\pi}} {\n        1+\\frac{e^{-6\\pi}}\n        {1+\\frac{e^{-8\\pi}}\n         {1+\\cdots} }\n        } \n    }\n```\n### 绘制流程图 Flowchart\n\n```flow\nst=>start: 用户登陆\nop=>operation: 登陆操作\ncond=>condition: 登陆成功 Yes or No?\ne=>end: 进入后台\n\nst->op->cond\ncond(yes)->e\ncond(no)->op\n```\n                    \n### 绘制序列图 Sequence Diagram\n                    \n```seq\nAndrew->China: Says Hello \nNote right of China: China thinks\\nabout it \nChina--\x3eAndrew: How are you? \nAndrew->>China: I am good thanks!\n```\n\n### End'},yqhJ:function(e,t,n){"use strict";var a=n("Xxa5"),i=n.n(a),l=n("exGp"),r=n.n(l),o=n("Dd8w"),s=n.n(o),c=n("//Fk"),u=n.n(c),d=n("zhAq"),h=n.n(d),m={width:"100%",height:600,path:"./static/markdown/lib/",previewTheme:"default",editorTheme:"pastel-on-dark",lineWrapping:!0,codeFold:!0,placeholder:"请输入...",syncScrolling:!0,saveHTMLToTextarea:!0,searchReplace:!0,watch:!0,toolbar:!0,previewCodeHighlight:!0,emoji:!0,taskList:!0,tocm:!0,tex:!0,flowChart:!0,sequenceDiagram:!0,imageUpload:!0,imageFormats:["jpg","jpeg","gif","png","bmp","webp"],imageUploadURL:"../../assets/uploadImage"},f=[{label:"monokai",value:"monokai.min.css"},{label:"atelier-cave-dark",value:"atelier-cave-dark.min.css"},{label:"atelier-cave-light",value:"atelier-cave-light.min.css"},{label:"atelier-dune-dark",value:"atelier-dune-dark.min.css"},{label:"atelier-dune-light",value:"atelier-dune-light.min.css"},{label:"atelier-estuary-dark",value:"atelier-estuary-dark.min.css"},{label:"atelier-estuary-light",value:"atelier-estuary-light.min.css"},{label:"atelier-forest-dark",value:"atelier-forest-dark.min.css"},{label:"atelier-forest-light",value:"atelier-forest-light.min.css"},{label:"atelier-heath-dark",value:"atelier-heath-dark.min.css"},{label:"atelier-heath-light",value:"atelier-heath-light.min.css"},{label:"atelier-lakeside-dark",value:"atelier-lakeside-dark.min.css"},{label:"atelier-lakeside-light",value:"atelier-lakeside-light.min.css"},{label:"atelier-plateau-dark",value:"atelier-plateau-dark.min.css"},{label:"atelier-plateau-light",value:"atelier-plateau-light.min.css"},{label:"atelier-savanna-dark",value:"atelier-savanna-dark.min.css"},{label:"atelier-savanna-light",value:"atelier-savanna-light.min.css"},{label:"atelier-seaside-dark",value:"atelier-seaside-dark.min.css"},{label:"atelier-seaside-light",value:"atelier-seaside-light.min.css"},{label:"atelier-sulphurpool-dark",value:"atelier-sulphurpool-dark.min.css"},{label:"atelier-sulphurpool-light",value:"atelier-sulphurpool-light.min.css"},{label:"github",value:"github.min.css"},{label:"github-v2",value:"github-v2.min.css"},{label:"hemisu-dark",value:"hemisu-dark.min.css"},{label:"hemisu-light",value:"hemisu-light.min.css"},{label:"tomorrow",value:"tomorrow.min.css"},{label:"tomorrow-night",value:"tomorrow-night.min.css"},{label:"tomorrow-night-blue",value:"tomorrow-night-blue.min.css"},{label:"tomorrow-night-bright",value:"tomorrow-night-bright.min.css"},{label:"tomorrow-night-eighties",value:"tomorrow-night-eighties.min.css"},{label:"tranquil-heart",value:"previewTheme-xu.css"},{label:"vibrant-ink",value:"vibrant-ink.min.css"},{label:"pastel-on-dark-xu",value:"pastel-on-dark-xu.css"}],p={name:"markdown-editor",props:{editorId:{type:String,default:"markdown-editor"},onchange:{type:Function},config:{type:Object},codeTheme:{type:String,default:"vibrant-ink.min.css"},initData:{type:String},initDataDelay:{type:Number,default:0}},data:function(){return{editor:null,codeThemes:f,editorLoaded:!1}},methods:{fetchScript:function(e){return new u.a(function(t){h()(e,function(){t()})})},getConfig:function(){return s()({},m,this.config)},setMarkdown:function(e){window.editormd(this.editorId,this.getConfig()).setMarkdown(e)},initEditor:function(){var e=this;r()(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.fetchScript("./static/markdown/jquery.min.js");case 2:return t.next=4,e.fetchScript("./static/markdown/editormd.min.js");case 4:e.$nextTick(function(){var t=window.editormd(e.editorId,e.getConfig());t.on("load",function(){setTimeout(function(){e.editorLoaded=!0,e.initData&&t.setMarkdown(e.initData)},e.initDataDelay)}),e.onchange&&t.on("change",function(){var n=t.getPreviewedHTML();e.onchange({markdown:t.getMarkdown(),html:n,text:window.$(n).text()})}),e.editor=t});case 5:case"end":return t.stop()}},t,e)}))()}},mounted:function(){this.initEditor()},watch:{initData:function(e){e&&this.editorLoaded&&this.editor.setMarkdown(e)}}},g={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"markdownBox"},[t("link",{attrs:{rel:"stylesheet",href:"./static/markdown/css/editormd.min.css"}}),this._v(" "),t("link",{attrs:{rel:"stylesheet",href:"./static/markdown/css/googleCodePrettifyThemes/previewTheme-xu.css"}}),this._v(" "),t("div",{attrs:{id:this.editorId}})])},staticRenderFns:[]};var v=n("VU/8")(p,g,!1,function(e){n("cpI8")},"data-v-54dab470",null);t.a=v.exports},zhAq:function(e,t,n){var a,i,l;
/*!
  * $script.js JS loader & dependency manager
  * https://github.com/ded/script.js
  * (c) Dustin Diaz 2014 | License MIT
  */
/*!
  * $script.js JS loader & dependency manager
  * https://github.com/ded/script.js
  * (c) Dustin Diaz 2014 | License MIT
  */
l=function(){var e,t,n=document,a=n.getElementsByTagName("head")[0],i=!1,l="push",r="readyState",o="onreadystatechange",s={},c={},u={},d={};function h(e,t){for(var n=0,a=e.length;n<a;++n)if(!t(e[n]))return i;return 1}function m(e,t){h(e,function(e){return!t(e)})}function f(t,n,a){t=t[l]?t:[t];var i=n&&n.call,r=i?n:a,o=i?t.join(""):n,g=t.length;function v(e){return e.call?e():s[e]}function b(){if(!--g)for(var e in s[o]=1,r&&r(),u)h(e.split("|"),v)&&!m(u[e],v)&&(u[e]=[])}return setTimeout(function(){m(t,function t(n,a){return null===n?b():(a||/^https?:\/\//.test(n)||!e||(n=-1===n.indexOf(".js")?e+n+".js":e+n),d[n]?(o&&(c[o]=1),2==d[n]?b():setTimeout(function(){t(n,!0)},0)):(d[n]=1,o&&(c[o]=1),void p(n,b)))})},0),f}function p(e,i){var l,s=n.createElement("script");s.onload=s.onerror=s[o]=function(){s[r]&&!/^c|loade/.test(s[r])||l||(s.onload=s[o]=null,l=1,d[e]=2,i())},s.async=1,s.src=t?e+(-1===e.indexOf("?")?"?":"&")+t:e,a.insertBefore(s,a.lastChild)}return f.get=p,f.order=function(e,t,n){!function a(i){i=e.shift(),e.length?f(i,a):f(i,t,n)}()},f.path=function(t){e=t},f.urlArgs=function(e){t=e},f.ready=function(e,t,n){var a,i=[];return!m(e=e[l]?e:[e],function(e){s[e]||i[l](e)})&&h(e,function(e){return s[e]})?t():(a=e.join("|"),u[a]=u[a]||[],u[a][l](t),n&&n(i)),f},f.done=function(e){f([null],e)},f},void 0!==e&&e.exports?e.exports=l():void 0===(i="function"==typeof(a=l)?a.call(t,n,t,e):a)||(e.exports=i)}});
//# sourceMappingURL=1.9fe8680d7ea58beda338.js.map