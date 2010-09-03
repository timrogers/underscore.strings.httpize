Underscore.strings.httpize.js
==============================

What is Underscore.strings.httpize.js?
--------------------------------------

This little script is an extension for Underscore.strings.js, and hence Underscore.js, a great Javascript utility library.

It makes use of the startsWith function included with Underscore.strings, allow you to add http:// to the front of strings where doing so is desirable. Before it does this, it uses startsWith to check if http:// is already present. Once it has done it (or not as the case may be!), it returns the result.

How do I use it?
----------------

A full usage example is included in example.html. In short, you need to include underscore.js, underscore.strings.js and underscore.strings.httpize.js (preferably in that order) and then run _.httpize(string_to_httpize). Or you can use the alternative syntax of _(string_to_httpize).httpize().

Credits, thanks and acknowledgements
------------------------------------

Thanks to all the Underscore.js team for all their work in building this interesting little Javascript library. You can get Underscore.js in this package, or [here](http://documentcloud.github.com/underscore/).

Thanks to Esa Matti Suuronen, who created the underscore.strings.js library which this script is based on. This repository includes his work. You can download the original script [here](http://bitbucket.org/epeli/underscore.strings/src).

Many thanks to Andri Möll for introducing me to Underscore.js.

(C) 2010 Tim Rogers
You can find me online on my website at [http://www.tim-rogers.co.uk](http://www.tim-rogers.co.uk), and I'm [@timROGERS](http://www.twitter.com/timrogers) on Twitter.

