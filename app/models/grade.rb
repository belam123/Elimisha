class Grade < ApplicationRecord
    belongs_to :student
    belongs_to :course
  
    validates :score, presence: true
    validates :comments, presence: true, inclusion: { in: %w(Excellent Good Average Above\ average Below\ average), message: "%{value} is not valid" }
  end
  