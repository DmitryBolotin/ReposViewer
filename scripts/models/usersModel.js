(function(){
    "use strict";
    define([
        'jQuery',
        'Underscore',
        'Backbone'
    ], function($, _, Backbone){
         var UsersModel = Backbone.Model.extend({
            urlRoot: 'https://api.github.com/users/octocat'
        });
       // return this;
         return UsersModel;
    });
})();

