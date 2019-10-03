class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.string :user_id, null: false
      t.string :title, null: false
      t.string :descripton
      t.timestamps
    end
  end
end
