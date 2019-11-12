# README

Symposia is a clone of Basecamp, a product managment tool. Symposia does two things: organizes the user's todo's into todo lists, and stores files for viewing and downloading. 

Visit the live site [here](https://symposia.herokuapp.com/).

## Technologies

Symposia uses Ruby on Rails, PostgreSQL, and AWS on the backend, React and Redux on the frontend. Ruby on Rails proved to be the appropriate technology for this project--Ruby on Rails was originally developed by Basecamp for their internal use. In particular, Rail's associations well complemented JBuilder to send to the frontend the necessary data, allowing the user to have a productive time on Symposia. 

## Features
### File Upload
A user is able to save a local file to AWS by choosing a local file and adding a description to it using a form. Here's what it looks like:

![](docs_upload_demo.gif)

In the backend, the formData API was used to encapsulate user data, primarily reading an input of `type="file"` when the user chooses an image inside of a form. Upon form submission, the following function is called: 

```JavaScript 
  handleSubmit(e) {
    e.preventDefault();
    this.handleCancel();
    let formData = new FormData();
    formData.append('photo_upload[title]', this.state.title);
    formData.append('photo_upload[description]', this.state.description);
    formData.append('photo_upload[project_id]', this.props.projectId);
    
    if (this.state.photoFile) {
      formData.append('photo_upload[photo]', this.state.photoFile);
    }
    this.props.createPhotoUpload(this.props.projectId, formData).then(this.props.parentRender);
  }

```

Here, the local state of the component is updated to the values given by the user. Then, we append the data to the formData using the keys specified in our Rails model. This way, the appropriate controller in the backend is able to access the data through its params, then correctly save a new upload entry to PostgreSQL. If successful, we return information about what we have saved, including the upload's url extracted using `url_for()` and an association(!). The upload can be can be viewed if it is an image by placing the photoUrl as the src in an img tag.

One more thing to note about this code snippet: in the `handleSubmit()` function, at the point that we append `this.state.photoFile`, the file will already have been uploaded to AWS using readAsDataURL in the FileReader API.


Upon uploading, the user can view the file's show page, where she can download or delete the file from the cloud. This is what it looks like:

![](docs_show.png)


One technical achievement was efficiently accessing the title of the upload's project, which is displayed on the top of the upload show page. Through rails, only one trip to the database was required to retrieve both the project's title and the uploaded file information. 

In the controller, it is done as follows:

```Ruby
  def show
    @photo_upload = PhotoUpload.find(params[:id])
    if @photo_upload.photo.image?
      @is_image = true
    else
      @is_image = false
    end
    render "api/photo_uploads/show"
  end
```

Then in jbuilder, we can access the file's project:
```Ruby 
  json.set! :project_title, @photo_upload.project.title
  json.set! :uploads do
    json.set! @photo_upload.id do
      json.extract! @photo_upload, :id, :title, :description, :project_id, :created_at
      if @delete != true
        json.photoUrl url_for(@photo_upload.photo)
        json.railsBlobUrl rails_blob_url(@photo_upload.photo, disposition: "attachment")
        json.is_image @is_image
      end
    end
  end
```

We access the title of the file's project and the file's active storage blob using rails associations in the same request cycle. Therefore, there is no need to retrieve the project information with another ajax request.

### Todo's
Symposia also allows users to create todo lists, add todos, and view each individual list and todo.
Here is what the todo list index page looks like:

![](todolist_demo.gif)

In the frontend, one interesting challenge occurred with the todo lists' redux reducer. For context, the todo list slice of state contains an array of only todo id's. On the other hand, the todo slice of state contains the actual information about the todos. This design choice was to ensure that the state contained as little nesting as possible. Here is a code snippet of how I implemented this structure in the todo lists' reducer:

```JavaScript
  const todoListsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
      case RECEIVE_TODO:
        let newState3 = Object.assign({}, state);
        newState3[action.todo.todo_list_id].todos.push({id: action.todo.id})
        return newState3;
      case RECEIVE_TODO_LIST:
        return Object.assign({}, state, {[Object.keys(action.todoList.todoList)[0]]: Object.values(action.todoList.todoList)[0]});
      ...
      default:
        return state;
    }
  }

```


I allowed the reducer to update both the array of todo id's in the todolists' state and the actual todos in their own state. This is why the todo list reducer catches the `RECEIVE_TODO` action type case in addition to its own action.type in the code snippet above.

## In Conclusion
Thanks for coming! I hope you had fun poking around the code and checking out the live version. I certainly had a blast building it. 

To see more of my projects, checkout my portfolio [here](https://jc4883.github.io/) , and make sure to look around my [Github](https://github.com/jc4883) as well.

Finally, go to my LinkedIn to learn more about me [here](https://www.linkedin.com/in/peterchoi24/).

