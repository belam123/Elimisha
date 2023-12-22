class Grade < ApplicationRecord
    belongs_to :student
    belongs_to :course
    validates :score, presence: true
    validates :comments, presence: true, confirmation: { case_sensitive: false }

  end
  