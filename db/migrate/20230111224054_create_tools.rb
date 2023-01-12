class CreateTools < ActiveRecord::Migration[6.1]
  def change
    create_table :tools do |t|
      t.string :name
      t.integer :price, default: 0.0
      t.string :description 
      t.string :condition
    end
  end
end
