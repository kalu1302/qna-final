class Api::ResponsesController < ApplicationController

  def create
    @answers = params["answers"];
    @user_id = params["user_id"];
    @responses = [];

    # frontend validated
    @answers.each do |answer|
      new_answer = Response.create({answer_id: answer, user_id: @user_id})
      if new_answer.save
        @responses.push(new_answer)
      end
    end


    render :show
  end

end
