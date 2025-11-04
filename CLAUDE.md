# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with
code in this repository.

---

## Project Overview

This is a **Greasemonkey/Tampermonkey userscript** that restores Gmail's
missing "Emails" search functionality by adding search icons next to email
addresses. When clicked, the icon instantly searches for all emails to/from
that contact.

**Key Facts:**

- Single-file userscript (no build process, no dependencies)
- Pure vanilla JavaScript (v1.5.0+ removed jQuery dependency)
- Uses native DOM methods (createElement, createElementNS, querySelectorAll)
- No TrustedTypes workarounds needed
- Updates delivered via GitHub raw URL (`@updateURL` directive)
- Gmail's DOM structure changes frequently, so selectors may break

---

## Development & Testing

**No build process required** - the userscript runs directly in the browser.

**To test changes:**

1. Install Greasemonkey (Firefox) or Tampermonkey (Chrome/Edge)
1. Edit the script in the extension's editor, or
1. Edit `fix_gmail_email_search.user.js` locally and reload the script
1. Visit [Gmail](https://mail.google.com) and verify icons appear
1. Click an icon to verify it triggers a search

**Testing checklist:**

- Icons appear next to sender/recipient names
- Icons have hover effect (color changes from #600 to #f00)
- Clicking icon populates search box and triggers search
- Icons appear on newly loaded emails (when scrolling/navigating)
- No duplicate icons on same email address

---

## Architecture

**Core Mechanism:**

```text
setInterval (300ms)
  └─> Find all .gD elements (email address containers)
      └─> Check hasIcon() - looks at previousElementSibling
          └─> Create icon using createEmailSearchIcon()
              └─> Insert using insertBefore()
  └─> Find all mailto: links (excluding contenteditable)
      └─> Check hasIcon() - looks at previousElementSibling
          └─> Create icon using createEmailSearchIcon()
              └─> Insert using insertBefore()

Event delegation (document.addEventListener)
  └─> Click on .email_search_icon (or its children)
      └─> Get email from icon's email attribute
          └─> Set search input value: input[name="q"]
              └─> Trigger search: click button[aria-label="Search mail"]
```

**Why setInterval?**
Gmail is a single-page app that dynamically loads content. The script checks
every 300ms for new email elements that need search icons. This is not
ideal but works reliably.

**Critical DOM Selectors (Gmail-specific):**

- `.gD` - Gmail's class for email address containers (has `email` attribute)
- `a[href^="mailto:"]` - mailto links (except in contenteditable divs)
- `input[name="q"]` - Gmail's search input field
- `button[aria-label="Search mail"]` - Gmail's search button (v1.5.0+)
- `.email_search_icon` - Our added search icon class

**If Gmail updates break the script:**

1. Open Gmail and inspect the DOM around email addresses
1. Find the new class/selector for email elements (currently `.gD`)
1. Find the new search input selector (currently `input[name="q"]`)
1. Find the new search button selector (currently
   `button[aria-label="Search mail"]`)
1. Update the selectors in
   [fix_gmail_email_search.user.js](fix_gmail_email_search.user.js)
1. Increment `@version` number in the header so users get the update

---

## Userscript Header Directives

The header metadata controls how the script is installed and updated:

```javascript
// @name         Fix Gmail Email Search
// @version      1.5.0                  // Increment for updates
// @updateURL    https://github.com/... // Auto-update URL
// @match        *://mail.google.com/*
// @match        *://contacts.google.com/widget/hovercard/*
// @match        *://gmail.com/*
// @grant        none                   // No special permissions
// Note: v1.5.0+ has no @require - pure vanilla JavaScript
```

**Version Updates:**
When making changes, increment `@version` (e.g., 1.5.0 → 1.5.1) so users with
auto-update enabled get the new version.

---

## Common Issues & Solutions

### Issue: Icons not appearing

- Check browser console for errors
- Verify `.gD` selector still matches Gmail's email elements
- Check that `a[href^="mailto:"]` links exist in the page
- Verify the script is running (check Tampermonkey icon)

### Issue: Icons duplicating

- The `hasIcon()` function checks `previousElementSibling` to prevent this
- May indicate Gmail's DOM structure changed
- Check that icons have `.email_search_icon` class

### Issue: Search not triggering

- Verify `input[name="q"]` selector matches Gmail's search input
- Verify `button[aria-label="Search mail"]` selector matches Gmail's search
  button
- Check that click event is firing (add console.log in handler)

### Issue: Script not loading on Gmail

- Check `@match` directives match the Gmail URL
- Verify userscript extension is enabled for the site
- Check browser console for any errors

---

## Making Changes

**When modifying the script:**

1. Test thoroughly in Gmail (try multiple views: inbox, sent, individual)
1. Increment `@version` in the header
1. Commit with descriptive message (e.g., "fix: update search button
   selector for new Gmail UI")
1. Push to GitHub - users with auto-update will get the new version

**When Gmail's UI changes:**

1. Open Gmail and use browser DevTools to inspect the new structure
1. Update the affected selectors in the script
1. Test that icons appear and search works
1. Increment version and push to GitHub

---

## Distribution

Users install the script by visiting the raw GitHub URL:
<https://github.com/gserafini/fix-gmail-email-search-userscript/raw/master/fix_gmail_email_search.user.js>

The `@updateURL` directive ensures users automatically receive updates when the
version number changes.
