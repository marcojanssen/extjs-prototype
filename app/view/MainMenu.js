Ext.define('Prototype.view.MainMenu', {
    extend: 'Ext.container.Container',

    xtype: 'MainMenu',
    height: 50,

    bodyBorder: false,
    border: false,

    html: '<div class="container menu pull-left">' +
              '<ul class="menu">' +
                  '<li><a href="#home">a</a></li>' +
                  '<li><a href="#home">b</a></li>' +
              '</ul>' +
          '</div>' +
          '<div class="container menu pull-right">' +
             '<ul class="menu">' +
                '<li><a href="#home">a</a></li>' +
                '<li><a href="#home">b</a></li>' +
            '</ul>' +
          '</div>'
});
