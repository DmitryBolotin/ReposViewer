(function(){
    "use strict";
    define([
        'jQuery',
        'Underscore',
        'Backbone',
        'models/usersModel',
        'collections/usersCollection',
        'views/usersCollectionView',
        'models/stargazersModel',
        'collections/stargazersCollection',
        'views/stargazersCollectionView',
        'userScript'
    ], function
        ($, _, Backbone, UserModel, UsersCollection, UsersCollectionView, StargazersModel,StargazersCollection,StargazersCollectionView) {
        var initialize = function () {
            var reposColl = new UsersCollection({
                userName: 'octocat'
            });
            var collView = new UsersCollectionView({
                repos: reposColl
            });
            collView.on("loadStarg", function (clickedRepoName) {
                var starColl = new StargazersCollection({
                    repoName: clickedRepoName
                });
                var starView = new StargazersCollectionView({
                    starsColl: starColl
                });
                starColl.fetch({
                    success: function () {
                        return this;
                    },
                    error: function () {
                        console.error("Collection of Stargazers cannot be fetched");
                        return this;
                    }
                });
            });
            //    $('.js-users-view-template').html(collView.render().el); //-- added for second way
            reposColl.fetch({
                success: function () {
                    return this;
                },
                error: function () {
                    console.error("Collection of Repos cannot be fetched");
                    return this;
                }
            });

        };
        return {
            initialize: initialize
        };
    });
})();

