Contributing to Beacon
=====================

Beacon is a fork of `Caret <https://github.com/thomaswilburn/Caret>`_ by Thomas Wilburn, modified to include the serial terminal emulator, `BeagleTerm <https://github.com/beagleterm/beagle-term>`_.

https://github.com/jkrei0/beacon

This repository use GitHub's issue system to track bugs and feature requests, so start there if you want to contribute something. Below are a few guidelines if you want to contribute:

- In general, use the Google JS style guide, with a few exceptions due to orneriness.
- Beacon style prefers double quotes to single quotes when writing strings. We also ignore the style guide when it comes to AMD module declarations, but other function declarations should follow the Google style. 
- JSDoc is not used in Beacon, but would probably be a good idea. Comment heavily, but name your variables and write your code so that comments shouldn't be necessary. You should prefer clarity to cleverness.
- For the most part, we use relatively few outside libraries besides Ace and the ES6 Promise shim. Before including other external libraries, consider whether this is truly necessary. For example, there are libraries for providing async and DOM manipulation in /util that should be used, rather than including caolan's async library or jQuery. This micro-library approach has served Beacon well--consider deeply whether you need to include a large external library for your contribution.
- Once AMD modules start to exceed 200 lines, it's a good idea to try breaking them up into primary packages with imported sub-modules. See the "session" module for an example.
- Beacon uses Grunt as its build system, and you will need it installed for development. If your contribution generates files, such as templates or CSS, do not check in the generated files, but do make sure that they will be generated as a part of the Grunt "package" task.



Translations
------------

As of now, only english is available (And possibly spanish in the future), since I have to rebrand and rewrite a lot of things along with my modifications.

If you want to add a translation, it's the same as with unmodified Caret:

- Create a new folder under ``_locales``. Name the folder after one of the supported languages (see https://developer.chrome.com/webstore/i18n?csw=1#localeTable).
- Copy the ``messages.json`` file from the english (en) folder into this new folder.
- Translate the messages.

Instructions on how to change Chrome language for testing can be found here:
https://developer.chrome.com/extensions/i18n#locales-testing

**Note:** If changing the whole Mac OS language settings just to test an app, as described in the instructions, sounds like overkill, you can follow these steps:

- Open a Terminal window.
- Type ``defaults write com.google.Chrome AppleLanguages '(en-US)'`` and press "enter". (set the language you want in the parenthesis).
- Restart Chrome.

(from https://productforums.google.com/forum/#!msg/chrome/KlwkLCRln9g/7vGcFpN7ZRwJ)
