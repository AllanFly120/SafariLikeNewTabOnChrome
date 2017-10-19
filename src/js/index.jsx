import ReactDOM from 'react-dom';
import React from 'react';
import {Bookmark} from './Bookmark.jsx';
import {
    Col,
    Row,
    Grid,
} from 'react-bootstrap'

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
            <Grid>
                <Row className="show-grid">           
                    {this.state.bookmarks[0].children.map(bookmark => <Col xs={4} sm={3} md={2} key={bookmark.id}><Bookmark key={bookmark.id} href={bookmark.url}>{bookmark.title}</Bookmark></Col>)}
                </Row>
            </Grid>
        )
    }
}

ReactDOM.render(<BookmarkPage />, document.getElementById('react-container'));