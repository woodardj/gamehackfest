class UsersController < ApplicationController

	def login_1
		sign_in(User.find_by_email "woodardj+player1@gmail.com")
		redirect_to '/'
	end

	def login_2
		sign_in(User.find_by_email "woodardj+player2@gmail.com")
		redirect_to '/'
	end
end
