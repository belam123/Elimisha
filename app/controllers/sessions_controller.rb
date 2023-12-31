class SessionsController < ApplicationController
  def create
    student = Student.find_by(email: params[:email])
    if student && student.authenticate(params[:password])
      session[:student_id] = student.id
      render json: student, status: :ok, serializer: StudentSerializer
    else
      render json: { error: 'Invalid credentials' }, status: :unprocessable_entity
    end
  end

  def destroy
    session[:student_id] = nil
    render json: { message: "Student successfully logged out" }, status: :ok
  end
end
