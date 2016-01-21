// Getting sure jquery is loaded correctly
var $ = jquery = jQuery = window.jQuery = window.$ = require('jquery');
// Loaded libraries you need in the frontend
require('foundation-sites');

// TODO: Remove this unpleasant workaround
// Instead this should work, but it does not:
// $(document).foundation();
setTimeout(function(){
    $(document).foundation();
}, 500);


