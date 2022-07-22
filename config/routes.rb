Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  ### For routing backend to localhost:4000/api/
  # namespace :api do
  # end
  mount ActionCable.server => './cable'
  
  resources :users
  
  
  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  
end
