import ReactDOM from 'react-dom';
import React from 'react';
import {Bookmark} from './Bookmark.jsx';
import style from '../css/index.css';

class BookmarkPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {bookmarks: [{children: [{id: "0", title: "hehehe", url: "foo"}]}]}
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
    }
    render() {
        console.log(this.state.bookmarks);
        return (
            // <Bookmark href="www.baidu.com">bookmark</Bookmark>
            this.state.bookmarks[0].children.map(bookmark => <Bookmark key={bookmark.id} href={bookmark.url}>{bookmark.title}</Bookmark>)
        )
    }
}

ReactDOM.render(<BookmarkPage />, document.getElementById('react-container'));