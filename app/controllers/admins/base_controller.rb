
class Admins::BaseController < ApplicationController
    include AdminAuthentication
  
    private
  
    def render_created(resource)
      render json: resource, status: :created
    end
  
    def render_updated(resource)
      render json: resource, status: :ok
    end
  
    def render_resource_or_errors(resource)
      if resource.valid?
        render_created(resource)
      else
        render_unprocessable_entity(resource.errors.full_messages)
      end
    end
  
    def render_unprocessable_entity(error_message)
      render json: { error: error_message }, status: :unprocessable_entity
    end
  end
  