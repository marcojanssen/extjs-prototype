Ext.define('Prototype.controller.Router', {
    extend: 'Ext.app.Controller',

    previousMatch: {},
    currentMatch: {},

    init: function() {
        Ext.ux.Router.on('routemissed', this.routeMissed, this);
        Ext.ux.Router.on('dispatch', this.dispatch, this);
    },

    routeMissed: function(token) {
        Ext.window.MessageBox.show({
            title:'Error 404',
            msg: 'Route not found: ' + token,
            buttons: Ext.window.MessageBox.OK,
            icon: Ext.window.MessageBox.ERROR
        });
    },

    dispatch: function(token, match, params, controller) {
        this.currentMatch = match;

        this.animate();

        this.previousMatch = match;
    },

    animate: function() {

        //if a previous action was defined
        if(this.previousMatch.action) {

            //switching main screens
            if(this.previousMatch.controller !== this.currentMatch.controller) {
                this.fade();
                return;
            }

            //from main screen to sub screen
            if('index' === this.previousMatch.action && 'index' !== this.currentMatch.action) {
                this.slide('l', 'r');
                return;
            }

            //from sub screen to main screen
            if('index' !== this.previousMatch.action && 'index' === this.currentMatch.action) {
                this.slide('r', 'l');
                return;
            }
        }

        //no previous action set, app is starting up so just display requested screen
        if(undefined === this.previousMatch.action) {
            this.display();
            return;
        }
    },

    display: function() {
        var view = this.createViewClass(),
            target = this.getTarget();

        target.add(
            Ext.create(view, {
                border: false
            })
        );
    },

    slide: function(slideOutDirection, slideInDirection) {
        var view = this.createViewClass(),
            target = this.getTarget();

        target.getEl().slideOut(slideOutDirection, {
            duration: 400,
            callback: function() {
                target.removeAll();

                target.add(
                    Ext.create(view, {
                        border: false
                    })
                );

                target.getEl().slideIn(slideInDirection, {
                    duration: 400,
                    callback: function() {
                        target.doLayout();
                    },
                    scope: this
                });
            },
            scope: this
        });
    },

    fade: function() {
        var view = this.createViewClass(),
            target = this.getTarget();

        target.getEl().fadeOut({
            duration: 400,
            callback: function() {
                target.removeAll();

                target.add(
                    Ext.create(view, {
                        border: false
                    })
                );

                target.getEl().fadeIn({
                    duration: 400,
                    callback: function() {
                        target.doLayout();
                    },
                    scope: this
                });
            },
            scope: this
        });
    },

    createViewClass: function() {
        var viewClass, action, controller;

        action      = Ext.String.capitalize(this.currentMatch.action);
        controller  = this.currentMatch.controller.charAt(0).toLowerCase() + this.currentMatch.controller.substr(1);

        // try to get the view by controller + action names
        viewClass   = Ext.ClassManager.get('Prototype.view.' + controller + '.' + action);

        if (viewClass) {
            return viewClass;
        }
    },

    getTarget: function() {
        var viewport    = Ext.getCmp('viewport'),
            target      = viewport.down('#viewport-target');

        return target;
    }


});