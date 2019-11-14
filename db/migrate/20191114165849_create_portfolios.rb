class CreatePortfolios < ActiveRecord::Migration[5.1]
  def change
    create_table :portfolios do |t|
      t.integer :user_id, null: false
      t.date :date, null: false
      t.float :balance, null: false
      t.timestamps
    end

    add_index :portfolios, :user_id
  end
end