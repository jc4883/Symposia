class PhotoUpload < ApplicationRecord
  validates :title, presence: true
  validate :ensure_photo


  has_one_attached :photo

  belongs_to :project,
  foreign_key: :project_id,
  class_name: :Project

  def ensure_photo
    unless self.photo.attached?
      errors[:photo] << "Photo must be attached"
    end
  end
  
end