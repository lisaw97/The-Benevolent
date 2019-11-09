class Transaction < ApplicationRecord

    validates :user_id, :stock_id, :shares, :cost, presence: true

    belongs_to :user
    belongs_to :stock
    
end
