var $ = jquery = jQuery = window.jQuery = window.$ = require('jquery');
require('foundation-sites');
// Should work, but it does not
// $(document).foundation();
setTimeout(function(){
    $(document).foundation()
}, 200);