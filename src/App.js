import React, { Component } from 'react';
import PostForm from './component/postform';
import AllPost from './component/allpost';


class App extends Component {
render() {
return (
<div className="App">
    <div className="navbar">
       <h2 className="center ">Posts</h2>
    </div>
    <PostForm />
    <AllPost />
</div>
);
}
}
export default App;