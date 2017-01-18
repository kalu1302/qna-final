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

class Question < ApplicationRecord

  belongs_to :group

  has_many :answers

  validates :group_id, :body, :question_type, presence: true
end
