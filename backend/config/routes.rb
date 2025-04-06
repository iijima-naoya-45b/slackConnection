Rails.application.routes.draw do
  # Oauth認証用
  namespace :api do
    namespace :v1 do
      post 'auth/:provider/callback', to: 'users#create'
      delete 'users/:email', to: 'users#destroy', constraints: { email: %r{[^/]+} }

    end
  end
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  resources :posts, only: [:index, :create]
end
