Rails.application.routes.draw do
  resources :grades
  resources :forms
  resources :courses
  resources :vouchers
  resources :fees
  resources :teachers
  resources :students, only: [:create, :show]
  post '/register', to: 'students#create'
  get '/me/:id', to: 'students#show'

  # Admin routes
  namespace :admins do
    post 'login', to: 'sessions#create'
    delete 'logout', to: 'sessions#destroy'
  end

  # Root path route
  # root "articles#index"
end
