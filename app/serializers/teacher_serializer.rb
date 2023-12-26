class TeacherSerializer < ActiveModel::Serializer
  attributes :id,:first_name,:last_name,:email,:department,:subjects
  has_many :subjects,serializer: SubjectSerializer
end
