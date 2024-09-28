class ResortSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers 
  
  attributes :id, :name, :website, :elevation, :operating_status, :latitude, :longitude, :terrain_park, :night_skiing, :lift_count, :run_count, :map_image
  has_many :comments
  
  def map_image
    rails_blob_path(object.map_image, disposition: "attachment", only_path:true)
  end

end
