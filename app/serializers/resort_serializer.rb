class ResortSerializer < ActiveModel::Serializer
  attributes :id, :name, :website, :elevation, :operating_status, :latitude, :longitude
  has_many :comments

end
