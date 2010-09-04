Underscore.strings.httpize.js
==============================

What is Underscore.strings.httpize.js?
--------------------------------------

This little script is an extension for Underscore.strings.js, and hence Underscore.js, a great Javascript utility library.

It makes use of the startsWith function included with Underscore.strings, allow you to add http:// to the front of strings where doing so is desirable. Before it does this, it uses startsWith to check if http:// is already present. Once it has done it (or not as the case may be!), it returns the result.

How do I use it?
----------------

A full usage example is included in example.html. In short, you need to include underscore.js, underscore.strings.js and underscore.strings.httpize.js (preferably in that order) and then run _.httpize(string_to_httpize). Or you can use the alternative syntax of _(string_to_httpize).httpize().

Future updates...
-----------------

I created a version 1.1 with support for adding https:// to the start of URLs, but decided not to release it as I couldn't decide on a behaviour which I thought was good.

Is this a feature that anyone would be interested in? If so, would you want to force a URL which is originally http:// to be https://, or would you leave it with the original prefix? How would you make such a feature behave?

**It would be great if anyone felt like making their own version with such a feature. If you're up for it, fork the repository, update it and send me a pull request and I'll be sure to take a look :)**

Credits, thanks and acknowledgements
------------------------------------

Thanks to all the Underscore.js team for all their work in building this interesting little Javascript library. You can get Underscore.js in this package, or [here](http://documentcloud.github.com/underscore/).

Thanks to Esa Matti Suuronen, who created the underscore.strings.js library which this script is based on. This repository includes his work. You can download the original script [here](http://bitbucket.org/epeli/underscore.strings/src).

Many thanks to Andri Möll for introducing me to Underscore.js.

(C) 2010 Tim Rogers
You can find me online on my website at [http://www.tim-rogers.co.uk](http://www.tim-rogers.co.uk), and I'm [@timROGERS](http://www.twitter.com/timrogers) on Twitter.

