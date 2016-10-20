

const Posts = React.createClass({
  getInitialState : function() {

    return {
        information: []
    }
  },


  handlePostUpdate: function(post, index) {
    console.log(post, index);
    // change state of Post component here
    var posts = this.state.information;
    posts[index].content = post;
    this.setState({information: posts})
},


  handlePostAdd: function(newPost) {
    console.log(newPost);

    var posts = this.state.information; //make a copy of information
    posts.push(newPost); //push new data to the copy
    this.setState({information: posts}) //set the parent array same as the copy
  },



  render: function() {
    // var Post = this.state.element;
    // var Post = this.state.element.map(function(element, index){
    //   return(<Post key={index} item={item}/>);
    //   }.bind(this));
    // return(
    //   <div>
    //       {setPost}
    //   </div>
    // ,

    var result = this.state.information.map(function(element, index) {
      return (
        // call the subcomponent and passing the index element into a variable called post
        // to the subcomponent
        // declaring a key here to make each post unique
        <PostCard key={index} index={index} post={element} onPostUpdate={this.handlePostUpdate}/>
      )
    }.bind(this))

    return(

      <div className="col-md-6 col-md-offset-1">
        <AddPost create={this.handlePostAdd} />
        {result}
      </div>

    )
  }

})

// var Post = React.createClass({
//
// })
