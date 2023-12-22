class Subject < ApplicationRecord
    has_many :marks
    has_many :student, through: :marks
    validates :name, presence: true
end
