var jsdom = require("jsdom");

var tagToSearch = process.argv[2];
if (!tagToSearch) {
    console.log("USAGE: node index tagToSearch");
    console.log("example: node index children");
    return;
}

jsdom.env(
    "https://websta.me/search/" + encodeURIComponent(tagToSearch),
    ["http://code.jquery.com/jquery.js"],
    function (err, window) {
        var $ = window.$;
        $("div.search-result-hashtags li div").each(function() {
            console.log("tag:", $(this).find("a").text());
            console.log("cnt:", $(this).find("p").text());
        });
    }
);