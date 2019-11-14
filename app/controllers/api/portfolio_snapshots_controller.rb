class Api::PortfolioSnapshotsController < ApplicationController
    
    def index 
        @portfolio_snapshots = current_user.portfolio_snapshots.all
    end

    def show 
        @portfolio_snapshot = current_user.portfolio_snapshots.find_by(id: params[:id])
    end
    
    def create 
        @portfolio_snapshot = PortfolioSnapshot.new(portfolio_snapshot_params)
        if @portfolio_snapshot.save 
            render json: :show
        else
            render json: @portfolio_snapshot.errors.full_messages, status: 422
        end
    end

    private

    def portfolio_snapshot_params
        params.require(:portfolio_snapshot).permit(:id, :balance)
    end

end
