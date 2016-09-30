(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var bgs = document.querySelectorAll("section"),
    p = [];
function onScroll() {

    var pageTop = window.scrollY,
        pageBottom = pageTop + window.innerHeight;

    bgs.forEach(function (el, i) {
        if (el.hasAttribute("data-src")) {

            var pos = el.getBoundingClientRect();
            p[i].visible = pos.top < pageBottom && pos.bottom > 0;

            if (p[i].visible) {

                var heightToScreenRatio = window.innerHeight / el.clientHeight,
                    relativeToTop = 1 - pos.bottom / el.clientHeight,
                    px = relativeToTop * el.clientHeight,
                    pct = 100 * (px / el.clientHeight) / heightToScreenRatio;

                if (el.hasAttribute("data-offset")) pct -= el.getAttribute("data-offset");

                p[i].pct += (pct - p[i].pct) * 0.97;
                el.style.backgroundPosition = "50% " + -p[i].pct + "%";
            }
        }
    });
}
function init() {
    bgs.forEach(function (el, i) {
        p[i] = {
            pct: 0,
            visible: false
        };
        // pcts[i] = 0
        var src = el.getAttribute("data-src");
        if (src != null) el.style.backgroundImage = "url(" + src + ")";
    });
    cycle();
}

function cycle() {
    onScroll();
    requestAnimationFrame(cycle);
}

init();

},{}]},{},[1]);
