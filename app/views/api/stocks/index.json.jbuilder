@stocks.each do |stock|
    json.stock do 
        # json.array! stock.symbol do
            json.set! stock.symbol do 
                json.partial! 'api/stocks/stock', stock: stock 
            end
        # end
    end
  
    json.transaction do
        stock.transactions.each do |transaction|
            if transaction.user_id == current_user.id
                json.set! transaction.id do 
                    json.partial! 'api/transactions/transaction', transaction: transaction
                end
            end
        end
    end

    json.watchlist do
        stock.watchlist_items do |watchlist_item|
            if watchlist_item.user_id == current_user.id
                json.set! watchlist_item.id do
                    json.partial! 'api/watchlist_items/watchlist_item', watchlist_item: watchlist_item
                end
            end
        end
    end
end