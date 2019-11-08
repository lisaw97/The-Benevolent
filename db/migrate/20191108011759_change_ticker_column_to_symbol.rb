class ChangeTickerColumnToSymbol < ActiveRecord::Migration[5.1]
  def change
    delete_column :stocks, :ticker
    add_column :stocks, :symbol, :string, null: false
  end
end
