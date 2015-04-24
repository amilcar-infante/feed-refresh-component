var React = require('react/addons'),
    Lodash = require('lodash'),
    Configuration = require('configuration.js').feedRefresh,
    Reflux = require('reflux');

var data = [];

module.exports = Reflux.createStore({
    listenables: require('../actions/postFeedActions.js'),

    init: function () {
        console.log('PostFeedStoreStore initialized');
        // This function will be called when the store will be first initialized        
        
        posts = {};

        posts.initialPosts = Lodash.filter(
            Configuration.posts,
            { shownAtStartUp: true }
        );

        posts.newPosts = [];
    },

    getInitialState: function () {
        return {
            posts: posts
        };
    },

    onAddPost: function () {
        posts.newPosts = Lodash.filter(
            Configuration.posts,
            { shownAtStartUp: false }
        );

        this.trigger(posts);
    },

    onRemovePost: function () {
        posts.newPosts = [];
        this.trigger(posts);
    },

    onTogglePost: function () {
        this.trigger(posts);

        window.setTimeout(
            function () {
                if (posts.newPosts.length > 0) {
                    this.onRemovePost();
                } else {
                    this.onAddPost();
                }
            }.bind(this),
            Configuration.postLoadingDelay
        );
    }
});

