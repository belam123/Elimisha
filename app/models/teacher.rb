class Teacher < ApplicationRecord
    has_many :subjects
    has_many :students,through: :subjects
    validates :first_name,:last_name,:email,:department,presence: true
end
