BEM.DOM.decl('b-page', {}, {

    _bPage: null,

    getInstance: function() {
        return this._bPage || (this._bPage = $('body').bem('b-page'));
    },

    _iResize: null,

    getResize: function() {
        return this._iResize || (this._iResize = BEM.create('i-resize'));
    }

});
