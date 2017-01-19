# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  live_url        :string
#  live_group      :string
#  polls_taken     :integer
#

class User < ApplicationRecord

  has_many :questions

  has_many :groups

  has_many :responses

  validates :username, presence: true, uniqueness: {message: "Username already taken"}
  validates :password_digest, presence: { message: "Password can't be blank" }
  validates :password, length: { minimum: 6, allow_nil: true, message: "Password needs to be at least 6 characters" }

  after_initialize :ensure_session_token, :ensure_live_url
  attr_reader :password

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.find_by_credentials(username, password)
    @user = User.find_by_username(username)
    #return nil if no user found with password, otherwise return user
    @user && @user.is_password?(password) ? @user : nil
  end

  def self.find_by_identifier()
    #TODO user.find_by_identifier
    #find anonymous users and track
  end

  def reset_session_token
    self.session_token = new_session_token
    ensure_session_token_uniqueness
    self.save
    self.session_token
  end


  private

  def new_session_token
    SecureRandom.base64
  end

  def ensure_session_token
    if self.session_token.nil?
      self.session_token = new_session_token
      ensure_session_token_uniqueness
    end
  end

  def ensure_session_token_uniqueness
    while User.find_by_session_token(self.session_token)
      self.session_token = new_session_token
    end
  end

  def ensure_live_url
    self.live_url = SecureRandom.urlsafe_base64(4)
    while User.find_by_live_url(self.live_url)
      self.live_url = SecureRandom.urlsafe_base64(4)
    end
  end
end
