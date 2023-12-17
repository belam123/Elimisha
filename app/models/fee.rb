class Fee < ApplicationRecord
    belongs_to :student
    validates :amount,:due_date,:payment_status,:student_id,presence: true
end
