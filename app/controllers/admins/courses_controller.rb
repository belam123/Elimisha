class Admins::CoursesController < ApplicationController
    before_action :authenticate_admin, only: [:create, :update, :destroy]
    rescue_from ActiveRecord::RecordNotFound, with: :no_response
  
    def index
      courses = Course.all
      render json: courses
    end
  
    def show
      course = find_course
      render json: course
    end
  
    def create
      course = Course.create(course_params)
      if course.valid?
        render json: course, status: :created
      else
        render json: { errors: course.errors.full_messages }, status: :unprocessable_entity
      end
    end
  
    def update
      course = find_course
      if course.update(course_params)
        render json: course, status: :ok
      else
        render json: { error: 'Update was unsuccessful' }, status: :unprocessable_entity
      end
    end
  
    def destroy
      course = find_course
      course.destroy
      head :no_content
    end
  
    private
  
    def course_params
      params.require(:course).permit(:course_name, :course_des)
    end
  
    def find_course
      Course.find(params[:id])
    end
  
    def no_response
      render json: { error: 'Record does not exist' }, status: :unprocessable_entity
    end
  
    def authenticate_admin
     unless current_admin
      render json: { error: 'Admin action required!' }, status: :unprocessable_entity
    end
  end
  