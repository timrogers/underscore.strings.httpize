// Underscore.strings.httpize
// (C) 2010 Tim Rogers <tim at rm14 dot co dot uk>
// Based upon Underscore.strings, created by Esa Matti Suuronen, available at http://bitbucket.org/epeli/underscore.strings/src/tip/underscore.strings.js

// Version 1.0

(function() {
	var httpize_root = this;
	var httpize_underscore = httpize_root._;
	
	var httpize = {
		httpize : function(str) {
			if (!httpize_underscore.startsWith(str, "http://")) {
				var newstr = "http://" + str;
			}
			return newstr;
		}
	}
	httpize_underscore.mixin(httpize);
}());