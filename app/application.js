Ext.onReady(function() {
    // Start the mask on the body and get a reference to the mask
    splashscreen = Ext.getBody().mask('Loading application', 'splashscreen');
    // Add a new class to this mask as we want it to look different from the default.
    splashscreen.addCls('splashscreen');

    // Insert a new div before the loading icon where we can place our logo.
    Ext.DomHelper.insertFirst(Ext.query('.x-mask-msg')[0], {
        cls: 'x-splash-icon'
    });
});

Ext.define('Prototype.Application', {
    name: 'Prototype',

    extend: 'Ext.app.Application',

    requires: [
        'Ext.data.*',
        'Ext.grid.*',
        'Ext.ux.Router',
        'Prototype.store.*'
    ],

    views: [
        'MainMenu',
        'SubMenu',
        'home.Index',
        'home.Edit',
        'home.New',
        'settings.Index'
    ],

    controllers: [
        'SubMenu',
        'Home',
        'Settings'
    ],

    stores: [
        'Items'
    ],

    /*
     * Here is where routes are defined.
     *  key:    URL matcher
     *  value:  controller + '#' + action to be invoked
     */
    routes: {
        '/'             : 'home#index',
        'home'          : 'home#index',
        'home/new'      : 'home#new',
        'home/edit/:id' : 'home#edit',
        'settings'      : 'settings#index',
        'users'         : 'users#list',
        'users/:id/edit': 'users#edit'
    },


    launch: function() {

        this.fadeSplash();
        this.initRouter();
    },

    fadeSplash: function() {
        // Setup a task to fadeOut the splashscreen
        var task = new Ext.util.DelayedTask(function() {
            // Fade out the body mask
            splashscreen.fadeOut({
                duration: 1000,
                remove:true
            });
            // Fade out the icon and message
            splashscreen.next().fadeOut({
                duration: 1000,
                remove:true,
                listeners: {
                    afteranimate: function() {
                        // Set the body as unmasked after the animation
                        Ext.getBody().unmask();
                    }
                }
            });
        });
        // Run the fade 500 milliseconds after launch.
        task.delay(500);
    },

    initRouter: function() {
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

                    this.fireEvent('routechanged');

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

                            target.getEl().slideIn('r',{
                                duration: 400,
                                callback: function() {
                                    target.doLayout();
                                },
                                scope: this
                            });
                        },
                        scope: this
                    });

                }
            }
        });
    }
});
