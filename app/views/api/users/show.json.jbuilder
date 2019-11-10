json.partial! 'api/users/user', user: @user

    # json.user do
    #     json.extract! @user, :id, :username
    # end 

    # if @user.stocks.length > 0
        # @user.stocks.each do |stock|
        #     json.stock do 
        #         json.set! stock.symbol do 
        #             json.partial! 'api/stocks/stock', stock: stock 
        #         end
        #     end
    
        #     json.transaction do
        #         stock.transactions.each do |transaction|
        #             json.set! transaction.id do 
        #                 json.partial! 'api/transactions/transaction', transaction: transaction
        #             end
        #         end
        #     end
        # end
    # else 
    #     json.stock do
    #         json.object
    #     end
    # end
    

