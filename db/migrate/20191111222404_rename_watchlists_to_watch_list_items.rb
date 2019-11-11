class RenameWatchlistsToWatchListItems < ActiveRecord::Migration[5.1]
  def change
    rename_table :watchlists, :watchlistItems
  end
end
