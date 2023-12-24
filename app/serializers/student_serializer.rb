class StudentSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id, :first_name, :last_name, :second_name, :email, :form_id, :image
  belongs_to :form, serializer: FormSerializer
  has_many :vouchers, serializer: VoucherSerializer
  has_many :subjects, each_serializer: SubjectSerializer


  def image
    rails_blob_path(object.image, only_path: true) if object.image.attached?
  end
end
