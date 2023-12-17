class FormsController < ApplicationController
    before_action :authenticate_admin, only: [:create,:update,:destroy]
    rescue_from ActiveRecord::RecordNotFound,with: :no_response

    def index
        forms = Form.all
        render json: forms
    end
   
    def show
        form = Form.find(params[:id])
        render json: form
    end

    def create
        form = Form.create(form_params)
        if form.valid?
            render json: form, status: :created
        else
            render json:{errors: form.errors.full_messages},status: :unprocessable_entity
        end
    end

    def update
        form = Form.find(params[:id])
        if form.update(form_params)
            render json: form, status: :ok
        else
            render json: {error: "Update was not successfully"}, status: :unprocessable_entity
        end
    end

    def destroy
        form = Form.find(params[:id])
        form.destroy
        head :no_content
    end

    private

    def form_params
        params.require(:form).permit(:class_number,:stream)
    end
    
    def no_response
    render json: {error: "Record does not exist"}, status: :unprocessable_entity
     end

     def authenticate_admin
        unless current_admin
            render json: {error: 'Admin action required!'},status: :unauthorized
      end
     end
end
