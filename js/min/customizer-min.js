!function($){wp.customize("blogname",function(t){t.bind(function(t){$(".site-title a").text(t)})}),wp.customize("blogdescription",function(t){t.bind(function(t){$(".site-description").text(t)})}),wp.customize("header_textcolor",function(t){t.bind(function(t){"blank"===t?$(".site-title, .site-description").css({clip:"rect(1px, 1px, 1px, 1px)",position:"absolute"}):$(".site-title, .site-description").css({clip:"auto",position:"relative"}),$("#site-title a, .site-description, .main-navigation ul:not(.sub-menu) > li:not(.callout-nav) > a").css({color:t})})}),wp.customize("header_background",function(t){t.bind(function(t){$(".site-header, .site-search-dropdown").css({"background-color":t})})}),wp.customize("sec_header_background",function(t){t.bind(function(t){$(".secondary-header, .secondary-navigation #secondary-menu>li>.sub-menu").css({"background-color":t})})}),wp.customize("sec_header_text",function(t){t.bind(function(t){$(".secondary-navigation ul a, .site-search .site-search-button, .aty-edd-cart a").css({color:t})})}),wp.customize("submenu_background",function(t){t.bind(function(t){$(".main-navigation ul ul").css({"background-color":t})})}),wp.customize("submenu_text",function(t){t.bind(function(t){$(".main-navigation ul ul li a").css({color:t})})}),wp.customize("footer_background",function(t){t.bind(function(t){$(".site-footer").css({"background-color":t})})}),wp.customize("footer_primary_link",function(t){t.bind(function(t){$(".site-footer .widget:not(.widget_archive):not(.widget_pages) a").css({color:t}),$('.site-footer button, .site-footer input[type="button"], .site-footer input[type="reset"], .site-footer input[type="submit"]').css({"background-color":t}),$(".site-footer .widget_calendar thead").css({background:t})})}),wp.customize("footer_secondary_shade",function(t){t.bind(function(t){$(".site-footer .widget_archive ul a, .site-footer .widget_categories ul a").css({"background-color":t})})}),wp.customize("footer_copy_color",function(t){t.bind(function(t){$(".site-footer, .site-footer .site-info a, .footer-widgets .widget-title, .footer-navigation ul li a, .site-footer .widget_pages ul li a, .site-footer .widget_nav_menu ul li a, .footer-widgets .widget_calendar caption").css({color:t})})}),wp.customize("primary_link",function(t){t.bind(function(t){$(".entry-content a").css({color:t}),$('blockquote, .widget-area button, .widget-area input[type="button"], .widget-area input[type="reset"], .widget-area input[type="submit"]').css({"border-color":t}),$('.main-navigation .callout-nav, .widget_calendar thead, .widget-area button, .widget-area input[type="button"], .widget-area input[type="reset"], .widget-area input[type="submit"], .site-search-dropdown button').css({background:t})})}),wp.customize("secondary_shade",function(t){t.bind(function(t){$(".entry-meta>span, .entry-meta span a, .tags-links a").css({color:t}),$(".widget_archive ul a, .widget_categories ul a").css({background:t}),$("div.cat-links a").css({"background-color":t})})}),wp.customize("copy_color",function(t){t.bind(function(t){$("body, .entry-title a, .page-title a, .widget-title").css({color:t})})})}(jQuery);