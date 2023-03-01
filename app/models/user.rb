class User < ApplicationRecord
    has_many :bookmarks 
    has_many :resorts, through: :bookmarks 

    has_many :comments
    has_many :resorts, through: :comments 

    has_secure_password  
    validates :username, presence: true, uniqueness: true 
    validates :password, presence: true, length: {in: 5..20}

end
