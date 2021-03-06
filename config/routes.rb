Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy] 
    resources :projects, only: [:index, :update,  :show, :create, :destroy] do 
      resources :todo_lists, only: [:index, :update, :create]
      resources :photo_uploads,  only: [:index, :create]
    end

    resources :todo_lists, only: [:show, :destroy]

    #don't want other routes for todo_lists other than those nested under projects
    resources :todo_lists, only: [] do
        resources :todos, only: [:index, :update, :create]
    end
    resources :todos, only: [:show, :destroy]
    resources :photo_uploads, only: [:show, :destroy]    
    

  end 
  post 'api/sessions/validate_username', to: 'api/sessions#validate_username', defaults: { format: :json } 
end


