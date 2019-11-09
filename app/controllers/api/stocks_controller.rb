class Api::StocksController < ApplicationController

    def index
        @stocks = current_user.stocks.includes(:transactions)
    end

    def show 
       @stock = Stock.find_by(symbol: params[:symbol])
    end

end