class CreateResorts < ActiveRecord::Migration[7.0]
  def change
    create_table :resorts do |t|
      t.string :name
      t.string :website
      t.integer :elevation
      t.string :operating_status
      t.string :latitude
      t.string :longitude
      t.boolean :terrain_park
      t.boolean :night_skiing
      t.integer :lift_count
      t.integer :run_count
      t.string :map
      t.timestamps
    end
  end
end