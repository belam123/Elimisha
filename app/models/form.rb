class Form < ApplicationRecord
    has_many :students
    validates :class_number, presence: true, inclusion: { in: %w(1 2 3 4), message: "%{value} is not valid" }
    validates :stream, presence: true
  end
  