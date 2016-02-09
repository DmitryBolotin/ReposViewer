(function(){
    "use strict";
    define([
        'jQuery',
        'Underscore',
        'Backbone',
        'models/stargazersModel'
    ], function($, _, Backbone,StargazersModel){
        var StargazersCollection = Backbone.Collection.extend({
            model: StargazersModel,
            initialize: function (obj) {
                this.repoName = obj.repoName;
                return this;
            },
            url: function () {
                return "https://api.github.com/repos/octocat/" + this.repoName + "/stargazers";
            }
        });
        return  StargazersCollection;
    });

})();
