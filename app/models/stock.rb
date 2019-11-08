class Stock < ApplicationRecord

    validates :company_name, presence: true
    validates :symbol, presence: true, uniqueness: true
    
end
