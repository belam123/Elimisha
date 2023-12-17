class Teacher < ApplicationRecord
    has_many :courses
    validates :first_name,:last_name,:email,:department,presence: true
end
