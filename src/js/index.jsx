import ReactDOM from 'react-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/index.css'
import {Bookmark} from './Bookmark.jsx';
import {
    Grid,
    Row,
    Col
} from 'react-bootstrap'

class BookmarkPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {bookmarks: [{children: [{id: "0", title: "foo", url: "foo"}, {id: "1", title: "bar", url: "bar"}]}]}
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
        // console.log(this.state.bookmarks);
        const bookmarks = this.state.bookmarks[0].children;
        console.log(bookmarks);
        return (
            // <Bookmark href="www.baidu.com">bookmark</Bookmark>
            // <Col xs={4} sm={3} md={2} key={bookmarks[0].id}>{bookmarks[0].title}</Col>
            // <Col xs={4} sm={3} md={2} key={bookmarks[1].id}>{bookmarks[1].title}</Col> 
           
            <Grid>
                <Row className="show-grid">   
                    {this.state.bookmarks[0].children.map(bookmark => <Col xs={4} sm={3} md={2} key={bookmark.id}><Bookmark key={bookmark.id} href={bookmark.url}>{bookmark.title}</Bookmark></Col>)}                
                </Row>      
            </Grid>
        )
    }
}


ReactDOM.render(<BookmarkPage/>, document.getElementById('react-container'));