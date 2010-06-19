var tilewriter = {

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
    
    drawText: function(text){
        document.write(this.tile(text));
    },
    
    
    drawRow: function(element, line){
        var html = '<div style="margin:0px; padding:0px; border:0px;height:' + (this.size + this.spacing) + 'px;">';
        if (!this.colors) {
            this.colors = ['black'];
        }
        for (i in line) {
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
    
    reset: function(){
        this.size = 16;
        this.spacing = 1;
        this.colors = ['black'];
    }
    
}

tilewriter.reset();
