Ext.define('Prototype.view.Main', {
    extend: 'Ext.container.Container',
    requires:[
        'Ext.tab.Panel',
        'Ext.ux.Router',
        'Ext.layout.container.Border',
        'Prototype.view.core.Menu'
    ],
    
    xtype: 'app-main',

    layout: {
        type: 'border'
    },

    items: [{
        region: 'north',
        xtype: 'view.core.Menu'
    }, {
        region: 'center',
        xtype: 'tabpanel',
        items:[{
            title: 'Center Tab 1'
        }]
    }]
});