# Fix Gmail Email Search Userscript

[![Release](https://img.shields.io/github/v/release/gserafini/fix-gmail-email-search-userscript)](https://github.com/gserafini/fix-gmail-email-search-userscript/releases)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/gserafini/fix-gmail-email-search-userscript/blob/master/LICENSE)
[![Vanilla JS](https://img.shields.io/badge/vanilla-JS-yellow.svg)](https://github.com/gserafini/fix-gmail-email-search-userscript)
[![No Dependencies](https://img.shields.io/badge/dependencies-none-success.svg)](https://github.com/gserafini/fix-gmail-email-search-userscript)

This is a Greasemonkey userscript to fix missing "Emails" search in Gmail.

**Version 1.5.0** - Now using pure vanilla JavaScript with no dependencies! No jQuery required, no TrustedTypes workarounds needed.

Please report any issues with the script here:
<https://github.com/gserafini/fix-gmail-email-search-userscript>

![Screenshot of new search icon](https://github.com/gserafini/fix-gmail-email-search-userscript/raw/master/fix-gmail-email-search-screenshot.png)

My plan is to keep this up to date as long as they're missing this key functionality.

This script delivers even better functionality than Gmail used to have.  In the past you would have to hover over a contact's name, wait for the pop-up to show, then click the "Emails" link to get a list of all the emails you had sent or received for that contact.

This plugin adds a search icon next to each contact's name.  Click the icon to do an instant search for all emails to or from that contact.  The script adds search icons next to all clickable email addresses, as well as in the hovercards that show up when you hover over a contact's name.

## Installation

### Step 1: Install a Userscript Manager

First, install a userscript manager extension for your browser:

- **Chrome/Edge/Brave**: Install
  [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
- **Firefox**: Install
  [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/)
  or
  [Tampermonkey](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
- **Safari**: Install
  [Userscripts](https://apps.apple.com/us/app/userscripts/id1463298887)

### Step 2: Install the Script

Click this link to install:

**[Install Fix Gmail Email Search](https://github.com/gserafini/fix-gmail-email-search-userscript/raw/master/fix_gmail_email_search.user.js)**

Your userscript manager will prompt you to install it. Click "Install" to
confirm.

### Step 3: Done

Visit [Gmail](https://mail.google.com) and you'll see search icons next to
email addresses. Click any icon to instantly search for all emails with that
contact.

The script will automatically update when new versions are released.

## What's New in v1.5.0

- Removed jQuery dependency - now pure vanilla JavaScript
- No longer requires separate TrustedHTML bypass script
- Uses native DOM methods for better compatibility
- Smaller file size and faster loading

Any bug-fixes or better ways to do this are welcome!

If you like it and it's saved you some time, please fee free to send a little donation to my PayPal address: <gserafini@gmail.com>.

Thanks, and happy searching!

Gabriel
