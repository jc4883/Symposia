class CreateTodoLists < ActiveRecord::Migration[5.2]
  def change
    create_table :todo_lists do |t|
      t.integer :project_id, null: false
      t.string :title, null: false
      t.string :description, null: false
      t.timestamps
    end
  end
end
