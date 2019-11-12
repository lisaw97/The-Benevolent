class ReplaceStockIdColumnWithSymbolInTransactionsTable < ActiveRecord::Migration[5.1]
  def change
    remove_column :transactions, :stock_id
    add_column :transactions, :symbol, :string
  end
end
