class Api::QuestionsController < ApplicationController

  def show
    @question = Question.find(params.id)
    @answers = @question.answers

    render :show
  end
end
