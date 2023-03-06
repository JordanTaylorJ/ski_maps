class CommentsController < ApplicationController

rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def create 
        comment = Comment.create(comment_params)
        if comment.valid?
            render json: comment, status: :created
        else 
            render json: {errors: comment.errors.full_messages}, status: :unprocessable_entity
        end 
    end 

    def update
        comment = find_comment
        comment.update!(comment_params)
        render json: comment, status: :accepted 
    end

    def destroy
        comment = find_comment
        comment.destroy
        head :no_content
    end 

    private

    def find_comment
        comment = Comment.find(params[:id])
    end

    def comment_params
        params.permit(:comment, :resort_id, :user_id)
    end

    def render_not_found_response
        render json: {error: "comment not found"}, status: :not_found
    end 

end
