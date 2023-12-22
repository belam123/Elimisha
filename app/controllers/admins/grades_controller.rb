class Admins::GradesController < Admins::BaseController
  before_action :set_grade, only: [:show, :update, :destroy]

  def index
    grades = Grade.all
    render json: grades
  end

  def show
    render json: @grade
  end

  def create
    grade = Grade.create(grade_params)
    render_resource_or_errors(grade)
  end

  def update
    @grade.update(grade_params) ? render_updated(@grade) : render_unprocessable_entity('Failed to update grade')
  end

  def destroy
    @grade.destroy
    head :no_content
  end

  private

  def grade_params
    params.require(:grade).permit(:score, :comments, :student_id, :course_id)
  end

  def set_grade
    @grade = Grade.find(params[:id])
  end
end
