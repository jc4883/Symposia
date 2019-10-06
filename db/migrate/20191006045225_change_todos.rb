class ChangeTodos < ActiveRecord::Migration[5.2]
  def change
    rename_column :todos, :todolist_id, :todo_list_id
  end
end
