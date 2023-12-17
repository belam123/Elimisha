class Admins::FeesController < ApplicationController
    before_action :authenticate_admin, only: [:create, :update, :destroy]
    rescue_from ActiveRecord::RecordNotFound, with: :no_response
  
    def index
      fees = Fee.all
      render json: fees
    end
  
    def show
      fee = Fee.find(params[:id])
      render json: fee
    end
  
    def create
      fee = Fee.create(fee_params)
      if fee.valid?
        render json: fee, status: :created
      else
        render json: { errors: fee.errors.full_messages }, status: :unprocessable_entity
      end
    end
  
    def update
      fee = Fee.find(params[:id])
      if fee.update(fee_params)
        render json: fee, status: :ok
      else
        render json: { error: 'Not successfully updated' }, status: :unprocessable_entity
      end
    end
  
    def destroy
      fee = Fee.find(params[:id])
      fee.destroy
      head :no_content
    end
  
    private
  
    def fee_params
      params.require(:fee).permit(:amount, :due_date, :payment_status)
    end
  
    def no_response
      render json: { error: "Record does not exist" }, status: :unprocessable_entity
    end
  
    def authenticate_admin
      unless current_admin
        render json: { error: 'Admin authentication required' }, status: :unauthorized
      end
    end
  end
  