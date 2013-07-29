Ext.define('Prototype.view.MainMenu', {
    extend: 'Ext.container.Container',

    xtype: 'MainMenu',
    height: 35,

    bodyBorder: false,
    border: false,
    cls: 'menu',

    html: '<div class="container pull-left">' +
              '<ul class="menu">' +
                  '<li><a href="#home">a</a></li>' +
                  '<li><a href="#home">b</a></li>' +
              '</ul>' +
          '</div>' +
          '<div class="container pull-right">' +
             '<ul class="menu">' +
                '<li><a href="#home">a</a></li>' +
                '<li><a href="#home">b</a></li>' +
            '</ul>' +
          '</div>'
});
