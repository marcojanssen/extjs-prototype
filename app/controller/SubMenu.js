Ext.define('Prototype.controller.SubMenu', {
    extend: 'Ext.app.Controller',

    refs: [{
        ref: 'SubMenu'
        ,selector: 'SubMenu'
    }],

    init: function() {
        Ext.ux.Router.on('beforedispatch', this.hideSubMenu, this);
        Ext.ux.Router.on('dispatch', this.initSubMenu, this);
    },

    hideSubMenu: function(uri, match) {
        var submenu = this.getSubMenu();
        submenu.getEl().slideOut('t', {
            duration: 400,
            scope: this
        });
    },

    initSubMenu: function(uri, match) {
        var submenu = this.getSubMenu();
        submenu.getEl().slideIn('t', {
            duration: 400,
            scope: this
        });
    }
});