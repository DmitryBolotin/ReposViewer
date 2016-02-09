(function(){
    "use strict";
    define([
        'jQuery',
        'Underscore',
        'Backbone',
        'models/usersModel'
    ], function($, _, Backbone,UserModel){
        var UsersCollection = Backbone.Collection.extend({
            model: UserModel,
            initialize: function (obj) {
                this.userName = obj.userName;
                return this;
            },
            // url: 'http://backbone-beginner.herokuapp.com/users',
            url: function () {
                return 'https://api.github.com/users/'+ this.userName +'/repos';
            }
        });
        return   UsersCollection;
    });

})();
