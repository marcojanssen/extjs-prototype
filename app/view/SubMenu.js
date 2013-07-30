Ext.define('Prototype.view.SubMenu', {
    extend: 'Ext.toolbar.Toolbar',

    xtype: 'SubMenu',
    height: 45,
    padding: '0 0 0 20px',
    ui: 'menu-sub',

    items: [{
        text: 'New'
    }, {
        text : 'Split Button'
    }]
});
