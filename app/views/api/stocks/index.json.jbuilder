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
end