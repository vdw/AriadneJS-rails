class Api::AriadnesThreadsController < ActionController::Base
  layout false
  respond_to :json

  def create
    thread = AriadnesThread.new(
      browser: params[:browser],
      thread:  params[:thread],
      event:   params[:event],
      element: params[:element]
    )
    thread.try :save
    render nothing: true and return
  end
end