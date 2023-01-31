class AddLikesToTool < ActiveRecord::Migration[6.1]
  def change
    add_column :tools, :likes, :integer, default: 0
  end
end
