class StudentsController < ApplicationController
  def create
    student = Student.create(student_params)
    if student.valid?
      render json: student_with_image_url(student), serializer: StudentSerializer, status: :created
    else
      render json: { errors: student.errors.full_messages }, status: :unprocessable_entity
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
