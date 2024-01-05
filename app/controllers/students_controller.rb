class StudentsController < ApplicationController

  def index
    students =Student.all
    render json: students
  end
  
  def create
    student = Student.create(student_params)
    if student.valid?
      render json: student_with_image_url(student), status: :created
    else
      render json: { errors: student.errors.full_messages }, status: :unprocessable_entity
    end
  end
  def update
    student = Student.find_by(access_token: params[:access_token])

    if student
      if student.update(student_params.except(:email))
        render json: student_with_image_url(student), status: :ok
      else
        render json: { errors: student.errors.full_messages }, status: :unprocessable_entity
      end
    else
      render json: { errors: 'Student not found' }, status: :not_found
    end
  end

  private

  def student_params
    params.require(:student).permit(:first_name, :second_name, :last_name, :email, :password, :password_confirmation, :form_id, :image)
  end

  def student_with_image_url(student)
    student_attributes = student.attributes
    if student.image.attached?
      student_attributes['image_url'] = url_for(student.image)
    end
    student_attributes
  end
end
