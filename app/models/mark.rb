class Mark < ApplicationRecord
    belongs_to :subject
    belongs_to :student
    validates :subject_id,:student_id, presence: true
    validates :exam_score,:assignment_score,:quiz_score, numericality: { greater_than_or_equal_to: 0 }
end
