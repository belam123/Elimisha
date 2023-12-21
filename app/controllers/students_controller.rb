class StudentsController < ApplicationController


  def create
    student = Student.create(student_params)
    if student.valid?
      render json: student, status: :created
    else
      render json: { errors: student.errors.full_messages }, status: :unprocessable_entity
    end
  end



  private

  
  def student_params
    params.require(:student).permit(:first_name, :second_name, :last_name, :email, :password, :password_confirmation, :form_id)
  end
end
