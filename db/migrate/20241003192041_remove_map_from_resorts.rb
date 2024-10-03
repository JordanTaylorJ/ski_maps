class RemoveMapFromResorts < ActiveRecord::Migration[7.0]
  def change
    remove_column :resorts, :map
  end
end
