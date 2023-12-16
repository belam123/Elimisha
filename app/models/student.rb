class Student < ApplicationRecord
has_secure_password
  belongs_to :form, class_name: 'Form'
  has_many :fees
  has_many :vouchers
  has_many :grades
  has_many :courses, through: :grades
validates :email, presence: true, format: { with: /\A\S+@kibwareboys\.ac.ke\z/i }
validates :first_name, :second_name,:last_name, presence: true
validates :admin, inclusion: { in: [true, false] }
end
