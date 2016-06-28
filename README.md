#TStrings.JS
##Translated Strings and Foreign Language Support

Foreign language support in JavaScript single-page web apps is hard.
JavaScript has no built-in support for translated string tables.

String tables are important because they are the primary way of
abstracting away text string resources from programming logic.
Decoupling that connection is important when crafting a web app
providing multiple languages.

Translation strings and foreign language support seems to be one
of those gritty boring subjects that no one writes about and plenty
of folks must implement. Searching through Google garnered me no
hits on this topic and I decided to have a go at writing this
article sharing my best practices. I hope this helps you when
you need a practical reference.

##How to Run Locally
Because this app uses $.ajax to load in language files it needs
to run out of a local webserver. When it's not (e.g. double-clicking
on index.html) the browser's security protocol will kick in and
prevent it. It thinks it could be a cross-origin scripting-attack.

There are several ways to do this. Perhaps you already have a webserver
running, like Apache, and can serve these files up locally from there.

From Python in OSX
1. Open a Terminal
2. cd to your source code folder
3. enter "python -m SimpleHTTPServer"
4. if you have Python v3 enter "python -m http.server"
5. open a browser and enter "http://localhost:8000/" to see the webapp

See more here: https://github.com/mrdoob/three.js/wiki/How-to-run-things-locally

##Further Info
* Read the accompanying technical article on http://blog.katworksgames.com/2012/12/23/translated-strings-and-foreign-language-support/
* Reach out to me on Twitter [@KenTabor](https://twitter.com/KenTabor)
* Live demo of this repo's [web app](http://www.tstringjs.com/)
