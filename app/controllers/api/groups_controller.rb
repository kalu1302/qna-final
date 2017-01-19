class Api::GroupsController < ApplicationController

  def show
    @group = Group.find(params[:id])
    render :show
  end

  def index
    @groups = Group.all

    render :index
  end


end
