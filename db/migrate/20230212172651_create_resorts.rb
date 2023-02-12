class CreateResorts < ActiveRecord::Migration[7.0]
  def change
    create_table :resorts do |t|
      t.string :name
      t.string :website
      t.string :terrain_park
      t.string :night_skiing
      t.string :operating_status
      t.string :latitude
      t.string :longitude

      t.timestamps
    end
  end
end
