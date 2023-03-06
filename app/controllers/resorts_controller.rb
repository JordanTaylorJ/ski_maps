class ResortsController < ApplicationController

    skip_before_action :authorized, only: [:show] 

    def show
        resorts = Resort.all
        render json: resorts, include: 'comments.user', status: :ok
    end

end
