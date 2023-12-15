class Course < ApplicationRecord
    has_many :grades
    has_many :students, through: :grades
end
