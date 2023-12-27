class EventSerializer < ActiveModel::Serializer
  attributes :id, :due_date, :message,:student_id
end
