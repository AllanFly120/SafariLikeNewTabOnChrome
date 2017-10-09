import ReactDOM from 'react-dom';
import { createClass } from 'react';
// var BookmarkPage = require('./bookmarkPage.jsx');
const BookmarkPage = createClass({
    displayName: 'BookmarkPage',
    render: function () {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'h1',
                null,
                'Hello World'
            ),
            React.createElement(
                'p',
                null,
                'This is my first React component!'
            )
        );
    }
});
ReactDOM.render(React.createElement(BookmarkPage, null), document.getElementById('react-container'));
