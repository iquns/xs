/*[CDN]*/!function(n,r){var s=n.COOKIE_PRE+"_";function t(t){var e=s+t+"=",n=r.cookie.split(";"),i=n.length-1;if(i)for(;0<=i;i--){var o=n[i].replace(/^\s*|\s*$/g,"");if(0==o.indexOf(e))return decodeURIComponent(o.substring(e.length,o.length))}return null}var i=t("cdn")?t("cdn"):function(){for(var t=r.getElementsByTagName("script"),e=0;e<t.length;e++)if(-1<(t[e].src||"").search(/static\//gi))return t[e].src.split(/static/gi)[0]+"static/";return"/static/"}(),o=["https://fastly.jsdelivr.net/gh/qunso/x@"+CDNV+"/static/","https://gcore.jsdelivr.net/gh/qunso/x@"+CDNV+"/static/","/static/"],e=location.href.split(/\?/),a=e[0]+"?"+(1<e.length?e[1].replace(/(\&\d{4})+$/gi,"")+"&":"")+(""+Math.random()).substr(-4),c=!1;n.__cdnTest=function(t){if(!c){c=!0;var e=o[t-1]||o[0];!function(t,e,n){var i="";if(n){var o=new Date;o.setTime(o.getTime()+864e5*n),i="; expires="+o.toUTCString()}r.cookie=s+t+"="+encodeURIComponent(e)+i+"; path=/"}("cdn",e,1),(new Image).src="/c.gif?n="+encodeURIComponent(e)+"&q="+(n.CDNQ||1)+"&t="+(n.CDNT||-1)+"&cdnerr="+encodeURIComponent(i),setTimeout(function(){location.replace(a)},1e3)}},r.body.innerHTML="<title>"+APP_NAME+'：加载页面中...</title><style>body,html{background:#E3EDCD;color:#333}.loading{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);width:75%;max-width:480px;text-align:center}.loading .inner{font-size:16px;color:#333;background:#EFFEFD;padding:20px 0;border-radius:10px;border:1px solid #d3debc;line-height:1.5}.loading span{color:#999;display:block;font-size:80%;margin-bottom:20px}.loading h1{font-size:18px;margin-bottom:10px;color: #666}</style></head><body><div class="loading"><h1>- '+APP_NAME+' -</h1><div class="inner"><img src="/static/img/loading-cdn.svg"/><BR><span>加载页面中</span>记住我们域名<BR><b style="color:red">'+DOMA.toUpperCase()+"</b></div></div>",o.forEach(function(e,n){i!=e&&setTimeout(function(){var t=r.createElement("script");t.src=e+"js/_cdn_"+(n+1)+".js?"+CDNV,t.async=!0,r.head.appendChild(t)},200*n)})}(window,document);;
