class Api::StocksController < ApplicationController

    def index
        @stocks = current_user.stocks + current_user.watched_stocks
        @all_stocks = Stock.all;
    end

    def show 
       @stock = Stock.find_by(symbol: params[:symbol])
    end

end
