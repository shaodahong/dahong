var page = require('webpage').create();
page.open('http://weibo.com/p/1005052569522534/photos?from=page_100505&mod=TAB#place', function(status) {
    // page.includeJs("http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js", function() {
        console.log("Status: " + status);
        if (status === "success") {
            // console.log($('.photo_pict'))
                page.render('exam1ple.png');
        }
        phantom.exit();
    // })

});
