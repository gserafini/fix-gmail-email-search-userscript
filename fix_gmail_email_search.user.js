// ==UserScript==
// @name         Fix Gmail Email Search
// @namespace    https://github.com/gserafini/fix-gmail-email-search-userscript/
// @version      1.0
// @description  Bring back the old "Emails" quick search functionality
// @author       Gabriel Serafini
// @donate       If you like this, PayPal a little love to gserafini@gmail.com
// @screenshot   https://github.com/gserafini/fix-gmail-email-search-userscript/raw/master/fix-gmail-email-search-screenshot.png
// @match        http://*/*
// @grant        none
// @include      *gmail.com/*
// @include      *mail.google.com/*
// @require      http://code.jquery.com/jquery-3.3.1.min.js
// ==/UserScript==

(function() {
    'use strict';

    $(function() {
        // Handler for .ready() called.

        function insert_email_search_icon() {

            $('.gD').not('.email_search_icon+.gD')
                .each( 
                    function (index) {
                        console.log("Found email for possible searching: " + $(this).attr('email'));
                        $(this)
                            .before('<style>.email_search_icon svg {fill: #600;} .email_search_icon svg:hover {fill: #f00;} .email_search_icon {cursor: pointer;} </style><div style="display: inline-flex; justify-content: center; outline: none; position: relative; z-index: 0; padding: 0; margin: 0 8px -4px 0;" class="email_search_icon" title="Click to search for all emails with ' + $(this).attr('email') + '" email="' + $(this).attr('email') + '"><svg focusable="false" height="16px" viewBox="0 0 24 24" width="16px" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg></div>')
                    }
                );
        }

        // Run every 1 seconds...
        // Not quite sure how to only fire when Gmail updates the interface / inserts new divs or if there's a better way to do this
        setInterval(insert_email_search_icon, 1000);

        $('body').on('click', '.email_search_icon', function() {
            event.stopPropagation();
            $('input[name="q"]').val($(this).attr('email'));
            $('button.gb_ff.gb_gf').click();
            console.log("Search icon clicked!  Searching for " + $(this).attr('email') + "...");
        });

    });

})();
