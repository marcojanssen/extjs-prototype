Ext.define('Prototype.store.Items', {
    extend: 'Ext.data.Store',

    model: 'Prototype.model.Item',

    requires: ['Ext.data.proxy.Rest'],

    autoLoad: true,
    autoSync: true,

    buffered: true,
    leadingBufferZone: 100,
    pageSize: 25,

    proxy: {
        type: 'rest',
        url: 'rest/',
        reader: {
            type: 'json',
            root: 'items',
            totalProperty: 'total'
        },
        writer: {
            type: 'json'
        }
    }
});