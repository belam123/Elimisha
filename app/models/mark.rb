class Mark < ApplicationRecord
    belongs_to :subject
    belongs_to :student
    validates :score,:subject_id,:student_id, presence: true
end
