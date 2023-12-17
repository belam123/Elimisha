Rails.application.routes.draw do
  namespace :admins do
    resources :grades, only: [:index, :show, :create, :update, :destroy]
    post 'login', to: 'sessions#create'
    delete 'logout', to: 'sessions#destroy'
  end

  resources :forms
  resources :courses
  resources :vouchers
  resources :fees
  resources :teachers
  resources :students, only: [:create, :show]
  post '/register', to: 'students#create'
  get '/me/:id', to: 'students#show'
  delete 'logout', to: 'sessions#destroy'

  # Root path route
  # root "articles#index"
end
