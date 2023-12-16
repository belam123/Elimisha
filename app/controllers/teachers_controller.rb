class TeachersController < ApplicationController
    before_action :authenticate_admin, only: [:create, :update, :destroy]
  
    def index
      teachers = Teacher.all
      render json: teachers
    end
  
    def show
      teacher = Teacher.find(params[:id])
      render json: teacher, status: :ok
    end
  
    def create
      teacher = Teacher.create!(teacher_params)
      if teacher.valid?
        render json: teacher, status: :created
      else
        render json: { error: 'Failed to create a new teacher' }, status: :unprocessable_entity
      end
    end
  
    def update
      teacher = Teacher.find(params[:id])
      if teacher.update(teacher_params)
        render json: teacher, status: :ok
      else
        render json: { error: 'Failed to update' }, status: :unprocessable_entity
      end
    end
  
    def destroy
      teacher = Teacher.find(params[:id])
      teacher.destroy
      head :no_content
    end
  
    private
  
    def teacher_params
      params.require(:teacher).permit(:first_name, :last_name, :email, :department)
    end
  
    def authenticate_admin
      unless current_admin
        render json: { error: 'Admin authentication required' }, status: :unauthorized
      end
    end
  end
  