class ResortsController < ApplicationController

    skip_before_action :authorized, only: [:show] 

    def show
        resorts = Resorts.all
        render json: resorts, status: :ok
    end


end
