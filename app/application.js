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
        'Router',
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
    }
});
