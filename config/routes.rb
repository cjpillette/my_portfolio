Rails.application.routes.draw do

  get 'pages/more_about_me'
  get 'pages/quarantine_project'
  get 'pages/cfa_scholarship_project'
  get 'pages/travel_project'
  get 'pages/chat_room_project'
  get 'pages/pure_ruby_project'
  get 'pages/ruby_cli_display'

  root 'pages#index'



  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
