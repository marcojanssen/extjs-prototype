Ext.define('Prototype.view.home.Index', {
    extend: 'Ext.container.Container',
    requires:[
        'Ext.tab.Panel',
        'Ext.layout.container.Border',
        'Ext.grid.Panel',
        'Ext.grid.column.Action'
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
        store: Ext.create('Prototype.store.Items'),
        columns: [
            { text: 'Name',  dataIndex: 'name' },
            { text: 'Email', dataIndex: 'email', flex: 1 },
            { text: 'Phone', dataIndex: 'phone' },
            {
                xtype:'actioncolumn',
                width: 100,
                items: [{
                    icon: 'resources/img/glyphicons/glyphicons_030_pencil.png',
                    tooltip: 'Edit',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = grid.getStore().getAt(rowIndex);
                        alert("Edit " + rec.get('name'));
                    }
                },{
                    icon: 'resources/img/glyphicons/glyphicons_027_search.png',
                    tooltip: 'Preview',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = grid.getStore().getAt(rowIndex);
                        alert("Terminate " + rec.get('name'));
                    }
                },{
                    icon: 'resources/img/glyphicons/glyphicons_016_bin.png',
                    tooltip: 'Delete',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = grid.getStore().getAt(rowIndex);
                        alert("Terminate " + rec.get('name'));
                    }
                }]
            }
        ],
        style: {
            backgroundColor: 'none'
        },
        margin: '0, 20, 0, 0'
    }]
});