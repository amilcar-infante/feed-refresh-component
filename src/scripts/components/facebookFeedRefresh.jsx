var React = require('react/addons'),
    Feed = require('./feed.jsx'),
    Footer = require('footer.png'),
    RightSidebar = require('right-sidebar.png'),
    IpadStatusBar = require('status-bar-iPad.png');

require('facebookFeedRefresh.css');

module.exports = React.createClass({
    render: function() {
        return (
            <div className='facebook-feed-refresh'>
                <div className='fb-header' />
                <img src={IpadStatusBar} className='status-bar' />
                <Feed />
                <img src={RightSidebar} className='right-sidebar' />
                <img src={Footer} className='fb-footer' />
            </div>
        );
    }
});
