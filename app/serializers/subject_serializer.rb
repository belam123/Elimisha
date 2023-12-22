class SubjectSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :students
  has_many :marks, serializer: MarkSerializer
  
end
