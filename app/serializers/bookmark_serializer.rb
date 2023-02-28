class BookmarkSerializer < ActiveModel::Serializer
  attributes :id, :notes
  belongs_to :resort 
end
