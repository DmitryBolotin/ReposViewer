(function(){
    "use strict";
    define([
        'jQuery',
        'Underscore',
        'Backbone',
        'models/usersModel',
        'collections/usersCollection',
        'views/stargazersCollectionView',
        'text!templates/usersTemplates.html',
        'text!templates/reposTemplate.html'
    ], function ($, _, Backbone, UsersModel, UsersCollection,StargazersCollectionView, Templates, ReposTemplate) {
         var UsersCollectionView = Backbone.View.extend({
             template: _.template(Templates),   //-- added for second way
             //tagName: 'span',
            initialize: function (obj) {
                this.collection = obj.repos;
                this.listenTo(this.collection,'update',this.render);
            },
             events:{
                 "click #port":"renderStargazers"
             },
            renderStargazers: function () {
                alert("bbb");
            },
            renderCollection: function () {
                this.$('.js-repos-container').empty();
                this.collection.forEach(this.renderCollectionItem, this);
            },
            renderCollectionItem: function (item) {
                    var strCollView = new StargazersCollectionView({
                        nameOfRepo: item.toJSON().name
                    });
                    var templateFn = _.template(ReposTemplate);
                    var compiled = templateFn(
                        {
                            proj: item.toJSON()
                        }
                    );
             //    $('.js-repos-container').append(compiled);
            },


            render: function () {
                this.renderCollection();
                this.$el.html(this.template({
                    repos: this.collection.toJSON()
                }));
                return this;
                //-- added for second way
            }
        });
        return UsersCollectionView;

    });
})();




