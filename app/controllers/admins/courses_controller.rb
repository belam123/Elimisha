class Admins::CoursesController < Admins::BaseController
  before_action :set_course, only: [:show, :update, :destroy]

  def index
    courses = Course.all
    render json: courses
  end

  def show
    render json: @course
  end

  def create
    course = Course.create(course_params)
    render_resource_or_errors(course)
  end

  def update
    @course.update(course_params) ? render_updated(@course) : render_unprocessable_entity('Update was unsuccessful')
  end

  def destroy
    @course.destroy
    head :no_content
  end

  private

  def course_params
    params.require(:course).permit(:course_name, :course_des)
  end

  def set_course
    @course = Course.find(params[:id])
  end
end
