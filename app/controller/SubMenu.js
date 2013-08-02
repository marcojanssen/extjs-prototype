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
    beforeDispatchSubMenu: function(uri, match, params) {
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
            submenu.add(this.getSettingsSubMenuItems(match.action));
        }

        if('Home' === match.controller) {
            submenu.add(this.getHomeSubMenuItems(match.action));
        }

        if(null !== submenu.child()) {
            this.slideIn(submenu.getEl());
        }
    },

    /**
     * Get the items for settings
     * @returns {Array}
     */
    getSettingsSubMenuItems: function(action) {
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
    getHomeSubMenuItems: function(action) {

        if('index' === action) {
            return [{
                text: 'New',
                handler: function() {
                    Ext.Router.redirect('home/new');
                }
            }];
        }

        if('new' === action) {
            return [{
                text: 'Back',
                handler: function() {
                    Ext.Router.redirect('home');
                }
            },{
                text: 'Save',
                handler: function() {
                    alert("Save");
                }
            }];
        }

        if('edit' === action) {
            return [{
                text: 'Back',
                handler: function() {
                    Ext.Router.redirect('home');
                }
            },{
                text: 'Save',
                handler: function() {
                    alert("Save");
                }
            },{
                text: 'Terminate',
                handler: function() {
                    alert("Terminate");
                }
            }];
        }
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