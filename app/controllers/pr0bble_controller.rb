class Pr0bbleController < ApplicationController
  def configure

    @return_to     = params[:return_to]     || 'pebblejs://close'
    @plattform     = params[:plattform]     || 'unknown'
    @configuration = params[:configuration] || '{}'

    if @return_to == 'pebblejs://close'
      @return_to += '#'
    end

    render 'configure'
  end
end
