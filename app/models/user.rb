class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

	def self.reset 
		self.all.each do |u|
			u.loc_x = 100
			u.loc_y = 100
			u.save!
		end
	end
end
