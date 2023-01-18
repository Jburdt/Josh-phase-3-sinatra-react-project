class CreateContractors < ActiveRecord::Migration[6.1]
  def change
    create_table :contractors do |t|
      t.string :name
      t.string :phone_number
      t.string :company
      t.string :review
      t.integer :tool_id
      t.timestamps
    end
  end
end
