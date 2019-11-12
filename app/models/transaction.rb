class Transaction < ApplicationRecord

    validates :user_id, :symbol, :shares, :cost, presence: true

    belongs_to :user
    belongs_to :stock,
        primary_key: :symbol,
        foreign_key: :symbol,
        class_name: 'Stock'
    
end
