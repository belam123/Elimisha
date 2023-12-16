class FormsController < ApplicationController


    def create
        form = Form.create(form_params)
        if form.valid?
            render json: form, status: :created
        else
            render json:{errors: form.errors.full_messages},status: :unprocessable_entity
        end
    end

    private

    def form_params
        params.require(:form).permit(:class_number,:stream)
    end

end
