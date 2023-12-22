class Form < ApplicationRecord
    has_many :students
    validates :year, presence: true
  end
  