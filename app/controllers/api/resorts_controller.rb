class Api::ResortsController < ApplicationController

    skip_before_action :authorized, only: [:show, :filtered] 

    def show
        resorts = Resort.all
        render json: resorts, include: 'comments.user', status: :ok
    end

    def filtered 
        data = JSON.parse(params[:data])
        filtered_resorts = Resort.all 
        data.each do |key, value| 
            if value == true
                filtered_resorts = filtered_resorts.filter {|resort| resort[key] == true}
            end
        end 
        render json: filtered_resorts, status: :ok 
    end 


end
