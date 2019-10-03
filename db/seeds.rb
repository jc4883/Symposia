# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

  user1 = User.create!(username: "user1", password: "123456")
  demologger = User.create!(username: "demologger", password: "abbieR0ad")

  project1 = Project.create!(title: "project1", description: "this is project1", user_id: 2)
  project2 = Project.create!(title: "project2", description: "this is project2", user_id: 2)
  project3 = Project.create!(title: "project3", description: "this is project3", user_id: 2)

