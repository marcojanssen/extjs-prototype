Ext.define('Prototype.view.Viewport', {
    extend: 'Ext.container.Viewport',

    requires:[
        'Ext.layout.container.Border'
    ],

    id: 'viewport',

    layout: {
        type: 'border'
    },

    cls: 'viewport',

    items: [{
        region: 'north',
        xtype: 'MainMenu'
    }, {
        region: 'north',
        xtype: 'SubMenu'
    }, {
        region: 'center',
        xtype: 'container',
        id: 'viewport-target',
        layout: 'fit'
    }]
});
