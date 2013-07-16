Ext.define('Prototype.view.MainMenu', {
    extend: 'Ext.container.Container',

    xtype: 'MainMenu',
    height: 50,

    layout: {
        type: 'hbox',
        align: 'stretchmax'
    },

    bodyBorder: false,
    border: false,

    items: [{
        xtype: 'menu',
        id: "mainMenuLeft",
        layout: {
            type: 'hbox'
        },
        floating: false,
        flex: 2,
        items: [{
            text: 'home',
            itemId: 'home'
        },
        {
            text: 'beheer',
            itemId: 'settings'
        }]
    },{
        xtype: 'menu',
        itemId: "mainMenuRight",
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
