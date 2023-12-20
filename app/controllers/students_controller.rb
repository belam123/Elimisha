class StudentsController < ApplicationController
  def create
    student = Student.create(student_params)
    if student.valid?
      session[:student_id] = student.id
      render json: student, status: :created
    else
      render json: { errors: student.errors.full_messages }, status: :unprocessable_entity
    end
  end
  def show
    begin
      student_id = session[:student_id]

      # Add debugging statements
puts "Entire Session: #{session.inspect}"
puts "Student ID: #{student_id}"


      if student_id.present?
        student = Student.find_by(id: student_id)
        if student
          render json: student, status: :ok
        else
          render json: { error: 'Student not found' }, status: :not_found
        end
      else
        render json: { error: 'Unauthorized - Student ID not present in session' }, status: :unauthorized
      end
    rescue StandardError => e
      puts "Error: #{e.message}"
      puts e.backtrace.join("\n")
      render json: { error: 'Internal Server Error' }, status: :internal_server_error
    end
  end

  
  
  
  

  private

  def student_params
    params.require(:student).permit(:first_name, :second_name, :last_name, :email, :password, :password_confirmation,:form_id)
  end
end
