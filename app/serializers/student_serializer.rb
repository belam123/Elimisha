class StudentSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id,:first_name,:last_name,:second_name,:email,:form_id,:image

  def image
rails_blob_path(object.image, only_path: true) if object.image.attached?
  end
  

end
