class Event < ApplicationRecord
    belongs_to :student
    
    validates :due_date,:message,presence: true
end
