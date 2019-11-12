class Api::TransactionsController < ApplicationController
    
    def index 
        @transactions = current_user.transactions
    end
    
    def create 
        @transaction = Transaction.new(transaction_params)
        @transaction.user_id = current_user.id
        if @transaction.save 
            render :show
        else
            render json: @transaction.errors.full_messages, status: 422
        end
    end

    def show 
        @transaction = Transaction.find_by(id: params[:id])
    end

    private

    def transaction_params
        params.require(:transaction).permit(:symbol, :shares, :cost)
    end
end
