class CreateContractors < ActiveRecord::Migration[6.1]
  def change
    create_table :contractors do |t|
      t.string :first_name
      t.string :last_name
      t.string :phone_number
      t.string :company
    end
  end
end
