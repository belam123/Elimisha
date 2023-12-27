class SupportsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound,with: :no_response
    def index
        supports = Support.all
        render json: supports
    end

    def show
        render json: @support
    end


    def create
        support = Support.create(support_params)
        if support.valid?
            render json: support, status: :created
        else
            render json: {errors: support.errors.full_messages},status: :unprocessable_entity
        end
    end

    def update
        if @support.update(support_params)
        render json: @support, status: :ok
    else
        render json: {error: "Update was unsuccessful"},status: :unprocessable_entity
    end
end

    def destroy
        @support.destroy
        head :no_content
    end

    private
    def set_support
    @support = Support.find(params[:id])
    end
    def support_params
    params.require(:support).permit(:email,:topic,:subject,:message,:student_id)
    end

    def no_response
        render json:{error: 'Record not found'},status: :unprocessable_entity
    end
   
end
