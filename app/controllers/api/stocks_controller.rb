class Api::StocksController < ApplicationController

    def index
        @stocks = Stock.all
    end

    def show 
       @stock = Stock.find_by(symbol: params[:symbol])
    end

end
