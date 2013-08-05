Ext.define('Prototype.view.home.Index', {
    extend: 'Ext.container.Container',
    requires:[
        'Ext.tab.Panel',
        'Ext.layout.container.Border',
        'Ext.grid.Panel',
        'Ext.grid.column.Action'
    ],

    layout: 'border',

    style: {backgroundColor:'transparent'},

    items: [{
        region: 'east',
        xtype: 'container',
        width: 25,
        minWidth: 25,
        height: 25

    }, {
        region: 'east',
        xtype: 'panel',
        width: 250,
        minWidth: 100,
        height: 200,
        stateful: true,
        stateId: 'home.grid.Filter',
        collapsible: true,
        ui: 'filter-panel'

    }, {
        region: 'center',
        xtype: 'grid',
        title: 'Grid',
        stateful: true,
        stateId: 'home.Grid',
        store: Ext.create('Prototype.store.Items'),
        ui: 'center-grid',
        columns: [
            { text: 'Name',  dataIndex: 'name' },
            { text: 'Email', dataIndex: 'email', flex: 1 },
            { text: 'Phone', dataIndex: 'phone' },
            {
                xtype:'actioncolumn',
                width: 100,
                items: [{
                    icon: null,
                    tooltip: 'Edit',
                    iconCls: 'grid-button-edit',
                    altText: 'Edit',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = grid.getStore().getAt(rowIndex);
                        Ext.Router.redirect('home/edit/'+rec.get('id'));
                    }
                },{
                    icon: null,
                    tooltip: 'Preview',
                    iconCls: 'grid-button-preview',
                    altText: 'Preview',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = grid.getStore().getAt(rowIndex);
                        alert("Preview " + rec.get('name'));
                    }
                },{
                    icon: null,
                    tooltip: 'Delete',
                    iconCls: 'grid-button-delete',
                    altText: 'Delete',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = grid.getStore().getAt(rowIndex);
                        alert("Terminate " + rec.get('name'));
                    }
                }]
            }
        ]
    }]
});