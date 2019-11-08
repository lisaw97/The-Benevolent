class CreateStocks < ActiveRecord::Migration[5.1]
  def change
    create_table :stocks do |t|
      t.string :company_name, null: false
      t.string :ticker, null: false
      t.timestamps
    end

    add_index :stocks, :ticker, unique: true
  end
end
