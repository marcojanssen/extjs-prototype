Ext.define('Prototype.view.home.Index', {
    extend: 'Ext.container.Container',
    requires:[
        'Ext.tab.Panel',
        'Ext.layout.container.Border',
        'Ext.grid.Panel'
    ],

    layout: 'border',

    height: 200,

    items: [{
        region: 'east',
        xtype: 'panel',
        width: 250,
        minWidth: 100,
        height: 200,
        split: true,
        stateful: true,
        stateId: 'home.grid.Filter',
        collapsible: true

    }, {
        region: 'center',
        xtype: 'grid',
        title: 'Grid',
        stateful: true,
        stateId: 'home.Grid',
        store: Ext.create('Prototype.store.Home'),
        columns: [
            { text: 'Name',  dataIndex: 'name' },
            { text: 'Email', dataIndex: 'email', flex: 1 },
            { text: 'Phone', dataIndex: 'phone' }
        ],
        style: {
            backgroundColor: 'none'
        },
        margin: '0, 20, 0, 0'
    }]
});