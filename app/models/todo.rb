class Todo < ApplicationRecord 
  validates :todo_list_id, :title, :done, presence: true

  belongs_to :todo_list,
  foreign_key: :todo_list_id,
  class_name: :TodoList
end