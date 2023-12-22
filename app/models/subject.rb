class Subject < ApplicationRecord
    has_many :marks
    has_many :students, through: :marks
    validates :name, presence: true
end
