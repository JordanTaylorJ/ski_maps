class Resort < ApplicationRecord
    has_many :bookmarks
    has_many :users, through: :bookmarks
    
    has_one_attached :map_image 

    has_many :comments 
    has_many :users, through: :comments 

    validates :latitude, length: { in: 2..100, allow_nil: false }
    validates :longitude, length: { in: 2..100, allow_nil: false }

end
