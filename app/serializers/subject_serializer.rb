class SubjectSerializer < ActiveModel::Serializer
  attributes :id, :name,:teacher_id,:marks,:teacher
  has_many :students
  belongs_to :teacher
  has_many :marks, serializer: MarkSerializer
end
