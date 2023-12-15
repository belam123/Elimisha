Rails.application.routes.draw do
  resources :students, only: [:create,:show]
  post '/register', to: 'students#create'
  get '/me/:id', to: 'students#show'

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
