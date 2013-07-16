Ext.define('Prototype.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires:[
        'Ext.layout.container.Fit',
        'Prototype.view.Main'
    ],

    id: 'viewport',

    layout: {
        type: 'fit'
    },

    items: [{
        xtype: 'app-main'
    }]
});
