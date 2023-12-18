class Form < ApplicationRecord
    has_many :students
    validates :class_number, presence: true
    validates :stream, presence: true
  end
  