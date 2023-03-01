class CommentsController < ApplicationController

    def create 
        comment = Comment.create(comment_params)
        if comment.valid?
            render json: comment, status: :created
        else 
            render json: {errors: comment.errors.full_messages}, status: :unprocessable_entity
        end 
    end 

    private

    def comment_params
        params.permit(:comment, :resort_id, :user_id)
    end

end
