class UsersController < ApplicationController

    def create
        user = User.create(user_params)
        if user.valid?
            render json: user, status: :ok
        else 
            render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
        end 
    end 

    def user_params
        params.permit (:username, :password_digest)
    end

end
