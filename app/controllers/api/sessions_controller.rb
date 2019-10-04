class Api::SessionsController < ApplicationController
  def create 
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      login!(@user)
      render "api/users/show"
    else
      render json: ['We didn\'t recognize that password.'], status: 401
    end
  end

  def destroy
    #we need to save current_user to @user for the jbuilder partial.
    @user = current_user
    if @user
      logout!
      render "api/users/show"
    else
      render json: ["Nobody signed in"], status: 404
    end
  end

  def validate_username 
    # check for user in db, 200 if username exists, 422 if otherwise
    # write action in util 
    @user = User.find_by(username: params[:user][:username])
    if @user
      render "api/users/show", status: 200
    else
      render json: ["We couldn't find that one. Want to try another?"], status: 422
    end
  end

end
