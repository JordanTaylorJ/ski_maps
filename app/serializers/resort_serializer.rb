class ResortSerializer < ActiveModel::Serializer
  attributes :id, :name, :website, :elevation, :operating_status, :latitude, :longitude, :terrain_park, :night_skiing, :lift_count, :run_count, :map
  has_many :comments

end
