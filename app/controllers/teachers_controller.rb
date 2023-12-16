class TeachersController < ApplicationController

    def index
        teachers = Teacher.all
        render json: teachers
    end
    
    def show
        teacher = Teacher.find(:id)
        render json: teacher, status: :ok
    end

    def create
        teacher = Teacher.create!(teacher_params)
        if teacher.valid?
            render json: teacher, status: :created
        else
            render json: {error: 'Failed to create a new teacher'}, status: :unprocessable_entity
        end
    end

    def update
        teacher = Teacher.find(:id)
        if teacher.update
            render json:teacher :ok
        else
            render json: {error: 'Failed to update'},status: :unprocessable_entity
        end
    end

    def destroy
        teacher = Teacher.find(:id)
        teacher.destroy
        head :no_content
    end

    private
    
  def teacher_params
    params.require(:teacher).permit(:first_name,:last_name,:email,:department)   
  end 

end
