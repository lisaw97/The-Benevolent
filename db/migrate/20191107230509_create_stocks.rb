class CreateStocks < ActiveRecord::Migration[5.1]
  def change
    create_table :stocks do |t|
      t.string :company_name, null: false
      t.string :symbol, null: false
      t.timestamps
    end

    add_index :stocks, :symbol, unique: true
  end
end
