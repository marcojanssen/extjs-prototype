Ext.define('Prototype.view.Main', {
    extend: 'Ext.container.Container',
    requires:[
        'Ext.tab.Panel',
        'Ext.ux.Router',
        'Ext.layout.container.Border'
    ],
    
    xtype: 'app-main',

    layout: {
        type: 'border'
    },

    items: [{
        region: 'north',
        xtype: 'MainMenu'
    }, {
        region: 'center',
        xtype: 'container',
        itemId: 'viewport-target'
    }]
});