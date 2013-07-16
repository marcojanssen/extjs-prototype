Ext.define('Prototype.view.Viewport', {
    extend: 'Ext.container.Viewport',

    requires:[
        'Ext.layout.container.Border'
    ],

    id: 'viewport',

    layout: {
        type: 'border'
    },

    items: [{
        region: 'north',
        xtype: 'MainMenu'
    }, {
        region: 'center',
        xtype: 'container',
        itemId: 'viewport-target',
        layout: 'fit',
        style: {
            backgroundImage: 'url(resources/img/background.jpg)'
        },
        padding: '40, 0, 40, 40'
    }]
});
