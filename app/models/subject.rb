class Subject < ApplicationRecord
    has_many :marks
    has_many :students, through: :marks
    belongs_to :teacher
    validates :name, presence: true
end
