module.exports = [
    {
        languageOptions: {
            ecmaVersion: 2015,
            sourceType: 'script',
            globals: {
                // Browser
                window: 'readonly',
                document: 'readonly',
                console: 'readonly',
                trustedTypes: 'readonly',
                Element: 'readonly',
                HTMLScriptElement: 'readonly',
                // jQuery
                $: 'readonly',
                jQuery: 'readonly',
                // Greasemonkey/Tampermonkey
                GM: 'readonly',
                GM_info: 'readonly',
                GM_setValue: 'readonly',
                GM_getValue: 'readonly',
                GM_deleteValue: 'readonly',
                GM_listValues: 'readonly',
                GM_getResourceText: 'readonly',
                GM_getResourceURL: 'readonly',
                GM_addStyle: 'readonly',
                GM_log: 'readonly',
                GM_openInTab: 'readonly',
                GM_registerMenuCommand: 'readonly',
                GM_unregisterMenuCommand: 'readonly',
                GM_xmlhttpRequest: 'readonly',
                GM_download: 'readonly',
                GM_setClipboard: 'readonly',
                GM_notification: 'readonly',
                unsafeWindow: 'readonly'
            }
        },
        rules: {
            'no-multi-spaces': 'warn',
            'no-console': 'off'
        }
    }
];
