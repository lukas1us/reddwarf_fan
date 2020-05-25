var quotes = [
    "„Mé IQ je 6000, to je jako 6000 učitelů tělocviku nebo 12000 hlídačů na parkovišti...“" + "\n" + " - Holly",
    "„Dneska vypadám opravdu k světu. Vypadat jen o chloupek líp, tak mě zakážou.“" + "\n" + " - Kocour",
    "„Musím přiznat, že jsem to zeslonil. To je jako zkonit, ale mnohem víc.“" + "\n" + " - Holly",
    "„Za ty tři miliony let chovám bláhovou naději, že lidstvo přestalo válčit, vyléčilo všechny nemoci a zjednodušilo formulář daňového přiznání.“" + "\n" + " - Holly",
    "„Tvůj mozek je rychlejší než děcko po prvním kari.“" + "\n" + " - Rimmer",
    "„Ty nepotíš pot, ale maďarskou omáčku!“" + "\n" + " - Rimmer",
    "„Budeme sebou házet jako kapka potu mezi půlkama cvičitelky aerobiku.“" + "\n" + " - Lister",
    "„Chovám bláhovou naději, že za tři miliony let, co jsme pryč, lidstvo přestalo válčit, vyléčilo všechny choroby a podařilo se mu zjednodušit formulář daňového přiznání.“" + "\n" + " - Holly"
];
var quote = $("#quote");
quote.append(quotes[Math.floor(Math.random() * quotes.length)]);

$(function () {
    var count = 0;
    setInterval(function () {
        count++;
        quote.fadeOut(400, function () {
            $(this).text(quotes[count % quotes.length]).fadeIn(400);
        });
    }, 8000);
});

//after header element reaches div #about - by scrolling - adds class that changes color and background
var header = $("header");
var about = $("#about").offset().top;
var hamburger = $(".hamburger");

//$(window).scroll(function() {
//    if ($(window).scrollTop() >= about) {
//        header.addClass("header-scrolled");
//        hamburger.addClass("hamburger-scrolled");
//    }
//    else {
//        header.removeClass("header-scrolled");
//        hamburger.removeClass("hamburger-scrolled");
//    }
//});

//when you scroll page by 10 pixels it adds classes to header and hamburger EZ KATKA
$(document).ready(function () {
    var scroll_pos = 0;
    $(document).scroll(function () {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > 10) {
            header.addClass("header-scrolled");
            hamburger.addClass("hamburger-scrolled");
        } else {
            header.removeClass("header-scrolled").fadeOut(0).fadeIn(10);
            hamburger.removeClass("hamburger-scrolled").fadeOut(0).fadeIn(10);
        }
    });
});

//hamburger responsive mobile menu under 1300 px's of width - onclick action under the anchor tag
function showMenu() {
    var secondNav = $("#second-nav");
    if (secondNav.css("display", "unset")) {
        secondNav.css("display", "none");
    } else {
        secondNav.css("display", "unset");
    }
}

//smooth scroll after click on anchor in nav
$("a[href^='#']").click(function (e) {
    e.preventDefault();

    var position = $($(this).attr("href")).offset().top;

    $("body, html").animate({
        scrollTop: position
    }, 600, "linear");
});