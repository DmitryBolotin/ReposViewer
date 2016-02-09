(function(){
    "use strict";
    define([
        'jQuery',
        'Underscore',
        'Backbone',
        'models/stargazersModel',
        'collections/stargazersCollection',
        'text!templates/stargazersTemplate.html'
    ], function ($, _, Backbone, StargazersModel, StargazersCollection, StargazersTemplate) {
        var StargazersCollectionView = Backbone.View.extend({
            initialize: function (obj) {
                this.collection = obj.starsColl;
                this.listenTo(this.collection,'update',this.render);
            },
            el: '.js-model-stargazers-container',
            template: _.template(StargazersTemplate),
            renderStarsCollection: function () {
            this.$el.empty();
            this.collection.each(this.renderStarsCollectionItem,this);
            },
            renderStarsCollectionItem: function (item) {
                var tempStarFn = this.template;
                var compStrFn = tempStarFn(
                    {
                    stargazers: item.toJSON()
                    }
                );
                    this.$el.append(compStrFn);
            },
            render: function () {
                this.renderStarsCollection();
                return this;
            }
        });
        return StargazersCollectionView;
    });
})();




