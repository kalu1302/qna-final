class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(user_params["username"], user_params["password"])
    if @user
      login(@user)
      render 'api/users/show'
    else
      render(json: ["invalid username or password"], status: 401) #401 Unauthorized
    end
  end

  def destroy
      logout
      render( json: {})
  end

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
