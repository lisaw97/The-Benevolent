Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :stocks, only: [:index, :show]
    resources :transactions, only: [:index, :create, :show]
    resources :watchlist_items, only: [:index, :create]
  end
  root to: 'static_pages#root'
end
