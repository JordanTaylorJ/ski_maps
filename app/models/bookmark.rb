class Bookmark < ApplicationRecord
    belongs_to :resort 
    belongs_to :user 
end
