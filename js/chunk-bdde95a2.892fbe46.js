(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bdde95a2"],{"107c":function(t,e,c){var a=c("d039"),l=c("da84"),s=l.RegExp;t.exports=a((function(){var t=s("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},"14c3":function(t,e,c){var a=c("da84"),l=c("c65b"),s=c("825a"),n=c("1626"),i=c("c6b6"),o=c("9263"),r=a.TypeError;t.exports=function(t,e){var c=t.exec;if(n(c)){var a=l(c,t,e);return null!==a&&s(a),a}if("RegExp"===i(t))return l(o,t,e);throw r("RegExp#exec called on incompatible receiver")}},"424e":function(t,e,c){t.exports=c.p+"img/bannerfood.78924249.jpg"},"466d":function(t,e,c){"use strict";var a=c("c65b"),l=c("d784"),s=c("825a"),n=c("50c4"),i=c("577e"),o=c("1d80"),r=c("dc4a"),f=c("8aa5"),d=c("14c3");l("match",(function(t,e,c){return[function(e){var c=o(this),l=void 0==e?void 0:r(e,t);return l?a(l,e,c):new RegExp(e)[t](i(c))},function(t){var a=s(this),l=i(t),o=c(e,a,l);if(o.done)return o.value;if(!a.global)return d(a,l);var r=a.unicode;a.lastIndex=0;var b,u=[],p=0;while(null!==(b=d(a,l))){var m=i(b[0]);u[p]=m,""===m&&(a.lastIndex=f(l,n(a.lastIndex),r)),p++}return 0===p?null:u}]}))},"5e0d":function(t,e,c){t.exports=c.p+"img/bannerview.c64200a1.jpg"},"8aa5":function(t,e,c){"use strict";var a=c("6547").charAt;t.exports=function(t,e,c){return e+(c?a(t,e).length:1)}},9263:function(t,e,c){"use strict";var a=c("c65b"),l=c("e330"),s=c("577e"),n=c("ad6d"),i=c("9f7f"),o=c("5692"),r=c("7c73"),f=c("69f3").get,d=c("fce3"),b=c("107c"),u=o("native-string-replace",String.prototype.replace),p=RegExp.prototype.exec,m=p,j=l("".charAt),O=l("".indexOf),h=l("".replace),x=l("".slice),g=function(){var t=/a/,e=/b*/g;return a(p,t,"a"),a(p,e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),v=i.UNSUPPORTED_Y||i.BROKEN_CARET,w=void 0!==/()??/.exec("")[1],y=g||w||v||d||b;y&&(m=function(t){var e,c,l,i,o,d,b,y=this,A=f(y),E=s(t),I=A.raw;if(I)return I.lastIndex=y.lastIndex,e=a(m,I,E),y.lastIndex=I.lastIndex,e;var R=A.groups,k=v&&y.sticky,S=a(n,y),B=y.source,C=0,D=E;if(k&&(S=h(S,"y",""),-1===O(S,"g")&&(S+="g"),D=x(E,y.lastIndex),y.lastIndex>0&&(!y.multiline||y.multiline&&"\n"!==j(E,y.lastIndex-1))&&(B="(?: "+B+")",D=" "+D,C++),c=new RegExp("^(?:"+B+")",S)),w&&(c=new RegExp("^"+B+"$(?!\\s)",S)),g&&(l=y.lastIndex),i=a(p,k?c:y,D),k?i?(i.input=x(i.input,C),i[0]=x(i[0],C),i.index=y.lastIndex,y.lastIndex+=i[0].length):y.lastIndex=0:g&&i&&(y.lastIndex=y.global?i.index+i[0].length:l),w&&i&&i.length>1&&a(u,i[0],c,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(i[o]=void 0)})),i&&R)for(i.groups=d=r(null),o=0;o<R.length;o++)b=R[o],d[b[0]]=i[b[1]];return i}),t.exports=m},"9c5f":function(t,e,c){t.exports=c.p+"img/bannerhotel.33f80f03.jpg"},"9f7f":function(t,e,c){var a=c("d039"),l=c("da84"),s=l.RegExp;e.UNSUPPORTED_Y=a((function(){var t=s("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=a((function(){var t=s("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ac1f:function(t,e,c){"use strict";var a=c("23e7"),l=c("9263");a({target:"RegExp",proto:!0,forced:/./.exec!==l},{exec:l})},ad6d:function(t,e,c){"use strict";var a=c("825a");t.exports=function(){var t=a(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b0c0:function(t,e,c){var a=c("83ab"),l=c("5e77").EXISTS,s=c("e330"),n=c("9bf2").f,i=Function.prototype,o=s(i.toString),r=/^\s*function ([^ (]*)/,f=s(r.exec),d="name";a&&!l&&n(i,d,{configurable:!0,get:function(){try{return f(r,o(this))[1]}catch(t){return""}}})},ca6b:function(t,e,c){t.exports=c.p+"img/bannerAct.da8cd07d.jpg"},d784:function(t,e,c){"use strict";c("ac1f");var a=c("e330"),l=c("6eeb"),s=c("9263"),n=c("d039"),i=c("b622"),o=c("9112"),r=i("species"),f=RegExp.prototype;t.exports=function(t,e,c,d){var b=i(t),u=!n((function(){var e={};return e[b]=function(){return 7},7!=""[t](e)})),p=u&&!n((function(){var e=!1,c=/a/;return"split"===t&&(c={},c.constructor={},c.constructor[r]=function(){return c},c.flags="",c[b]=/./[b]),c.exec=function(){return e=!0,null},c[b](""),!e}));if(!u||!p||c){var m=a(/./[b]),j=e(b,""[t],(function(t,e,c,l,n){var i=a(t),o=e.exec;return o===s||o===f.exec?u&&!n?{done:!0,value:m(e,c,l)}:{done:!0,value:i(c,e,l)}:{done:!1}}));l(String.prototype,t,j[0]),l(f,b,j[1])}d&&o(f[b],"sham",!0)}},de93:function(t,e,c){"use strict";c.r(e);c("b0c0");var a=c("7a23"),l=c("4d77"),s=c.n(l),n=c("e33a"),i=c.n(n),o={class:"activity"},r={class:"container h-100"},f={class:"d-flex justify-content-center align-items-center h-100"},d={class:"text-shadow text-white fs-2 fw-bold"},b={class:"container py-13"},u=Object(a["f"])("div",{class:"position-relative mb-9"},[Object(a["f"])("img",{class:"searchIcon position-absolute top-50 translate-middle-y",src:s.a,alt:"search icon"}),Object(a["f"])("input",{type:"text",class:"form-control box-shadow rounded-5 py-3 ps-10",placeholder:"所有縣市"})],-1),p={class:"d-flex justify-content-between align-items-center border-bottom border-secondary-light mb-10"},m={class:"theme-list d-flex list-unstyled"},j=Object(a["h"])(" 精選活動 "),O=Object(a["h"])(" 各地景點 "),h=Object(a["h"])(" 探索美食 "),x=Object(a["h"])(" 住宿飯店 "),g=Object(a["f"])("div",{class:"position-relative"},[Object(a["f"])("img",{src:i.a,alt:"theme icon",class:"position-absolute theme-icon"}),Object(a["f"])("select",{class:"form-select theme-select rounded-5 fs-5 box-shadow px-11 py-3"},[Object(a["f"])("option",{class:"py-3",selected:"",disabled:""},"主題分類"),Object(a["f"])("option",{class:"py-3",value:"熱門活動"},"熱門活動"),Object(a["f"])("option",{class:"py-3",value:"近期活動"},"近期活動"),Object(a["f"])("option",{class:"py-3",value:"傳統節慶"},"傳統節慶"),Object(a["f"])("option",{class:"py-3",value:"原住民活動"},"原住民活動")])],-1),v=Object(a["f"])("ul",{class:"row list-unstyled mb-16"},[Object(a["f"])("li",{class:"col-md-6 mb-10"},[Object(a["f"])("div",{class:"card"},[Object(a["f"])("div",{class:"row g-0"},[Object(a["f"])("div",{class:"col-md-7"},[Object(a["f"])("img",{src:"https://fakeimg.pl/355x300/",class:"img-fluid rounded-start",alt:"..."})]),Object(a["f"])("div",{class:"col-md-5"},[Object(a["f"])("div",{class:"card-body d-flex flex-column justify-content-between h-100"},[Object(a["f"])("div",null,[Object(a["f"])("h5",{class:"card-title fw-bold fs-7 mb-6"}," 新北市歡樂耶誕城 "),Object(a["f"])("p",{class:"card-text fw-bold mb-4"},[Object(a["h"])(" 時間: "),Object(a["f"])("small",{class:"fw-light"},"2021/11/20-2021/12/30")]),Object(a["f"])("p",{class:"card-text fw-bold mb-4"},[Object(a["h"])(" 地點: "),Object(a["f"])("small",{class:"fw-light"},"新北市板橋區")]),Object(a["f"])("p",{class:"card-text fw-light"}," 新北市歡樂耶誕城，是台灣新北市新板特區商圈的一系列耶誕節活動的總稱，首次舉辦是在2011...... ")]),Object(a["f"])("div",{class:"ms-auto"},[Object(a["f"])("button",{type:"button",class:"btn btn-primary-light text-white rounded-4 px-7 py-1"},[Object(a["f"])("small",null,"活動詳情")])])])])])])]),Object(a["f"])("li",{class:"col-md-6 mb-10"},[Object(a["f"])("div",{class:"card"},[Object(a["f"])("div",{class:"row g-0"},[Object(a["f"])("div",{class:"col-md-7"},[Object(a["f"])("img",{src:"https://fakeimg.pl/355x300/",class:"img-fluid rounded-start",alt:"..."})]),Object(a["f"])("div",{class:"col-md-5"},[Object(a["f"])("div",{class:"card-body d-flex flex-column justify-content-between h-100"},[Object(a["f"])("div",null,[Object(a["f"])("h5",{class:"card-title fw-bold fs-7 mb-6"}," 新北市歡樂耶誕城 "),Object(a["f"])("p",{class:"card-text fw-bold mb-4"},[Object(a["h"])(" 時間: "),Object(a["f"])("small",{class:"fw-light"},"2021/11/20-2021/12/30")]),Object(a["f"])("p",{class:"card-text fw-bold mb-4"},[Object(a["h"])(" 地點: "),Object(a["f"])("small",{class:"fw-light"},"新北市板橋區")]),Object(a["f"])("p",{class:"card-text fw-light"}," 新北市歡樂耶誕城，是台灣新北市新板特區商圈的一系列耶誕節活動的總稱，首次舉辦是在2011...... ")]),Object(a["f"])("div",{class:"ms-auto"},[Object(a["f"])("button",{type:"button",class:"btn btn-primary-light text-white rounded-4 px-7 py-1"},[Object(a["f"])("small",null,"活動詳情")])])])])])])]),Object(a["f"])("li",{class:"col-md-6"},[Object(a["f"])("div",{class:"card"},[Object(a["f"])("div",{class:"row g-0"},[Object(a["f"])("div",{class:"col-md-7"},[Object(a["f"])("img",{src:"https://fakeimg.pl/355x300/",class:"img-fluid rounded-start",alt:"..."})]),Object(a["f"])("div",{class:"col-md-5"},[Object(a["f"])("div",{class:"card-body d-flex flex-column justify-content-between h-100"},[Object(a["f"])("div",null,[Object(a["f"])("h5",{class:"card-title fw-bold fs-7 mb-6"}," 新北市歡樂耶誕城 "),Object(a["f"])("p",{class:"card-text fw-bold mb-4"},[Object(a["h"])(" 時間: "),Object(a["f"])("small",{class:"fw-light"},"2021/11/20-2021/12/30")]),Object(a["f"])("p",{class:"card-text fw-bold mb-4"},[Object(a["h"])(" 地點: "),Object(a["f"])("small",{class:"fw-light"},"新北市板橋區")]),Object(a["f"])("p",{class:"card-text fw-light"}," 新北市歡樂耶誕城，是台灣新北市新板特區商圈的一系列耶誕節活動的總稱，首次舉辦是在2011...... ")]),Object(a["f"])("div",{class:"ms-auto"},[Object(a["f"])("button",{type:"button",class:"btn btn-primary-light text-white rounded-4 px-7 py-1"},[Object(a["f"])("small",null,"活動詳情")])])])])])])]),Object(a["f"])("li",{class:"col-md-6"},[Object(a["f"])("div",{class:"card"},[Object(a["f"])("div",{class:"row g-0"},[Object(a["f"])("div",{class:"col-md-7"},[Object(a["f"])("img",{src:"https://fakeimg.pl/355x300/",class:"img-fluid rounded-start",alt:"..."})]),Object(a["f"])("div",{class:"col-md-5"},[Object(a["f"])("div",{class:"card-body d-flex flex-column justify-content-between h-100"},[Object(a["f"])("div",null,[Object(a["f"])("h5",{class:"card-title fw-bold fs-7 mb-6"}," 新北市歡樂耶誕城 "),Object(a["f"])("p",{class:"card-text fw-bold mb-4"},[Object(a["h"])(" 時間: "),Object(a["f"])("small",{class:"fw-light"},"2021/11/20-2021/12/30")]),Object(a["f"])("p",{class:"card-text fw-bold mb-4"},[Object(a["h"])(" 地點: "),Object(a["f"])("small",{class:"fw-light"},"新北市板橋區")]),Object(a["f"])("p",{class:"card-text fw-light"}," 新北市歡樂耶誕城，是台灣新北市新板特區商圈的一系列耶誕節活動的總稱，首次舉辦是在2011...... ")]),Object(a["f"])("div",{class:"ms-auto"},[Object(a["f"])("button",{type:"button",class:"btn btn-primary-light text-white rounded-4 px-7 py-1"},[Object(a["f"])("small",null,"活動詳情")])])])])])])])],-1);function w(t,e,c,l,s,n){var i=Object(a["y"])("router-link");return Object(a["t"])(),Object(a["e"])(a["a"],null,[Object(a["f"])("div",o,[s.theme?(Object(a["t"])(),Object(a["e"])("div",{key:0,class:"activityBanner banner",style:Object(a["p"])({"background-image":"url(".concat(s.themeBackground[s.theme].image,")")})},[Object(a["f"])("div",r,[Object(a["f"])("div",f,[Object(a["f"])("h1",d,Object(a["A"])(s.themeBackground[s.theme].name),1)])])],4)):Object(a["d"])("",!0)]),Object(a["f"])("div",b,[u,Object(a["f"])("div",p,[Object(a["f"])("ul",m,[Object(a["f"])("li",null,[Object(a["i"])(i,{to:"/theme/activity",class:Object(a["o"])(["theme-item text-dark fw-bold fs-5 px-6 pb-3",{active:"activity"===s.theme}])},{default:Object(a["D"])((function(){return[j]})),_:1},8,["class"])]),Object(a["f"])("li",null,[Object(a["i"])(i,{to:"/theme/viewpoint",class:Object(a["o"])(["theme-item text-dark fw-bold fs-5 px-6 pb-3",{active:"viewpoint"===s.theme}])},{default:Object(a["D"])((function(){return[O]})),_:1},8,["class"])]),Object(a["f"])("li",null,[Object(a["i"])(i,{to:"/theme/food",class:Object(a["o"])(["theme-item text-dark fw-bold fs-5 px-6 pb-3",{active:"food"===s.theme}])},{default:Object(a["D"])((function(){return[h]})),_:1},8,["class"])]),Object(a["f"])("li",null,[Object(a["i"])(i,{to:"/theme/hotel",class:Object(a["o"])(["theme-item text-dark fw-bold fs-5 px-6 pb-3",{active:"hotel"===s.theme}])},{default:Object(a["D"])((function(){return[x]})),_:1},8,["class"])])]),g]),v])],64)}c("ac1f"),c("466d");var y={data:function(){return{theme:"",themeBackground:{activity:{name:"精選活動",image:c("ca6b")},viewpoint:{name:"全台景點",image:c("5e0d")},food:{name:"探索美食",image:c("424e")},hotel:{name:"住宿飯店",image:c("9c5f")}}}},watch:{$route:function(t,e){t.fullPath.match("/theme/")&&(this.theme=this.$route.params.id)}},mounted:function(){this.theme=this.$route.params.id}},A=c("6b0d"),E=c.n(A);const I=E()(y,[["render",w]]);e["default"]=I},e33a:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKWSURBVHgB7VdBbhoxFP3fQ1JQlQRuMEegJyjZEboIPQFk0xR1UeYETU5AsmhQsgncADYlUhfhBqUnKD1BpiSKIoL9+22SaiZC9TSDF5V4G48tf/n7//ff9wCssMJ/DEyy6eq8lPemuRIqCjcaF0NwBKszV+2y7wlxyZ/+3IJ6m+8Gb8EBhG2D54mWcYRoSEBjIKxOTnaq4ABWZ4CgqAcpZwEo7JolxCI4QCxN16dvWnz75qKNax7403vYQwGfYGmH09HG/iB4nMcio4gSEXpZUBQPhvXwyWnlBw9+NDKk4HCr8eUAloyMdQfCiHnjzyT0UKCvSYSgxuAAVgJLqQJdRQSayJTXVbXZuOiAAyQWPWDR4ySHhYSid3NW+agID8wFEDpy7TYo7A1DSOvMv+Lmc6WoMvAtupaEZ3adeQakgLko6ogotW0+BdRsdjECm9ACpBY0DneRmGQk4SdPxw/L+clZ5Ty6TxL1C/uD3kJn2JESF0tqqafFy0x+qEcXxPzii53RlcNDH1KCG+suD08vFXLKgthK9q4XnToh8K+TnSZ62GI9HwnCoWkxWhLeD7b/ZueEwCr3oqO1CbnJ/ul1RF2bXaLIXLfLJfJEDZHC2YyOWWvGNhv9DhKITQTckqS6SfTJ3pvalTrHL1oFY7l++8omYM+BPU0eGX0gomOukhF/+mKaq4MDxKrJvHXvsvEqIKF7EqxnsMVdO2T3ixz615N2OXVkJMAwmvKYM5npy0sS9ET0FqpGFYRIrUeCVB8iEhBzZgbq0CPcjVkgVk2zi7rHJYvKpCwdEL/Hprb9j48r3WP4cV7TKurqcWUlMB9s9MH8rjzIuVL3PXAAqzMqu35Eai5YzJ6QRSwofPiaPkUrrLAE/Aabzg3xeyzVSQAAAABJRU5ErkJggg=="},fce3:function(t,e,c){var a=c("d039"),l=c("da84"),s=l.RegExp;t.exports=a((function(){var t=s(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))}}]);
//# sourceMappingURL=chunk-bdde95a2.892fbe46.js.map