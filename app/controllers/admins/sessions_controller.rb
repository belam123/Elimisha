class Admins::SessionsController < ApplicationController
  def create


    admin = Admin.find_by(email: params[:email])

    if admin && admin.authenticate(params[:password])
      session[:admin_id] = admin.id
      render json: admin, status: :accepted
    else
 
      render json: { error: 'Invalid Admin credentials' }, status: :unauthorized
    end
  end

  def destroy
    session[:admin_id] = nil
    render json: { message: 'Admin logged out successfully' }, status: :ok
  end
end
