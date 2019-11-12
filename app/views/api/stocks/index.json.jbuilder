json.stock do 
    @stocks.each do |stock|
        json.set! stock.symbol do 
            json.extract! stock, :id, :company_name, :symbol
        end
    end
end

json.transaction do
    current_user.transactions.each do |transaction|
        json.set! transaction.id do 
            json.extract! transaction, :id, :user_id, :symbol, :shares, :cost
        end
    end
end

json.watchlist do
    current_user.watchlist_items.each do |watchlist_item|
        json.set! watchlist_item.id do
            json.extract! watchlist_item, :id, :user_id, :symbol
        end  
    end
end