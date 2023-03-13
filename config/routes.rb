Rails.application.routes.draw do
  
  #namespace :api do
    resources :comments, only: [:create, :update, :destroy]
    resources :bookmarks, only: [:create, :destroy]
    resources :resorts, only: [:show]

    post '/signup', to: 'users#create'
    get '/auth', to: 'users#show'
    post '/login', to: 'sessions#create'
    delete '/logout', to: 'sessions#destroy'
  #end 
  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
