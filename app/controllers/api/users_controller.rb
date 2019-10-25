class Api::UsersController < ApplicationController
  # before_action :require_logged_in, except: [:create]
  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

private 
  def user_params
    #Remeber when testing ajax, user must nest data as follows: data: {user: {username: testUsrnm, password: testPsswrd}}
    params.require(:user).permit(:username, :password)
  end

end
