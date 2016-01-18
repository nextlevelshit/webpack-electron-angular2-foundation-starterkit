var $ = jquery = jQuery = window.jQuery = window.$ = require('jquery');
require('foundation-sites');
// Should work, but it does not
// $(document).foundation();
setTimeout(function(){
    $(document).foundation();
    var webview = document.getElementById('browser');
    webview.addEventListener("dom-ready", function(){
        console.log('View loaded');
        webview.insertCSS('*:hover { box-shadow: 0 0 10px #2199e8 !important; }');
    });
}, 200);

