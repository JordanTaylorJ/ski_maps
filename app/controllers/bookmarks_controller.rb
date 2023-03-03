class BookmarksController < ApplicationController

    def create
        bookmark = Bookmark.create(bookmark_params)
        if bookmark.valid?
            render json: bookmark, status: :created
        else
            render json: {errors: bookmark.errors.full_messages}, status: :unprocessable_entity
        end 
    end 

    def destroy
        find_bookmark
        bookmark.destroy
        head :no_content
    end 

    private
    
    def find_bookmark
        bookmark = Bookmark.find(params[:id])
    end

    def bookmark_params
        params.permit(:notes, :resort_id, :user_id)
    end 

end
