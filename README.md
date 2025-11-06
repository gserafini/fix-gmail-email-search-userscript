# Fix Gmail Email Quick Search Userscript

[![Release](https://img.shields.io/github/v/release/gserafini/fix-gmail-email-search-userscript)](https://github.com/gserafini/fix-gmail-email-search-userscript/releases)
[![GitHub stars](https://img.shields.io/github/stars/gserafini/fix-gmail-email-search-userscript?style=social)](https://github.com/gserafini/fix-gmail-email-search-userscript/stargazers)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/gserafini/fix-gmail-email-search-userscript/blob/master/LICENSE)
[![Vanilla JS](https://img.shields.io/badge/vanilla-JS-yellow.svg)](https://github.com/gserafini/fix-gmail-email-search-userscript)
[![No Dependencies](https://img.shields.io/badge/dependencies-none-success.svg)](https://github.com/gserafini/fix-gmail-email-search-userscript)

This userscript restores — and improves — Gmail’s missing “**Emails**” search feature.

In the past, Gmail let you hover over a contact’s name, wait for the hover card, and click “Emails” to see every message you’d exchanged. That option is gone — but this script brings it back, faster and better.

With this script installed, a **search icon** appears next to every contact’s name or email address.
Click the icon to instantly search for all emails **to or from that contact** — no waiting, no copy/paste, no menus.

The icons appear:

- Next to all clickable email addresses in message threads
- Inside Gmail hovercards when you hover over a contact’s name

![Screenshot of new search icon](https://github.com/gserafini/fix-gmail-email-search-userscript/raw/master/fix-gmail-email-search-screenshot.png)


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

**[Click link to install Fix Gmail Email Search userscript](https://github.com/gserafini/fix-gmail-email-search-userscript/raw/master/fix_gmail_email_search.user.js)**

Your userscript manager will prompt you to install it. Click "Install" to
confirm.

### Step 3: Done

Visit [Gmail](https://mail.google.com) and you'll see search icons next to
email addresses. Click any icon to instantly search for all emails with that
contact.

The script will automatically update when new versions are released.

## What's New

### v1.5.1 (Latest)

- Fixed Google Workspace account support (e.g., `/mail/u/1/` URLs)
- Contact hovercards now work on all account types

### v1.5.0

- Removed jQuery dependency - now pure vanilla JavaScript
- No longer requires separate TrustedHTML bypass script
- Uses native DOM methods for better compatibility
- Smaller file size and faster loading


Please report any issues with the script here:
<https://github.com/gserafini/fix-gmail-email-search-userscript>


[**Thank You Link - Donate**](https://www.paypal.com/ncp/payment/JXMUT8PE2VCYJ) _(any amount is appreciated, thank you for supporting Open Source!)_

Thanks, and happy searching!

Gabriel
