# == Schema Information
#
# Table name: questions
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  body       :text             not null
#  type       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Question < ApplicationRecord

  belongs_to :group

  belongs_to :user

  has_many :answers

  validates :group_id, :body, :type, presence: true
end
