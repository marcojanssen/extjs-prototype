Ext.define('Prototype.view.Viewport', {
    extend: 'Ext.container.Viewport',

    requires:[
        'Ext.layout.container.Border'
    ],

    id: 'viewport',

    layout: {
        type: 'border'
    },

    style: {
        backgroundImage: 'url(resources/img/background.jpg)'
    },

    items: [{
        region: 'north',
        xtype: 'MainMenu'
    }, {
        region: 'center',
        xtype: 'container',
        id: 'viewport-target',
        layout: 'fit',
        padding: '40, 40, 40, 40'
    }]
});
