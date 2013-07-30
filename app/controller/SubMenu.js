Ext.define('Prototype.controller.SubMenu', {
    extend: 'Ext.app.Controller',

    refs: [{
        ref: 'SubMenu'
        ,selector: 'SubMenu'
    }],

    init: function() {
        Ext.ux.Router.on('beforedispatch', this.beforeDispatchSubMenu, this);
        Ext.ux.Router.on('dispatch', this.dispatchSubMenu, this);
    },

    /**
     * Slide the submenu out of view
     * @param uri
     * @param match
     */
    beforeDispatchSubMenu: function(uri, match) {
        var submenu = this.getSubMenu();
        submenu.removeAll();

        this.slideOut();
    },

    /**
     * Add the buttons and slide in if there are any buttons
     * @param uri
     * @param match
     * @param params
     * @param controller
     */
    dispatchSubMenu: function(uri, match, params, controller) {
        var submenu = this.getSubMenu();

        if('Settings' === match.controller) {
            submenu.add(this.getSettingsSubMenuItems());
        }

        if('Home' === match.controller) {
            submenu.add(this.getHomeSubMenuItems());
        }

        if(null !== submenu.child()) {
            this.slideIn(submenu.getEl());
        }
    },

    /**
     * Get the items for settings
     * @returns {Array}
     */
    getSettingsSubMenuItems: function() {
        return [{
            text: 'Save'
        },{
            text: 'Terminate'
        }];
    },

    /**
     * Get the items for home
     * @returns {Array}
     */
    getHomeSubMenuItems: function() {
        return [{
            text: 'New'
        }];
    },

    /**
     * Slide in the submenu
     * @param subMenuElement
     */
    slideIn: function() {
        var submenu = this.getSubMenu();
        submenu.getEl().slideIn('t', {
            duration: 400,
            callback: function() {
                submenu.doLayout();
            },
            scope: this
        });

    },

    /**
     * Slide out the submenu
     * @param subMenuElement
     */
    slideOut: function() {
        var submenu = this.getSubMenu();
        submenu.getEl().slideOut('t', {
            duration: 400
        });
    }


});