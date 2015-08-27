Rails.application.routes.draw do
  namespace :api do
    resource :ariadnes_threads, only: :create
  end
end
