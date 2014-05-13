class GameController < ApplicationController
	before_action :authenticate_user!

	def arena
		@current_player = current_user
		@other_player = User.find((current_user.id & 1) + 1) #HACKALAK
		@p1 = User.find 1
		@p2 = User.find 2
	end

	def update
		current_user.loc_x = params[:x]
		current_user.loc_y = params[:y]
		current_user.save!
		puts current_user
		@other_player = User.find((current_user.id & 1) + 1) #HACKALAK
		puts @other_player
		render json: {:x => @other_player.loc_x, :y => @other_player.loc_y}
	end
end
