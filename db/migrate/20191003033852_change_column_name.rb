class ChangeColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :projects, :descripton, :description
  end
end
