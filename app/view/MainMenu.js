Ext.define('Prototype.view.MainMenu', {
    extend: 'Ext.container.Container',

    xtype: 'MainMenu',
    height: 50,

    bodyBorder: false,
    border: false,

    html: '<div style="float:left; background: url(\'../resources/images/background-menu.png\')">' +
              '<ul>' +
                  '<li>a</li>' +
                  '<li>b</li>' +
              '</ul>' +
          '</div>' +
          '<div style="float:right">' +
             '<ul>' +
                '<li>a</li>' +
                '<li>b</li>' +
            '</ul>' +
          '</div>'
});
