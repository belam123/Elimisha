class Support < ApplicationRecord
    belongs_to :student

    validates :email,:topic,:subject,:message, presence: true
end
