$(function () {
    // add tracking to accordion opening
    $(function () {
    $(".accordion-item").on("click", ".accordion-header", function (event) {
    manualUtagLink({wt_link_id: trackText = "content.accordion." + tealiumText($(this).find("h5").text().trim())});
    });
    // scroll opening accordion to top of page
    $(".accordion").on("accordionactivate", function (event, ui) {
    if (doScrollAccordion && $(ui.newHeader).offset() != null && $(event.target).attr("class").indexOf("sub-accordion") < 0) {
    $("html, body").animate({scrollTop: ($(ui.newHeader).offset().top) - $('#header').height()}, 400);
    }
    doScrollAccordion = true;
    });
    });
    // rename weiter-button if chat is available
    function patchWeiterButton() {
    if ($("#lpButtonDiv-wireline-service-hsp-contact-form a").length > 0) {
    $(".contacting-step-1-submit").html("Weiter ohne Chat");
    } else {
    $(".contacting-step-1-submit").html("WEITER");
    }
    setTimeout(patchWeiterButton, 250);
    }
    if (utag_data.page_technical_id == "107962") {
    patchWeiterButton();
    }
    // activate tab by target id as parameter in url
    var href = document.location.href;
    if (href.indexOf("tab-target") > 0) {
    href = href.substring(href.indexOf("tab-target") + 11);
    if (href.match("[?&]")) {
    href = href.substring(href.indexOf(0, href.match("[?&]")));
    }
    $("a[data-tab-target='" + href + "']").click();
    }
    // open accordion by open-accordion=<number of item> as parameter in url
    var href = document.location.href;
    if (href.indexOf("open-accordion=") > 0) {
    href = href.substring(href.indexOf("open-accordion=") + 15);
    if (href.match("[?&]")) {
    href = href.substring(href.indexOf(0, href.match("[?&]")));
    }
    var accordion = $(".accordion .accordion-header");
    if (!isNaN(href) && href > 0 && href <= accordion.size()) {
    accordion.get(href-1).click();
    }
    }
    // scroll to element with css class
    if (href.indexOf("scroll-to") > 0) {
    href = href.substring(href.indexOf("scroll-to") + 10);
    if (href.match("[?&]")) {
    href = href.substring(0, href.indexOf(href.match("[?&]")));
    }
    $("html, body").animate({scrollTop: ($("." + href).offset().top) - $('#header').height()}, 400);
    }
    });
    // global variable to set to false to avoid accordion scrolling in cascaded accordions.
    var doScrollAccordion = true;
    
    
    
    
    
    
    