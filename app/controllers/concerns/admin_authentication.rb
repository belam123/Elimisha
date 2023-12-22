module AdminAuthentication
  extend ActiveSupport::Concern

  included do
    before_action :authenticate_admin, only: [:create, :update, :destroy]
    rescue_from ActiveRecord::RecordNotFound, with: :no_response
  end

  private

  def authenticate_admin
    render_unauthorized unless current_admin
  end

  def no_response
    render_unprocessable_entity('Record does not exist')
  end

  def render_unauthorized
    render json: { error: 'Admin authentication required' }, status: :unauthorized
  end

  def render_unprocessable_entity(error_message)
    render json: { error: error_message }, status: :unprocessable_entity
  end
end
