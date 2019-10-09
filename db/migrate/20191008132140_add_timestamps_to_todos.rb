class AddTimestampsToTodos < ActiveRecord::Migration[5.2]
  def change
    change_table(:todos) { |t| t.timestamps }
  end
end

