Rails.application.routes.draw do
  root to: 'static_pages#root'
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    resources :groups, only: [:create, :show, :destroy]
    resources :questions, only: [:create, :show, :delete]
    resources :answers, only: [:create, :show, :delete]
    resources :responses, only: [:create, :update, :show]
    resource :session, only: [:create, :destroy]
  end
end
