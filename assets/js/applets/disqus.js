(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports={"site":{"author":"Neal.Rame.","title":"Neal.Rame.","url":"http://nealrame.com"},"analytics":{"api_key":"UA-75717439-1"},"disqus":{"shortname":"nealrame"},"personal":{"address":"45 rue d'Amiens 59000 Lille","birth":"31 mars 1981","email":"julien@graziano.fr","name":"Julien Graziano","phone":"+33 6 75 12 29 57","picture":"/assets/pictures/me.jpg","social-networks":{"github":"https://github.com/NealRame","facebook":"https://www.facebook.com/NealRame","twitter":"https://twitter.com/NealRame"}}}
},{}],2:[function(require,module,exports){
(function (global){
"use strict";function trim_trailing_slash(t){return t.endsWith("/")?t.substr(0,t.length-1):t}function post_url(){var t=window.location;return"http://"+t.host+trim_trailing_slash(t.pathname)}var _config=require("../../../../config.json"),post_id=$('meta[itemprop^="post_id:"]').attr("itemprop").split(":")[1];global.disqus_config=function(){this.page.url=post_url(),this.page.identifier=post_id,this.callbacks.onReady=[function(){return $(window).trigger("stick-footer.nr.trigger")}]},global.applets=(global.applets||[]).concat({name:"disqus",start:function(){var t=document.createElement("script");t.src="//"+_config.disqus.shortname+".disqus.com/embed.js",t.setAttribute("data-timestamp",+new Date),(document.head||document.body).appendChild(t)}});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../../../../config.json":1}]},{},[2])

