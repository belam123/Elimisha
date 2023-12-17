class Course < ApplicationRecord
    has_many :grades
    has_many :students, through: :grades
    belongs_to :teacher

    validates :course_name,:course_des,:teacher_id, presence: true
end
