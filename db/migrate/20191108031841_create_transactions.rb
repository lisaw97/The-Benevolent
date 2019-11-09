class CreateTransactions < ActiveRecord::Migration[5.1]
  def change
    create_table :transactions do |t|
      t.integer :user_id, null: false
      t.integer :stock_id, null: false
      t.integer :shares, null: false
      t.float :cost, null: false
      t.timestamps 
    end

    add_index :transactions, :user_id
    add_index :transactions, :stock_id
  end
end
