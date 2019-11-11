class DropWatchlistItemsTable < ActiveRecord::Migration[5.1]
  def change
    drop_table :watchlistItems
  end
end
