Ext.define('Prototype.view.MainMenu', {
    extend: 'Ext.container.Container',

    xtype: 'MainMenu',
    height: 50,

    bodyBorder: false,
    border: false,

    html: '<div style="float:left; background: url(\'../resources/images/background-menu.png\')">' +
              '<ul class="menu">' +
                  '<li><a href="#home">a</a></li>' +
                  '<li><a href="#home">b</a></li>' +
              '</ul>' +
          '</div>' +
          '<div style="float:right">' +
             '<ul class="menu">' +
                '<li><a href="#home">a</a></li>' +
                '<li><a href="#home">b</a></li>' +
            '</ul>' +
          '</div>'
});
