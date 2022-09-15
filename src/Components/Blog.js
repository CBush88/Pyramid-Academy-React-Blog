import React from 'react'

const Blog = () => {
  return (
    <div>
      <h3 class="text-center">New Post</h3>
      <form action="/action_page.php">
        <div class="form-group">
          <label for="title"><h6>Blog Title</h6></label>
          <br></br>
          <input class="form-control" type="textbox" name="title" id="title" placeholder="Title"></input>
          <br></br>
          <label><h6>Content</h6></label>
          <br></br>
          <textarea style={{ resize: "none" }} class="form-control" name="content" id="content" rows="10"></textarea>
          <br></br>
          <label for="scheduleCheck">Scheduled Submission?</label>
          <input style={{marginLeft:"1em"}} type="checkbox" name="scheduleCheck" id="scheduleCheck"></input>
          <br></br>
          <div class>
          <input type="datetime-local"></input>
          </div>
          <br></br>
          <input type="submit" name="submit" id="submit"></input>
        </div>
      </form>
    </div>
  )
}

export default Blog