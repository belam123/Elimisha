# app/controllers/admins/subjects_controller.rb
class Admins::SubjectsController < Admins::BaseController
    before_action :set_subject, only: [:show, :update, :destroy]
  
    def index
      subjects = Subject.all
      render json: subjects
    end
  
    def show
      render json: @subject
    end
  
    def create
      subject = Subject.create(subject_params)
      render_resource_or_errors(subject)
    end
  
    def update
      @subject.update(subject_params) ? render_updated(@subject) : render_unprocessable_entity('Update was unsuccessful')
    end
  
    def destroy
      @subject.destroy
      head :no_content
    end
  
    private
  
    def subject_params
      params.require(:subject).permit(:name)
    end
  
    def set_subject
      @subject = Subject.find(params[:id])
    end
  end
  