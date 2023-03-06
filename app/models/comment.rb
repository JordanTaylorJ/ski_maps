class Comment < ApplicationRecord
    belongs_to :resort
    belongs_to :user 

    validates :comment, presence: true
    validates :user_id, presence: true
    validates :resort_id, presence: true
end
