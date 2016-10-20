const AddPost = React.createClass({

  getInitialState: function() {
    return {
      title: "",
      content: ""
    }
  },

  handleSubmit: function(e){
      e.preventDefault();
      this.props.create({title: this.state.title, content: this.state.content});
  },

  addPostTitle: function(e) {
    this.setState({title: e.target.value})
  },

  addPostContent: function(e) {
    this.setState({content: e.target.value})
  },

  render: function(){
    return(
      <form onSubmit={this.handleSubmit} className="form-group">
        <label>title</label>
        <input type='text' required className="form-control" onChange={this.addPostTitle}></input>
        <label>content</label>
        <input type='text' required className="form-control" onChange={this.addPostContent}></input>
        <button className="btn btn-default" onClick={this.handleSubmit}>Send</button>
      </form>
    )
  }
})
