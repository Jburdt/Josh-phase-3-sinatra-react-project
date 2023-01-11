class CreateTools < ActiveRecord::Migration[6.1]
  def change
    create_table :tools do |t|
      t.string :title
      t.integer :price
      t.integer :hours_needed
      t.string :description 
      t.timstamps
    end
  end
end
