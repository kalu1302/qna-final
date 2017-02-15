# == Schema Information
#
# Table name: groups
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  subject    :string
#

class Group < ApplicationRecord

  has_many :questions

  belongs_to :user

  has_many :answers, through: :questions

end
