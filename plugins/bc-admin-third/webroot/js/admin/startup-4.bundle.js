!function(t){var e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=17)}({17:function(t,e){
/**
 * baserCMS :  Based Website Development Project <https://basercms.net>
 * Copyright (c) baserCMS Users Community <https://basercms.net/community/>
 *
 * @copyright       Copyright (c) baserCMS Users Community
 * @link            https://basercms.net baserCMS Project
 * @since           baserCMS v 0.1.0
 * @license         https://basercms.net/license/index.html
 */
void 0===window.addEventListener&&document.documentElement.style.maxHeight,void 0===window.addEventListener&&document.querySelectorAll,void 0===window.addEventListener&&document.getElementsByClassName,document.uniqueID,window.globalStorage,window.opera,!document.uniqueID&&!window.opera&&!window.globalStorage&&window.localStorage,/android|iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase());function o(t){t.stopPropagation(),"absolute"==$("#SideBar").css("position")?(n(!0),$.ajax({type:"GET",url:$("#SaveFavoriteBoxUrl").html()+"/1"})):(n(!1),$.ajax({type:"GET",url:$("#SaveFavoriteBoxUrl").html()+"/"}))}function n(t){if(t)$("#SideBar").show().unbind("click",o).css({position:"relative",left:"0",cursor:"auto"}),$("#Contents").css("margin-left","220px"),$("#BtnSideBarOpener").html("＜"),$("#FavoriteMenu ul").show();else{var e=$("#FavoriteMenu").height();$("#SideBar").bind("click",o).css({cursor:"pointer",position:"absolute",left:"-180px"}),$("#Contents").css("margin-left","0"),$("#BtnSideBarOpener").html("＞"),$("#FavoriteMenu ul").hide(),$("#FavoriteMenu").height(e)}}$((function(){$('[data-toggle="tooltip"]').tooltip({html:!0}),$(".slide-trigger").click((function(){target=this.id+"Body","none"==$("#"+target).css("display")?$("#"+target).slideDown():$("#"+target).slideUp()})),$(".btn-slide-form a").click((function(){target=this.id+"Body",$(this).parent().fadeOut(300,(function(){$(this).remove(),"none"==$("#"+target).css("display")?$("#"+target).slideDown():$("#"+target).slideUp()}))})),$(".slide-body").hide(),$("a[rel='colorbox']").colorbox&&$("a[rel='colorbox']").colorbox({maxWidth:"60%"}),$("a[rel='popup']").colorbox&&$("a[rel='popup']").colorbox({width:"60%",height:"70%",iframe:!0}),$("#BtnMenuHelp").click((function(){"none"==$("#Help").css("display")?$("#Help").fadeIn(300):$("#Help").fadeOut(300)})),$("#CloseHelp").click((function(){$("#Help").fadeOut(300)})),$(".confirm-link").click((function(){confirm($(this).attr("confirm"))&&(alert($(this).attr("link")),document.location=$(this).attr("link"))})),$("a[rel='colorbox']").colorbox&&$("a[rel='colorbox']").colorbox({opacity:.8}),$("a[rel='popup']").colorbox&&$("a[rel='popup']").colorbox({width:"60%",height:"70%",iframe:!0}),$("#SubMenu li").each((function(){$(this).html()||$(this).remove()})),$("input, textarea, select").focus((function(){$(this).addClass("active")})),$("input[type=button]").off("focus"),$("input, textarea, select").focusout((function(){$(this).removeClass("active")})),$("#BtnSideBarOpener").click(o),$("#SubMenu td ul").each((function(){$(this).html().replace(/^\s+|\s+$/g,"")||$(this).parent().parent().remove()})),$(".bca-form-table input[type=text]").each((function(){$(this).keypress((function(t){return!t.which||13!==t.which}))})),$.bcToken.replaceLinkToSubmitToken(".submit-token");var t=$.bcUtil.frontFullUrl;function e(t,e){"open"==$(t).attr("data-bca-state")?$(e).show():$(e).hide()}document.queryCommandSupported("copy")?t&&$("#BtnCopyUrl").on({click:function(){var e=$('<textarea style=" opacity:0; width:1px; height:1px; margin:0; padding:0; border-style: none;"/>');return e.text(t),$(this).after(e),e.select(),document.execCommand("copy"),e.remove(),$("#BtnCopyUrl").tooltip("dispose"),$("#BtnCopyUrl").tooltip({title:"コピーしました"}),$("#BtnCopyUrl").tooltip("show"),!1},mouseenter:function(){$("#BtnCopyUrl").tooltip("dispose"),$("#BtnCopyUrl").tooltip({title:"公開URLをコピー"}),$("#BtnCopyUrl").tooltip("show")},mouseleave:function(){$("#BtnCopyUrl").tooltip("hide")}}):$("#BtnCopyUrl").hide(),$("[data-bca-collapse='favorite-collapse']").on({click:function(){var t,o=$(this).attr("data-bca-target");return t="#btn-favorite-expand","open"==$(t).attr("data-bca-state")?($(t).attr("data-bca-state","").attr("aria-expanded","true"),$.ajax({type:"GET",url:$("#SaveFavoriteBoxUrl").html()+"/"})):($(t).attr("data-bca-state","open").attr("aria-expanded","false"),$.ajax({type:"GET",url:$("#SaveFavoriteBoxUrl").html()+"/1"})),e("#btn-favorite-expand",o),!1}}),e("#btn-favorite-expand","#favoriteBody")}))}});
//# sourceMappingURL=startup-4.bundle.js.map