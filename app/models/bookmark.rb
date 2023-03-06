class Bookmark < ApplicationRecord
    belongs_to :resort 
    belongs_to :user 

    validates :user_id, presence: true
    validates :resort_id, presence: true
end
