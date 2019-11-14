class PortfolioSnapshot < ApplicationRecord
    validates :user_id, :date, :balance, presence: true

    belongs_to :user
end
