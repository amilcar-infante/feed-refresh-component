var React = require('react/addons');
    Configuration = require('../configuration.js'),
    arrowImg = require('arrow.png');

require('../../styles/post.css');

module.exports = React.createClass({
    render: function() {
        var post = this.props.post,
            postStateClass = post.state ? 
                'post-state ' + post.state :
                'post-state',
            draggableClass = this.props.draggable ? 'drag-handle' : null;

        return (
            <div className='post'>
                <ul>
                    <li className='post-avatar'>
                        <image src={post.avatar}/>
                    </li>
                    <li className={draggableClass}>
                        <div className='post-username'>
                            <span>{post.username}</span>
                            <img className='dropdown' src={arrowImg} />
                        </div>
                        <div className='post-timestamp'>
                            <span>{post.timestamp}</span>
                            <span className='separator'>&#46;</span>
                            <span className={postStateClass}></span>
                        </div> 
                    </li>                                      
                    <li className='post-text'>{post.text}</li>
                    <li className='post-image'>
                        <img src={post.image}/>
                    </li>
                    <li className='post-like-comment'>
                        <span className='container'>{post.likes} Likes</span>
                        <span className='container'>{post.comments} Comments</span>
                        <span className='container'>{post.views} Views</span>
                    </li>                    
                </ul>
                <div className='post-buttons' />
            </div>
        );
    }
});

