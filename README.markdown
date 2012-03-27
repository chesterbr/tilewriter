tilewriter - README
===================

This is a (very simple) JavaScript library that draws pictures (and text) formed by "tiles" using block elements (instead of, say, drawing over an HTML5 canvas). It was written mostly as a visual test, but may be useful for generating this kind of illustration dynamically on older browsers.

Usage
-----

It depends on jQuery, so you would include with code like this:

    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js" type="text/javascript"></script>
    <script src="http://chester.me/tilewriter/tilewriter-0.2-min.js" type="text/javascript"></script>
    
Add a container for the drawing, such as:

    <div id="div_mario"></div>

And use it this way:

    tilewriter.reset();
    tilewriter.spacing = 0;
    tilewriter.size = 8;
    tilewriter.colors = ["", "#EA590C", "#AC7C00", "#FFA440"];
    tilewriter.drawRow("#div_mario", "   111111    ");
    tilewriter.drawRow("#div_mario", "  1111111111 ");
    tilewriter.drawRow("#div_mario", "  22233233   ");
    tilewriter.drawRow("#div_mario", " 23233323333 ");
    tilewriter.drawRow("#div_mario", " 232233323333");
    tilewriter.drawRow("#div_mario", " 22333322222 ");
    tilewriter.drawRow("#div_mario", "   33333333  ");
    tilewriter.drawRow("#div_mario", "  2232222    ");
    tilewriter.drawRow("#div_mario", " 22212212222 ");
    tilewriter.drawRow("#div_mario", "2222111122222");
    tilewriter.drawRow("#div_mario", "3321311312333");
    tilewriter.drawRow("#div_mario", "3331111113333");
    tilewriter.drawRow("#div_mario", "3311111111333");
    tilewriter.drawRow("#div_mario", "  1111 1111  ");
    tilewriter.drawRow("#div_mario", " 2222   2222 ");
    tilewriter.drawRow("#div_mario", "22222   22222");

This will create a drawing like the one below:

![](http://chester.me/wp-content/uploads/2010/06/mario.png)

All parameters are optional - try varying the spacing for a more "8-bit" look. You can also write text (the library has a built-in font borrowed from the ZX Spectrum, thanks to http://homepage.ntlworld.com/wholehog/stuart/fonts/index.html):

    tilewriter.drawText("#div_teste_2","Hello, world!");


License
-------

Copyright (c) 2010 Carlos Duarte do Nascimento (Chester)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


