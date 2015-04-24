var React = require('react/addons'),
    Reflux = require('reflux'),
    $ = jQuery = require('jquery'),
    PostFeedActions = require('../actions/postFeedActions.js'),
    PostFeedStore = require('../stores/postFeedStore.js'),
    PostComponent = require('./post.jsx'),
    Configuration = require('configuration.js').feedRefresh,
    ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

require('jquery-ui/draggable');
require('jquery-ui-touch-punch');
require('feed.css');
require('spinner.css');

module.exports = React.createClass({
    mixins: [
        Reflux.connect(PostFeedStore, 'posts')
    ],
    getInitialState: function() {
        return {
            toggleInProgress: false
        }
    },
    animateSpinner: function () {
        this.setState ({
            toggleInProgress: true
        });
    },
    togglePost: function () {
        PostFeedActions.togglePost();
        var that = this;
        window.setTimeout(
            function () {
                that.setState ({
                    toggleInProgress: false
                });
            }, Configuration.postLoadingDelay
        );
    },
    componentDidMount: function () {
        $( '.post-feed' ).draggable({
            revert: true,
            handle: "li.drag-handle",
            axis: 'y',  
            start: this.animateSpinner,
            stop: this.togglePost
        });
    },
    render: function() {
        return (
            <div className='feed-container'>
                {this.state.toggleInProgress ?
                    <div className='loading-spinner'>
                        <div className="refreshing"></div>
                    </div> : null
                }
                <ul className='post-feed'>
                    <ReactCSSTransitionGroup transitionName="post">
                        {posts.newPosts.map(function(post, i) {
                            return (
                            <li key={i}>
                                <PostComponent post={post} draggable={i===0 ? 'drag-handle' : null} />
                            </li>);}
                        )}
                        {posts.initialPosts.map(function(post, i) {
                            return (
                            <li key={i}>
                                <PostComponent post={post} draggable={i===0 ? 'drag-handle' : null} />
                            </li>);}
                        )}
                    </ReactCSSTransitionGroup>
                </ul>
            </div>
        );
    }
});

