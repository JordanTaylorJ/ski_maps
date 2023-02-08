class SessionsController < ApplicationController

    def create 
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[user_id] = user.id 
            render json: user, status: create
        else 
            render json: {error: "Invalid username or password."}, status: :unprocessable_entity
        end
    end

end
