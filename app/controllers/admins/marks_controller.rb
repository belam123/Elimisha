class Admins::MarksController < ApplicationController
    before_action :authenticate_admin, only: [:create, :update, :destroy]
    def index
      marks = Mark.all
      render json: marks
    end
  
    def show
      mark = Mark.find(params[:id])
      render json: mark
    end
  
    def create
      mark = Mark.create(mark_params)
      if mark.valid?
        render json: mark, status: :created
      else
        render json: {  errors: mark.errors.full_messages }, status: :unprocessable_entity
      end
    end
    
  
    def update
      mark = Mark.find(params[:id])
      if mark.update(mark_params)
        render json: mark, status: :ok
      else
        render json: { error: 'Failed to update mark' }, status: :unprocessable_entity
      end
    end
  
    def destroy 
      mark = Mark.find(params[:id])
      mark.destroy
      head :no_content
    end
  
    private
  
    def mark_params
      params.require(:mark).permit(:exam_score,:assignment_score,:quiz_score,:student_id,:subject_id)
    end

    def authenticate_admin
        unless current_admin
          render json: { error: 'Admin authentication required' }, status: :unauthorized
        end
      end

  end
  