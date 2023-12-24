class SubjectSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :students
  has_many :marks, each_serializer: MarkSerializer
end
