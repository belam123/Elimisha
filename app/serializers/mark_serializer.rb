class MarkSerializer < ActiveModel::Serializer
  attributes :id, :exam_score, :assignment_score, :quiz_score, :student_id, :subject_id, :total_marks

  def total_marks
   object.exam_score.to_i + object.assignment_score.to_i + object.quiz_score.to_i
  end
end
