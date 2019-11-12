# README

Symposia is a clone of Basecamp, a product managment tool. Symposia does two things: organizes the user's todo's into todo lists, and stores files for viewing and downloading. 

Here is a link to the live site: https://symposia.herokuapp.com/

## Technologies

Symposia uses Ruby on Rails, PostgreSQL, and AWS on the backend, React and Redux on the frontend. Ruby on Rails proved to be the appropriate technology for this project--Ruby on Rails was originally developed by Basecamp for their internal use. In particular, Rail's associations well complemented JBuilder to send to the frontend the necessary data, allowing the user to have a productive time on Symposia. 

## Features
### File Upload
A user is able to save a local file to AWS by choosing a local file and adding a description to it using a form. Here's what it looks like:

[gif of demonstration]


In the backend, the formData API was used to encapsulate user data, primarily reading an input of type="file" when the user chooses an image inside of a form. Upon form submission, the following function is called: 

![alt text](https://user-images.githubusercontent.com/42103059/66665787-3e017380-ec1d-11e9-973c-da9aaef5fcaa.png)

Here, the local state of the component is updated to the values given by the user. Then, we append the data to the formData using the keys specified in our Rails model. This way, the appropriate controller in the backend is able to access the data through its params, then correctly save a new upload entry to PostgreSQL. If successful, we return information about what we have saved, including the upload's url extracted using url_for() and an association(!). The upload can be can be viewed if it is an image by placing the photoUrl as the src in an img tag.

One more thing to note about this code snippet: in the handleSubmit() function, at the point that we append this.state.photoFile, the file will already have been uploaded to AWS using readAsDataURL in the FileReader API.


Upon uploading, the user can view the file's show page, where she can download or delete the file from the cloud. This is what it looks like:

[show page image]

One technical achievement was efficiently accessing the title of the upload's project, which is displayed on the top of the upload show page. Through rails, only one trip to the database was required to retrieve both the project's title and the uploaded file information. 

In the controller, it is done as follows: 
![alt text](https://user-images.githubusercontent.com/42103059/66662796-7a31d580-ec17-11e9-9dfb-5e2b00722662.png)

Then in jbuilder, we can access the file's project:
![alt text](https://user-images.githubusercontent.com/42103059/66662780-7605b800-ec17-11e9-8489-8e7ce0080052.png)

We access the title of the file's project and the file's active storage blob using rails associations in the same request cycle. Therefore, there is no need to retrieve the project information with another ajax request.

### Todo
For the frontend, Redux's reducers allowed the data received from the backend to rerender React components when necessary. One interesting challenge occurred with the todo lists' reducer. For context, the todo list slice of state contains an array of only todo id's. The todo slice of state contains the actual information about the todos. So, when fetching a todo from the database, the reducers needed to update both of these slices of state. Therefore, the todo list reducer caught a RECEIVE_TODO case in addition to its own action.type's:


![alt text](https://user-images.githubusercontent.com/42103059/66664865-60928d00-ec1b-11e9-8339-08034978d52a.png)

