Rails.application.routes.draw do
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  resources :comments, only: [:create]
  #resources :bookmarks
  resources :resorts, only: [:show]
  resources :users, only: [:show, :create]

  post '/signup', to: 'users#create'
  get '/auth', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'


end
