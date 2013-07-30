Ext.define('Prototype.Application', {
    name: 'Prototype',

    extend: 'Ext.app.Application',

    requires: [
        'Ext.data.*',
        'Ext.grid.*',
        'Ext.ux.Router',
        'Prototype.store.Items'
    ],

    views: [
        'MainMenu',
        'home.Index',
        'settings.Index'
    ],

    controllers: [
        'Home',
        'Settings'
    ],

    stores: [
        // TODO: add stores here
    ],

    /*
     * Here is where routes are defined.
     *  key:    URL matcher
     *  value:  controller + '#' + action to be invoked
     */
    routes: {
        '/'             : 'home#index',
        'settings'      : 'settings#index',
        'users'         : 'users#list',
        'users/:id/edit': 'users#edit'
    },


    launch: function() {

        /*
         * Ext.ux.Router provides some events for better controlling
         * dispatch flow
         */
        Ext.ux.Router.on({

            routemissed: function(token) {
                Ext.window.MessageBox.show({
                    title:'Error 404',
                    msg: 'Route not found: ' + token,
                    buttons: Ext.window.MessageBox.OK,
                    icon: Ext.window.MessageBox.ERROR
                });
            },

            beforedispatch: function(token, match, params) {
                Ext.log('beforedispatch ' + token);
            },

            /**
             * For this example I'm using the dispatch event to render the view
             * based on the token. Each route points to a controller and action.
             * Here I'm using these 2 information to get the view and render.
             */
            dispatch: function(token, match, params, controller) {

                var view, viewClass, action,
                    viewport    = Ext.getCmp('viewport'),
                    target      = viewport.down('#viewport-target');

                // adjust controller and action names
                action      = Ext.String.capitalize(match.action);
                controller  = match.controller.charAt(0).toLowerCase() + match.controller.substr(1);

                // try to get the view by controller + action names
                viewClass   = Ext.ClassManager.get('Prototype.view.' + controller + '.' + action);

                if (viewClass) {

                    // clear target and add new view
                    target.getEl().slideOut('l', {
                        duration: 400,
                        callback: function() {
                            target.removeAll();

                            // create view
                            view = Ext.create(viewClass, {
                                border: false
                            });

                            target.add(view);
                            target.doLayout();
                            target.getEl().slideIn('r',{
                                duration: 400
                            });
                        },
                        scope: this
                    });

                }
            }
        });
    }
});
