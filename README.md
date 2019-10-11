# README

Symposia is a clone of Basecamp, a product managment tool. Symposia does two things: organizes the user's todo's into todo lists, and stores photos and gifs. 

Here is a link to the live site: https://symposia.herokuapp.com/#/projects/9/todo_lists

Symposia uses Ruby on Rails and PostgreSQL on the backend, React and Redux on the frontend. Ruby on Rails proved to be the appropriate technology for this project--Ruby on Rails was originally developed by Basecamp for their internal use. In particular, Rail's associations well complemented JBuilder to send to the frontend only the necessary information. For example, when showing an uploaded photo, the title of the project which it belongs to is displayed at the top. Through rails, only one trip to the database is required to retrieve both the title the uploaded photo information. 

In the controller, it is done as follows: 

![alt text](https://user-images.githubusercontent.com/42103059/66662780-7605b800-ec17-11e9-8489-8e7ce0080052.png)

