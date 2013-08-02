Ext.define('Prototype.controller.Router', {
    extend: 'Ext.app.Controller',

    previousMatch: '',

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
        var viewClass, action;

        action      = Ext.String.capitalize(match.action);
        controller  = match.controller.charAt(0).toLowerCase() + match.controller.substr(1);

        this.currentMatch = match;

        // try to get the view by controller + action names
        viewClass   = Ext.ClassManager.get('Prototype.view.' + controller + '.' + action);

        if (viewClass) {
            this.animate(viewClass);
        }

        this.previousMatch = match;
    },

    animate: function(viewClass) {
        var viewport    = Ext.getCmp('viewport'),
            target      = viewport.down('#viewport-target');

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

});