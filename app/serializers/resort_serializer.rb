class ResortSerializer < ActiveModel::Serializer
  attributes :id, :name, :website, :elevation, :operating_status, :latitude, :longitude
end
