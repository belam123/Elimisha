class VouchersController < ApplicationController
    before_action :authenticate_admin, only: [:create, :update, :destroy]
  
    def index
      vouchers = Voucher.all
      render json: vouchers 
    end
  
    def show
      voucher = Voucher.find(params[:id])
      render json: voucher
    end
  
    def create
      voucher = Voucher.create(voucher_params)
      if voucher.valid?
        render json: voucher, status: :created
      else
        render json: { errors: voucher.errors.full_messages }, status: :unprocessable_entity
      end
    end
  
    def update
      voucher = Voucher.find(params[:id])
      if voucher.update(voucher_params)
        render json: voucher, status: :ok
      else
        render json: { error: 'Not successfully updated' }, status: :unprocessable_entity
      end
    end
  
    def destroy
      voucher = Voucher.find(params[:id])
      voucher.destroy
      head :no_content
    end
  
    private
  
    def voucher_params
      params.require(:voucher).permit(:voucher_amount, :expiry_date, :student_id)
    end
  
    def authenticate_admin
      unless current_admin
        render json: { error: 'Admin action required!' }, status: :unauthorized
      end
    end
  end
  