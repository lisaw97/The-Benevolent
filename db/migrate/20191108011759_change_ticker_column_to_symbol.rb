class ChangeTickerColumnToSymbol < ActiveRecord::Migration[5.1]
  def change
    rename_column :stocks, :ticker, :symbol
  end
end
