class UsersController < ApplicationController
  skip_before_action :authenticate_user
  
  def index
    users = User.all
    render json: users
  end
  
  # get '/me'
  def show
    if current_user
      render json: current_user, status: :ok
    else
      render json: { error: 'No active session' }, status: :unauthorized
    end
  end

  # post '/signup'
  def create
    user = User.create(user_params)
    if user.valid?
      session[:user_id] = user.id
      render json: user, status: :ok
    else
      render json: { error: user.errors }, status: :unprocessable_entity
    end
  end

  def joined_groups_index
    joined_groups = current_user.groups
    render json: joined_groups
  end

  private

  def user_params
    params.permit(:username, :password, :password_confirmation)
  end

end