Ext.define('Prototype.view.core.Menu', {
    extend: 'Ext.container.Container',

    xtype: 'view.core.Menu',
    height: 50,

    layout: {
        type: 'hbox',
        align: 'stretchmax'
    },
    bodyBorder: false,
    border: false,

    items: [{
        xtype: 'menu',
        layout: {
            type: 'hbox'
        },
        floating: false,
        flex: 2,
        items: [{
            text: 'main 1',
            iconCls: 'add16'
        },
        {
            text: 'main 2',
            iconCls: 'add16'
        }]
    },{
        xtype: 'menu',
        layout: {
            type: 'hbox',
            pack : 'end'
        },
        floating: false,
        flex: 1,
        items: [{
            text: 'main3',
            iconCls: 'add16'
        },
        {
            text: 'main4',
            iconCls: 'add16'
        }]

    }]
});
