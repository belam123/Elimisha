class SupportSerializer < ActiveModel::Serializer
  attributes :id, :email, :topic, :subject, :message,:student_id
end
