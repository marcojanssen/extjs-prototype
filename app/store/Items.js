Ext.define('Prototype.store.Items', {
    extend: 'Ext.data.Store',

    model: 'Prototype.model.Item',

    requires: ['Ext.data.proxy.Rest'],

    root: 'items',

    autoLoad: true,
    autoSync: true,

    proxy: {
        type: 'rest',
        url: 'rest/',
        reader: {
            type: 'json',
            root: 'data'
        },
        writer: {
            type: 'json'
        }
    }
});