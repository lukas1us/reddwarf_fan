var quotes = [
    "„Mé IQ je 6000, to je jako 6000 učitelů tělocviku nebo 12000 hlídačů na parkovišti...“<br> - Holly",
    "„Dneska vypadám opravdu k světu. Vypadat jen o chloupek líp, tak mě zakážou.“<br> - Kocour",
    "„Musím přiznat, že jsem to zeslonil. To je jako zkonit, ale mnohem víc.“<br> - Holly",
    "„Za ty tři miliony let chovám bláhovou naději, že lidstvo přestalo válčit, vyléčilo všechny nemoci a zjednodušilo formulář daňového přiznání.“<br> - Holly",
    "„Tvůj mozek je rychlejší než děcko po prvním kari.“<br> - Rimmer",
    "„Ty nepotíš pot, ale maďarskou omáčku!“<br> - Rimmer",
    "„Budeme sebou házet jako kapka potu mezi půlkama cvičitelky aerobiku.“<br> - Lister",
    "„Chovám bláhovou naději, že za tři miliony let, co jsme pryč, lidstvo přestalo válčit, vyléčilo všechny choroby a podařilo se mu zjednodušit formulář daňového přiznání.“ <br> - Holly"
    ];
var quote = $("#quote");
quote.append(quotes[Math.floor(Math.random()* quotes.length)]);

//after header element reaches div #about - by scrolling - adds class that changes color and background
var header = $("header");
var about = $("#about").offset().top;
var hamburger = $(".hamburger");
$window = $(window);

$window.scroll(function() {
    if ($window.scrollTop() >= about) {
        header.addClass("header-scrolled");
        hamburger.addClass("hamburger-scrolled");
    }
    else {
        header.removeClass("header-scrolled");
        hamburger.removeClass("hamburger-scrolled");
    }
});



