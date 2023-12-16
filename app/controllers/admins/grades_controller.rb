class Admins::GradesController < ApplicationController
    before_action :authenticate_admin, only: [:create, :update, :destroy]
    def index
      grades = Grade.all
      render json: grades
    end
  
    def show
      grade = Grade.find(params[:id])
      render json: grade
    end
  
    def create
      grade = Grade.create(grade_params)
      if grade.valid?
        render json: grade, status: :created
      else
        render json: {  errors: grade.errors.full_messages }, status: :unprocessable_entity
      end
    end
    
  
    def update
      grade = Grade.find(params[:id])
      if grade.update(grade_params)
        render json: grade, status: :ok
      else
        render json: { error: 'Failed to update grade' }, status: :unprocessable_entity
      end
    end
  
    def destroy 
      grade = Grade.find(params[:id])
      grade.destroy
      head :no_content
    end
  
    private
  
    def grade_params
      params.require(:grade).permit(:score, :comments, :student_id, :course_id)
    end

    def authenticate_admin
        unless current_admin
          render json: { error: 'Admin authentication required' }, status: :unauthorized
        end
      end

  end
  