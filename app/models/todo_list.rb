class TodoList < ApplicationRecord
  validates :project_id, :title, presence: true

  belongs_to :project,
  foreign_key: :project_id,
  class_name: :Project

  has_many :todos,
  foreign_key: :todo_list_id,
  class_name: :Todo


end