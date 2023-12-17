class Voucher < ApplicationRecord
    belongs_to :student
    validates :voucher_amount, presence: true
    validates :expiry_date, presence: true
    validates :student_id, presence: true
end
