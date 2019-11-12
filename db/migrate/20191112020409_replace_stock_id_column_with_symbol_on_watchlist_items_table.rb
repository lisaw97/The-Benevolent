class ReplaceStockIdColumnWithSymbolOnWatchlistItemsTable < ActiveRecord::Migration[5.1]
  def change
    remove_column :watchlist_items, :stock_id
    add_column :watchlist_items, :symbol, :string
  end
end
