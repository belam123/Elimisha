class Student < ApplicationRecord
  before_create :generate_access_token
has_secure_password
has_one_attached :image
  belongs_to :form, class_name: 'Form'
  has_many :fees
  has_many :vouchers
  has_many :marks
  has_many :subjects, through: :marks
validates :email, presence: true, format: { with: /\A\S+@careercampus\.ac.ke\z/i }
validates :first_name, :second_name,:last_name, presence: true

private

def generate_access_token
  payload = { student_id: id, email: email }
  self.access_token = JWT.encode(payload, 'your_secret_key', 'HS256')
end


end
