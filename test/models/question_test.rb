# == Schema Information
#
# Table name: questions
#
#  id            :integer          not null, primary key
#  body          :text             not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  group_id      :string
#  question_type :string
#

require 'test_helper'

class QuestionTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
