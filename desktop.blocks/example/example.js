BEM.DOM.decl('example', {

    onSetMod : {

        'open' : {

            'yes' : function() {
                console.log(this.hasMod('open', 'yes'));

                this.afterCurrentEvent(function() {
                    console.log(this.hasMod('open', 'yes'));
                });
            }

        }

    }

});


BEM.DOM.decl('example', {

    onSetMod: {

        js: function() {
            BEM.blocks['b-link'].on(this.domElem, 'click', this._onBLinkClick);
        }

    },

    _onBLinkClick: function(e) {
        this.toggleMod('open', 'yes', '');

        e.block.setMod('clicked', 'yes');
    }

});
