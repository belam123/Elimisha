class SessionsController < ApplicationController
    def create
    student = Student.find_by(email: params[:email])
      if student && student.authenticate(password: params[:password])
        session[:student_id] = student.id
        render json: student, status: :ok
    else
       render json:{error: 'Invalid email or password'},status: :unprocessable_entity
     end
    end

    def destroy
        session.delete(:student_id)
        head :no_content
    end

end
