class SubjectSerializer < ActiveModel::Serializer
  attributes :id, :name,:teacher_id,:marks
  has_many :students
  has_many :marks, each_serializer: MarkSerializer
end
