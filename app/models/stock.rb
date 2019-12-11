class Stock < ApplicationRecord

    validates :company_name, presence: true
    validates :symbol, presence: true, uniqueness: true
    
    has_many :transactions,
        primary_key: :symbol,
        foreign_key: :symbol,
        class_name: 'Transaction'

    has_many :watchlist_items,
        primary_key: :symbol,
        foreign_key: :symbol,
        class_name: 'WatchlistItem'

    has_many :users,
        through: :transactions,
        source: :user
        
    has_many :watchers,
        through: :watchlist_items,
        source: :user
end
