Ext.define('Prototype.controller.MainMenu', {
    extend: 'Ext.app.Controller',

    init: function() {
        this.control({
            "#mainMenuLeft > menuitem": {
                click: this.onMainNavClick
            }
        });
    },

    onMainNavClick: function(menuitem) {
        Ext.Router.redirect(menuitem.itemId === 'home' ? '' : menuitem.itemId);
    }

});
