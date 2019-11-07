# README

Symposia is a clone of Basecamp, a product managment tool. Symposia does two things: organizes the user's todo's into todo lists, and stores photos and gifs. 

Here is a link to the live site: https://symposia.herokuapp.com/#/projects/9/todo_lists

## Technologies

Symposia uses Ruby on Rails, PostgreSQL, and AWS on the backend, React and Redux on the frontend. Ruby on Rails proved to be the appropriate technology for this project--Ruby on Rails was originally developed by Basecamp for their internal use. In particular, Rail's associations well complemented JBuilder to send to the frontend only the necessary information. 

## Features
When showing an uploaded photo, the title of the project which it belongs to is displayed at the top. Through rails, only one trip to the database is required to retrieve both the title the uploaded photo information. 

In the controller, it is done as follows: 
![alt text](https://user-images.githubusercontent.com/42103059/66662796-7a31d580-ec17-11e9-9dfb-5e2b00722662.png)


Then in jbuilder, we can access the photo upload's project:
![alt text](https://user-images.githubusercontent.com/42103059/66662780-7605b800-ec17-11e9-8489-8e7ce0080052.png)

There is no need to retrieve the project information with another ajax request.


In the backend, AWS was used to store images for the photo uploads feature. First, an input of type="file" allows the user to choose an image inside a form. Upon submission, the following function is called: 

![alt text](https://user-images.githubusercontent.com/42103059/66665787-3e017380-ec1d-11e9-973c-da9aaef5fcaa.png)

The local state of the component is updated to the values given by the user. Then, we append the data to the formData using the keys specified in our Rails model. This way, the photo upload controller is able to access the data in its params, then correctly save a new photo upload entry to PostgreSQL. If successful, we return information about what we have save, including the photoUrl extracted using url_for() and an association(!). The photo can be viewed by placing the photoUrl as the src in an img tag.

One thing to note on the handleSubmit() function is that at the point that we append this.state.photoFile, the file will already have been uploaded to AWS with readAsDataURL in the FileReader API.

For the frontend, Redux's reducers allowed the data received from the backend to rerender React components when necessary. One interesting challenge occurred with the todo lists' reducer. For context, the todo list slice of state contains an array of only todo id's. The todo slice of state contains the actual information about the todos. So, when fetching a todo from the database, the reducers needed to update both of these slices of state. Therefore, the todo list reducer caught a RECEIVE_TODO case in addition to its own action.type's:


![alt text](https://user-images.githubusercontent.com/42103059/66664865-60928d00-ec1b-11e9-8339-08034978d52a.png)

