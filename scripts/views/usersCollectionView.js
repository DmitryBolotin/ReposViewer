(function(){
    "use strict";
    define([
        'jQuery',
        'Underscore',
        'Backbone',
        'models/usersModel',
        'collections/usersCollection',
        'collections/stargazersCollection',
        'text!templates/usersTemplates.html',
        'text!templates/reposTemplate.html',
        'bootstrap'
    ], function ($, _, Backbone, UsersModel, UsersCollection,StargazersCollection, Templates, ReposTemplate) {
        var UsersCollectionView = Backbone.View.extend({
            initialize: function (obj) {
                this.collection = obj.repos;
                this.listenTo(this.collection,'update',this.render);
            },
            el: '.js-repos-container',
            template: _.template(ReposTemplate),
            events:{
               "click .caption":"renderStargazers"
            },
            tooltipsToggle: function () {
                    $('[data-toggle="tooltip"]').tooltip();
            },
            renderStargazers: function (e) {
                e.preventDefault();
                var clickedRepoName = e.currentTarget.id;
                this.trigger("loadStarg",clickedRepoName);
            },

            renderCollection: function () {
                this.$el.empty();
                this.collection.forEach(this.renderCollectionItem, this);
            },
            renderCollectionItem: function (item) {
                var compiled = this.template({proj: item.toJSON()});
                this.$el.append(compiled);
            },
            render: function () {
                this.tooltipsToggle();
                this.renderCollection();
            }
        });
        return UsersCollectionView;
    });
})();




