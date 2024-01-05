Rails.application.routes.draw do

  namespace :admins do
    resources :forms, only: [:index, :show, :create, :update, :destroy]
    resources :vouchers, only: [:index, :show, :create, :update, :destroy]
    resources :events, only: [:index, :show, :create, :update, :destroy]
    resources :fees, only: [:index, :show, :create, :update, :destroy]
    resources :teachers, only: [:index, :show, :create, :update, :destroy]
    resources :marks, only: [:index, :show, :create, :update, :destroy]
    resources :subjects, only: [:index, :show, :create, :update, :destroy]
    resources :notifications, only: [:index, :show, :create, :update, :destroy]
    post 'login', to: 'sessions#create'
    delete 'logout', to: 'sessions#destroy'
  end

  resources :students, only: [:index,:create, :update]
  get '/all', to: 'students#index'
  post '/register', to: 'students#create'
  post 'login', to: 'sessions#create'
  delete 'logout', to: 'sessions#destroy'

  resources :supports
  # Root path route
  # root "articles#index"
end
