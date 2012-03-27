tilewriter - README
===================

This is a (very simple) library that draws pictures (and text) formed by "tiles" using block elements (instead of, say, HTML5 canvas), written mostly as a visual test.

Usage
-----

It depends on jQuery, so you would include with code like this:

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js" type="text/javascript"></script>
<script src="http://chester.me/tilewriter/tilewriter-0.2-min.js" type="text/javascript"></script>

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

This will create a drawing like the one here:

http://chester.me/wp-content/uploads/2010/06/mario.png
(![](http://chester.me/wp-content/uploads/2010/06/mario.png)

All parameters are optional. You can also write text:

tilewriter.drawText("#div_teste_2","Hello");

For more examples, try this blog post (in Portuguese, but Google-translatable): http://chester.me/archives/2010/06/tilewriter-desenhando-ladrilhos-em-javascript.html

License
-------

Copyright (c) 2010 Carlos Duarte do Nascimento (Chester)

Permission is hereby granted, free of charge, to any person obtaining a copy of this
software and associated documentation files (the "Software"), to deal in the Software
without restriction, including without limitation the rights to use, copy, modify, merge,
publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons
to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or
substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE
FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.


