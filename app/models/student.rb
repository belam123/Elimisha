class Student < ApplicationRecord
has_secure_password
validates :email, presence: true, format: { with: /\A\S+@kibwareboys\.ac.ke\z/i }
validates :first_name, :second_name,:last_name, presence: true
end
