import ReactDOM from 'react-dom';
import React from 'react';
import {Bookmark} from './Bookmark.jsx';
class BookmarkPage extends React.Component{
    getInitialState() {
        return {bookmarks: [{children: [{title: "hehehe", url: "foo"}]}]}
    }
    async componentDidMount() {
        const getBookmarksPromise = new Promise((resolve, reject) => {
            try {
                chrome.bookmarks.getTree(resolve)
            } catch(err) {
                reject(err)
            }    
        })
        const bookmarkTree = await getBookmarksPromise;
        const bookmarks = bookmarkTree[0].children;
        this.setState({bookmarks: bookmarks})
        console.log(bookmarks);
    }
    render() {
        return (
            // <div>
            //     <h1>Hello World</h1>
            //     <p>This is my first React component!</p>
            // </div>
            this.state.bookmarks[0].children.map(bookmark => <Bookmark href={bookmark.url}>bookmark.title</Bookmark>)
        )
    }
}

ReactDOM.render(<BookmarkPage />, document.getElementById('react-container'));