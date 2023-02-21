// ==UserScript==
// @name         Fix Gmail Email Search
// @namespace    https://github.com/gserafini/fix-gmail-email-search-userscript/
// @version      1.4.6
// @description  Improved version of the old "Emails" quick search functionality in Gmail, one click to view all emails you've sent or received from any address
// @author       Gabriel Serafini
// @license      MIT
// @donate       If you like this, PayPal a little love to gserafini@gmail.com (or https://paypal.me/SerafiniStudios )
// @screenshot   https://raw.githubusercontent.com/gserafini/fix-gmail-email-search-userscript/master/fix-gmail-email-search-screenshot.png
// @icon         https://raw.githubusercontent.com/gserafini/fix-gmail-email-search-userscript/master/SearchEmails_icon.png
// @downloadURL  https://github.com/gserafini/fix-gmail-email-search-userscript/raw/master/fix_gmail_email_search.user.js
// @updateURL    https://github.com/gserafini/fix-gmail-email-search-userscript/raw/master/fix_gmail_email_search.user.js
// @match        *://mail.google.com/*
// @match        *://contacts.google.com/widget/hovercard/*
// @match        *://gmail.com/*
// @match        *gmail.com/*
// @match        *mail.google.com/*
// @match        *contacts.google.com/widget/hovercard/*
// @grant        none
// @require      https://code.jquery.com/jquery-3.5.1.min.js#sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=
// ==/UserScript==

var $ = window.jQuery;

(function() {
    'use strict';

    $(function() {
        // Handler for .ready() called.

        $('body').prepend('<style>.email_search_icon {outline: none; ' +
                          'position: relative; z-index: 0; padding: 0 4px; margin: 0; top: 2px;} ' +
                          '.email_search_icon svg {fill: #600;} .email_search_icon svg:hover {fill: #f00;} ' +
                          '.email_search_icon {cursor: pointer;} </style>');

        function get_email_search_icon_link(email_address) {

            var icon = '<span style=""' +
                'class="email_search_icon" title="Click to search for all emails with ' + email_address + '" email="' + email_address + '">' +
                '<svg focusable="false" height="1em" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">' +
                '<path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 ' +
                '4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg></span>';

            return icon;
        }

        function insert_email_search_icon() {

            // This may change over time, so will need to update it periodically most likely
            $('.gD').not('.email_search_icon+.gD')
                .each(
                    function (index) {
                        // console.log("Found email for possible searching: " + $(this).attr('email'));
                        $(this)
                            .before(get_email_search_icon_link($(this).attr('email')))
                    }
                );

            // Find all emails in pop-up contact cards and also inside emails
            $('a[href^="mailto:"]').not('.email_search_icon+a[href^="mailto:"]').not('div[contenteditable="true"] a[href^="mailto:"]')
                .each(
                    function (index) {
                        var email_address = $(this).attr('href').replace("mailto:","");
                        // console.log("Found email for possible searching: " + email_address);
                        $(this)
                            .before(get_email_search_icon_link(email_address));
                    }
                );
        }

        // Poll periodically for newly created divs
        setInterval(insert_email_search_icon, 300);

        $('body').on('click', '.email_search_icon', function() {
            event.stopPropagation();

            if (window.self==window.top) {
                $('input[name="q"]').val($(this).attr('email'));
                $('button[aria-label="Search in mail"]').click();
                // console.log("Search icon clicked!  Searching for " + $(this).attr('email') + "...");
            }
            else {
                // console.log("Search email for " + $(this).attr('email') + " link clicked in hovercard");
                window.parent.postMessage("searchForEmail="+$(this).attr('email'),"*");
            }

        });

        if (window.self==window.top) {
            $(window).on("message onmessage", function(e) {
                var event = e.originalEvent;
                if (event.origin === "https://contacts.google.com" && event.data.indexOf("searchForEmail=") != -1) {

                    // console.log(event.data);
                    var email_address = event.data;
                    email_address = email_address.replace("searchForEmail=","");
                    // console.log("Found email to search for: " + email_address);

                    $('input[name="q"]').val(email_address);
                    $('button[aria-label="Search in mail"]').click();
                    // console.log("Search icon clicked in hovercard!  Searching for " + email_address + "...");
                }
            });
        }

    });

})();
