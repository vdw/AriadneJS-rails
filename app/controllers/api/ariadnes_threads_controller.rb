class Api::AriadnesThreadsController < ActionController::Base
  layout false
  respond_to :json

  def create
    thread = AriadnesThread.new thread: params[:thread]
    thread.try :save
    render nothing: true and return
  end
end