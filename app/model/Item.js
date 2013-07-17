Ext.define('Prototype.model.Item', {
    extend: 'Ext.data.Model',
    fields: [
        'id', 'name', 'email', 'phone'
    ],
    idProperty: 'threadid'
});