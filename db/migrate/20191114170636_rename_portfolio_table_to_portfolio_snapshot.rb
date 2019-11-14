class RenamePortfolioTableToPortfolioSnapshot < ActiveRecord::Migration[5.1]
  def change
    rename_table :portfolios, :portfolio_snapshots
  end
end
