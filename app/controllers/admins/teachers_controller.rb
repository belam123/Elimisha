class Admins::TeachersController < Admins::BaseController
  before_action :set_teacher, only: [:show, :update, :destroy]

  def index
    teachers = Teacher.all
    render json: teachers
  end

  def show
    render json: @teacher, status: :ok
  end

  def create
    teacher = Teacher.create!(teacher_params)
    render_resource_or_errors(teacher)
  end

  def update
    @teacher.update(teacher_params) ? render_updated(@teacher) : render_unprocessable_entity('Failed to update')
  end

  def destroy
    @teacher.destroy
    head :no_content
  end

  private

  def teacher_params
    params.require(:teacher).permit(:first_name, :last_name, :email, :department)
  end

  def set_teacher
    @teacher = Teacher.find(params[:id])
  end
end
