class AddLocationToUsers < ActiveRecord::Migration
  def change
  	add_column :users, :loc_x, :integer
  	add_column :users, :loc_y, :integer
  end
end
