class Api::GroupsController < ApplicationController

  def show
    @groupQuestions = Group.find(params.id)
  end



end
