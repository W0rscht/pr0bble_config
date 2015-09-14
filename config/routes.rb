Rails.application.routes.draw do

  # pr0bble configuration
  root 'pr0bble#configure'

  # pr0bble beta configuration
  get '/beta' , to: 'pr0bble#beta'
end
