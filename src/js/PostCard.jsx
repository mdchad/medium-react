var PostCard = React.createClass({
  getInitialState: function() {
    return{

      expanded: false,
      edit: false,
      // you can only edit the state but not the props
      // so declare a new object that is a copy of the props so you can
      // make changes to the information
      header: this.props.post.header,
      title: this.props.post.title,
      content: this.props.post.content

    }
  },
  viewFullPost: function() {
    // this function changes the state of the expanded key from true to false
    // and vice versa upon click of view more anchor tag for the change to be
    // effected subsequently when rendered is called at the end of this function
    // for comparison with the virtual DOM
    if(this.state.expanded){
      this.setState({expanded: false})
    }
    else{
      this.setState({expanded: true})
    }
  },
  view: function(expanded) {
    if(this.state.expanded){
      return (
        <div>
          <a href="#" onClick={this.viewFullPost}>view</a>
        </div>
      )
    }
    else{
      return(
        <div>
          <a href="#" onClick={this.viewFullPost}>view</a>
        </div>
      )
    }
  },
  // this is a toggling effect that shows full/shortened version of the post
  // based on the current state of component
  shortener: function(text, expanded){
    if(expanded){
      return text
    } else {
      return text.slice(0,100) + "...."
    }
  },
  showEdit: function() {
    if (this.state.edit) {
      this.setState({edit: false})
    }
    else {
      this.setState({edit: true})
    }
  },
  editContentChange: function(e) {
    this.setState({content: e.target.value})
  },
  submitPostUpdate: function(e) {
    e.preventDefault();
    // note that onPostUpdate is a variable name which contains a function that is
    // passed down from the parent component
    this.props.onUpdate(this.state.content, this.props.index)

  },
  editPost: function(edit) {
    if (edit) {
      return (
        <div>
          <form onSubmit={this.submitPostUpdate}>
            <textarea rows={5} cols={40}
                      value={this.state.content}
                      onChange={this.editContentChange}
                      />
                    <button onClick={this.submitPostUpdate}>Submit</button>
          </form>
          <a href="#" onClick={this.showEdit}>close</a><br></br>
        </div>
      )
    }
    else {
      return (
        <div>
          <a href="#" onClick={this.showEdit}>edit</a><br></br>
        </div>
      )
    }
  },
  // note that in your subcomponent, you can only access what is passed from
  // the parent compoent
  render: function() {
    return (
      <div>
        <h1>{this.state.header}</h1>
        <h3>{this.state.title}</h3>
        <p>{this.shortener(this.props.post.content, this.state.expanded)}</p>
        {this.view(this.state.expanded)}
        {this.editPost(this.state.edit)}
      </div>
    )
  }
})
