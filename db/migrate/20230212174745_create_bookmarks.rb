class CreateBookmarks < ActiveRecord::Migration[7.0]
  def change
    create_table :bookmarks do |t|
      t.string :notes
      t.integer :user_id
      t.integer :resort_id

      t.timestamps
    end
  end
end
