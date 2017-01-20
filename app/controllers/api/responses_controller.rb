class Api::ResponsesController < ApplicationController

  def create
    @answers = params["answers"]
    @group = Answer.find(@answers.first).question.group
    @user_id = params["user_id"] ? params["user_id"] : 1
    @responses = []

    # frontend validated
    @answers.each do |answer|
      new_answer = Response.create({answer_id: answer, user_id: @user_id})
      if new_answer.save
        @responses.push(new_answer)
      end
    end


    render :create
  end

  def show
    @group = Group.find(params[:id])
    @questions = @group.questions
    #tallies responses of each answer
    render :show
  end

end
