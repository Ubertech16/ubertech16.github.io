jQuery(document).ready(function(o) {
    var l = 300,
        s = 4e3,
        c = 700,
        d = o(".cd-top");
    o(window).scroll(function() {
        o(this).scrollTop() > l ? d.addClass("cd-is-visible") : d.removeClass("cd-is-visible cd-fade-out"), o(this).scrollTop() > s && d.addClass("cd-fade-out")
    }), d.on("click", function(l) {
        l.preventDefault(), o("body,html").animate({
            scrollTop: 0
        }, c)
    })
});