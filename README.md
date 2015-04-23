#Feed-refresh (https://github.com/salesforce-demos/feed-refresh)

React Facebook Feed Refresh component

Facebook feed component to toggle between initial post and new posts after a drag down action.

A first drag down action will add the newest posts and a second one will "reset" the app to the initial state with the original posts.

Note: In order to get new posts, drag from first post's username or timestamp boxes. To scroll down/up, do it from first post's text or images, or touch anywhere else post.

## Installing

```bash
$ npm install --save https://github.com/salesforce-demos/feed-refresh.git
```

## Requirements

In order to make this component work in your project you need to add these meta
tags on your index.html:

```html
<meta name="description" content="">
<meta name="format-detection" content="telephone=no" />
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
```

You need also to include the following configuration object in your configuration.js file 
and make the corresponding changes. You can add more than one post with shownAtStartUp in false and
n posts with shownAtStartUp in true (displayed by default).
Note: You need to store in your images folder the 'avatar' and 'image' images:

```js
{
    feedRefresh: {
        posts: [
            // Posts to be added
            // shownAtStartUp: false is mandatory
            {
                'id': 0,
                'shownAtStartUp': false,
                'username': 'Salesforce',
                'timestamp': 'Now',
                'avatar': require('avatarOne.png'),
                'text': 'Added post',
                'image': require('mountain.png'),
                'state': 'public',
                'comments': 0,
                'likes': 0,
                'views': 0
            },
            {
                'id': 1,
                'shownAtStartUp': false,
                'username': 'Salesforce',
                'timestamp': 'Now',
                'avatar': require('avatarTwo.png'),
                'text': 'Another added post',
                'image': require('mountain.png'),
                'state': 'public',
                'comments': 0,
                'likes': 0,
                'views': 0
            },

            // Initially shown posts
            // shownAtStartUp: true is mandatory
            {
                'id': 2,
                'shownAtStartUp': true,
                'username': 'Salesforce',
                'timestamp': '1 hour ago',
                'avatar': require('avatarOne.png'),
                'text': 'Initially shown post',
                'image': require('mountain.png'),
                'state': 'public',
                'comments': 36,
                'likes': 32,
                'views': '15K'
            },
            {
                'id': 3,
                'shownAtStartUp': true,
                'username': 'Salesforce',
                'timestamp': '2 hours ago',
                'avatar': require('avatarOne.png'),
                'text': 'Initially shown post 2',
                'image': require('mountain.png'),
                'state': 'public',
                'comments': 5,
                'likes': 20,
                'views': '8K'
            },
            {
                'id': 4,
                'shownAtStartUp': true,
                'username': 'Salesforce',
                'timestamp': '5 hours ago',
                'avatar': require('avatarOne.png'),
                'text': 'Initially shown post 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
                    'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ' +
                    'veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' + 
                    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat ' +
                    'nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia ' +
                    'deserunt mollit anim id est laborum.',
                'image': require('mountain.png'),
                'state': 'public',
                'comments': 1,
                'likes': 15,
                'views': '27K'
            }
        ],
        // Fake network latence delay to show next post (in milliseconds)
        postLoadingDelay: 1500
    }
}
```

## Example

```js
var React = require('react'),
    FacebookFeedRefresh = require('react-feed-refresh');

var App = React.createClass({
    render: function () {
        return (
            <FacebookFeedRefresh />
        );
    }
});

React.render(<App/>, document.body);
```
