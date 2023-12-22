class Admins::FormsController < Admins::BaseController
    before_action :set_form, only: [:show, :update, :destroy]
  
    def index
      forms = Form.all
      render json: forms
    end
  
    def show
      render json: @form
    end
  
    def create
      form = Form.create(form_params)
      render_resource_or_errors(form)
    end
  
    def update
      @form.update(form_params) ? render_updated(@form) : render_unprocessable_entity('Update was not successfully')
    end
  
    def destroy
      @form.destroy
      head :no_content
    end
  
    private
  
    def form_params
      params.require(:form).permit(:class_number, :stream)
    end
  
    def set_form
      @form = Form.find(params[:id])
    end
  end
  

  