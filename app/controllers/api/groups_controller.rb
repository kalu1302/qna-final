class Api::GroupsController < ApplicationController

  def show
    @group = Group.find(params[:id])
    render :show
  end

  def index
    @groups = Group.all

    render :index
  end

  def create
    Group.transaction do
      @group = Group.new(user_id: create_poll_params[:user_id],
                         name: create_poll_params[:name])
      @group.save

      questions_params = params[:group][:questions]

      questions_params.keys.each do |q_ind|

        new_question = Question.new(body: questions_params[q_ind][:body],
                                    question_type: questions_params[q_ind][:question_type])
        new_question.group_id = @group.id
        new_question.save!

        answer_params = questions_params[q_ind][:answers]

        answer_params.keys.each do |a_ind|
          new_answer = Answer.new(body: answer_params[a_ind][:body],
                                  answer_type: answer_params[a_ind][:answer_type])
          new_answer.question_id = new_question.id
          new_answer.save!
        end

      end

      @user = current_user
      @user.live_group = @group.id
      @user.save!
    end
    #PASS BACK USER HASH for redirect
    @hash = {}
    @hash[:hash] = @user.live_url
    render json: @hash
  end

  private

  def create_poll_params
    params.require(:group).permit(:user_id, :name, :questions)
  end
end
