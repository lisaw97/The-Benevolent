class Stock < ApplicationRecord

    validates :company_name, presence: true
    validates :symbol, presence: true, uniqueness: true
    
    has_many :transactions
    has_many :users,
        through: :transactions,
        source: :user
end
