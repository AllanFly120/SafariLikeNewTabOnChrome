import ReactDOM from 'react-dom';
import React from 'react';
// var BookmarkPage = require('./bookmarkPage.jsx');
class BookmarkPage extends React.Component{
    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <p>This is my first React component!</p>
            </div>
        )
    }
}

ReactDOM.render(<BookmarkPage />, document.getElementById('react-container'));