Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  ### For routing backend to localhost:4000/api/
  # namespace :api do
  # end
  mount ActionCable.server => './cable'
  
  resources :users
  resources :groups
  resources :messages
  resources :joined_groups
  
  # my custom routes
  get 'users/:user_id/joined_groups', to: "users#joined_groups_index"

  # routes for signup and login
  get "/me", to: "users#show" ## retrieveing the user's data from the database using the sessions hash
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create" ## mapping the user create method for a POST request to /login
  delete "/logout", to: "sessions#destroy"
  
  # fallback
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  
end
