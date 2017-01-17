class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :current_user, :logged_in?

  private

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def login(user)
    user.reset_session_token
    #reset_session_token saves user to persist change
    session[:session_token] = user.session_token
    @current_user = user
  end

  def logout
    current_user.reset_session_token if logged_in?
    #saves user with new session token
    session[:session_token] = nil
    @current_user = nil
  end

  def require_logged_in
    #TODO
    #to be called for create requests for making but not taking polls
  end

end
