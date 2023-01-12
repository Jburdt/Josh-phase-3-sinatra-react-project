class CreateTools < ActiveRecord::Migration[6.1]
  def change
    create_table :tools do |t|
      t.string :name
      t.integer :price
      t.string :description 
      t.string :condition
      t.timstamps
    end
  end
end
