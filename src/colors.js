var irc_colors = require('irc-colors');

exports.color = function(text, colors) {
    var _fun = irc_colors;
    colors = colors.split('.');
    // irc-colors allows for linked colors, for example:
    // irc_colors.bold.red.underline("blablabla")
    for(var i = 0; i < colors.length; ++i) {
        _fun = _fun[colors[i]];
    }

    colorized = _fun(text);
    return colorized;
};
