"use strict";window.odometerOptions={auto:!0,selector:".number.animated-element",format:"( ddd).dd",duration:1e3,theme:"default",animation:"count"};var map=null,marker=null,menu_position=null;jQuery(document).ready(function(t){function e(){if(null!=map&&map.setCenter(a),t(".testimonials-list").trigger("configuration",["debug",!1,!0]),t(".re-smart-column").length&&t(".header").width()>462){var e=t(window).scrollTop();t(".re-smart-column").each(function(){var i=t(this).parent(),o=t(this).children().first(),a=0;o.children().each(function(){a+=t(this).outerHeight(!0)}),a<t(window).height()&&i.offset().top-20<e&&i.offset().top-20+i.outerHeight()-a>e?(o.css({position:"fixed",bottom:"auto",top:"20px",width:t(this).width()+"px"}),t(this).css({height:a+"px"})):a<t(window).height()&&i.offset().top-20+i.outerHeight()-a<=e&&i.outerHeight()-a>0?(o.css({position:"absolute",bottom:"0",top:i.outerHeight()-a+"px",width:"auto"}),t(this).css({height:a+"px"})):a>=t(window).height()&&i.offset().top+20+a<e+t(window).height()&&i.offset().top+20+i.outerHeight()>e+t(window).height()?(o.css({position:"fixed",bottom:"20px",top:"auto",width:t(this).width()+"px"}),t(this).css({height:a+"px"})):a>=t(window).height()&&i.offset().top+20+i.outerHeight()<=e+t(window).height()&&i.outerHeight()-a>0?(o.css({position:"absolute",bottom:"0",top:i.outerHeight()-a+"px",width:"auto"}),t(this).css({height:a+"px"})):o.css({position:"static",bottom:"auto",top:"auto",width:"auto"})})}t(".our-clients-list").each(function(){var e=t(this);e.trigger("configuration",{items:{visible:t(".header").width()>750?6:t(".header").width()>462?4:2},scroll:{items:t(".header").width()>750?6:t(".header").width()>462?4:2},pagination:{items:t(".header").width()>750?6:t(".header").width()>462?4:2}})}),t(".header").width()>300&&(t(".header-top-bar").is(":visible")||t(".header-toggle").trigger("click"))}function i(){t(".animated-element, .sticky, .re-smart-column").each(function(){var e=t(this).offset().top,i=t(window).scrollTop();if(t(this).hasClass("re-smart-column")){var o=t(this).parent(),a=t(this).children().first(),s=0;a.children().each(function(){s+=t(this).outerHeight(!0)}),s<t(window).height()&&o.offset().top-20<i&&o.offset().top-20+o.outerHeight()-s>i?(a.css({position:"fixed",bottom:"auto",top:"20px",width:t(this).width()+"px"}),t(this).css({height:s+"px"})):s<t(window).height()&&o.offset().top-20+o.outerHeight()-s<=i&&o.outerHeight()-s>0?(a.css({position:"absolute",bottom:"0",top:o.outerHeight()-s+"px",width:"auto"}),t(this).css({height:s+"px"})):s>=t(window).height()&&o.offset().top+20+s<i+t(window).height()&&o.offset().top+20+o.outerHeight()>i+t(window).height()?(a.css({position:"fixed",bottom:"20px",top:"auto",width:t(this).width()+"px"}),t(this).css({height:s+"px"})):s>=t(window).height()&&o.offset().top+20+o.outerHeight()<=i+t(window).height()&&o.outerHeight()-s>0?(a.css({position:"absolute",bottom:"0",top:o.outerHeight()-s+"px",width:"auto"}),t(this).css({height:s+"px"})):a.css({position:"static",bottom:"auto",top:"auto",width:"auto"})}else if(t(this).hasClass("sticky"))null!=menu_position&&(i>menu_position?t(this).addClass("move"):t(this).removeClass("move"));else if(e<i+t(window).height()-20)if(t(this).hasClass("number")&&!t(this).hasClass("progress")&&t(this).is(":visible")){var n=t(this);if(n.addClass("progress"),"undefined"!=typeof n.data("value")){var r=parseFloat(n.data("value").toString().replace(" ",""));n.text(0),n.text(r)}}else if(!t(this).hasClass("progress")){var l=t(this).attr("class").split(" "),c="fadeIn",d=600,h=0;t(this).hasClass("scroll-top")&&(i<t(document).height()/2?(c=t(this).hasClass("fadeIn")||t(this).hasClass("fadeOut")?"fadeOut":"",t(this).removeClass("fadeIn")):t(this).removeClass("fadeOut"));for(var u=0;u<l.length;u++)-1!=l[u].indexOf("animation-")&&(c=l[u].replace("animation-","")),-1!=l[u].indexOf("duration-")&&(d=l[u].replace("duration-","")),-1!=l[u].indexOf("delay-")&&(h=l[u].replace("delay-",""));t(this).addClass(c),t(this).css({"animation-duration":d+"ms"}),t(this).css({"animation-delay":h+"ms"}),t(this).css({"transition-delay":h+"ms"})}})}t(".search-container .template-search").on("click",function(e){e.preventDefault(),t(this).parent().children(".search").toggle()}),t(".mobile-menu-switch").on("click",function(e){e.preventDefault(),t(".mobile-menu").is(":visible")||t(".mobile-menu-divider").css("display","block"),t(".mobile-menu").slideToggle(500,function(){t(".mobile-menu").is(":visible")||t(".mobile-menu-divider").css("display","none")})}),t(".header-toggle").on("click",function(e){e.preventDefault(),t(this).prev().slideToggle(),t(this).toggleClass("active")}),t(".cost-slider").each(function(){t(this).slider({range:"min",value:t(this).data("value"),min:t(this).data("min"),max:t(this).data("max"),step:t(this).data("step"),slide:function(e,i){t("#"+t(this).data("input")).val(i.value),t(this).find(".cost-slider-tooltip .value").html(i.value),"undefined"!=typeof t(this).data("price")&&t("#"+t(this).data("value-input")).val(i.value*t(this).data("price")),t("#interior-renovation-cost").costCalculator("calculate"),t("#fence-cost").costCalculator("calculate"),t("#paver-walkway-cost").costCalculator("calculate")},change:function(e,i){t("#"+t(this).data("input")).val(i.value),t(this).find(".cost-slider-tooltip .value").html(i.value),"undefined"!=typeof t(this).data("price")&&t("#"+t(this).data("value-input")).val(i.value*t(this).data("price")),t("#interior-renovation-cost").costCalculator("calculate"),t("#fence-cost").costCalculator("calculate"),t("#paver-walkway-cost").costCalculator("calculate")}}).find(".ui-slider-handle").append('<div class="cost-slider-tooltip"><div class="arrow"></div><div class="value">'+t(this).data("value")+"</div></div>")}),t(".cost-slider-input").on("paste change keyup",function(){var e=t(this);t("[data-input='"+e.attr("id")+"']").length?setTimeout(function(){t("[data-input='"+e.attr("id")+"']").slider("value",e.val())},500):(t("#interior-renovation-cost").costCalculator("calculate"),t("#fence-cost").costCalculator("calculate"),t("#paver-walkway-cost").costCalculator("calculate"))}),t(".cost-dropdown").each(function(){t(this).selectmenu({width:402,icons:{button:"template-arrow-dropdown"},change:function(e,i){t("#interior-renovation-cost").costCalculator("calculate"),t("#fence-cost").costCalculator("calculate"),t("#paver-walkway-cost").costCalculator("calculate"),t("."+t(this).attr("id")).val(i.item.label)},select:function(e,i){t("#interior-renovation-cost").costCalculator("calculate"),t("#fence-cost").costCalculator("calculate"),t("#paver-walkway-cost").costCalculator("calculate"),t("."+t(this).attr("id")).val(i.item.label)},create:function(e,i){t(".contact-form").each(function(){t(this)[0].reset()}),t(this).selectmenu("refresh")}})}),t("#interior-renovation-cost").costCalculator({formula:"ir-square-feet*ir-walls+ir-square-feet*ir-floors+ir-doors-value+ir-windows-value",currency:"$",updateHidden:t("#ir-total-cost")}),t("#fence-cost").costCalculator({formula:"fe-length*fe-height*fe-panel+fe-gate+fe-length*fe-extras",currency:"$",updateHidden:t("#fe-total-cost")}),t("#paver-walkway-cost").costCalculator({formula:"pw-area-width*pw-area-length*pw-block-paving+pw-area-width*pw-area-length*pw-surface+pw-stone-walling-value",currency:"$",updateHidden:t("#pw-total-cost")}),jQuery(".revolution-slider").show().revolution({dottedOverlay:"none",delay:1e4,startwidth:1170,startheight:600,hideThumbs:100,hideTimerBar:"on",thumbWidth:100,thumbHeight:50,thumbAmount:5,navigationType:"bullet",navigationArrows:"solo",navigationStyle:"preview1",touchenabled:"on",onHoverStop:"on",swipe_velocity:.7,swipe_min_touches:1,swipe_max_touches:1,drag_block_vertical:!1,keyboardNavigation:"on",navigationHAlign:"center",navigationVAlign:"bottom",navigationHOffset:0,navigationVOffset:20,soloArrowLeftHalign:"left",soloArrowLeftValign:"center",soloArrowLeftHOffset:20,soloArrowLeftVOffset:0,soloArrowRightHalign:"right",soloArrowRightValign:"center",soloArrowRightHOffset:20,soloArrowRightVOffset:0,shadow:0,fullWidth:"on",fullScreen:"off",spinner:"spinner0",stopLoop:"off",stopAfterLoops:-1,stopAtSlide:-1,shuffle:"off",autoHeight:"off",forceFullWidth:"off",hideThumbsOnMobile:"on",hideNavDelayOnMobile:1500,hideBulletsOnMobile:"on",hideArrowsOnMobile:"on",hideThumbsUnderResolution:0,hideSliderAtLimit:0,hideCaptionAtLimit:0,hideAllCaptionAtLilmit:0,startWithSlide:0}),navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)?t(".parallax").addClass("cover"):t(".parallax").parallax({speed:100,startPosition:0}),t(".isotope").isotope({masonry:{gutter:30}}),t(".testimonials-list").each(function(){var e=t(this);e.carouFredSel({width:"auto",items:{visible:1},scroll:{items:1,easing:"easeInOutQuint",duration:750},auto:{play:!1},prev:{button:e.prev()},next:{button:e.next()}},{transition:!0,wrapper:{classname:"caroufredsel_wrapper caroufredsel_wrapper_testimonials"}});var i="x",o={scroll:{easing:"easeInOutQuint",duration:750}};e.swipe({fallbackToMouseEvents:!0,allowPageScroll:"vertical",excludedElements:"button, input, select, textarea, .noSwipe",swipeStatus:function(t,a,s,n,r,l){e.is(":animated")||e.trigger("isScrolling",function(t){t||("move"!=a||"left"!=s&&"right"!=s?"cancel"==a?0!=n&&(e.trigger("play"),e.animate({left:i+"px"},750,"easeInOutQuint",function(){i==-e.children().first().width()&&(e.children().first().appendTo(e),e.css("left","0px"),i="x"),e.trigger("configuration",{scroll:{easing:"easeInOutQuint",duration:750}})})):"end"==a&&(e.trigger("play"),"right"==s?e.animate({left:"0px"},750,"easeInOutQuint",function(){e.trigger("configuration",{scroll:{easing:"easeInOutQuint",duration:750}}),i="x"}):"left"==s&&(i==-e.children().first().width()&&(e.children().first().appendTo(e),e.css("left",parseInt(e.css("left"),10)-i+"px")),e.trigger("nextPage"),i="x")):("x"==i&&(e.trigger("configuration",o),e.trigger("pause")),"left"==s?("x"==i&&(i=0),e.css("left",parseInt(i,10)-n+"px")):"right"==s&&(("x"==i||0==i)&&(e.children().last().prependTo(e),i=-e.children().first().width()),e.css("left",i+n+"px"))))})}})}),t(".our-clients-list").each(function(e){t(this).addClass("re-preloader_"+e),t(".re-preloader_"+e).before("<span class='re-preloader'></span>"),t(".re-preloader_"+e+" img:first").one("load",function(){t(".re-preloader_"+e).prev(".re-preloader").remove(),t(".re-preloader_"+e).fadeTo("slow",1,function(){t(this).css("opacity","")});var i=t(".re-preloader_"+e);i.carouFredSel({items:{visible:t(".header").width()>750?6:t(".header").width()>462?4:2},scroll:{items:t(".header").width()>750?6:t(".header").width()>462?4:2,easing:"easeInOutQuint",duration:750},auto:{play:!1},pagination:{items:t(".header").width()>750?6:t(".header").width()>462?4:2,container:t(i).next()}});var o="x",a={scroll:{easing:"easeInOutQuint",duration:750}};i.swipe({fallbackToMouseEvents:!0,allowPageScroll:"vertical",excludedElements:"button, input, select, textarea, .noSwipe",swipeStatus:function(t,e,s,n,r,l){i.is(":animated")||i.trigger("isScrolling",function(t){t||("move"!=e||"left"!=s&&"right"!=s?"cancel"==e?0!=n&&(i.trigger("play"),i.animate({left:o+"px"},750,"easeInOutQuint",function(){o==-i.children().first().width()-parseInt(i.children().first().css("margin-right"),10)&&(i.children().first().appendTo(i),i.css("left","0px"),o="x"),i.trigger("configuration",{scroll:{easing:"easeInOutQuint",duration:750}})})):"end"==e&&(i.trigger("play"),"right"==s?(i.trigger("prevPage"),i.children().first().appendTo(i),i.animate({left:"0px"},200,"linear",function(){i.trigger("configuration",{scroll:{easing:"easeInOutQuint",duration:750}}),o="x"})):"left"==s&&(o==-i.children().first().width()-parseInt(i.children().first().css("margin-right"),10)&&(i.children().first().appendTo(i),i.css("left",parseInt(i.css("left"),10)-o+"px")),i.trigger("nextPage"),i.trigger("configuration",{scroll:{easing:"easeInOutQuint",duration:750}}),o="x")):("x"==o&&(i.trigger("configuration",a),i.trigger("pause")),"left"==s?("x"==o&&(o=0),i.css("left",parseInt(o,10)-n+"px")):"right"==s&&(("x"==o||0==o)&&(i.children().last().prependTo(i),o=-i.children().first().width()-parseInt(i.children().first().css("margin-right"),10)),i.css("left",o+n+"px"))))})}})}).each(function(){this.complete&&t(this).load()})}),t(".accordion").accordion({event:"change",heightStyle:"content",icons:{header:"template-arrow-circle-right",activeHeader:"template-arrow-circle-down"},create:function(e,i){t(window).trigger("resize"),t(".horizontal_carousel").trigger("configuration",["debug",!1,!0])}}),t(".accordion.wide").on("accordionchange",function(e,i){t("html, body").animate({scrollTop:t("#"+t(i.newHeader).attr("id")).offset().top},400)}),t(".tabs:not('.no-scroll')").on("tabsbeforeactivate",function(e,i){t("html, body").animate({scrollTop:t("#"+t(i.newTab).children("a").attr("id")).offset().top},400)}),t(".tabs").tabs({event:"change",show:!0,create:function(){t("html, body").scrollTop(0)},activate:function(t,e){e.oldPanel.find("[name='submit'], [name='name'], [name='email'], [name='message']").qtip("hide")}}),t(".tabs .ui-tabs-nav a").on("click",function(){"http"!=t(this).attr("href").substr(0,4)?t.bbq.pushState(t(this).attr("href")):window.location.href=t(this).attr("href")}),t(".ui-accordion .ui-accordion-header").on("click",function(){t.bbq.pushState("#"+t(this).attr("id").replace("accordion-",""))});var o=function(){t(".blog .post-content>a>img, .post.single .post-image img, .services-list a>img, .projects-list:not('.isotope') a>img, .re-preload>img").each(function(){t(this).before("<span class='re-preloader'></span>"),t(this).one("load",function(){t(this).prev(".re-preloader").remove(),t(this).fadeTo("slow",1,function(){t(this).css("opacity","")}),t(this).css("display","block")}).each(function(){this.complete&&t(this).load()})})};if(o(),t(".scroll-to-comments").on("click",function(e){e.preventDefault();var i=t("#comments-list").offset();t("html, body").animate({scrollTop:i.top-90},400)}),t(window).on("hashchange",function(e){for(var i=t.param.fragment().split("-"),o="",a=0;a<i.length-1;a++)o=o+i[a]+(a+1<i.length-1?"-":"");if("prettyPhoto"!=i[0].substr(0,11)&&("filter="!=i[0].substr(0,7)&&(t(".ui-accordion .ui-accordion-header#accordion-"+decodeURIComponent(t.param.fragment())).trigger("change"),t(".ui-accordion .ui-accordion-header#accordion-"+decodeURIComponent(o)).trigger("change")),t('.tabs .ui-tabs-nav [href="#'+decodeURIComponent(o)+'"]').trigger("change"),t('.tabs .ui-tabs-nav [href="#'+decodeURIComponent(t.param.fragment())+'"]').trigger("change"),"filter="!=i[0].substr(0,7)&&t(".tabs .ui-accordion .ui-accordion-header#accordion-"+decodeURIComponent(t.param.fragment())).trigger("change"),t(".testimonials-list, .our-clients-list").trigger("configuration",["debug",!1,!0]),t(document).scroll()),"comment"==i[0].substr(0,7)&&t(location.hash).length){var s=t(location.hash).offset();t("html, body").animate({scrollTop:s.top-10},400)}t.deparam.fragment();if("filter"==i[0].substr(0,7)){var n=decodeURIComponent(t.param.fragment()).substr(7,decodeURIComponent(t.param.fragment()).length);t(".isotope-filters a").removeClass("selected"),t('.isotope-filters a[href="#filter-'+n+'"]').length?t('.isotope-filters a[href="#filter-'+n+'"]').addClass("selected"):t(".isotope-filters li:first a").addClass("selected"),t(".isotope").isotope({filter:("*"!=n?".":"")+n})}}).trigger("hashchange"),t("body.dont-scroll").on("touchmove",{},function(t){t.preventDefault()}),t("#map").length){var a=new google.maps.LatLng(51.112265,17.033787),s={zoom:16,center:a,mapTypeId:google.maps.MapTypeId.ROADMAP,streetViewControl:!1,mapTypeControl:!1,scrollwheel:parseInt(t("#map").data("scroll-wheel"),10),draggable:parseInt(t("#map").data("draggable"),10),styles:[{featureType:"water",elementType:"geometry",stylers:[{color:"#8ccaf1"}]},{featureType:"poi",stylers:[{visibility:"off"}]},{featureType:"transit",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"labels",stylers:[{color:"#ffffff"},{visibility:"simplified"}]}]};map=new google.maps.Map(document.getElementById("map"),s),marker=new google.maps.Marker({position:new google.maps.LatLng(51.112265,17.033787),map:map,icon:new google.maps.MarkerImage("images/map_pointer.png",new google.maps.Size(38,48),null,new google.maps.Point(18,48))})}t(window).resize(e),window.addEventListener("orientationchange",e),t("a[href='#top']").on("click",function(){return t("html, body").animate({scrollTop:0},"slow"),!1}),t(".comment-form input[type='text'], .contact-form input[type='text'], .comment-form textarea, .contact-form textarea, .search input[type='text'], .search_form input[type='text'], .cost-calculator-container input[placeholder]").hint(),t(".comment-details .more").on("click",function(e){e.preventDefault();var i=t("#comment-form").offset();t("html, body").animate({scrollTop:i.top-90},400),t("#cancel-comment").css("display","inline")}),t("#cancel-comment").on("click",function(e){e.preventDefault(),t(this).css("display","none")}),t(".prettyPhoto, [rel^='prettyPhoto']").prettyPhoto({show_title:!1,slideshow:3e3,overlay_gallery:!0,social_tools:""}),t("[rel^='prettyPhoto']").prettyPhoto(),t(".contact-form").length&&t(".contact-form").each(function(){t(this)[0].reset()}),t(".contact-form").submit(function(e){e.preventDefault();var i=t(this).serializeArray(),o=t(this);o.find(".block").block({message:!1,overlayCSS:{opacity:"0.3",backgroundColor:"#FFF"}}),t.ajax({url:o.attr("action"),data:i,type:"post",dataType:"json",success:function(t){o.find("[name='submit'], [name='name'], [name='email'], [name='message']").qtip("destroy"),"undefined"!=typeof t.isOk&&t.isOk?"undefined"!=typeof t.submit_message&&""!=t.submit_message&&(o.find("[name='submit']").qtip({style:{classes:"ui-tooltip-success"},content:{text:t.submit_message},position:{my:"right center",at:"left center"}}).qtip("show"),o[0].reset(),o.find(".cost-slider-input").trigger("change"),o.find(".cost-dropdown").selectmenu("refresh"),o.find("input[type='text'], textarea").trigger("focus").trigger("blur")):("undefined"!=typeof t.submit_message&&""!=t.submit_message&&o.find("[name='submit']").qtip({style:{classes:"ui-tooltip-error"},content:{text:t.submit_message},position:{my:"right center",at:"left center"}}).qtip("show"),"undefined"!=typeof t.error_name&&""!=t.error_name&&o.find("[name='name']").qtip({style:{classes:"ui-tooltip-error"},content:{text:t.error_name},position:{my:"bottom center",at:"top center"}}).qtip("show"),"undefined"!=typeof t.error_email&&""!=t.error_email&&o.find("[name='email']").qtip({style:{classes:"ui-tooltip-error"},content:{text:t.error_email},position:{my:"bottom center",at:"top center"}}).qtip("show"),"undefined"!=typeof t.error_message&&""!=t.error_message&&o.find("[name='message']").qtip({style:{classes:"ui-tooltip-error"},content:{text:t.error_message},position:{my:"bottom center",at:"top center"}}).qtip("show")),o.find(".block").unblock()}})}),t(".header-container").hasClass("sticky")&&(menu_position=t(".header-container").offset().top),setTimeout(i,1),t(window).scroll(i)});