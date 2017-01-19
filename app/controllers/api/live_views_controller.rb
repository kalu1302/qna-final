class Api::LiveViewsController < ApplicationController

  def show
    @user = User.find_by(live_url: params[:id])

    render :show
  end
end
