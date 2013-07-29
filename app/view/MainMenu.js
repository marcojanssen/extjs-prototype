Ext.define('Prototype.view.MainMenu', {
    extend: 'Ext.container.Container',

    xtype: 'MainMenu',
    height: 35,

    bodyBorder: false,
    border: false,
    cls: 'menu',

    html: '<div class="container pull-left">' +
              '<ul class="menu">' +
                  '<li><a href="#">Product</a></li>' +
                  '<li class="page1"><a href="#">Page 1</a></li>' +
                  '<li class="page2"><a href="#settings">Page 2</a></li>' +
              '</ul>' +
          '</div>' +
          '<div class="container pull-right">' +
             '<ul class="menu">' +
                '<li class="home"><a href="#">Home</a></li>' +
                '<li class="profile"><a href="#">Marco Janssen</a></li>' +
            '</ul>' +
          '</div>'
});
