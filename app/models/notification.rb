class Notification < ApplicationRecord
    belongs_to :student
    validates :student_id,:message,presence: true
end
