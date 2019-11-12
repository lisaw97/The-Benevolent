class Api::WatchlistItemsController < ApplicationController

    def index 
        @watchlist_items = current_user.watchlist_items
    end

    def create 
        @watchlist_item = WatchlistItem.new(watchlist_item_params)
        @watchlist_item.user_id = current_user.id 
        if @watchlist_item.save 
            render :index
        else
            render json: @watchlist_item.errors.full_messages, status: 422
        end
    end

    private

    def watchlist_item_params 
        params.require(:watchlist_item).permit(:symbol)
    end 
end
