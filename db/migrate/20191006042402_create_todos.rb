class CreateTodos < ActiveRecord::Migration[5.2]
  def change
    create_table :todos do |t|
      t.integer :todolist_id, null: false
      t.string :title, null: false
      t.string :description
      t.string :done, null: false
      
    end
  end
end
