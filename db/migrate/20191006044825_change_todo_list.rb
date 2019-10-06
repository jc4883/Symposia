class ChangeTodoList < ActiveRecord::Migration[5.2]
  def change
    change_column_null :todo_lists, :description, true
  end
end
