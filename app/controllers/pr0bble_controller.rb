class Pr0bbleController < ApplicationController
  def configure

    @return_to     = params[:return_to]     || 'pebblejs://close'
    @plattform     = params[:plattform]     || 'unknown'
    @configuration = params[:configuration] || '{}'

    render 'configure'
  end
end
