(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
"use strict";function equalize_picture(){var e=$("#personal-details"),i=$("img",e),t=i.outerHeight()-i.innerHeight(),a=$("ul",e).height()-t;i.removeAttr("style").height(a).width(a)}function equalize(){equalize_picture()}function before_print(){equalize_picture(),$(".print-wrapper").removeClass("small-5 small-7 small-12 medium-6").addClass("small-6")}global.applets=(global.applets||[]).concat({name:"cv",start:function(){equalize(),$(window).on("resize",equalize),window.matchMedia&&window.matchMedia("print").addListener(function(e){e.matches?before_print():equalize()})}});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}]},{},[1])

