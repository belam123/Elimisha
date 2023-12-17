class FormsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound,with: :no_response
    def index
        forms = Form.all
        render jdon: forms, status: :ok
    end
   
    def show
        form = Form.find(:id)
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
        form = Form.find(:id)
        if form.update(form_params)
            render json: form, status: :ok
        else
            render json: {error: "Update was not successfully"}, status: :unprocessable_entity
        end
    end

    def destroy
        form = Form.find(:id)
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
end
