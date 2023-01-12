class CreateContractors < ActiveRecord::Migration[6.1]
  def change
    create_table :contractors do |t|
      t.string :name
      t.string :phone_number
      t.string :company
      t.integer :tool_id
    end
  end
end
