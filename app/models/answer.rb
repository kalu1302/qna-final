# == Schema Information
#
# Table name: answers
#
#  id          :integer          not null, primary key
#  question_id :integer          not null
#  body        :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  answer_type :string
#

class Answer < ApplicationRecord

  belongs_to :question

  has_many :responses
end
