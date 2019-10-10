class AddProjectId < ActiveRecord::Migration[5.2]
  def change
    add_column :photo_uploads, :project_id, :integer
  end
end
