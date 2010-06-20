//
// tilewriter - a simple tile drawing tool.
// http://github.com/chesterbr/tilewriter
//
// It requires jQuery, any version will do.
// You should use a minified version. Current version (0.1) can be found at 
//    http://chester.blog.br/tilewriter/tilewriter-0.1-min.js
// 
// Copyright (c) 2010 Carlos Duarte do Nascimento (Chester)
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of this
// software and associated documentation files (the "Software"), to deal in the Software
// without restriction, including without limitation the rights to use, copy, modify, merge,
// publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons
// to whom the Software is furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all copies or
// substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
// INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
// PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE
// FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
// DEALINGS IN THE SOFTWARE.
//

var tilewriter = {

    // Writes a text in tile-format on element, with a cool, 80-ish font from England ;-)
    drawText: function(element, text){
        for (j = 0; j < 8; j++) {
            var line = '';
            for (i = 0; i < text.length; i++) {
                var c = text.charAt(i);
                var hex = this.font[c];
                if (hex) {
                    line += this._h2b[hex.charAt(j * 2)];
                    line += this._h2b[hex.charAt(j * 2 + 1)];
                }
            }
            this.drawRow(element, line);
        }
    },
    
    // Draws a tile row on element
    drawRow: function(element, line){
        var html = '<div style="margin:0px; padding:0px; border:0px;height:' + (this.size + this.spacing) + 'px;">';
        if (!this.colors) {
            this.colors = ['black'];
        }
        for (i = 0; i < line.length; i++) {
            var c = line[i];
            var color = ''
            if (c != ' ') {
                color = this.colors[c];
                if (!color) {
                    color = this.colors[0];
                }
            }
            html += this.tile(color);
        }
        html += this.linebreak;
        jQuery(element).append(html);
    },
    
    // Resets the default properties (check code for possible properties)
    reset: function(){
        // Tile size
        this.size = 16;
        // Spacing between tiles
        this.spacing = 1;
        // Colors used on tiles. Can be:
        //   - a single color in an array
        //   - an array which will map to numbers on drawRow
        //   - a "dictionary" object that maps characters on drawRow to colors
        //   (see examples.html) 
        this.colors = ['black'];
    },
    
    tilestyle: 'display:inline-block;border:0px;padding:0px;',
    linebreak: '<br/>',
    
    tile: function(color){
        var sizestyle = 'width:' + this.size + 'px;height:' + this.size + 'px' + ';margin:0 ' + this.spacing + 'px 0 0';
        var colorstyle = '';
        if (color) {
            colorstyle = 'background-color: ' + color;
        }
        return '<span style="' + sizestyle + ';' + this.tilestyle + ';' + colorstyle + '"></span>';
    },
    
    font: {
        ' ': '0000000000000000',
        '!': '0010101010001000',
        '"': '0024240000000000',
        '#': '00247E24247E2400',
        '$': '00083E283E0A3E08',
        '%': '0062640810264600',
        '&': '001028102A443A00',
        '\'': '0008100000000000',
        '(': '0004080808080400',
        ')': '0020101010102000',
        '*': '000014083E081400',
        '+': '000008083E080800',
        ',': '0000000000080810',
        '-': '000000003E000000',
        '.': '0000000000181800',
        '/': '0000020408102000',
        '0': '003C464A52623C00',
        '1': '0018280808083E00',
        '2': '003C42023C407E00',
        '3': '003C420C02423C00',
        '4': '00081828487E0800',
        '5': '007E407C02423C00',
        '6': '003C407C42423C00',
        '7': '007E020408101000',
        '8': '003C423C42423C00',
        '9': '003C42423E023C00',
        ':': '0000001000001000',
        ';': '0000100000101020',
        '<': '0000040810080400',
        '=': '0000003E003E0000',
        '>': '0000100804081000',
        '?': '003C420408000800',
        '@': '003C4A565E403C00',
        'A': '003C42427E424200',
        'B': '007C427C42427C00',
        'C': '003C424040423C00',
        'D': '0078444242447800',
        'E': '007E407C40407E00',
        'F': '007E407C40404000',
        'G': '003C42404E423C00',
        'H': '0042427E42424200',
        'I': '003E080808083E00',
        'J': '0002020242423C00',
        'K': '0044487048444200',
        'L': '0040404040407E00',
        'M': '0042665A42424200',
        'N': '004262524A464200',
        'O': '003C424242423C00',
        'P': '007C42427C404000',
        'Q': '003C4242524A3C00',
        'R': '007C42427C444200',
        'S': '003C403C02423C00',
        'T': '00FE101010101000',
        'U': '0042424242423C00',
        'V': '0042424242241800',
        'W': '00424242425A2400',
        'X': '0042241818244200',
        'Y': '0082442810101000',
        'Z': '007E040810207E00',
        '[': '000E080808080E00',
        '\\': '0000402010080400',
        ']': '0070101010107000',
        '↑': '0010385410101000',
        '_': '00000000000000FF',
        '£': '001C227820207E00',
        'a': '000038043C443C00',
        'b': '0020203C22223C00',
        'c': '00001C2020201C00',
        'd': '0004043C44443C00',
        'e': '0000384478403C00',
        'f': '000C101810101000',
        'g': '00003C44443C0438',
        'h': '0040407844444400',
        'i': '0010003010103800',
        'j': '0004000404042418',
        'k': '0020283030282400',
        'l': '0010101010100C00',
        'm': '0000685454545400',
        'n': '0000784444444400',
        'o': '0000384444443800',
        'p': '0000784444784040',
        'q': '00003C44443C0406',
        'r': '00001C2020202000',
        's': '0000384038047800',
        't': '0010381010100C00',
        'u': '0000444444443800',
        'v': '0000444428281000',
        'w': '0000445454542800',
        'x': '0000442810284400',
        'y': '00004444443C0438',
        'z': '00007C0810207C00',
        '{': '000E083008080E00',
        '|': '0008080808080800',
        '}': '0070100C10107000',
        '~': '0014280000000000',
        '©': '3C4299A1A199423C'
    },
    
    _h2b: {
        '0': '    ',
        '1': '   1',
        '2': '  1 ',
        '3': '  11',
        '4': ' 1  ',
        '5': ' 1 1',
        '6': ' 11 ',
        '7': ' 111',
        '8': '1   ',
        '9': '1  1',
        'A': '1 1 ',
        'B': '1 11',
        'C': '11  ',
        'D': '11 1',
        'E': '111 ',
        'F': '1111'
    }

}

tilewriter.reset();
